import * as dotenv from "@tinyhttp/dotenv";
import { App } from "@tinyhttp/app";
import { logger } from "@tinyhttp/logger";
import { Liquid } from "liquidjs";
import serveStatic from "serve-static";
import path from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

// local scripts
import { test } from "./scripts/weather.js";
import { harrycontent } from "./scripts/harry.js";
import {
	cardData,
	stekjesKastInfo,
	stekjesData,
	zadenKastInfo,
	zadenData,
	agendaData,
	sliderData,
	footerData,
	plantenTips,
} from "./scripts/pageData.js";
import { seasons } from "./scripts/seasons.js";

const envFile = dotenv.config({ path: "token.env" });
var apiToken = process.env.API_TOKEN;

const engine = new Liquid();
const app = new App();

const __filename = fileURLToPath(import.meta.url); // Convert the URL of the current module to a file path
const __dirname = dirname(__filename); // Get the directory name of the current module

const renderTemplate = (template, data) => {
	return engine.renderFileSync(template, data);
};

app.use(logger())
	.use(serveStatic(path.join(__dirname, "src")))
	.engine("liquid", engine)
	.set("views", "./views")
	.set("view engine", "liquid")
	.listen(8080, () => console.log(`Listening on http://localhost:8080`));

app.get("/", async (req, res) => {
	const dataWeather = await test.pullDataWeather(apiToken);
	console.log(dataWeather);
	const dataSunMoon = await test.pullDataSunMoon(apiToken);
	console.log(dataSunMoon);
	const checkWeather = test.checkWeatherCondition(dataWeather);
	console.log(checkWeather);
	const transition_image = seasons.checkSeason();

	const rainAmount = dataWeather.current.precip_mm;
	// current.cloud komt terug als percentage, des te hoger het getal, des te meer bewolkt het is. met hsl is 0% het donkerst en 100% het lichtst, dus er moet een berekening plaats vinden.
	const cloud = 100 - dataWeather.current.cloud + "%";
	// const cloud = 100 - 25 + '%'
	// const rainAmount = 40

	return res.send(
		renderTemplate("views/index.liquid", {
			cardData,
			agendaData,
			sliderData,
			footerData,
			transition_image,
			location: dataWeather.location.name,
			temperature: dataWeather.current.temp_c,
			weather_condition: dataWeather.current.condition.text,
			weather_icon: dataWeather.current.condition.icon,
			wind_speed: dataWeather.current.wind_kph,
			precip: dataWeather.current.precip_mm,
			humidity: dataWeather.current.humidity,
			cloud: cloud,
			uv: dataWeather.current.uv,
			sunrise: dataSunMoon.astronomy.astro.sunrise,
			sunset: dataSunMoon.astronomy.astro.sunset,
			moonrise: dataSunMoon.astronomy.astro.moonrise,
			moonset: dataSunMoon.astronomy.astro.moonset,
			moon_illumination: dataSunMoon.astronomy.astro.moon_illumination,
			is_moon_up: dataSunMoon.astronomy.astro.is_moon_up,
			is_sun_up: dataSunMoon.astronomy.astro.is_sun_up,
			weatherScript: checkWeather[0],
			weatherCSS: checkWeather[1],
			amount: rainAmount,
		})
	);
});

app.get("/stekjes", async (req, res) => {
	// send title to the template
	let pageTitle = req.url.slice(1);
  //if url end with /, remove it
  if (pageTitle.slice(-1) === "/") {
    pageTitle = pageTitle.slice(0, -1);
  }

	console.log(pageTitle);
	const transition_image = seasons.checkSeason();

	return res.send(
		renderTemplate("views/stekjes.liquid", {
			pageTitle,
			sliderData,
			stekjesData,
			stekjesKastInfo,
			footerData,
			transition_image,
		})
	);
});

app.get("/zaden", async (req, res) => {
		// send title to the template
    let pageTitle = req.url.slice(1);
    //if url end with /, remove it
    if (pageTitle.slice(-1) === "/") {
      pageTitle = pageTitle.slice(0, -1);
    }

	console.log(pageTitle);
	const transition_image = seasons.checkSeason();

	return res.send(
		renderTemplate("views/zaden.liquid", {
			pageTitle,
			sliderData,
			zadenData,
			zadenKastInfo,
			footerData,
			transition_image,
		})
	);
});

