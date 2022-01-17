module.exports = {
    name: "ready",
    run: async (bot) => {
        bot.client.user.setPresence({
            activities: [{ 
                name: "with discord.js",
                type: "PLAYING"
            }],
            status: 'DND'
        })
        console.log(`Logged in as ${bot.client.user.tag}`)
    }
}