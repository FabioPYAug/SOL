const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const path = require('path');
const fs = require('fs');

const amandaid = "407937359389261858"
const alvaroid = "546734558431674369"
const diogoid = "546377246420762651"
const fabioid = "424982351593078785"
const heloid = "1054515144950030356"
const isisid = "725490324960575570"
const kelsonid = "309439524730044448"
const otavioid = "1002730228998742067"
const vitorid = "340298478494154752"
const pauloid = "862809964401393665"
const gabrielid = "507585124624236545"

const frasespath = path.join(__dirname, '..', 'comunidade', 'dinheiro.json');
function readDataFromFile(){
    if (fs.existsSync(frasespath)) {
    const JSONDADOS = fs.readFileSync(frasespath, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
function writeDataToFile(data) {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(frasespath, jsonString, 'utf8');
}
const data = readDataFromFile();

var timeout = [];
const milesegundos = 5000;
const segundos = milesegundos / 1000
module.exports = {
    data: new SlashCommandBuilder()
        .setName('pix')
        .setDescription('Transferir Zens para um membro')
        .addIntegerOption(option =>
            option.setName('valor')
                .setDescription('Valor de Zens que transferir!')
                .setRequired(true))
        .addUserOption(option => 
            option.setName('membro')
                .setDescription('O membro a ser selecionado')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('mensagem')
                .setDescription('Mensagem extra para o membro!')
                .setRequired(false)),
    async execute (interaction) {
        function Doar(valor){
            if(memberId == fabioid){
                data.DINHEIRO.fabio = data.DINHEIRO.fabio + valor}
            if(memberId == amandaid){
                data.DINHEIRO.amanda = data.DINHEIRO.amanda + valor}
            if(memberId == alvaroid){
                data.DINHEIRO.alvaro = data.DINHEIRO.alvaro + valor}
            if(memberId == diogoid){
                data.DINHEIRO.diogo = data.DINHEIRO.diogo + valor}
            if(memberId == gabrielid){
                data.DINHEIRO.gabriel = data.DINHEIRO.gabriel + valor}
            if(memberId == heloid){
                data.DINHEIRO.heloise = data.DINHEIRO.heloise + valor}
            if(memberId == isisid){
                data.DINHEIRO.isis = data.DINHEIRO.isis + valor}
            if(memberId == kelsonid){
                data.DINHEIRO.kelson = data.DINHEIRO.kelson + valor}
            if(memberId == otavioid){
                data.DINHEIRO.otavio = data.DINHEIRO.otavio + valor}
            if(memberId == pauloid){
                data.DINHEIRO.paulo = data.DINHEIRO.paulo + valor}
            if(memberId == vitorid){
                data.DINHEIRO.vitor = data.DINHEIRO.vitor + valor}
        }
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Este comando está em cooldown, espere ${segundos} segundos`, ephemeral: true});
        const user = interaction.member;
        const userId = user.id;
        const member = interaction.options.getMember('membro');
        const memberId = member.id;
        const NomeMembro = member.user.username;
        var valorint = interaction.options.getInteger('valor');

        if(userId == fabioid){
            data.DINHEIRO.fabio = data.DINHEIRO.fabio - valorint
            Doar(valorint)}
        if(userId == amandaid){
            data.DINHEIRO.amanda = data.DINHEIRO.amanda - valorint
            Doar(valorint)}
        if(userId == alvaroid){
            data.DINHEIRO.alvaro = data.DINHEIRO.alvaro - valorint
            Doar(valorint)}
        if(userId == diogoid){
            data.DINHEIRO.diogo = data.DINHEIRO.diogo - valorint
            Doar(valorint)}
        if(userId == gabrielid){
            data.DINHEIRO.gabriel = data.DINHEIRO.gabriel - valorint
            Doar(valorint)}
        if(userId == heloid){
            data.DINHEIRO.heloise = data.DINHEIRO.heloise - valorint
            Doar(valorint)}
        if(userId == isisid){
            data.DINHEIRO.isis = data.DINHEIRO.isis - valorint
            Doar(valorint)}
        if(userId == kelsonid){
            data.DINHEIRO.kelson = data.DINHEIRO.kelson - valorint
            Doar(valorint)}
        if(userId == otavioid){
            data.DINHEIRO.otavio = data.DINHEIRO.otavio - valorint}
        if(userId == pauloid){
            data.DINHEIRO.paulo = data.DINHEIRO.paulo - valorint
            Doar(valorint)}
        if(userId == vitorid){
            data.DINHEIRO.vitor = data.DINHEIRO.vitor - valorint
            Doar(valorint)}

        await interaction.reply({content:`Pix enviado com sucesso!`, ephemeral: true});
        writeDataToFile(data);
        const nickname2 = member.nickname ? member.nickname : member.user.username; // Nickname do membro
        const nickname = user.nickname ? user.nickname : user.user.username; // Nickname do autor
        const mensagem = interaction.options.getString('mensagem') || 'Sem mensagem adicional';
        const comprovante = new EmbedBuilder()
            .setTitle("Comprovante")
            .setAuthor({ name: "Banco de Zoystea"})
            .setDescription(`PIX REALIZADO NO VALOR DE ${valorint} ZENS\n\n----------------------------------\n\nPagador: ${nickname}\nPara: ${nickname2}\n\n${mensagem}`)
            .setTimestamp()

        await user.send({embeds: [comprovante]})
        await member.send({embeds: [comprovante]})


        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
    }
}