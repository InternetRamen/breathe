//https://api.breezometer.com/air-quality/v2/current-conditions?lat={latitude}&lon={longitude}&key=YOUR_API_KEY&features={Features_List}

const axios = require('axios').default;

const config = require("../config.json")

module.exports = async (string) => {
  const res  = await axios.get(`http://www.mapquestapi.com/geocoding/v1/address?key=${config.mapquest_API_KEY}&location=${string}`)
  
  let result = res.data.results[0].locations[0]
  let out = res.data.results[0].locations[0].displayLatLng
  let obj = {}
  for (let i = 6; i >= 1;i--) {
    if (i == 2) continue;
    let category = result[`adminArea${i}Type`] 
    obj[category.toLowerCase()] = result[`adminArea${i}`]

  }
  out.area = obj

  out.url = result.mapUrl
  
  return out
}