app.get("/geveltuin", async (req, res) => {
		// send title to the template
	let pageTitle = req.url.slice(1);
  //if url end with /, remove it
  if (pageTitle.slice(-1) === "/") {
    pageTitle = pageTitle.slice(0, -1);
  }
	console.log(pageTitle);
	const transition_image = seasons.checkSeason();

	return res.send(
		renderTemplate("views/geveltuin.liquid", {
			pageTitle,
			sliderData,
			footerData,
			transition_image,
		})
	);
});

app.get("/stekjes/:name", async (req, res) => {
	const plantName = req.params.name;

	//filter stekjesData op naam van de plant
	const plantData = stekjesData.find((plant) => plant.name == plantName);
	const transition_image = seasons.checkSeason();

if (!plantData) {
      // Als plantData niet bestaat, stuur een 404-fout met een aangepaste foutpagina
      const mood = "verdrietig";
      const fout = "404";
      const url = "/stekjes";
      const pagina = "stekjes";
      const reden = "De plant die u zocht is niet beschikbaar.";

      return res.status(404).send(renderTemplate('views/error.liquid', {
        fout,
        url,
        pagina,
        reden,
        harry: {
          mood,
        },
      }));
    }
    

	try {
		// Voer verdere asynchrone operaties uit en wacht op hun resultaten
		const dataWeather = await test.pullDataWeather(apiToken);
		const temp = await harrycontent.checkTemp( dataWeather, plantData, plantenTips );
		const weer = await harrycontent.checkSunny( dataWeather, plantData, plantenTips );
		const voeding = await harrycontent.checkVoeding(plantenTips);
		const mood = "neutraal";

		// Stuur de respons naar de client
		res.send(
			renderTemplate("views/stekjes_detail.liquid", {
				plant: plantData,
				footerData,
				plantName,
				pageTitle: plantData.name,
				transition_image,
				harry: { 
          temp,
					weer,
					voeding,
					mood,
				},
			})
		);
	} catch (error) {
		console.error("Error processing plant data:", error);
		// Stuur een 500-fout met een aangepaste foutpagina
		const mood = "verdrietig";
		const fout = "500";
		const reden = "Er is een interne serverfout opgetreden.";

		res.status(500).send(
			renderTemplate("views/error.liquid", {
				fout,
				reden,
				harry: {
					mood,
				},
			})
		);
	}
});

app.get("/weather-api", async (req, res) => {
	const dataWeather = await test.pullDataWeather(apiToken);
	console.log(dataWeather);
	const dataSunMoon = await test.pullDataSunMoon(apiToken);
	console.log(dataSunMoon);
	const checkWeather = test.checkWeatherCondition(dataWeather);
	console.log(checkWeather);

	const rainAmount = dataWeather.current.precip_mm;
	// const rainAmount = 15

	return res.send(
		renderTemplate("views/weather-api.liquid", {
			siteTitle: "Weather API",
			location: dataWeather.location.name,
			temperature: dataWeather.current.temp_c,
			weather_condition: dataWeather.current.condition.text,
			weather_icon: dataWeather.current.condition.icon,
			wind_speed: dataWeather.current.wind_kph,
			precip: dataWeather.current.precip_mm,
			humidity: dataWeather.current.humidity,
			cloud: dataWeather.current.cloud,
			uv: dataWeather.current.uv,
			sunrise: dataSunMoon.astronomy.astro.sunrise,
			sunset: dataSunMoon.astronomy.astro.sunset,
			moonrise: dataSunMoon.astronomy.astro.moonrise,
			moonset: dataSunMoon.astronomy.astro.moonset,
			moon_illumination: dataSunMoon.astronomy.astro.moon_illumination,
			is_moon_up: dataSunMoon.astronomy.astro.is_moon_up,
			is_sun_up: dataSunMoon.astronomy.astro.is_sun_up,
			weatherScript: checkWeather[0],
			weatherCSS: checkWeather[1],
			amount: rainAmount,
			check_sunset: test.checkSunSet(dataSunMoon.astronomy.astro.sunset),
		})
	);
});

app.get("/transparent-card", async (req, res) => {
	res.send(renderTemplate("views/transparent-card.liquid"));
});

app.get("/page-transition", async (req, res) => {
	res.send(renderTemplate("views/page-transition.liquid"));
});

app.use((req, res) => {
  const mood = "twerk"
  const fout = "404"
  const url = "/"
  const pagina = "home"
  const reden = "Exuses voor het ongemak, deze pagina bestaat niet."

  res.status(404).send(renderTemplate('views/error.liquid', {
    fout,
    reden,
    url,
    pagina,
      harry:{ 
        mood,
      },
    }))
})
