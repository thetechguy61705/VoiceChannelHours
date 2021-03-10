const { Client } = require('discord.js');
const fs = require('fs');


let bot = new Client();

bot.login('token here');


//Command handler (Slash commands, no message handler commands)
const SlashCommands = require('./SlashCommandClient.js');
const SlashCommandClient = new SlashCommands(bot.token, bot.application.id)

fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {

        if (!file.endsWith(".js")) return;


        const command = require(`./commands/${file}`);

        if (!command.name)
            return console.log(`1 command was not loaded because of an error.`)
            
        // Add logic that saves to Discord.
            
        console.log(command.name + ' is ready & saved to Discord. Commands can take up to 10 minutes to update if they are not guild based commands.');
    });
});





bot.once('ready', () => {
	
	console.log(`The bot has connected to Discord & logged in as ${bot.user.tag} (${bot.user.id}) 
	The bot is currently in ${bot.guilds.cache.size}.
	The bot currently has ${bot.users.cache.size} cached users.`)
});

