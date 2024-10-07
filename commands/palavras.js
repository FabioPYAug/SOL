const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const fs = require('fs');
const path = require('path');

var timeout = [];
const milesegundos = 60000;
const segundos = milesegundos / 60000

const palavraspath = path.join(__dirname, '..', 'comunidade', 'palavras.json');
function readDataFromFile(){
    if (fs.existsSync(palavraspath)) {
    const JSONDADOS = fs.readFileSync(palavraspath, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
function writeDataToFile(data) {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(palavraspath, jsonString, 'utf8');
}
const data = readDataFromFile();

module.exports = {
    data: new SlashCommandBuilder()
        .setName("palavras")
        .setDescription("Saber a quantidade de palavras importantes no Bot!"),

    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Este comando só pode ser usado uma vez a cada ${segundos} horas!`, ephemeral: true});
        let palavrasmaxOr = (data.ORDEM).length
        let palavrasatOr = data.ordemvalor

        let palavrasmaxNE = (data.NOITEESCURA).length
        let palavrasatNE = data.noitevalor
        const comprovante = new EmbedBuilder()
            .setTitle("PALAVRAS IMPORTANTES")
            .setAuthor({ name: "Quantidade"})
            .setDescription(`Universo de Ordem: ${palavrasatOr}/${palavrasmaxOr}\nUniverso de Noite Escura: ${palavrasatNE}/${palavrasmaxNE}`)
        interaction.reply({embeds: [comprovante]})


        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
    }
}