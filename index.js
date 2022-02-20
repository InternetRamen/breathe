const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES,
    ],
});

client.commands = new Discord.Collection();
const commands = fs
    .readdirSync("./commands")
    .filter((file) => file.endsWith(".js"));
for (const file of commands) {
    const commandName = file.split(".")[0];
    const command = require(`./commands/${file}`);
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, command);
}

client.on("ready", () => {
    console.log("ready");
});

client.on("messageCreate", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith("#")) return;
    let messageArr = message.content.split(" ");
    messageArr = messageArr.map((val) => val.trim());
    let command = messageArr.shift().substring(1);

    const cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, messageArr);
});

client.login(config.token);
