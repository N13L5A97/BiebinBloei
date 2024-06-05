function checkTemp(data, plantjesData, plantenTips){
    console.log(data)
    if (data.current.temp_c > plantjesData.minTemp){
        const content = {
            uitleg: plantenTips.harry.uitleg,
            temperatuur: plantenTips.temperatuur.gemiddeld
        }
        return content; 
    }
}

export const testharry = {
    checkTemp,
}
