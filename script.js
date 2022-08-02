let card  = document.getElementById('card');
console.log(card);
setTimeout(async()=>{
    let countryUrl = await fetch('https://restcountries.com/v2/all');
    let data = await countryUrl.json();
    console.log(data);
    data.forEach((country)=>{
        let div = document.createElement('div');
        div.innerHTML = ` 
        <div class="card-body"> 
        <h5 class="card-title">${country.name}</h5>
        <img class="card-img-top" src="${country.flags.png}" alt="Card image cap">
        <p class="card-text">Capital:${country.capital}</p>
        <p class="card-text">Region:${country.region}</p>
        <p class="card-text">Country Code:${country.alpha3Code}</p>
        <p class="card-text">Latitude:${country.latlng}</p>
        <p class="card-text">Longitude:${country.latlng}</p>
        <a href="#" id="checkWeatherBtn"onClick="btnFn()" class="btn btn-primary">Check Weather</a>
        </div>`;
        card.append(div);
    }
    )},1000);
    
    // let checkWeatherBtn = document.getElementById('checkWeatherBtn');
    // checkWeatherBtn.addEventListener('click', btnFn());
     async function btnFn(){
         console.log('clicked');
         let weatherUrl = await fetch('https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e844c9b09594d8d249da4c13419c040f');
         let weatherData = await weatherUrl.json();
         console.log(weatherData);
     
     
        }
    // weatherBtn.addEventListener('click', async()=>{
    //     console.log("button is clicked");
        // let weatherDiv = document.createElement('div');
        // weatherDiv.innerHTML = ` 
        // <div class="card-body"> 
        // <h5 class="card-title">${weatherData.name}</h5>
        // <p class="card-text">Temperature:${weatherData.main.temp}</p>
        // <p class="card-text">Humidity:${weatherData.main.humidity}</p>
        // <p class="card-text">Wind Speed:${weatherData.wind.speed}</p>
        // <p class="card-text">Wind Direction:${weatherData.wind.deg}</p>
        // <p class="card-text">Cloudiness:${weatherData.clouds.all}</p>
        // <p class="card-text">Weather Description:${weatherData.weather[0].description}</p>
        // </div>`;
        // card.append(weatherDiv);
    // }
    // );
    

        // displayCountriesData(data);
    //    var checkWeatherBtn = document.getElementById('checkWeatherBtn');
    //     checkWeatherBtn.addEventListener('click', () => {
    //         let cityName = data.capital;
    //         let weatherUrl = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=e844c9b09594d8d249da4c13419c040f`);
    //         let weatherData = await weatherUrl.json();
    //         console.log(weatherData);
    //     });
        
        
