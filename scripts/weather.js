let latitude = "52.35818441704516";
let longitude = "4.926244883772008";

function pullDataWeather(token) {
  var fetchUrl =
    "http://api.weatherapi.com/v1/current.json?key=" +
    token +
    "&q=" +
    latitude +
    ", " +
    longitude +
    "&aqi=yes";
  return fetch(fetchUrl).then((res) => res.json());
}

function pullDataSunMoon(token) {
  let currentDate = new Date().toLocaleDateString("en-CA");
  console.log(currentDate);
  var fetchUrl =
    "http://api.weatherapi.com/v1/astronomy.json?key=" +
    token +
    "&q=" +
    latitude +
    ", " +
    longitude +
    "&dt=" +
    currentDate;
  console.log(fetchUrl);
  return fetch(fetchUrl).then((res) => res.json());
}

function checkSunSet(givenTime) {
  // Convert time strings to Date objects
  const options = { hour: "2-digit", minute: "2-digit", hour12: true };
  const currentTime = new Date().toLocaleTimeString("en-US", options);

  const currentTimeObj = new Date("2000-01-01 " + currentTime); // Set arbitrary date (2000-01-01) to ensure proper comparison
  const givenTimeObj = new Date("2000-01-01 " + givenTime);

  // Compare times
  if (currentTimeObj < givenTimeObj) {
    return `De zon is nog steeds op (dag)`;
  } else {
    return `De zon is onder gegaan (nacht)`;
  }
  // } else if (currentTimeObj > givenTimeObj) {
  //     return `${currentTime} is after ${givenTime}`;
  // } else {
  //     return `${currentTime} is the same as ${givenTime}`;
  // }
}

