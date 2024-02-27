const { Client, Intents } = require('discord.js-selfbot-v13');

module.exports = {
    description: 'Join a server using an invite link',
    run: async (client, message, handler, prefix, MyID) => {
        if (!message.guild) return message.channel.send("This command can only be used in a server.");

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        if (command !== 'join') return; // Only listen to the join command

        // Check if the user has provided an invite link
        if (!args.length) {
            return message.channel.send("Please provide a Discord invite link.");
        }

        // Extract the invite code from the link
        const inviteCode = args[0].replace(/(https?:\/\/)?discord\.gg\//, '');

        try {
            // Attempt to join the server using the invite link
            await client.acceptInvite(inviteCode);
            message.channel.send(`Successfully joined the server using invite: ${inviteCode}`);
        } catch (error) {
            // Handle errors
            if (error.code === 50013) {
                message.channel.send("I don't have permission to join that server.");
            } else if (error.code === 50007) {
                message.channel.send("You have been banned from that server.");
            } else if (error.code === 10006) {
                message.channel.send("The invite is invalid or expired.");
            } else {
                message.channel.send(`An error occurred: ${error.message}`);
            }
        }
    }
};
