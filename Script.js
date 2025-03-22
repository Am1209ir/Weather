async function getWeather() {
    const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeather API key
    const city = document.getElementById("cityInput").value;
    const weatherInfo = document.getElementById("weatherInfo");
    const errorText = document.getElementById("error");

    if (city === "") {
        errorText.textContent = "Please enter a city name.";
        weatherInfo.style.display = "none";
        return;
    }

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        );

        if (!response.ok) {
            throw new Error("City not found.");
        }

        const data = await response.json();
        document.getElementById("cityName").textContent = data.name;
        document.getElementById("temperature").textContent = `Temperature: ${data.main.temp}°C`;
        document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;
        document.getElementById("description").textContent = data.weather[0].description;
        document.getElementById("weatherIcon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

        weatherInfo.style.display = "block";
        errorText.textContent = "";
    } catch (error) {
        errorText.textContent = "City not found. Please enter a valid city.";
        weatherInfo.style.display = "none";
    }
                                                                             }
