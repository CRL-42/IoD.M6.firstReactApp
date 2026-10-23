// Child component - receives parent state handler via props
function CheckWeather({onWeatherChange}) {
  const weatherTypes = ["sunny", "windy", "raining", "cloudy", "snowing", "hailing"];
  // generates new random weather data and updates state via prop
  const randomWeather = () => {
    let newTemp = Math.floor(Math.random() * 40);
    let newWeatherIndex = Math.floor(Math.random() * weatherTypes.length);
    onWeatherChange(weatherTypes[newWeatherIndex], newTemp);
  };
  return (
    <div>
  <button onClick={randomWeather}>Check Weather</button>
  </div>
  )
}

export default CheckWeather