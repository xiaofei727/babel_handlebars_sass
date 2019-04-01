require('@babel/polyfill');

/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development. The script makes use of the
 * OpenWeatherMap weather API.
 *
 * 
 */
(() => {

    Handlebars.registerHelper("showUnit", function(unit, temp) {
       if(unit == 'celcius') {
          return temp + '°C';
       } else {
          return ((temp * 9/5) + 32) + '°F';
       }
    })

    const API_KEY = '1b8e068f270401d0be46315fc40524a8';
    const ENDPOINT = 'https://api.openweathermap.org/data/2.5/';

    const getJSON = url => {
        return fetch(url)
            .then(response => response.json())
            .then(data => {console.log(data); return data;});
    };

    /**
     * Displays a weather forecast for a given location.
     * @param {Object[]} data - The array of forecast weather objects.
     * @param {Object} element - The DOM reference to the display DOM element.
     */
    const displayForecast = (data, element, unit) => {


        var contextData = [];
        let currDate1,
            nextDate1,
            currItem1;

        data.map(item => {
            let flag = false;
            nextDate1 = item['dt_txt'].split(' ')[0];
            if (currDate1 !== nextDate1) {
                currDate1 = nextDate1;
                flag = true;
            }

            contextData.push( 
                    { 
                        'currDate' : currDate1,
                        'nextDate' : nextDate1,
                        'flag' : flag,
                        'time' : `${item['dt_txt'].substr(item['dt_txt'].indexOf(' '))}`,
                        'condition' : `${item.weather[0].main}`,
                        'temp' : `${parseFloat((item.main['temp_max'] + item.main['temp_min']) / 2).toFixed(3)}`,
                        'unit': unit,
                     }
                );
        });

        var context = {
            "data" : contextData
        };

        // html = 'My name is Ritesh Kumar. I am a developer.'
        var templateScript = Handlebars.templates.forecast(context);


        // Insert the HTML code into the page
        document.getElementById('forecastContent').innerHTML = templateScript;
    };

    /**
     * Displays the current weather for a given location.
     * @param {Object} data - The object of returned weather data.
     * @param {Object} element - The DOM reference to the display DOM element.
     */
    const displayWeather = ({name, sys, dt, weather, main}, element, unit) => {

        var context = {
            "location" : `${name}, ${sys.country}`, 
            "date" : `${new Date(+dt * 1000).toDateString()}`,
            "conditions": `${weather[0].main}`,
            "temp": `${main.temp}`,
            "sunrise": `${new Date(+sys.sunrise * 1000).toTimeString()}`,
            "sunset": `${new Date(+sys.sunset * 1000).toTimeString()}`,
            'unit': unit,
        };


        var templateScript = Handlebars.templates.weather(context);

        // Insert the HTML code into the page
        document.getElementById('weatherContent').innerHTML = templateScript;



        /*var context = {
            "location" : `${name}, ${sys.country}`, 
            "date" : `${new Date(+dt * 1000).toDateString()}`,
        };

        var templateScript = Handlebars.templates.demo(context);

        document.getElementById('content').innerHTML = templateScript;*/
    };

   
    const weatherFormSubmit = async (event) => {
        event.preventDefault();

        const location = event.target.querySelector('[name=location]').value;
        const unit = event.target.querySelector('[name=unit]:checked').value;
        console.log(unit);
        console.log("unit");
//        const weatherContainer = document.querySelector('.weather-display');
//        const forecastContainer = weatherContainer.querySelector('.forecast');
        var weatherContainer;
        var forecastContainer;
        // Wait for the request to resolve with
        // the required json data using
        // async/await.
        const weather = await getJSON(`${ENDPOINT}weather?q=${location}&units=metric&appid=${API_KEY}`);
        const {list} = await getJSON(`${ENDPOINT}forecast?q=${location}&units=metric&appid=${API_KEY}`);

        displayWeather(weather, weatherContainer, unit);
        displayForecast(list, forecastContainer, unit);
    };

    const weather = document.querySelector('.frm.weather');

    /**
     * Submit event handler for weather form.
     * @see weatherFormSubmit.
     */
    weather.addEventListener('submit', weatherFormSubmit);
})();
