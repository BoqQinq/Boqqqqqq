client.on('message', msg => {
if (msg.content.toLowerCase() === prefix + "sigara") {
msg.channel.send('🚬 ☁:cloud:☁')
.then(nmsg => nmsg.edit('🚬 ☁:cloud:☁'))
.then(nmsg => nmsg.edit('🚬 ☁:cloud:'))
.then(nmsg => nmsg.edit('🚬 ☁'))
.then(nmsg => nmsg.edit('**Sigaram bitti** | **Sigara İçmeyiniz.** 🚭 **Sigara Sağlığa Zararlıdır**'));
}
});
