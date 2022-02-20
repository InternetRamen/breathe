const longlat = require("../functions/longlat.js")

module.exports.run = async (client, message, args) => {
  message.channel.send("pong")
  message.channel.send(JSON.stringify(await longlat("Washington, DC")))
  
}