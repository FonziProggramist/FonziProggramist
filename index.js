const Discord = require('discord.js'),
    config = require('./config.json');
config.cfg.intents = new Discord.Intents(config.cfg.intents);
    
const client = new Discord.Client(config.cfg);
client.login(config.token);

client.on('ready', () => {
    console.log(`Я в сети с ником ${client.user.username}!`)
})

const prefix = ".";

client.on("messageCreate", function(message) {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;
  
    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();

    if (command === "ping") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`Pong! This message had a latency of ${timeTaken}ms.`);
      } 
});