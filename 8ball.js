module.exports = {
	name: '8ball',
	description: 'Ask Gerald a question and he will answer',
    usage: '/8ball [question]',
    class: 'Fun',
	execute(msg, args) {
        var replies = ["Yes","No","Not a chance","Absolutely","Absolutely not","Without a shadow of a doubt","You wish"];
        function getRandomInt(max) {
			return Math.floor(Math.random() * Math.floor(max));
		  };
          reply = getRandomInt(replies.length);	
          if (!args){
              msg.channel.send("You must ask a question");
          }	else {
              msg.channel.send(replies[reply]);
          }
	},
};