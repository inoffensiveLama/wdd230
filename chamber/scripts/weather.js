const currentTemp = document.querySelector("#current-temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDescr = document.querySelector("figcaption");

const url = "https://api.openweathermap.org/data/2.5/weather?lat=48.78&lon=9.17&appid=d2234c90500fb15ffdcf322d4bc8b5b1&units=imperial"

async function apiFetch(){
    try{
        const response = await fetch(url);
        if(response.ok){
            let data = await response.json();
            displayResult(data);
        }else{
            throw Error(await response.text());
        }

    } catch(error){
        console.log(error);
    }
    

}

function displayResult(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`
    let iconSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    let iconDescr = `${data.weather[0].description}`

    weatherIcon.setAttribute("src", iconSrc);
    weatherIcon.setAttribute("alt", iconDescr);

    captionDescr.textContent = `${iconDescr}`;
}

apiFetch();



