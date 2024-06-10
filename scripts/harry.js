function checkTemp(data, plantjesData, plantenTips){
    console.log(data)
    if (data.current.temp_c >= plantjesData.minTemp & data.current.temp_c <= plantjesData.maxTemp){
        
        let temperatuur = plantenTips.temperatuur.gemiddeld;
        
        return temperatuur; 
    }  
    
    else if (data.current.temp_c <= plantjesData.minTemp){

        let temperatuur = plantenTips.temperatuur.laag;
        
        return temperatuur; 
    }  

    else if (data.current.temp_c >= plantjesData.maxTemp){
        
        let temperatuur = plantenTips.temperatuur.hoog;
    
        return temperatuur; 
    }  
}

function checkSunny(data, plantjesData, plantenTips){
    if (data.current.condition.text == "Sunny" || data.current.condition.text == "Partly cloudy" && plantjesData.sunlightAmount == "veel"){
        
        let zonlicht = plantenTips.zonlicht.veel
        
        return zonlicht;
    } 
    else if (data.current.condition.text == "Sunny" || data.current.condition.text == "Partly cloudy" && plantjesData.sunlightAmount == "gemiddeld"){
        
        let zonlicht = plantenTips.zonlicht.gemiddeld
        
        return zonlicht;
    } 
    else if (data.current.condition.text == "Sunny" || data.current.condition.text == "Partly cloudy" && plantjesData.sunlightAmount == "weinig"){
        
        let zonlicht = plantenTips.zonlicht.weinig
        
        return zonlicht;
    } 
    else if (data.current.condition.text == "Cloudy" || data.current.condition.text == "Overcast" && plantjesData.sunlightAmount == "veel"){
        
           let zonlicht = plantenTips.bewolkt.weinig;
        
        return zonlicht;
    } 
    else if (data.current.condition.text == "Cloudy" || data.current.condition.text == "Overcast" && plantjesData.sunlightAmount == "gemiddeld"){
        
           let zonlicht = plantenTips.bewolkt.gemiddeld;
        
        return zonlicht;
    } 
    else if (data.current.condition.text == "Cloudy" || data.current.condition.text == "Overcast" && plantjesData.sunlightAmount == "weinig"){
        
           let zonlicht = plantenTips.bewolkt.veel;
        
        return zonlicht;
    }
}

function checkVoeding(plantenTips){
    const currentDate = new Date();
    const beginspring = new Date(currentDate.getFullYear(), 2, 21);
    const endsummer = new Date(currentDate.getFullYear(), 8, 23);

    if (currentDate >= beginspring && currentDate <= endsummer){
    let voeding = plantenTips.voeding.geven;
    return voeding;
    } 
}



export const harrycontent = {
    checkTemp,
    checkSunny,
    checkVoeding,

}
