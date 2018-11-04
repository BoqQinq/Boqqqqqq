client.on("message", async message => {
  var user = message.mentions.users.first() || message.author;
    if (message.content.toLowerCase() === prefix + "kullanıcıbilgim") {
        const Durum = user.presence.status;
        const Durm = (Durum == "online" ? (0x00AE86) : (Durum == "offline" ? (0x808080) : (Durum == "idle" ? (0xFFFF00) : (Durum == "dnd" ? (0xFF0000) : (0x00AE86)))))
        const durm = (Durum == "online" ? ("Çevrimiçi") : (Durum == "offline" ? ("Çevrimdışı") : (Durum == "idle" ? ("Boşta") : (Durum == "dnd" ? ("Rahatsız Etmeyin") : ("Bilinmiyor/bulunamadı.")))))
      const embed = new Discord.RichEmbed()
      .setColor(Durm)
      .addField("İsim ve ID", `${user.tag}, (${user.id})`, false)
      .addField("Kayıt Tarihi", `${user.createdAt}`, false)
      .addField("Durum", `${durm}`, false)
      .addField("Oynadığı Oyun", `${user.presence.game ? user.presence.game.name : 'Oynamıyor'}`, false)
      .addField("Bot mu?", `${user.bot ? '\n Evet' : 'Hayır'}`, false)
      .setThumbnail(user.avatarURL)
      message.channel.send(embed)
    }
});
