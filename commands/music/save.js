module.exports = {
    name: 'save',
    aliases: ['kaydet'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        message.author.send(`Kaydedilen parça: **${queue.current.title}** | ${queue.current.author}, Kaydedilen sunucu: **${message.guild.name}** ✅`).then(() => {
            message.reply(`Müziğin adını özel mesajla gönderdim. ✅`);
        }).catch(error => {
            message.reply(`${message.author}, Size özel mesaj gönderilemiyor. ❌`);
        });
    },
};