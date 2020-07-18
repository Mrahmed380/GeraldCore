//REQUIREMENTS AND BASIC INITIALISATION
const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, activity, version, admins, ignoredChannels, blacklist, botName } = require('./config.json');
const { username, messageCount } = require("./userstat.json");
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
//COMMAND INITIALISER
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
	console.log("Loaded command: "+command.name);
}
console.log("Logging in...");
//READY STATE IDENTIFIER
client.on('ready', () => {
 console.log(`Logged in as ${client.user.tag}!`);
 client.user.setActivity(activity);
 console.log("Playing " + activity);
 console.log("GeraldCore Version: V" + version);
});
//MESSAGE HANDLER
client.on('message', message => {
	//MESSAGE RANK SYSTEM
	//ADD NEW USERS
	if(!username.includes(message.author.id)){
		username.push(message.author.id);
		messageCount.push("0");
		var data = {"username" : username, "messageCount" : messageCount};
		fs.writeFile("./userstat.json", JSON.stringify(data), (err) => {
			if (err) {
				console.error(err);
				return;
			};
		});
	}	
	//INCREMENT MESSAGE COUNTER
	var pos = username.indexOf(message.author.id);
	messageCount[pos]++;
	var data = {"username" : username,"messageCount" : messageCount};
		fs.writeFile("./userstat.json", JSON.stringify(data), (err) => {
			if (err) {
				console.error(err);
				return;
			};
		});
	//CHANNEL IGNORER MODULE
	if (!ignoredChannels.includes(message.channel.id)){
		var d = new Date();
		var DateTime;
		dateTime = (d.getDate() + "/" + (d.getMonth()+1) + "/" + d.getFullYear() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());	
		//PHOTO/VIDEO LOG
		try {
			if (message.content === ""){		
				console.log('\x1b[35m%s\x1b[0m',dateTime + "> " + message.guild.name + "> " + message.channel.name + "> " + message.member.user.tag + ": (photo/video)");
			}
			//REGULAR MESSAGE LOG	
			else{
				if (message.author.bot){
					console.log('\x1b[32m%s\x1b[0m',dateTime + "> " + message.guild.name + "> " + message.channel.name + "> " + message.member.user.tag + ": " + message.content);
				}else{
					console.log('\x1b[33m%s\x1b[0m',dateTime + "> " + message.guild.name + "> " + message.channel.name + "> " + message.member.user.tag + ": " + message.content);	
				}
			}
		} catch {
		}	
		//COMMAND IDENTIFIER
		if (!message.content.startsWith(prefix) || message.author.bot) return;
		const args = message.content.slice(prefix.length).split(/ +/);
		const command = args.shift().toLowerCase();
		//BLACKLIST
		if(!blacklist.includes(message.member.user.tag)){
		//COMMAND PARSER
		if (!client.commands.has(command)){console.log('Command Not Found'); message.channel.send("Processing error: Command Not Found"); return;}
			try {
				client.commands.get(command).execute(message, args, client);
			} catch (error) {
				console.error(error);
				message.channel.send('Processing error: Check Logs For Details');
			}
		} else {
			message.channel.send("You have been blacklisted. You may not access " + botName + " commands");
		}
	}
});
//LOGIN
client.login(token);