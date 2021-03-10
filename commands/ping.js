const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'ping',
	description: 'Returns the bot ping (in milliseconds)',
	aliases: ['p'],
	options: [],
	enabled: true,
	run: async (bot, message, args) => {
		
		let m = await message.channel.send(`Contacting Discord..`)
		
		let embed = new MessageEmbed()
			.setTitle(`Bot Statistics`)
			.setThumbnail(message.author.avatarURL())
			.setFooter(message.guild.name + ' voice-channel hours bot', message.guild.iconURL())
			.setColor('BLUE')
			.addField(`API Delay:`, `\`${m.createdTimestamp - message.createdTimestamp}\` **ms**`)
			.addField(`💓 Heartbeat:`, `\`${Math.floor(bot.ws.ping)}\` **ms**`)
			.addField(`# Of users being in call:`, `\`No users are being monitored at this time.\``)
			.addField(`# Of users with data:`, `\`0\``)
			
			
			m.edit(null, { embed } )
			
		
	}
}