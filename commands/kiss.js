const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var list = [
  'https://i.imgur.com/IwH9uIR.gif',
  'https://i.imgur.com/Fpt8KfX.gif',
  'https://i.imgur.com/9rUihkG.gif'
];

var rand = list[Math.floor(Math.random() * list.length)];
let user = message.mentions.users.first() || client.users.cache.get(args[0]);
if (!user) {
return message.reply('lembre-se de mencionar um usuário válido para beijar!');
}
/*
message.channel.send(`${message.author.username} **acaba de beijar** ${user.username}! :heart:`, {files: [rand]});
*/
let avatar = message.author.displayAvatarURL({format: 'png'});
  const embed = new Discord.MessageEmbed()
        .setTitle('Love')
        .setColor('#FF0000')
        .setDescription(`${message.author} acaba de beijar ${user}`)
        .setImage(rand)
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter('Foi o meu primeiro beijo de amor...')
        .setAuthor(message.author.tag, avatar);
  await message.channel.send(embed);
  const helpMessage = args.join(); 
  message.delete().catch(O_o => {});
}