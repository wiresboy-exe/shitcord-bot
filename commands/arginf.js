module.exports = {
	name: 'arginf',
	description: 'Return info about the arguments passed.',
	args: true,
	aliases: ['ai', 'args-info'],
	execute(message, args) {
		if (args[0] === 'foo') {
			return message.channel.send('bar');}
		message.channel.send(`Arguments: ${args}\nArguments length: ${args.length}`);
	},
};