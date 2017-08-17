const Discord = require('discord.js');
const client = new Discord.Client();
client.login(process.env.TOKEN);

client.on('ready',() => {
	console.log('I am Online');
	client.user.setGame("Various hacks in this server.");	
});

client.on('guildMemberAdd', member => {
  member.guild.channels.get("339785028055597058").send(`Welcome ${member}, We hope you will have a great time here at **${member.guild.name}**`);
});

client.on('guildMemberRemove', member => {
  member.guild.channels.get("339785028055597058").send(`**${member.user.tag}** just left **${member.guild.name}**`);
});

process.on("unhandledRejection", err => {
    console.log(err.stack);
});
 client.on('error', (e) => console.error(e));
 client.on('warn', (e) => console.warn(e));
 client.on('debug', (e) => console.info(e));
