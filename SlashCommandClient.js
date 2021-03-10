const Axios = require('axios');

module.exports = class SlashCommandClient {
	constructor (token, discordClientID) {
		
		if (!token || !discordClientID || typeof token !== 'string' || typeof discordClientID !== 'string') {
			console.log('Exiting process because the initiated slash command client was missing an argument/the argyment was not a string. Expected a TOKEN and a DISCORDCLIENTID')
			process.exit();
		}
		
		this.clientToken = token;
		this.discordClientID = discordClientID;
	}
}