const { Client } = require('discord.js');

let bot = new Client();


bot.login('token here');


bot.once('ready', () => {
	
	console.log(`The bot has connected to Discord & logged in as ${bot.user.tag} (${bot.user.id}) 
	The bot is currently in ${bot.guilds.cache.size}.
	The bot currently has ${bot.users.cache.size} cached users.`)
});

bot.on('message', async message => {
	
});