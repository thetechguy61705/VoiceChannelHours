module.exports = {
	name: 'CommandTemplate',
	description: 'The template the developer uses to create slash commands.',
	enabled: true,
	aliases: [],
	run: async (bot, message, args) => {
		
		message.channel.send(`Looks like you've stumbled upon a developer tool!`)
		
		
	}
}