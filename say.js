module.exports = {
	name: 'say',
	description: 'Sends a text message',
	usage: '/say [string]',
	class: 'Fun',
	execute(msg, args) {
		var str = args[0];
		for (i = 1; i < args.length; i++) {
			var str = str + " " + args[i];
		}	
	msg.channel.send(str);
	msg.delete();
	},
};