const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.sendEmbed(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.RichEmbed()
    .setAuthor(message.author.username + `  OrtaParmahhh Yehhh`)
    .setColor("#D2D2D2")
    .setDescription('')
  .setImage(`https://images-ext-2.discordapp.net/external/d-QM81zaQpGZAC1TJOM_BkvgvxdsQAeWxig3IyQ2_eI/https/img-s2.onedio.com/id-571d7e82d12fbe2b6494cd3b/rev-0/w-500/s-aeb4761f4d7ccc7cf294898a03c27167bb395f73.gif`)
  .setFooter('Darq* | dbot.rf.gd', client.user.avatarURL)
  .setTimestamp()
    return message.channel.sendEmbed(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ortaparmak'],
  permLevel: 0
};

exports.help = {
  name: 'ortaparmak',
  description: 'OrtaParmak Gifi Atar!',
  usage: 'ortaparmak'
};
