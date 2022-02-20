const longlat = require("../functions/longlat.js");
const currentConditions = require("../functions/currentConditions.js");
const name = require("../functions/name");
module.exports.run = async (client, message, args) => {
    if (args.length == 0)
        return message.channel.send("Please Specify Location");

    let latlong = await longlat(args.join(" "));
    console.log(latlong);
    let a = await currentConditions(latlong.lat, latlong.lng);
    if (a.error)
        return message.channel.send("Sorry! We don't support that area yet.");
    message.channel.send(
        weatherEmbed(latlong.url, name(latlong.area), a[1], a[2], a[0])
    );
    //message.channel.send(JSON.stringify(await longlat("Washington,DC")))
};

const Discord = require("discord.js");
// weatherEmbed(), feels_like_temperatue

function weatherEmbed(
    url,
    areaName,
    temperature,
    feels_like_temperature,
    weatherText
) {
    const embed = new Discord.MessageEmbed();
    let obj = {
        embeds: [
            {
                color: "#45efff",

                image: {
                    url: url,
                },
                title: "Weather",
                description: `It is currently ${weatherText.toLowerCase()} at ${areaName}`,
                fields: [
                    {
                        name: "Temperatures",
                        value:
                            "Temperature => " +
                            temperature +
                            "/" +
                            Math.floor(
                                (parseFloat(temperature) * 1.8 + 32) * 100
                            ) /
                                100 +
                            "F" +
                            "\n" +
                            "Feels Like => " +
                            feels_like_temperature +
                            "/" +
                            Math.floor(
                                (parseFloat(feels_like_temperature) * 1.8 + 32) * 100
                            ) /
                                100 +
                            "F",

                        //inline: false
                    },
                ],
                timestamp: new Date(),
            },
        ],
    };
    return obj;
}
