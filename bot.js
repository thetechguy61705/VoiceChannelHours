const { Client, Collection } = require('discord.js');
const fs = require('fs');
const Enmap = require('enmap');



let bot = new Client();
bot.commands = new Collection();


bot.login('token here');


//Crete enamps

bot.trackingUsers = new Enmap({
	name: 'trackingUsers',
	polling: true
});

bot.userData = new Enmap({
	name: 'userData',
	fetchAll: false,
	polling: true
});


fs.readdir("./commands/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {

        if (!file.endsWith(".js")) return;


        const command = require(`./commands/${file}`);

        if (!command.name)
            return console.log(`1 command was not loaded because of an error.`)

        bot.commands.set(command.name, {
            name: command.name,
            aliases: command.aliases,
            description: command.description,
            enabled: command.enabled,
            run: command.run
        });

        console.log(command.name + ' is ready has been saved to memory.');
    });
});




bot.once('ready', () => {
	
	console.log(`The bot has connected to Discord & logged in as ${bot.user.tag} (${bot.user.id}) 
	The bot is currently in ${bot.guilds.cache.size}.
	The bot currently has ${bot.users.cache.size} cached users.`)
});


bot.on('message', async message => {
	if (message.partial) {
        await message.fetch();
    }


    if (message.author.bot)
        return;

    if (message.channel.type === 'dm')
        return;

    let prefixes = [`<@${bot.user.id}>`, `<@!${bot.user.id}>`, '!']
    let prefixUsed;
    prefixes.forEach(p => {
        if (message.content.toLowerCase().startsWith(p)) {
            prefixUsed = p;
        }
    });

    //Handle command
    if (message.content.indexOf(prefixUsed)) return;
    let args = message.content.slice(prefixUsed.length).trim().split(/ +/g);


    let getCommandFromMessageValue = args.shift().toLowerCase();




    let command = bot.commands.find(c => {
        return c.name.toLowerCase() === getCommandFromMessageValue.toLowerCase() || c.aliases.includes(getCommandFromMessageValue.toLowerCase());
    })



    if (command) {
        try {
            if (!command.enabled)
                return message.channel.send(`This command is disabled for maintenance.`);


            command.run(bot, message, args, prefixUsed);

        } catch (error) {
            message.channel.send(`Something went wrong while running that command. Please try again later.`)
            console.log(error);

        }
        
      
    }
    
});


bot.on('voiceStateUpdate', (oldState, newState) => {
	
	// Handle each event individual voice-action
	console.log(oldState.member.user.tag + ' has updated their voice state.')
	
	// User is connecting to a voice-channel
	if (!oldState.channel && newState.channel) {
		
		bot.emit('userJoinChannel', newState, newState.member);
		
		
	}
	
	// User is moved or switches voice-channels
	if (oldState.channel && newState.channel) {
		
	}
	
	// User disconnects/is disconnected from a voice-channel
	
	if (oldState.channel && !newState.channel) {
		
	}
	
	// User is muted -> then unmutes
	if (oldState.mute === true && newState.mute === false) {
		
	}
	
	// User is unmuted -> then mutes
	
	if (oldState.mute === false && newState.mute === true) {
		
	}
	
	
	
	// User is either self defeaned/undefeaned or server defeaned/undefeaned
	if (oldState.deaf !== newState.deaf) {
		
	}
	
	// 
	
});