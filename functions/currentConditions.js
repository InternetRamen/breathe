
const axios = require('axios').default;
const config = require("../config.json")

module.exports = async (lat, lon) => {
try {
  
  const res = await axios.get(`https://api.breezometer.com/weather/v1/current-conditions?lat=${lat}&lon=${lon}&key=${config.Breezometer_API_KEY}`)
  return [res.data.data.weather_text, res.data.data.temperature.value + res.data.data.temperature.units,res.data.data.feels_like_temperature.value + res.data.data.feels_like_temperature.units] 
} catch(e) {
  return {
    error: e
  }
}

}
