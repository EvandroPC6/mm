const Discord = require('discord.js');

exports.run = async (client, message, args) => {

if (!message.member.hasPermission("MANAGE_MESSAGES"))
  return message.reply("Você não tem permissão para usar esse comando");

let user = message.mentions.users.first(756798087607091210) || client.users.cache.get(args[0]);

let avatar = message.author.displayAvatarURL
  ({format: "png"});
  const embed = new Discord.MessageEmbed()
        .setTitle('Comandos')
        .setColor('#FF0000')
        .setDescription('\n`Mscoins:` (Cara / Coroa)\n\n`Mssay:` (Escrever uma mensagem) \n\n`Msideia:` (Escreva uma sugestão)\n\n`Msclear:` (Apaga a mensagem de 1 / 99)\n\n`Msavatar:` (Mencionar um usuário)\n\n`Mskiss:` (Mencionar um usuário)\n\n`Msraid:` (On / Off)\n\n`Msrule:` (Regras)\n\n')
        .setTimestamp();
  await message.channel.send(embed);
  const helpMessage = args.join(); 
  message.delete().catch(O_o => {});
}