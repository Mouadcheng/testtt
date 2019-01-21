const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "*";
client.on("message", message => {

  let args = message.content.slice(3);
  if(message.content.startsWith(prefix + 'bc')) {
    if(!message.guild.members.get(message.author.id).hasPermission('ADMINISTRATOR')) return message.channel.send('Required Administrator Permission')
       message.guild.members.forEach(m => {
      
      m.send(args.replace('[user]', m).replace('[server]', m.guild.name).replace('[sender]', message.author.username))
    })
  }
})
});


client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Desert Bot- Script By : i1Suhaib`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`*bc | Just Mind`,"http://twitch.tv/S-F")
client.user.setStatus("dnd")
});



client.login("NTM2ODg4NTI2Mzk5MjA5NDc0.DydQuQ.1izUlp6kLEqldnPDuA3QekAi2zs");