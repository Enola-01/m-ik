module.exports = {
    name: 'back',
    aliases: ['geri'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.reply(`${message.author}, Şu anda çalan müzik yok! ❌`);

        if (!queue.previousTracks[1]) return message.reply(`${message.author}, Zaten daha önce müzik çalmıyordu. ❌`);

        await queue.back();

        message.reply(`Bir önceki müzik çalmaya başladı... ✅`);
    },
};