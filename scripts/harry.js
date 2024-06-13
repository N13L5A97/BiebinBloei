function checkTemp(data, plantjesData, plantenTips) {
  if (!plantjesData) {
    console.error('plantjesData is undefined');
    return;
  }

  if (data.current.temp_c >= plantjesData.minTemp && data.current.temp_c <= plantjesData.maxTemp) {
    return plantenTips.temperatuur.gemiddeld;
  } else if (data.current.temp_c <= plantjesData.minTemp) {
    return plantenTips.temperatuur.laag;
  } else if (data.current.temp_c >= plantjesData.maxTemp) {
    return plantenTips.temperatuur.hoog;
  }
}

function checkSunny(data, plantjesData, plantenTips) {
    if (!data || !plantjesData || !plantenTips) {
        console.error('Required data is missing');
        return;
    }

    const condition = data.current.condition.text;
    const sunlightAmount = plantjesData.sunlightAmount;

    if ((condition === "Sunny" || condition === "Partly cloudy") && sunlightAmount === "veel") {
        return plantenTips.zonlicht.veel;
    } 
    if ((condition === "Sunny" || condition === "Partly cloudy") && sunlightAmount === "gemiddeld") {
        return plantenTips.zonlicht.gemiddeld;
    } 
    if ((condition === "Sunny" || condition === "Partly cloudy") && sunlightAmount === "weinig") {
        return plantenTips.zonlicht.weinig;
    } 
    if ((condition === "Cloudy" || condition === "Overcast") && sunlightAmount === "veel") {
        return plantenTips.bewolkt.weinig;
    } 
    if ((condition === "Cloudy" || condition === "Overcast") && sunlightAmount === "gemiddeld") {
        return plantenTips.bewolkt.gemiddeld;
    } 
    if ((condition === "Cloudy" || condition === "Overcast") && sunlightAmount === "weinig") {
        return plantenTips.bewolkt.veel;
    }
}
function checkVoeding(plantenTips) {
    if (!plantenTips) {
        console.error('plantenTips is undefined');
        return;
    }

    const currentDate = new Date();
    const beginspring = new Date(currentDate.getFullYear(), 2, 21);
    const endsummer = new Date(currentDate.getFullYear(), 8, 23);

    if (currentDate >= beginspring && currentDate <= endsummer) {
        return plantenTips.voeding.geven;
    }
}


export const harrycontent = {
    checkTemp,
    checkSunny,
    checkVoeding,

}

// Toegankelijkheid Harry
// -button 
// -aria-controls, aria-live