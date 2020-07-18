module.exports = {
	name: 'speak',
	description: 'Sends a TTS message',
	usage: '/speak [string]',
	class: 'Fun',
	execute(msg, args) {
		var str = args[0];
		for (i = 1; i < args.length; i++) {
			var str = str + " " + args[i];
		}
		msg.channel.send(str, { tts: true})	
		msg.delete();
	},
};