# Weather App

A simple weather app built with HTML, CSS and JavaScript. Enter any city name and get its live weather: temperature, humidity, wind speed and a weather icon. Data comes from the OpenWeather API.

**Live Demo:** https://vishal-kumar-tech.github.io/weather-app/

## Features

- Search weather of any city by name
- Search with the Search button or the Enter key
- Shows temperature (°C), city name, weather condition, humidity and wind speed
- Weather icon changes with the condition (Clouds, Clear, Rain, Snow, Mist, Dust, etc.)
- Alerts for an empty input or a city that is not found
- Animated gradient background and a rotating glowing border card par aayenge..
- Floating weather icon animation 
- Responsive design for mobile and desktop

## Tech Stack

- HTML5
- CSS3 (Flexbox, animations, pseudo-elements, media queries)
- JavaScript (DOM, events, fetch API, async/await, switch)
- [OpenWeather API](https://openweathermap.org/api)

## Project Structure

```
weather-app/
├── index.html    # Page structure
├── style.css     # Styling and animations
├── script.js     # Fetches data and updates the page
└── README.md
```

## How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/Vishal-kumar-tech/weather-app.git
   ```
2. Get a free API key from [OpenWeather](https://openweathermap.org/api).
3. Open `script.js` and put your key here:
   ```js
   const apikey = "YOUR_API_KEY"
   ```
4. Open `index.html` in your browser.

## How It Works

1. The user types a city and clicks Search (or presses Enter).
2. `getWeather(city)` builds the API URL and sends a request using `fetch`.
3. `await` waits for the response, which is converted to JSON.
4. If the city is invalid, an alert is shown. Otherwise the data is displayed on the page using the DOM.
5. A `switch` statement picks the correct icon based on the weather condition.
6. The whole code is inside `try/catch` so errors do not break the app.

## What I Learned

- Calling an API with `fetch` and `async/await`
- Reading data from a JSON object
- Updating the page with the DOM
- Handling events and errors
- Creating CSS animations and a rotating border effect

## Author

**Vishal Kumar**
GitHub: [Vishal-kumar-tech](https://github.com/Vishal-kumar-tech)