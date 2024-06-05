let latitude = '52.35818441704516'
let longitude = '4.926244883772008'

function pullDataWeather(token) {
    var fetchUrl = 'http://api.weatherapi.com/v1/current.json?key=' + token + '&q=' + latitude + ', ' + longitude + '&aqi=yes'
    return fetch(fetchUrl).then(res => res.json())
}

function pullDataSunMoon(token) {
    let currentDate = new Date().toLocaleDateString('en-CA');
    // console.log(currentDate)
    var fetchUrl = 'http://api.weatherapi.com/v1/astronomy.json?key=' + token + '&q=' + latitude + ', ' + longitude + '&dt=' + currentDate
    // console.log(fetchUrl)
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

function pullTemperature(data) {
  
  const teeest = 2;
  return data.current.temp_c;
  return teeest;

}
// console.log(pullTemperature);

function useData(data) {
    console.log('')
}

export const test = {
    pullDataWeather,
    pullDataSunMoon,
    checkSunSet,
    useData,
    pullTemperature,
}