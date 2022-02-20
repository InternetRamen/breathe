const Discord = require("discord.js");
const longlat = require("../functions/longlat.js");
const airQuality = require("../functions/currentAirQuality.js");
const name = require("../functions/name");
module.exports.run = async (client, message, args) => {
    if (args.length == 0)
        return message.channel.send("Please Specify Location");

    let latlong = await longlat(args.join(" "));

    let a = await airQuality(latlong.lat, latlong.lng);
    if (a.error)
        return message.channel.send(
            e || "Sorry! We don't support that area yet."
        );
    console.log(a);
    message.channel.send(
        airQualityEmbed(
            latlong.url,
            a.index.aqi,
            a.index.color,
            a.index.words,
            name(latlong.area),
            a
        )
    );
};

function airQualityEmbed(url, aqi, color, words, areaName, a) {

    let obj = {
        embeds: [
            {
                color: color,

                image: {
                    url: url,
                },
                title: "Air Quality",
                description: `It is currently ${words.toLowerCase()} at ${areaName}`,
                fields: [
                    {
                        name: "Air Quality",
                        value: "Air Quality => " + aqi + "ppm",
                    },

                ],
                timestamp: new Date(),
            },
        ],
    };
    let x = 0;
    for (const [key, value] of Object.entries(a.health_recommendations)) {
        obj.embeds[0].fields.push({
            name: toTitleCase(key.replace("_", " ")),
            value: value,
            inline: x == 0 ? false : true,
        });
        x++
     
    }
    return obj;
}
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(" ")
        .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
        .join(" ");
}
