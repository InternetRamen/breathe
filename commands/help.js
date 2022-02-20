const Discord = require("discord.js")
module.exports.run = (client, message, args) => {

const embed = new Discord.MessageEmbed()
  message.channel.send({ embeds: [{
    color: "RANDOM",
    author: {
      name: "Jaden Hou & Haden Jou",
      icon_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
    },
    thumbnail: {

   url: "https://developers.breezometer.com/img/laptop.8657df31.png"
    },
    image: {
      url: "https://developers.breezometer.com/img/logo.5aac61f4.svg"
    },
    title: "Breezo Meter Help Center",
    url: "https://developers.breezometer.com/img/logo.5aac61f4.svg",
    description: "Here below is a list of Commands",
    fields: [{
      name: "COMMANDS",
      value: "#Help => To open this page \n #weather => To check the weather \n #ping => To do stuff TBA ig",
       
      //inline: false
    },
    {
      name: "\u200b",
      value:"\u200b"
    }],
    timestamp: new Date(),
    footer: {
      icon_url: "https://developers.breezometer.com/img/logo.5aac61f4.svg",
      text: "breathe 2022 Ⓒ"
    }
  }]});
}