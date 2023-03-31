module.exports = {
    name: 'ping',
    aliases: [],
    utilisation: '{prefix}ping',

    execute(client, message) {
        message.reply(`**${client.ws.ping}ms** 🛰️`);
    },
};