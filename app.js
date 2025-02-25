//Global Variable
const weatherAPI = "https://api.open-meteo.com/v1/forecast?latitude=36.1628&longitude=-85.5016&current=temperature_2m,relative_humidity_2m,precipitation,rain,showers,snowfall,weather_code&hourly=precipitation_probability&temperature_unit=fahrenheit&timezone=America%2FChicago"

//Fetches data from meteo api
fetch(weatherAPI)
    .then(objResponse => objResponse.json())
    .then(objData => {
        //Stores data into variable
        const temp = objData.current.temperature_2m
        const humi = objData.current.relative_humidity_2m
        const weatherCode = objData.current.weather_code
        
        //Prints out Tempature and Humidity 
        document.querySelector('#temp').innerHTML = `${temp}&#176;`
        document.querySelector('#humi').textContent = `${humi}%`
        
        //Option Map for the Weather_code that determiens what current weather conditions are
        const conditions = {
            0: "Clear Sky",
            1: "Partly cloudy",
            2: "Partly cloudy",
            3: "Partly cloudy",
            45: "Foggy",
            48: "Foggy",
            51: "Drizzle",
            53: "Drizzle",
            55: "Drizzle",
            61: "Rain showers",
            63: "Rain showers",
            65: "Rain showers",
            71: "Snowfall",
            73: "Snowfall",
            75: "Snowfall",
        }

        //Option map for icons that are used for the current conditions
        const icon = {
            0: {image: "https://cdn-icons-png.flaticon.com/128/6974/6974827.png"},
            1: {image: "https://cdn-icons-png.flaticon.com/128/7774/7774454.png"},
            2: {image: "https://cdn-icons-png.flaticon.com/128/7774/7774454.png"},
            3: {image: "https://cdn-icons-png.flaticon.com/128/7774/7774454.png"},
            45: {image: "https://cdn-icons-png.flaticon.com/128/1197/1197102.png"},
            48: {image: "https://cdn-icons-png.flaticon.com/128/1197/1197102.png"},
            51: {image: "https://cdn-icons-png.flaticon.com/128/4837/4837689.png"},
            53: {image: "https://cdn-icons-png.flaticon.com/128/4837/4837689.png"},
            55: {image: "https://cdn-icons-png.flaticon.com/128/4837/4837689.png"},
            61: {image: "https://cdn-icons-png.flaticon.com/128/4837/4837689.png"},
            63: {image: "https://cdn-icons-png.flaticon.com/128/4837/4837689.png"},
            65: {image: "https://cdn-icons-png.flaticon.com/128/4837/4837689.png"},
            71: {image: "https://cdn-icons-png.flaticon.com/128/6363/6363293.png"},
            73: {image: "https://cdn-icons-png.flaticon.com/128/6363/6363293.png"},
            75: {image: "https://cdn-icons-png.flaticon.com/128/6363/6363293.png"},
        }

        //Gets weather code and sends image that matches the current condition
        const weatherIcon = icon[weatherCode]
        document.querySelector('#weatherIcon').src = weatherIcon.image

        //Gets weather code and sends what the current condition is
        const conditionTxt = conditions[weatherCode]
        document.querySelector('#conditions').textContent = conditionTxt

        //Alters font size of data being pulled from API
        document.querySelector('#temp').style.fontSize = "30px"
        document.querySelector('#humi').style.fontSize = "30px"
        document.querySelector('#conditions').style.fontSize = "30px"

        //Changes color of temp text based on if it is hot or cold
        //Changes icon next to temp if its hot or cold
        if(objData.current.temperature_2m > 80)
        {
            document.querySelector('#temp').style.color = "red"
            document.querySelector('#tempIcon').src = "https://cdn-icons-png.flaticon.com/128/1684/1684426.png"
        }
        else
        {
            document.querySelector('#temp').style.color = "blue"
            document.querySelector('#tempIcon').src = "https://cdn-icons-png.flaticon.com/128/2322/2322701.png"
        }

    })
