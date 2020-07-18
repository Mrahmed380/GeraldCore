module.exports = {
    name: 'clear',
    description: 'Clears messages (2-100)',
    usage: '/clear',
    class: 'Useful',
    execute(msg, args) {
        var messageCount = parseInt(args[0], 10);
        msg.channel.bulkDelete(messageCount).then(() => {
             msg.channel.send("Deleted " + messageCount + " messages");
        });
    },
};