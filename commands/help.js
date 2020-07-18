const { prefix, version, botName, color } = require('../config.json');
const Discord = require("discord.js");
module.exports = {
	name: 'help',
	description: 'List all commands or info about a specific command.',
	usage: '/help [command] or /help',
	class: 'Useful',
	cooldown: 5,
	execute(msg, args, client) {
		const iconURL = client.user.avatarURL();
		const data = [];
		const { commands } = msg.client;
		var total = commands.map(command=> command.name);
		var useful = commands.map(command=> {if (command.class === "Useful"){return command.name} else {return ""}});
		useful = useful.filter(function (el) {
			return el != "";
		  });
		  var fun = commands.map(command=> {if (command.class === "Fun"){return command.name} else {return ""}});
		fun = fun.filter(function (el) {
			return el != "";
		  });
		  var repetitive = commands.map(command=> {if (command.class === "Repetitive"){return command.name} else {return ""}});
		repetitive = repetitive.filter(function (el) {
			return el != "";
		  });
		  var nsfw = commands.map(command=> {if (command.class === "NSFW"){return command.name} else {return ""}});
		nsfw = nsfw.filter(function (el) {
			return el != "";
		  });

		if (!args.length) {
			const helpEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setURL('https://discord.js.org/')
			.setThumbnail(iconURL)
			.setTitle(botName + ' Help')
			.addField('Useful', useful, true)
			.addField('Fun', fun, true)
			.addField('Repetitive', repetitive, true)
			.addField('NSFW', nsfw, true)
			.addField('Further Help', prefix + 'help [command]', true)
			.addField("Current Command Count: ", total.length)
			.setFooter(botName +  ' - V' + version, iconURL)
		msg.channel.send(helpEmbed);
		return;
		}
		
		const name = args[0].toLowerCase();
		const command = commands.get(name);

		if (!command) {
			return msg.channel.send('Command not found');
		}

		const helpEmbed = new Discord.MessageEmbed()
			.setColor(color)
			.setURL('https://discord.js.org/')
			.setThumbnail(iconURL)
			.setTitle(botName + ' Help')
			.addField('Command', command.name, true)
			.addField('Description', command.description, true)
			.addField('Usage', command.usage, true)
			.addField('Class: ', command.class)
			.setFooter(botName +  ' - V' + version, iconURL)
		msg.channel.send(helpEmbed);
	},
};