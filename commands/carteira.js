const { SlashCommandBuilder, EmbedBuilder } = require('@discordjs/builders');
const { AttachmentBuilder } = require('discord.js');
const Canvas = require('canvas');
const path = require('path');
const fs = require('fs');

const timeout = [];
const milesegundos = 5000;
const segundos = milesegundos / 1000;

const frasespath = path.join(__dirname, '..', 'comunidade', 'dinheiro.json');
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
const thuanyId = "406048394650451969"

module.exports = {
    data: new SlashCommandBuilder()
        .setName('carteira')
        .setDescription('Verificador da quantidade de Zen!'),

    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) {
            return await interaction.reply({ content: `Este comando está em cooldown, espere ${segundos} segundos`, ephemeral: true });
        }
            const user = interaction.user;
            function readDataFromFile(){
                if (fs.existsSync(frasespath)) {
                const JSONDADOS = fs.readFileSync(frasespath, 'utf8');
                return JSON.parse(JSONDADOS);
                }
            }
            const data = readDataFromFile();
            const canvas = Canvas.createCanvas(700, 250);
            const context = canvas.getContext('2d');

            // Desenha o fundo
            context.fillStyle = '#210d00';
            context.fillRect(0, 0, canvas.width, canvas.height);

            context.lineWidth = 50;
            context.strokeStyle = '#1a0803';
            context.strokeRect(0, 0, canvas.width, canvas.height);

            // Adiciona o quadrado cinza ao lado esquerdo
            const squareWidth = canvas.width * 0.4;
            context.fillStyle = '#d3d3d3';
            context.fillRect(0, 0, squareWidth, canvas.height);
            
            //QUADRADO MARROM DO LADO
            const rightRectWidth = canvas.width * 0.2;
            const rightRectHeight = canvas.height * 0.5;
            const rightRectX = canvas.width - rightRectWidth;
            const rightRectY = 0;
            context.fillStyle = '#6e1f08';
            context.fillRect(rightRectX, rightRectY, rightRectWidth, rightRectHeight);

            context.lineWidth = 4;
            context.strokeStyle = '#000000';
            context.strokeRect(rightRectX, rightRectY, rightRectWidth, rightRectHeight);

            // Desenha o círculo dourado no final do retângulo
            const circleRadius = 25;
            const circleX = rightRectX + (rightRectWidth / 2);
            const circleY = rightRectY + rightRectHeight;
            context.beginPath();
            context.arc(circleX, circleY, circleRadius, 0, Math.PI * 2);
            context.fillStyle = '#ffd700';
            context.fill();
            context.closePath();

            context.lineWidth = 10;
            context.strokeStyle = '#000000';
            context.beginPath();
            context.moveTo(squareWidth, 0);
            context.lineTo(squareWidth, canvas.height);
            context.stroke();
            
            // Adiciona uma borda preta entre o quadrado cinza e o fundo marrom
            context.lineWidth = 10;
            context.strokeStyle = '#000000';
            context.beginPath();
            context.moveTo(squareWidth, 0);
            context.lineTo(squareWidth, canvas.height);
            context.stroke();

            // Borda preta ao redor do canvas
            context.lineWidth = 14;
            context.strokeStyle = '#000000';
            context.strokeRect(0, 0, canvas.width, canvas.height);

            // Ajusta o tamanho do texto baseado na largura do quadrado cinza
            const fontSize = Math.floor(squareWidth / 8);
            context.font = `bold ${fontSize}px sans-serif`; 

            // Define a cor do texto
            context.fillStyle = '#000000';

            // Texto a ser exibido (nome do usuário)
            const text = interaction.user.username;

            // Mede a largura do texto
            const textWidth = context.measureText(text).width;

            // Calcula a posição do texto para centralizá-lo horizontalmente
            const textX = (squareWidth - textWidth) / 2;
            const textY = 30 + fontSize;

            // Desenha o texto centralizado no quadrado cinza
            context.fillText(text, textX, textY);

            // Carrega a imagem
            const imageUrl = 'https://images2.imgbox.com/9c/0f/9Lbx3qWT_o.png';
            const image = await Canvas.loadImage(imageUrl);

            // Calcula a posição para centralizar a imagem no quadrado cinza
            const imageWidth = squareWidth * 0.6;
            const imageHeight = image.height * (imageWidth / image.width);
            const imageX = (squareWidth - imageWidth) / 2;
            const imageY = textY + 10;

            // Desenha a imagem no canvas
            context.drawImage(image, imageX, imageY, imageWidth, imageHeight);

            // Desenha um quadrado abaixo do texto "DINHEIRO"
            const brownText = "DINHEIRO";
            context.font = 'bold 40px sans-serif';
            const brownTextWidth = context.measureText(brownText).width;
            const brownTextX = squareWidth + ((canvas.width - squareWidth - brownTextWidth) * 0.16);
            const brownTextY = canvas.height * 0.3;

            // Desenha o quadrado primeiro
            const rectX = brownTextX - 10;
            const rectY = brownTextY - 35; 
            const rectWidth = brownTextWidth + 20;
            const rectHeight = 40;
            context.fillStyle = '#ffffff'; 
            context.fillRect(rectX, rectY, rectWidth, rectHeight);

            // Desenha o texto por cima do quadrado
            context.fillStyle = '#000000';
            context.fillText(brownText, brownTextX, brownTextY);

            // Gera um número aleatório entre 1 e 1 milhão
            var dinheiro = 0
            var userId = user.id
            if(userId == fabioid){dinheiro = data.DINHEIRO.fabio}
            if(userId == amandaid){dinheiro = data.DINHEIRO.amanda}
            if(userId == alvaroid){dinheiro = data.DINHEIRO.alvaro}
            if(userId == diogoid){dinheiro = data.DINHEIRO.diogo}
            if(userId == gabrielid){dinheiro = data.DINHEIRO.gabriel}
            if(userId == heloid){dinheiro = data.DINHEIRO.heloise}
            if(userId == isisid){dinheiro = data.DINHEIRO.isis}
            if(userId == kelsonid){dinheiro = data.DINHEIRO.kelson}
            if(userId == otavioid){dinheiro = data.DINHEIRO.otavio}
            if(userId == pauloid){dinheiro = data.DINHEIRO.paulo}
            if(userId == vitorid){dinheiro = data.DINHEIRO.vitor}
            if(userId == thuanyId){dinheiro = data.DINHEIRO.thuany}

            // Desenha o número aleatório abaixo do texto "DINHEIRO"
            const numberText = dinheiro.toLocaleString();
            const numberTextWidth = context.measureText(numberText).width;
            const numberTextX = squareWidth + ((canvas.width - squareWidth - numberTextWidth) * 0.1);
            const numberTextY = brownTextY + 50;
            context.fillStyle = '#ffffff';
            context.fillText(numberText, numberTextX, numberTextY);
            const attachment = new AttachmentBuilder(canvas.toBuffer(), { name: 'canvas-image.png' });
            await interaction.reply({ files: [attachment], ephemeral: true });

            timeout.push(interaction.user.id);
            setTimeout(() => {
                const index = timeout.indexOf(interaction.user.id);
                if (index > -1) {
                    timeout.splice(index, 1);
                }
        }, milesegundos);
    }
};