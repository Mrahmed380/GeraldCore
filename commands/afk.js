module.exports = {
	name: 'afk',
	description: 'Set an afk status',
	usage: '/commandName [args]',
	class: 'Useful',
	execute(msg, args, client) {
        if(!args){
            msg.channel.send("You must supply a status");
        } else {
            var str = args.join(" ");
            msg.member.setPresence(str);
        }
        
		
	},
};