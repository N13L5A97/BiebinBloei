

function checkTemp(test ,plantjesData, plantenTips){
    if (test.pullTemperature < plantjesData.minTemp){
        return plantenTips.harry.uitleg; 
}
}

export const testharry = {
    checkTemp,
}
