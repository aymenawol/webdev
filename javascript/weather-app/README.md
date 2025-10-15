# Weather App

A simple weather application that fetches and displays weather information for any city using the OpenWeatherMap API.

## Setup Instructions

1. **Get an API Key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Generate an API key

2. **Configure the Application**
   - Copy `config.example.js` to `config.js`:
     ```bash
     cp config.example.js config.js
     ```
   - Open `config.js` and replace `YOUR_API_KEY_HERE` with your actual OpenWeatherMap API key

3. **Open the Application**
   - Open `index.html` in your web browser
   - Enter a city name and get the weather information!

## Security Note

⚠️ **IMPORTANT**: Never commit your `config.js` file with your actual API key to version control. The `config.js` file is gitignored to prevent accidental exposure of your API key.
