# Weather App
This is a simple JavaScript weather app that provides weather updates for users. It utilizes an API to fetch weather data and displays it in a user-friendly interface.

### Features
Displays current weather information, including temperature, weather condition, humidity, wind speed, and more.
Allows users to search for weather updates in different locations by entering a city name or ZIP code.
Automatically detects and displays the user's current location weather.
Provides a visually appealing and responsive design that works well on both desktop and mobile devices.

### Technologies Used
- JavaScript: The core programming language used to build the weather app.
- HTML: Used for the structure and layout of the web page.
- CSS: Used for styling and visual enhancements.
- <u><a href="https://www.weatherapi.com">Weather API:</a></u> Utilized to retrieve weather data.

### Getting Started
To run the weather app locally on your machine, follow these steps:

1. Clone the repository:

bash
```
git clone https://github.com/your-username/weather-app.git
```
2. Navigate to the project directory:

bash
```
cd weather-app
```
3. Open the index.html file in your preferred web browser.

### Usage
- Upon loading the weather app, it will display the weather information for your current location automatically.
- To search for weather updates in a different location, enter a city name or ZIP code in the search input field and press Enter or click the search button.
- The app will retrieve and display the weather details for the specified location.

### Customization
You can customize the weather app by making changes to the following files:

- index.html: Modify the structure and layout of the web page.
- style.css: Adjust the styling and visual appearance.
- script.js: Modify the JavaScript code to enhance or change the app's functionality.

### API Integration
The weather app uses the OpenWeatherMap API to fetch weather data. To make API calls, you need to sign up on the OpenWeatherMap website and obtain an API key. Once you have the API key, replace the placeholder value in the script.js file with your actual API key:

javascript
```
const apiKey = 'YOUR_API_KEY';
```
### Acknowledgements
The weather app was inspired by the weather section of the OpenWeatherMap API documentation.
The design and implementation of this app were guided by various online tutorials and resources.
