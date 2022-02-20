const Discord = require("discord.js");
module.exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed();
    message.channel.send({
        embeds: [
            {
                color: "RANDOM",
                thumbnail: {
                    url: "https://developers.breezometer.com/img/laptop.8657df31.png",
                },
                image: {
                    url: "https://developers.breezometer.com/img/logo.5aac61f4.svg",
                },
                title: "Breathe Help Center",
                url: "https://developers.breezometer.com/img/logo.5aac61f4.svg",
                description: "Here below is a list of Commands",
                fields: [
                    {
                        name: "COMMANDS",
                        value: "**#help:** To open this page! :) \n **#weather {location}** To check the weather \n **#airquality {location}:** Check the air quality of your region and recommendations to people with specific conditions \n **#dress {location}:** Give recommendations on what to wear based on predicted temperatures and precipitation",

                        //inline: false
                    },
                    {
                        name: "\u200b",
                        value: "\u200b",
                    },
                ],
                timestamp: new Date(),
                footer: {
                    icon_url:
                        "https://developers.breezometer.com/img/logo.5aac61f4.svg",
                    text: "breathe 2022",
                },
            },
        ],
    });
};
