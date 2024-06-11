import * as dotenv from '@tinyhttp/dotenv' 
import { App } from '@tinyhttp/app'
import { logger } from '@tinyhttp/logger'
import { Liquid } from 'liquidjs';
import serveStatic from 'serve-static';
import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// local scripts
import { test } from './scripts/weather.js'
import { cardData, stekjesKastInfo, stekjesData, agendaData, sliderData, footerData } from './scripts/pageData.js'

const envFile = dotenv.config({path:'token.env'})
var apiToken = process.env.API_TOKEN

const engine = new Liquid();
const app = new App()

const __filename = fileURLToPath(import.meta.url); // Convert the URL of the current module to a file path
const __dirname = dirname(__filename); // Get the directory name of the current module

const renderTemplate = (template, data) => {
  return engine.renderFileSync(template, data)
}

app
  .use(logger())
  .use(serveStatic(path.join(__dirname, 'src')))
  .engine('liquid', engine)
  .set('views', './views')
  .set('view engine', 'liquid')
  .listen(8080, () => console.log(`Listening on http://localhost:8080`))

app.get('/', async (req, res) => {
  const dataWeather = await test.pullDataWeather(apiToken)
  console.log(dataWeather)
  const dataSunMoon = await test.pullDataSunMoon(apiToken)
  console.log(dataSunMoon)
  const checkWeather = test.checkWeatherCondition(dataWeather)
  console.log(checkWeather)

  

  const rainAmount = dataWeather.current.precip_mm 
  // const rainAmount = 150

  return res.send(renderTemplate('views/index.liquid', { 
    cardData,
    agendaData,
    sliderData,
    footerData,
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
    amount: rainAmount
  }));
});

app.get('/stekjes', async (req, res) => {
  // send title to the template
  const title = req.query.title;

  return res.send(renderTemplate('views/stekjes.liquid', { 
    title,
    sliderData,
    stekjesData,
    stekjesKastInfo,
    footerData,
  }));
});

app.get('/weather-api', async (req, res) => {

  const dataWeather = await test.pullDataWeather(apiToken)
  console.log(dataWeather)
  const dataSunMoon = await test.pullDataSunMoon(apiToken)
  console.log(dataSunMoon)
  const checkWeather = test.checkWeatherCondition(dataWeather)
  console.log(checkWeather)

  const rainAmount = dataWeather.current.precip_mm 
  // const rainAmount = 15

  return res.send(renderTemplate('views/weather-api.liquid', {
    siteTitle: 'Weather API',
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
    check_sunset: test.checkSunSet(dataSunMoon.astronomy.astro.sunset)
  }));
});

app.get('/transparent-card', async (req, res) => {
  res.send(renderTemplate('views/transparent-card.liquid'))
})

app.get('/page-transition', async (req, res) => {
  res.send(renderTemplate('views/page-transition.liquid'))
})
