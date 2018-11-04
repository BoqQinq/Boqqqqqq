const Discord = require('discord.js');
const client = new Discord.Client();
const { stripIndents } = require('common-tags');
const ayarlar = require('../ayarlar.json');

const { stripUndents } = require("common-tags")
exports.run = (client, message) => {
                    if (message.guild) {
			var embed = new Discord.RichEmbed()
			.setTitle('Yenilikler')
			.setDescription(stripIndents`
			**Surum 1.0.1**

			> Tas,kağıt,makas komutu eklendi. _kullanmak icin \`d!tkm\`_
			> StarWars komutu eklendi. _kullanmak icin \`d!starwars\`_
			> Sustur komutu eklendi. _kullanmak icin \`d!sustur\`_
			> SusturAc komutu eklendi. _kullanmak icin \`d!susturaç\`_
		        > Rol-Ver komutu eklendi. _kullanmak icin \`d!rol-ver\`_
			> Yapımcı Komutueklendi. _kullanmak icin \`d!yapımcı\`_
			> Yardımın Yeni görünümü eklendi. _kullanmak icin \`d!yardım\`_
			> Ascii komutu eklendi. _kullanmak icin \`d!ascii\`_
			> Afk Ve Geldim Komutu eklendi. _kullanmak icin \`d!afk - d!geldim\`_
			> Rol-Ver komutu eklendi._kullanmak icin \`d!rol-ver\`_
			> Sunucudaki roller gösterir _kullanmak icin \`d!roller\`_
			> Destek Sunucusnda Oda Açar Ve ekibe yazarsın! _kullanmak icin \`d!talep\`_
			> Skywars komutu eklendi. _kullanmak icin \`d!skywars\`_
			> Reklam-Tara Komutu eklendi. _kullanmak icin \`d!reklamtara\`_
			> SOR Bota Soru Sorarsınız Komutu Eklendi. _kullanmak icin \`d!sor\`_
			> Söv Komutu Eklendi. _kullanmak icin \`d!söv\`_
			> Yazı-Tura Komutu Eklendi. _kullanmak icin \`d!yazı-tura\`_
			> ÇekilişYap Komutu Eklendi. _kullanmak icin \`d!çekilişyap\`_
			> Fotografınıza Wasted Yazısı EKLER! Eklendi. _kullanmak icin \`d!wasted\`_
			> MesajKucultucu Komutu Eklendi. _kullanmak icin \`d!mesajküçült\`_
			> Polis Çağırma Komutu Eklendi. _kullanmak icin \`d!polisçağır\`_
			> Chata SlowMod Eklersiniz! Eklendi. _kullanmak icin \`d!yavaş-mod\`_
			> Stres Çarkınızın Hızını Hesaplar Komutu Eklendi. _kullanmak icin \`d!stresçarkı\`_
			> Soğukmatik Espiriler Yapar Eklendi. _kullanmak icin \`d!espiri\`_
			> Soğukmatik Espiriler Yapar Eklendi. _kullanmak icin \`d!espirii\`_
			> Soğukmatik Espiriler Yapar Eklendi. _kullanmak icin \`d!espiriii\`_

			Komutlari gormek icin \`d!yardim\`
			`)
			.setColor('GREEN');
			return message.channel.send({embed});
		}

		var embed = new Discord.RichEmbed()
		.setTitle('Yenilikler')
		.setDescription(stripIndents`
			**Surum 1.0.1**

			> Tas,kağıt,makas komutu eklendi. _kullanmak icin \`d!tkm\`_
			> StarWars komutu eklendi. _kullanmak icin \`d!starwars\`_
			> Sustur komutu eklendi. _kullanmak icin \`d!sustur\`_
			> SusturAc komutu eklendi. _kullanmak icin \`d!susturaç\`_
		        > Rol-Ver komutu eklendi. _kullanmak icin \`d!rol-ver\`_
			> Yapımcı Komutueklendi. _kullanmak icin \`d!yapımcı\`_
			> Yardımın Yeni görünümü eklendi. _kullanmak icin \`d!yardım\`_
			> Ascii komutu eklendi. _kullanmak icin \`d!ascii\`_
			> Afk Ve Geldim Komutu eklendi. _kullanmak icin \`d!afk - d!geldim\`_
			> Rol-Ver komutu eklendi._kullanmak icin \`d!rol-ver\`_
			> Sunucudaki roller gösterir _kullanmak icin \`d!roller\`_
			> Destek Sunucusnda Oda Açar Ve ekibe yazarsın! _kullanmak icin \`d!talep\`_
			> Skywars komutu eklendi. _kullanmak icin \`d!skywars\`_
			> Reklam-Tara Komutu eklendi. _kullanmak icin \`d!reklamtara\`_
			> SOR Bota Soru Sorarsınız Komutu Eklendi. _kullanmak icin \`d!sor\`_
			> Söv Komutu Eklendi. _kullanmak icin \`d!söv\`_
			> Yazı-Tura Komutu Eklendi. _kullanmak icin \`d!yazı-tura\`_
			> ÇekilişYap Komutu Eklendi. _kullanmak icin \`d!çekilişyap\`_
			> Fotografınıza Wasted Yazısı EKLER! Eklendi. _kullanmak icin \`d!wasted\`_
			> MesajKucultucu Komutu Eklendi. _kullanmak icin \`d!mesajküçült\`_
			> Polis Çağırma Komutu Eklendi. _kullanmak icin \`d!polisçağır\`_
			> Chata SlowMod Eklersiniz! Eklendi. _kullanmak icin \`d!yavaş-mod\`_
			> Stres Çarkınızın Hızını Hesaplar Komutu Eklendi. _kullanmak icin \`d!stresçarkı\`_
			> Soğukmatik Espiriler Yapar Eklendi. _kullanmak icin \`d!espiri\`_
			> Soğukmatik Espiriler Yapar Eklendi. _kullanmak icin \`d!espirii\`_
			> Soğukmatik Espiriler Yapar Eklendi. _kullanmak icin \`d!espiriii\`_

			Komutlari gormek icin \`d!yardim\`
			`)
			.setColor('GREEN');

		return message.channel.send({embed});
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yenilikler',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'bilgi'
};
