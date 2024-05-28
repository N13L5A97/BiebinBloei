let latitude = '52.35818441704516'
let longitude = '4.926244883772008'

function pullDataWeather(token) {
    var fetchUrl = 'http://api.weatherapi.com/v1/current.json?key=' + token + '&q=' + latitude + ', ' + longitude + '&aqi=yes'
    return fetch(fetchUrl).then(res => res.json())
}

function pullDataSunMoon(token) {
    let currentDate = new Date().toLocaleDateString('en-CA');
    console.log(currentDate)
    var fetchUrl = 'http://api.weatherapi.com/v1/astronomy.json?key=' + token + '&q=' + latitude + ', ' + longitude + '&dt=' + currentDate
    console.log(fetchUrl)
    return fetch(fetchUrl).then(res => res.json())
}

function checkSunSet(givenTime) {
    // Convert time strings to Date objects
    const options = { hour: '2-digit', minute: '2-digit', hour12: true };
    const currentTime = new Date().toLocaleTimeString('en-US', options);

    const currentTimeObj = new Date('2000-01-01 ' + currentTime); // Set arbitrary date (2000-01-01) to ensure proper comparison
    const givenTimeObj = new Date('2000-01-01 ' + givenTime);

    // Compare times
    if (currentTimeObj < givenTimeObj) {
        return `De zon is nog steeds op (dag)`;
    } else {
        return `De zon is onder gegaan (nacht)`
    }
    // } else if (currentTimeObj > givenTimeObj) {
    //     return `${currentTime} is after ${givenTime}`;
    // } else {
    //     return `${currentTime} is the same as ${givenTime}`;
    // }
}

function checkWeatherCondition(data) {
    const currentWeatherCondition = data.current.condition.code
    
    if (currentWeatherCondition == '1000') {
        return 'Sunny: '
    } else if (currentWeatherCondition == '1003') {

    } else if (currentWeatherCondition == '1006') {
        
    } else if (currentWeatherCondition == '1009') {
        
    } else if (currentWeatherCondition == '1030') {
        
    } else if (currentWeatherCondition == '1063') {
        
    } else if (currentWeatherCondition == '1066') {
        
    } else if (currentWeatherCondition == '1069') {
        
    } else if (currentWeatherCondition == '1072') {
        
    } else if (currentWeatherCondition == '1087') {
        
    } else if (currentWeatherCondition == '1114') {
        
    } else if (currentWeatherCondition == '1117') {
        
    } else if (currentWeatherCondition == '1135') {
        
    } else if (currentWeatherCondition == '1147') {
        
    } else if (currentWeatherCondition == '1150') {
        
    } else if (currentWeatherCondition == '1153') {
        
    } else if (currentWeatherCondition == '1168') {
        
    } else if (currentWeatherCondition == '1171') {
        
    } else if (currentWeatherCondition == '1180') {
        
    } else if (currentWeatherCondition == '1183') {
        
    } else if (currentWeatherCondition == '1186') {
        
    } else if (currentWeatherCondition == '1189') {
        
    } else if (currentWeatherCondition == '1192') {
        
    } else if (currentWeatherCondition == '1195') {
        
    } else if (currentWeatherCondition == '1198') {
        
    } else if (currentWeatherCondition == '1201') {
        
    } else if (currentWeatherCondition == '1204') {
        
    } else if (currentWeatherCondition == '1207') {
        
    } else if (currentWeatherCondition == '1210') {
        
    } else if (currentWeatherCondition == '1213') {
        
    } else if (currentWeatherCondition == '1216') {
        
    } else if (currentWeatherCondition == '1219') {
        
    } else if (currentWeatherCondition == '1222') {
        
    } else if (currentWeatherCondition == '1225') {
        
    } else if (currentWeatherCondition == '1237') {
        
    } else if (currentWeatherCondition == '1240') {
        
    } else if (currentWeatherCondition == '1243') {
        
    } else if (currentWeatherCondition == '1246') {
        
    } else if (currentWeatherCondition == '1249') {
        
    } else if (currentWeatherCondition == '1252') {
        
    } else if (currentWeatherCondition == '1255') {
        
    } else if (currentWeatherCondition == '1258') {
        
    } else if (currentWeatherCondition == '1261') {
        
    } else if (currentWeatherCondition == '1264') {
        
    } else if (currentWeatherCondition == '1273') {
        
    } else if (currentWeatherCondition == '1276') {
        
    } else if (currentWeatherCondition == '1279') {
        
    } else if (currentWeatherCondition == '1282') {
        
    }


    // return data.current.condition
}

export const test = {
    pullDataWeather,
    pullDataSunMoon,
    checkSunSet,
    checkWeatherCondition,
}