module.exports = {
	name: 'changename',
	description: 'Changes your nickname',
	usage:'/changename [name]',
	class: 'Useful',
	execute(msg, args) {
		var str = args[0];
		for (i = 1; i < args.length; i++) {
			var str = str + " " + args[i];
		}	
		msg.member.setNickname(str);
	},
};