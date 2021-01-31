const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.reply("Você não tem permissão para usar esse comando");
  
let user = message.mentions.users.first(756798087607091210) || client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL
  ({format: "png"});

  const embed = new Discord.MessageEmbed()
        .setTitle('Regras')
        .setColor('#FF0000')
        .setDescription('Leiam as regras para não serem banidos do servidor!\n\n**Regra 01:** `Proibido baderna no servidor`\n\n**Regra 02:** `Proibido divulgação`\n\n**Regra 03:** `Proibido ofensas`')
        .setImage('https://i.imgur.com/aKkhoDj.gif')
        .setTimestamp()
        .setThumbnail('https://i.imgur.com/tae5GpP.gif')
        .setFooter('Obrigado por compreender!')
        .setAuthor(`Atenção!  ⚠️`);
  await message.channel.send(embed);
  const helpMessage = args.join(); 
  message.delete().catch(O_o => {});
}