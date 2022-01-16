const Discord = require("discord.js");
const { prefix, token } = require("./config.json");
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("message", (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
    const channelID = message.channel.id;
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(" ");
    const command = args.shift().toLowerCase();
})

client.on("messageCreate", (message) => {
    if(message.content == "hi") {
        message.reply(`Hello ${message.user}`)
    }
})

const welcomeChannelID = "471693842018467853"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelID).send(`<@${member.id}> Welcome to the server!`)
})

client.login(token)