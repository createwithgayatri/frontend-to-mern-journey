// Replace this with your actual API key from OpenWeatherMap
const API_KEY = 'a99zZr8cyXdtu0IdwNgIvjDXUM8Yy0RSmPNQzQio'; 
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

// DOM Elements
const cityInput = document.getElementById('city-input');
const searchBtn = document.getElementById('search-btn');
const cityNameEl = document.getElementById('city-name');
const currentTempEl = document.getElementById('current-temp');
const feelsLikeEl = document.getElementById('feels-like');
const weatherDescEl = document.getElementById('weather-desc');
const mainIconEl = document.getElementById('main-icon');
const errorMsgEl = document.getElementById('error-msg');
const updateTimeEl = document.getElementById('update-time');

// Async function to fetch weather data
async function fetchWeather(city) {
    try {
        // Hide error message on a new search attempt
        errorMsgEl.classList.add('hidden');

        // Fetching data using imperial/metric units (metric handles Celsius)
        const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        
        if (!response.ok) {
            throw new Error('City not found');
        }

        const data = await response.json();
        updateUI(data);
        
    } catch (error) {
        console.error(error);
        errorMsgEl.classList.remove('hidden');
    }
}

// Function to update DOM elements with API data
function updateUI(data) {
    // 1. City & Country Name
    cityNameEl.textContent = `Today · ${data.name}, ${data.sys.country}`;
    
    // 2. Temperature rounded values
    currentTempEl.textContent = `${Math.round(data.main.temp)}°`;
    feelsLikeEl.textContent = `Feels like ${Math.round(data.main.feels_like)}°C`;
    
    // 3. Condition Descriptions
    weatherDescEl.textContent = data.weather[0].description;
    
    // 4. Dynamic Icon generation from OpenWeather
    const iconCode = data.weather[0].icon;
    mainIconEl.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    mainIconEl.alt = data.weather[0].description;

    // 5. Explicit Timestamp tracker
    const now = new Date();
    updateTimeEl.textContent = `Updated at ${now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
}

// Event Listeners
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) fetchWeather(city);
});

cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const city = cityInput.value.trim();
        if (city) fetchWeather(city);
    }
});

// Load default city info on initial load
window.addEventListener('DOMContentLoaded', () => {
    fetchWeather('London'); // Default fallback city
});