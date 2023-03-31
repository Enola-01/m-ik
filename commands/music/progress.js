module.exports = {
    name: 'progress',
    aliases: ["süre"],
    utilisation: '{prefix}progress',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const progress = queue.createProgressBar();
        const timestamp = queue.getPlayerTimestamp();

        if (timestamp.progress == 'Infinity') return message.reply(`Bu şarkı canlı yayınlanıyor, görüntülenecek süre verisi yok. 🎧`);

        message.reply(`${progress} (**${timestamp.progress}**%)`);
    },
};