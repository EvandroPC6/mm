const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.reply(
      "você não tem permissão de usar esse comando!"
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount <1 || deleteCount >99)
    return message.reply(
      "escreva um número de até **99 mensagens** a serem apagadas!"
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`**${args[0]} mensagens apagadas nesse chat!**`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};