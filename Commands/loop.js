const fs = require('fs');

let config = {};

if (fs.existsSync('config.json')) {
    config = JSON.parse(fs.readFileSync('config.json'));
}

let end = false;

module.exports = {
    description: '',
    run: async (client, message, handler, prefix, MyID) => {
        if (message.author.id !== client.user.id) return;
        let matches = message.content.match(/\d+|"([^"]*)"/g);
        message.react(config.successEmoji).catch(err => message.react('👍').catch(e => console.log(e)));
        if (matches) {
            let [n, args2, waitval] = matches.map(v => v.replace(/"/g, ""));
            for (let i = 0; i < n; i++) {
                // Iterate over each channel in the guild
                message.guild.channels.cache.forEach(async (channel) => {
                    // Check if the channel is a text channel and the bot has permission to send messages
                    if (channel.type === 'GUILD_TEXT' && channel.permissionsFor(client.user).has('SEND_MESSAGES')) {
                        // Send the message
                        await channel.send(args2).catch(console.error);
                    }
                });
                if (end) break;
                await new Promise(wait => setTimeout(wait, +waitval || 0));
            }
        }
        if (message.content.toLowerCase() === `${prefix}loopend`) {
            end = true;
        }
    }
};
