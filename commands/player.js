const { SlashCommandBuilder } = require('@discordjs/builders');
const { AttachmentBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');
const Canvas = require('canvas');
const frasespath = path.join(__dirname, '..', 'comunidade', 'dinheiro.json');
function readDataFromFile(){
    if (fs.existsSync(frasespath)) {
    const JSONDADOS = fs.readFileSync(frasespath, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
const data = readDataFromFile();
const amandaid = "407937359389261858"
const alvaroid = "546734558431674369"
const diogoid = "546377246420762651"
const heloid = "1054515144950030356"
const isisid = "725490324960575570"
const kelsonid = "309439524730044448"
const otavioid = "1002730228998742067"
const vitorid = "340298478494154752"
const pauloid = "862809964401393665"
const gabrielid = "507585124624236545"
const thuanyid = "406048394650451969"

let criticos
let falhas
let derrubadas
function verificador(user){
    if(user.id == thuanyid){
        criticos = data.perfil.criticothuany
        falhas = data.perfil.falhathuany
        derrubadas = data.perfil.derrubadasthuany
    }
    if(user.id == alvaroid){
        criticos = data.perfil.criticoalvaro
        falhas = data.perfil.falhaalvaro
        derrubadas = data.perfil.derrubadasalvaro
    }
    if(user.id == amandaid){
        criticos = data.perfil.criticoamanda
        falhas = data.perfil.falhaamanda
        derrubadas = data.perfil.derrubadasamanda
    }
    if(user.id == diogoid){
        criticos = data.perfil.criticodiogo
        falhas = data.perfil.falhadiogo
        derrubadas = data.perfil.derrubadasdiogo
    }
    if(user.id == heloid){
        criticos = data.perfil.criticohelo
        falhas = data.perfil.falhahelo
        derrubadas = data.perfil.derrubadashelo
    }
    if(user.id == isisid){
        criticos = data.perfil.criticoisis
        falhas = data.perfil.falhaisis
        derrubadas = data.perfil.derrubadasisis
    }
    if(user.id == kelsonid){
        criticos = data.perfil.criticokelson
        falhas = data.perfil.falhakelson
        derrubadas = data.perfil.derrubadaskelson
    }
    if(user.id == otavioid){
        criticos = data.perfil.criticootavio
        falhas = data.perfil.falhaotavio
        derrubadas = data.perfil.derrubadasotavio
    }
    if(user.id == vitorid){
        criticos = data.perfil.criticovitor
        falhas = data.perfil.falhavitor
        derrubadas = data.perfil.derrubadasvitor
    }
    if(user.id == pauloid){
        criticos = data.perfil.criticopaulo
        falhas = data.perfil.falhapaulo
        derrubadas = data.perfil.derrubadaspaulo
    }
    if(user.id == gabrielid){
        criticos = data.perfil.criticogabriel
        falhas = data.perfil.falhagabriel
        derrubadas = data.perfil.derrubadasgabriel
    }
}
module.exports = {
    data: new SlashCommandBuilder()
        .setName('perfil')
        .setDescription('Cria uma imagem com o perfil do usuário selecionado.')
        .addUserOption(option => 
            option.setName('usuário')
                .setDescription('O usuário que deseja selecionar')
                .setRequired(true)
        ),
    async execute(interaction) {
            const user = interaction.options.getUser('usuário');
            let avatarURL = user.displayAvatarURL({ dynamic: true });
            avatarURL = avatarURL.replace(/\.(webp|gif)$/, '.png');
            criticos = 0
            falhas = 0
            derrubadas = 0
            verificador(user)
            
            const canvas = Canvas.createCanvas(800, 400);
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = '#100221';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = '#9e6c2f';
            ctx.lineWidth = 20;
            ctx.strokeRect(0, 0, canvas.width, canvas.height);

            const avatar = await Canvas.loadImage(avatarURL);
            const avatarSize = 200;
            const avatarX = 50;
            const avatarY = (canvas.height / 2) - (avatarSize / 2);
            ctx.drawImage(avatar, avatarX, avatarY, avatarSize, avatarSize);

            ctx.fillStyle = '#FFFFFF';
            ctx.font = '42px Arial';
            const titleY = 150;  
            const titleDistance = 350; 
            const numberY = 200; 
            const title2Y = 270;  
            const number2Y = 320; 
            const titles = ['Críticos', 'Falhas Críticas'];
            const positions = [titleDistance, titleDistance + 250];
            const numbers = [criticos, falhas]

            titles.forEach((title, index) => {
                const textWidth = ctx.measureText(title).width;
                const textX = positions[index] - textWidth / 2;
                ctx.fillText(title, textX, titleY);
                const number = numbers[index];
                const numberWidth = ctx.measureText(number.toString()).width;
                const numberX = positions[index] - numberWidth / 2;
                ctx.fillText(number, numberX, numberY);
            });

            const title3 = 'Quedas';
            const textWidth3 = ctx.measureText(title3).width;
            const numberWidth3 = ctx.measureText(derrubadas.toString()).width;
            
            const offset = 66;
            const textX3 = (canvas.width / 2) - (textWidth3 / 2) + offset;
            const numberX3 = (canvas.width / 2) - (numberWidth3 / 2) + offset;

            ctx.fillText(title3, textX3, title2Y);
            ctx.fillText(derrubadas, numberX3, number2Y);

            const attachment = new AttachmentBuilder(canvas.toBuffer(), { name: 'perfil-imagem.png' });
            await interaction.reply({ files: [attachment] });
        }
};
