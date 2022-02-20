
const axios = require('axios').default;
const config = require("../config.json")

module.exports = async (lat, lon) => {

try {
    let res = await axios.get(`https://api.breezometer.com/air-quality/v2/current-conditions?lat=${lat}&lon=${lon}&key=${config.Breezometer_API_KEY}&features=breezometer_aqi,health_recommendations`)
  res = res.data.data
  let index = res.indexes[Object.keys(res.indexes)[0]]
  console.log(index)
  let obj = {
    index: {
      name: index.display_name,
      aqi: index.aqi,
      color: index.color,
      words: index.category
    },
    health_recommendations: res.health_recommendations

  }
  return obj

} catch(e) {
  return {
    error: e
  }
}
}
