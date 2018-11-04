client.on("message", msg => {

    const kufur = ["discordapp", ".com", ".net", ".xyz", ".tk", "gulu", ".pw", ".io", ".me", ".gg", "www.", "https", "http", ".gl"];
    if (kufur.some(word => msg.content.includes(word)) ) {
        msg.delete()
        msg.reply("Reklam yapma krdşm")
    }
});
