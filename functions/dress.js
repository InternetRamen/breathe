//https://api.breezometer.com/weather/v1/forecast/hourly?lat={latitude}&lon={longitude}&key=YOUR_API_KEY&hours={number_of_forecast_hours}
const config = require("../config.json")
const axios = require("axios")
//hello do you see m



module.exports = async (lat, lon) => {
  try {
      const res = await axios.get(
      `https://api.breezometer.com/weather/v1/forecast/hourly?lat=${lat}&lon=${lon}&key=${config.Breezometer_API_KEY}&hours=12`
  );
    console.log(res.data.data[1].temperature)
    const toWear = {
        clothes: [],
        utility: [],
    };
    
    clothes(toWear, res.data.data)
    precipitation(toWear, res.data.data);
    cloud(toWear, res.data.data)
    return toWear;
  } catch(e) {
      return {
          error: "Error"
      }
  }
}

function clothes(toWear, arrOfHours) {
    arrOfHours = arrOfHours.map(
        (val) => val.feels_like_temperature.value * 1.8 + 32
    );
    let average = arrOfHours.reduce((a, b) => a + b)/arrOfHours.length
    
    toWear.clothes.push("Shoes or Sneakers")
  if (average <= 0) {
      toWear.clothes.push("Winter Coat");
      toWear.clothes.push("Hoodie");
      toWear.clothes.push("Thick Pants");
      toWear.clothes.push("Ankle Socks");
      toWear.utility.push("Hand-warmers");
      toWear.utility.push("Gloves");
  } else if (average <= 32) {
      toWear.clothes.push("Winter Coat");
      toWear.clothes.push("Hoodie");
      toWear.clothes.push("Sweatpants");
      toWear.clothes.push("No Show Socks");
      toWear.utility.push("Hand-warmers");
      toWear.utility.push("Gloves");
  } else if (average <= 50) {
      toWear.clothes.push("Light Coat");
      toWear.clothes.push("Hoodie");
      toWear.clothes.push("Sweatpants");
      toWear.clothes.push("No Show Socks");
  } else if (average <= 60) {
      toWear.clothes.push("Hoodie");
      toWear.clothes.push("Sweatpants");
      toWear.clothes.push("No Show Socks");
  }else {
      toWear.clothes.push("T-Shirt");
      toWear.clothes.push("Shorts");
      toWear.clothes.push("No Show Socks");
  }
  
    
}

function cloud(toWear, arrOfHours) {

    arrOfHours = arrOfHours.map(
        (val) => val.cloud_cover
    );
    let average = arrOfHours.reduce((a, b) => a + b)/arrOfHours.length
    if (average <= 20) {
        toWear.utility.push("Sunglasses");
        toWear.utility.push("Sunscreen");
        toWear.clothes.push("Hat");
    }
    else if(average <= 40){
        toWear.clothes.push("Hat");
    }
}


function precipitation(toWear,arrOfHours) {
     
    arrOfHours = arrOfHours.map(
        (val) => val.precipitation.precipitation_probability
    );
    console.log(Math.max.apply(Math, arrOfHours))
 
    let true_prob = Math.max.apply(Math, arrOfHours)
    if(true_prob >= 70){
        toWear.utility.push("Umbrella")
        toWear.clothes.push("Rain Coat")
        toWear.clothes.push("Rain Boots")
    }
    if(true_prob >= 50 && true_prob <= 70){
        toWear.utility.push("Umbrella")      
    }



}