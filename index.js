const Discord = require("discord.js")
const { prefix, token } = require("./config.json")

const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})


let bot = {
    client, 
    prefix: "s-",
    owners: ["438763772941697024"]
}

// stores commands and events 
client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require("./handlers/events")(bot, reload)
client.loadCommands = (bot, reload) => require("./handlers/commands")(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot

/* client.on("ready", () => {
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

client.on("guildMemberAdd", async (member) => {
    const img = await generateImage(member)
    member.guild.channels.cache.get(welcomeChannelID).send({
        content: `<@${member.id}> Welcome to the server!`,
        files: [img]
    })
})
 */

client.login(token)