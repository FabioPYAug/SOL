const { SlashCommandBuilder } = require("discord.js")

var timeout = [];
const milesegundos = 5000;
const segundos = milesegundos / 1000
module.exports = {
    data: new SlashCommandBuilder()
    .setName("cooldown")
    .setDescription("Commando para colocar cooldown no código"),
    async execute (interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Este comando está em cooldown, espere ${segundos} segundos`, ephemeral: true});

        await interaction.reply({ content: `Command Cooldown test`, ephemeral: true});

        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
    }
}