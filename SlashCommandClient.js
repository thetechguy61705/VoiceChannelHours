const Axios = require('axios');

/**
 * @property {string} The Bot Token from the Discord Deloper portal. Used to make the request to Discord for commands.
 * @property {string} The Client ID of the application running the bot. Used to make the client request to save commands.
*/

module.exports = class SlashCommandClient {
	constructor (token, discordClientID) {
		
		if (!token || !discordClientID || typeof token !== 'string' || typeof discordClientID !== 'string') {
			console.log('Exiting process because the initiated slash command client was missing an argument/the argyment was not a string. Expected a TOKEN and a DISCORDCLIENTID')
			process.exit();
		}
		
		this.clientToken = token;
		this.discordClientID = discordClientID;
	}
	
	
	/**
	 * @typedef options 
	*/
	
	async createSlashCommand(options = {}) {
		return new Promise((resolve, reject) => {
			
		});
	}
	
	async getCommand () {
		return new Promise((resolve, reject) => {
			
		});
		
	}
	
	
}