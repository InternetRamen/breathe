const Discord = require("discord.js");
const longlat = require("../functions/longlat.js");
const dress = require("../functions/dress.js");
const name = require("../functions/name");
module.exports.run = async (client, message, args) => {
    if (args.length == 0)
        return message.channel.send("Please Specify Location");

    let latlong = await longlat(args.join(" "));

    let a = await dress(latlong.lat, latlong.lng);
    message.channel.send(dressEmbed(latlong.url, name(latlong.area), a));  
};

function dressEmbed(url, areaName, toWear) {

    let obj = {
        embeds: [
            {
                color: "#476cff",

                image: {
                    url: url,
                },
                title: "What To Wear",
                description: `Based on today's forecast at ${areaName}, wear the following:`,
                fields: [
                    {
                        name: "Clothes",
                        value: toWear.clothes.join("\n")
                    },
                     {
                        name: "Utility",
                        value: toWear.utility.join("\n")
                     },
 
                ],
                timestamp: new Date(),
            },
        ],
    };

    return obj;
}