function checkWeatherCondition(data) {
  const currentWeatherCondition = data.current.condition.code;
  console.log(currentWeatherCondition)

  switch (currentWeatherCondition) {
    case 1000: {
      // zonnig | sunny
      return "Sunny: ";
    }

    case 1003: {
      // licht bewolkt | partly cloudy
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1006: {
      // bewolkt | cloudy
      var weatherScript = "./animations/bloesem/bloesem.js";
      var weatherCSS = "./animations/bloesem/bloesem.css";
      return [weatherScript, weatherCSS];
    }

    case 1009: {
      // ??? | overcast
      var weatherScript = "./animations/hagel/hagel.js";
      var weatherCSS = "./animations/hagel/hagel.css";
      return [weatherScript, weatherCSS];
    }

    case 1030: {
      // nevel | mist
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1063: {
      // plaatselijk regen mogelijk
      return [weatherScript, weatherCSS];
    }

    case 1066: {
      // plaatselijk sneeuw mogelijk
      return [weatherScript, weatherCSS];
    }

    case 1069: {
      // Gedeeltelijk natte sneeuw mogelijk
      return [weatherScript, weatherCSS];
    }

    case 1072: {
      // kans op motregen
      return [weatherScript, weatherCSS];
    }

    case 1087: {
      // Onweersuitbraken mogelijk
      return [weatherScript, weatherCSS];
    }

    case 1114: {
      // sneeuw
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1117: {
      // sneeuwstorm
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1135: {
      // mist | fog
      return [weatherScript, weatherCSS];
    }

    case 1147: {
      // ijskoude mist | freezing fog
      return [weatherScript, weatherCSS];
    }

    case 1150: {
      // Fragmentarisch lichte motregen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1153: {
      // motregen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1168: {
      // ijskoude motregen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1171: {
      // Zware ijskoude motregen
      return [weatherScript, weatherCSS];
    }

    case 1180: {
      // Af en toe lichte regen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1183: {
      // erg lichte regen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1186: {
      // Af en toe matige regen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1189: {
      // lichte regen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1192: {
      // Af en toe zware regen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1195: {
      // zware regen
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1198: {
      // Lichte ijskoude regen
      return [weatherScript, weatherCSS];
    }

    case 1201: {
      // Matige of zware ijzel
      return [weatherScript, weatherCSS];
    }

    case 1204: {
      // Lichte natte sneeuw
      return [weatherScript, weatherCSS];
    }

    case 1207: {
      // Matige of zware natte sneeuw
      return [weatherScript, weatherCSS];
    }

    case 1210: {
      // Fragmentarisch lichte sneeuw
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1213: {
      // lichte sneeuw
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1216: {
      // Gedeeltelijk matige sneeuw
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1219: {
      // Matige sneeuw
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1222: {
      // Fragmentarisch zware sneeuwval
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1225: {
      // zware sneeuw
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1237: {
      // ijsregen
      var weatherScript = "./animations/hagel/hagel.js";
      var weatherCSS = "./animations/hagel/hagel.css";
      return [weatherScript, weatherCSS];
    }

    case 1240: {
      // Lichte regenbui
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1243: {
      // Matige of zware regenbui
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1246: {
      // Hevige regenbui
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1249: {
      // Lichte natte sneeuw
      var weatherScript = "./animations/regen/regen.js";
      var weatherCSS = "./animations/regen/regen.css";
      return [weatherScript, weatherCSS];
    }

    case 1252: {
      // matige of hevige natte sneeuw
      return [weatherScript, weatherCSS];
    }

    case 1255: {
      // Lichte sneeuwbuien
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1258: {
      // Matige of zware sneeuwbuien
      var weatherScript = "./animations/snee/snee.js";
      var weatherCSS = "./animations/snee/snee.css";
      return [weatherScript, weatherCSS];
    }

    case 1261: {
      // Lichte regen van ijspellets
      var weatherScript = "./animations/hagel/hagel.js";
      var weatherCSS = "./animations/hagel/hagel.css";
      return [weatherScript, weatherCSS];
    }

    case 1264: {
      // Matige of hevige regenbuien van ijspellets
      var weatherScript = "./animations/hagel/hagel.js";
      var weatherCSS = "./animations/hagel/hagel.css";
      return [weatherScript, weatherCSS];
    }

    case 1273: {
      // Plaatselijk lichte regen met onweer
      return [weatherScript, weatherCSS];
    }

    case 1276: {
      // Matige tot zware regen met onweer
      return [weatherScript, weatherCSS];
    }

    case 1279: {
      // Fragmentarisch lichte sneeuw met onweer
      return [weatherScript, weatherCSS];
    }

    case 1282: {
      // Matige tot zware sneeuwval met onweer
      return [weatherScript, weatherCSS];
    }

    default: {
    }
  }

//   if (currentWeatherCondition == "1000") {
//     // zonnig | sunny
//     return "Sunny: ";
//   } else if (currentWeatherCondition == "1003") {
//     // licht bewolkt | partly cloudy
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1006") {
//     // bewolkt | cloudy
//     var weatherScript = "./animations/bloesem/bloesem.js";
//     var weatherCSS = "./animations/bloesem/bloesem.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1009") {
//     // ??? | overcast
//     var weatherScript = "./animations/hagel/hagel.js";
//     var weatherCSS = "./animations/hagel/hagel.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1030") {
//     // nevel | mist
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1063") {
//     // plaatselijk regen mogelijk
//   } else if (currentWeatherCondition == "1066") {
//     // plaatselijk sneeuw mogelijk
//   } else if (currentWeatherCondition == "1069") {
//     // Gedeeltelijk natte sneeuw mogelijk
//   } else if (currentWeatherCondition == "1072") {
//     // kans op motregen
//   } else if (currentWeatherCondition == "1087") {
//     // Onweersuitbraken mogelijk
//   } else if (currentWeatherCondition == "1114") {
//     // sneeuw
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1117") {
//     // sneeuwstorm
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1135") {
//     // mist | fog
//   } else if (currentWeatherCondition == "1147") {
//     // ijskoude mist | freezing fog
//   } else if (currentWeatherCondition == "1150") {
//     // Fragmentarisch lichte motregen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1153") {
//     // motregen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1168") {
//     // ijskoude motregen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1171") {
//     // Zware ijskoude motregen
//   } else if (currentWeatherCondition == "1180") {
//     // Af en toe lichte regen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1183") {
//     // erg lichte regen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1186") {
//     // Af en toe matige regen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1189") {
//     // lichte regen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1192") {
//     // Af en toe zware regen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1195") {
//     // zware regen
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1198") {
//     // Lichte ijskoude regen
//   } else if (currentWeatherCondition == "1201") {
//     // Matige of zware ijzel
//   } else if (currentWeatherCondition == "1204") {
//     // Lichte natte sneeuw
//   } else if (currentWeatherCondition == "1207") {
//     // Matige of zware natte sneeuw
//   } else if (currentWeatherCondition == "1210") {
//     // Fragmentarisch lichte sneeuw
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1213") {
//     // lichte sneeuw
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1216") {
//     // Gedeeltelijk matige sneeuw
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1219") {
//     // Matige sneeuw
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1222") {
//     // Fragmentarisch zware sneeuwval
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1225") {
//     // zware sneeuw
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1237") {
//     // ijsregen
//     var weatherScript = "./animations/hagel/hagel.js";
//     var weatherCSS = "./animations/hagel/hagel.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1240") {
//     // Lichte regenbui
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1243") {
//     // Matige of zware regenbui
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1246") {
//     // Hevige regenbui
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1249") {
//     // Lichte natte sneeuw
//     var weatherScript = "./animations/regen/regen.js";
//     var weatherCSS = "./animations/regen/regen.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1252") {
//     // matige of hevige natte sneeuw
//   } else if (currentWeatherCondition == "1255") {
//     // Lichte sneeuwbuien
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1258") {
//     // Matige of zware sneeuwbuien
//     var weatherScript = "./animations/snee/snee.js";
//     var weatherCSS = "./animations/snee/snee.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1261") {
//     // Lichte regen van ijspellets
//     var weatherScript = "./animations/hagel/hagel.js";
//     var weatherCSS = "./animations/hagel/hagel.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1264") {
//     // Matige of hevige regenbuien van ijspellets
//     var weatherScript = "./animations/hagel/hagel.js";
//     var weatherCSS = "./animations/hagel/hagel.css";
//     return [weatherScript, weatherCSS];
//   } else if (currentWeatherCondition == "1273") {
//     // Plaatselijk lichte regen met onweer
//   } else if (currentWeatherCondition == "1276") {
//     // Matige tot zware regen met onweer
//   } else if (currentWeatherCondition == "1279") {
//     // Fragmentarisch lichte sneeuw met onweer
//   } else if (currentWeatherCondition == "1282") {
//     // Matige tot zware sneeuwval met onweer
//   }

  // return data.current.condition
}

export const test = {
  pullDataWeather,
  pullDataSunMoon,
  checkSunSet,
  checkWeatherCondition,
};
