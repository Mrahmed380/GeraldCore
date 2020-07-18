module.exports = {
	name: 'spam',
	description: 'Spams a message up to 50 times',
	usage: '/spam [count] [string]',
	class: 'Repetitive',
	execute(msg, args) {
		if (args[0] > 50){
			msg.channel.send('The maximum value for this feature is 50.');
		}else{
			var str = args[1];
			for (i = 2; i < args.length; i++) {
				var str = str + " " + args[i];
	}
	for (i = 0; i < args[0]; i++) {
		msg.channel.send(str);
	}	
	}
	console.log('\x1b[36m%s\x1b[0m', msg.member.user.tag + "> Spamming '" + str + "' " + args[0] + " times");
	},
};