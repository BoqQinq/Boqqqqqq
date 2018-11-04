    client.on('message', async msg => {
    if (msg.content.toLowerCase() === prefix + "disko") {
   if (msg.channel.type === "dm") return;
  const rol = 'Disqo' // Rol ismi buraya
  setInterval(() => {
      msg.guild.roles.find(s => s.name === rol).setColor("RANDOM")
      }, 9000);
  }
});
