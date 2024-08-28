const { SlashCommandBuilder } = require("discord.js")
const fs = require('fs');
const path = require('path');

var timeout = [];
const milesegundos = 86400000;
const segundos = milesegundos / 3600000

const dadospath = path.join(__dirname, '..', 'comunidade', 'dados.json');
function readDataFromFile(){
    if (fs.existsSync(dadospath)) {
    const JSONDADOS = fs.readFileSync(dadospath, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
function writeDataToFile(data) {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(dadospath, jsonString, 'utf8');
}
const data = readDataFromFile();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("glória")
        .setDescription("Glória ao Sol!"),

    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Este comando só pode ser usado uma vez a cada ${segundos} horas!`, ephemeral: true});
        data.usosgeral.gloria++
        writeDataToFile(data);
        await interaction.reply("# Glória ao Sol!!")
        const nomenormal = "Sol"
        const avatarnormal = 'https://images2.imgbox.com/df/e9/DcGo6iIv_o.png'; 
        interaction.client.user.setAvatar(avatarnormal);
        interaction.client.user.setUsername(nomenormal);

        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
    }
}