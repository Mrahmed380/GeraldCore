module.exports = {
	name: 'clap',
	description: 'convert text to clapback',
	usage: '/clap [string]',
	class: 'Fun',
	execute(msg, args) {
		var str = args[0];
		for (i = 1; i < args.length; i++) {
			var arg = args[i];
			var str = str + " " + arg;
		}
		str = str.replace(/ /g, ":clap:");
		msg.channel.send(str);
		msg.delete();
	},
};