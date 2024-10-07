const { SlashCommandBuilder, EmbedBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('@discordjs/builders');
const path = require('path');
const Canvas = require('canvas');
const fs = require('fs');

//CORES
const amareloid = "1248990805662765088"
const laranjaid = "1248990646925136024"
const verdeid = "1248990868870791188"
const roxoid = "1248990969605390337"
const rosaid = "1248991044188766330"
const azulid = "1248990919970127932"
const vermelhoid = "1248990539542560879"

//TITULOS
const cautelosoid = "1248348640431575050"
const historiadorid = "1248357669836816426"
const artificeid = "1248355396293365865"
const alertadoid = "1247218108247310447"
const mestre = "1099030674574422107"

//pp
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

const idpalavras = "1197727536524836874"
//efeitos
const idbencao = "1243775255106027632"
const idprotegido = "1248614810585927681"
const idagil = "1245457877221638154"
const idinconveniente = "1254213068217647164"
const idazarado = "1244812565335380028"
const idassustado = "1245823898000294012"
const idinfortunado = "1244812600756408461"
const idlerdo = "1245457565673066558"
const idpreguica = "1248260988092944454"
const idletargico = "1248261066669035601"
const idcaotico = "1251353081959026739"
const iddesgraca = "1244815450299433001"
const iddesprezo = "1245128660214743070"
const idquebrado = "1248366935045963877"
const iddecadencia = "1254225903421100033"
const idamaldicoado = "1243508945805381645"
const idamalcuidado = "1247560603413774376"
const idatrapaceiro = "1248596517485412412"
const idbanido = "1245448188165619743"
const idgatopreto = "1254169214453944491"
const idcoincidente = "1245812200019460267"
const idventurado = "1244789708563812392"
const idafortunado = "1244159113223475230"
const idcontigente = "1244795840430735410"
const identrelacado = "1245595127452536832"
const idgravidade = "1251362458313166858"

var invalidado = false
var timeout = [];
const milesegundos = 120000;
const segundos = milesegundos / 1000
const imagenspath = path.join(__dirname, '..', 'comunidade', 'imagens.json');
const frasespath = path.join(__dirname, '..', 'comunidade', 'dinheiro.json');
const frasespoyo = path.join(__dirname, '..', 'comunidade', 'palavras.json');
const sussurrosfrases = path.join(__dirname, '..', 'comunidade', 'risorius.json');

function readDataFromFilesussuros(){
    if (fs.existsSync(sussurrosfrases)) {
    const JSONDADOS = fs.readFileSync(sussurrosfrases, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
const datasussurros = readDataFromFilesussuros();


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

function readDataFromFile2(){
    if (fs.existsSync(frasespath)) {
    const JSONDADOS = fs.readFileSync(frasespoyo, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
function writeDataToFile2(data) {
    const jsonString = JSON.stringify(data, null, 2);
    fs.writeFileSync(frasespoyo, jsonString, 'utf8');
}
const data2 = readDataFromFile2();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('loja')
        .setDescription('Comando com a Loja de Ecclesia!')
        .addStringOption(option => 
            option.setName('categoria')
                .setDescription('Escolha uma categoria da loja!')
                .setRequired(true)
                .addChoices(
                    { name: 'Gerais', value: 'gerais' },
                    { name: 'Inimizades', value: 'inimizade' },
                    { name: 'Mímicos', value: 'mimicos' },
                    { name: 'Risorius', value: 'risorius' },
                    { name: 'RPG', value: 'rpg' }
                )
        )
        .addUserOption(option => 
            option.setName('inimigo')
                .setDescription('Escolha um usuário para compras específicas!')
                .setRequired(false)
                .setRequired(true)
        ),

    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Este comando está em cooldown, espere ${segundos} segundos`, ephemeral: true});
        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
        const user = interaction.member;
        const userId = user.id;
        const member = interaction.options.getMember('inimigo');
        const memberId = member.id;
        const userMapping = {
            [fabioid]: 'fabio',
            [amandaid]: 'amanda',
            [alvaroid]: 'alvaro',
            [diogoid]: 'diogo',
            [gabrielid]: 'gabriel',
            [heloid]: 'heloise',
            [isisid]: 'isis',
            [kelsonid]: 'kelson',
            [otavioid]: 'otavio',
            [pauloid]: 'paulo',
            [vitorid]: 'vitor'
        };
        function Compra(valor) {
            if (userMapping[userId] && ((data.DINHEIRO[userMapping[userId]] - valor) >= 0)) {
                data.DINHEIRO[userMapping[userId]] -= valor;
                writeDataToFile(data);
                return true;
            }
            return false;
        }
        function Cobrar(valor) {
            if (userMapping[userId] && (data.DINHEIRO[userMapping[userId]] - valor) < 0) {
                interaction.channel.send({ content: "Saldo Inválido!", ephemeral: true });
                return false;
            }
            return true;
        }
        const categoria = interaction.options.getString('categoria');
        const alvo = interaction.options.getUser('inimigo');
        const embed = new EmbedBuilder()
            .setTitle('LOJA ECCLESIA')
            .setDescription(`Ecclesia é a MAIOR loja de Zoystea! Tendo tudo que um aventureiro, fazendeiro ou até morador quer!`)
            .setColor(0x00AE86)
        
        if(categoria == "gerais"){
            //OPÇÕES DA LOJA
            const opcoesgerais = [
                { label: 'Animal Aleatório', description: '5 ZENS', value: 'animal' },
                { label: 'Meme Aleatório', description: '5 ZENS', value: 'meme' },
                { label: 'Cauteloso', description: '10 ZENS', value: 'cautela' },
                { label: 'Historiador', description: '50 ZENS', value: 'historia' },
                { label: 'Artífice', description: '100 ZENS', value: 'arte' },
                { label: 'Alertado', description: '5000 ZENS', value: 'alerta' },
            ]
            //LOJA
            embed.addFields(
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
                { name: '\n「GERAIS」', value: `\u200B` },
                { name: 'Alertado', value: '5000 ZENS\nIrá te marcar sempre que acontecer um evento no Risorius', inline: true },
                { name: 'Historiador', value: '50 ZENS\nIrá te dar permissão para o canal de palavras importantes', inline: true },
                { name: 'Artífice', value: '100 ZENS\nIrá te dar permissão para enviar artes no canal de artes', inline: true },
                { name: 'Cauteloso', value: '10 ZENS\nIrá te dar acesso ao canal de Patch Notes do Bot!', inline: true },
                { name: 'Animal Aleatório', value: '5 ZENS\nIrá enviar uma foto fofa de um Animal Aleatório.', inline: true },
                { name: 'Meme Aleatório', value: '5 ZENS\nIr◈~═══════《á enviar um meme aleatório.', inline: true },
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
            );
            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('Nenhuma opção selecionada')
                        .addOptions(opcoesgerais),
            );

            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
            const filter = i => i.customId === 'select' && i.user.id === interaction.user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: milesegundos });

            collector.on('collect', async i => {
                invalidado = false
                await i.deferUpdate();
                let response;
                switch (i.values[0]) {
                    case 'historia':
                        if(user.roles.cache.has(historiadorid)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        Cobrar(50);
                        if(invalidado == true){
                            return
                        }
                        Compra(50);
                        interaction.member.roles.add(historiadorid)
                        response = 'Compra realizada com sucesso!';
                        return;
                    case 'cautela':
                        if(user.roles.cache.has(cautelosoid)){
                            await interaction.channel.send({content: "Você já tem esse produto!"})
                            return;
                        }
                        Cobrar(10);
                        if(invalidado == true){
                            return
                        }
                        Compra(10);
                        interaction.member.roles.add(cautelosoid)
                        response = 'Compra realizada com sucesso!';
                        return;
                    case 'alerta':
                        if(user.roles.cache.has(alertadoid)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        Cobrar(5000);
                        if(invalidado == true){
                            return
                        }
                        Compra(5000);
                        interaction.member.roles.add(alertadoid)
                        response = 'Compra realizada com sucesso!';
                        return;
                    case 'arte':
                            if(user.roles.cache.has(artificeid)){
                                await interaction.channel.send({content: "Você já tem esse produto!"})
                                return;
                            }
                            Cobrar(100);
                            if(invalidado == true){
                                return
                            }
                            Compra(100);
                            interaction.member.roles.add(artificeid)
                            response = 'Compra realizada com sucesso!';
                            return;
                    case 'animal':
                        if (Cobrar(5) && Compra(5)) {
                            let response = "."
                            const Animais = JSON.parse(fs.readFileSync(imagenspath, 'utf-8')).imagens;
                            const randomanimal = Animais.animais;
                            response = randomanimal[Math.floor(Math.random() * randomanimal.length)];
                            await interaction.channel.send({ content: response});
                        } else {
                            invalidado = true;
                            break;
                        }
                        return
                    case 'meme':
                        if (Cobrar(5) && Compra(5)) {
                            let response = "."
                            const Memes = JSON.parse(fs.readFileSync(imagenspath, 'utf-8')).imagens;
                            const randomemem = Memes.memes;
                            response = randomemem[Math.floor(Math.random() * randomemem.length)];
                            await interaction.channel.send({ content: response});
                        } else {
                            invalidado = true;
                            break;
                        }
                        return
                    default:
                        response = 'Opção inválida!';
                    }
                    await interaction.followUp({ content: response, ephemeral: true })
                })

        collector.on('end', collected => {
            if (collected.size === 0) {
                interaction.followUp({ content: 'Tempo esgotado. Nenhuma opção foi selecionada.', ephemeral: true });
            }
        });
    }
        if(categoria == "inimizade"){
            //OPÇÕES DA LOJA
            const opcoesgerais = [
                { label: 'Azar Pequeno', description: '1500 ZENS', value: 'azarado' },
                { label: 'Azar Médio', description: '6000 ZENS', value: 'infortunado' },
                { label: 'Retirada da Call', description: '5000 ZENS', value: 'to1s' },
                { label: 'Gravidade Invertida', description: '10000 ZENS', value: 'gravidade' },
                { label: 'Azar Grande', description: '15000 ZENS', value: 'desgraça' },
                { label: 'Pausa para Lanchar', description: '15000 ZENS', value: 'to5m' },
                { label: 'Retirada Temporária', description: '100000 ZENS', value: 'to30m' },
                
            ]
            //LOJA
            embed.addFields(
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
                { name: '\n「INIMIZADE」', value: `\u200B` },
                { name: 'Azar Pequeno', value: '1500 ZENS\nIrá dar azar pequeno para o Alvo.', inline: true },
                { name: 'Azar Médio', value: '6000 ZENS\nIrá dar azar médio para o Alvo', inline: true },
                { name: 'Azar Grande', value: '15000 ZENS\nIrá dar azar grande para o Alvo', inline: true },
                { name: 'Gravidade Invertida', value: '10000 ZENS\nIrá dar o efeito Gravidade Invertida para o Alvo', inline: true },
                { name: 'Retirada da Call', value: '5000 ZENS\nIrá dar Timeout no Alvo por 1s.', inline: true },
                { name: 'Pausa para Lanchar', value: '15000 ZENS\nIrá dar Timeout no Alvo por 5m.', inline: true },
                { name: 'Retirada Temporária', value: '100000 ZENS\nIrá dar Timeout no usuário por 30m.', inline: true },
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
            );
            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('Nenhuma opção selecionada')
                        .addOptions(opcoesgerais),
            );

            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
            const filter = i => i.customId === 'select' && i.user.id === interaction.user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: milesegundos });

            collector.on('collect', async i => {
                invalidado = false
                await i.deferUpdate();
                let response;
                switch (i.values[0]) {
                    case 'to1s':
                        if(member.roles.cache.has(mestre)){
                            await interaction.channel.send({content: "Não tenho permissão para fazer isso", ephemeral: true})
                            return;
                        }
                        if(Cobrar(5000)){
                            Compra(5000);
                            const nickname = user.nickname ? user.nickname : user.user.username;
                            member.timeout(1000, `O ${nickname} comprou Timeout de 1s em você.`)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'to5m':
                        if(member.roles.cache.has(mestre)){
                            await interaction.channel.send({content: "Não tenho permissão para fazer isso", ephemeral: true})
                            return;
                        }
                        if(Cobrar(15000)){
                            Compra(15000);
                            const nickname = user.nickname ? user.nickname : user.user.username;
                            member.timeout(300000, `O ${nickname} comprou Timeout de 5m em você.`)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'to30m':
                        if(member.roles.cache.has(mestre)){
                            await interaction.channel.send({content: "Não tenho permissão para fazer isso", ephemeral: true})
                            return;
                        }
                        if(Cobrar(100000)){
                            Compra(100000);
                            const nickname = user.nickname ? user.nickname : user.user.username;
                            member.timeout(1800000, `O ${nickname} comprou Timeout de 30m em você.`)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'azarado':
                        if(member.roles.cache.has(idazarado)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(1500)){
                            Compra(1500);
                            member.roles.add(idazarado)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'infortunado':
                        if(member.roles.cache.has(idinfortunado)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(6000)){
                            Compra(6000);
                            member.roles.add(idinfortunado)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'desgraça':
                        if(member.roles.cache.has(iddesgraca)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(15000)){
                            Compra(15000);
                            member.roles.add(iddesgraca)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'gravidade':
                        if(member.roles.cache.has(idgravidade)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(10000)){
                            Compra(10000);
                            member.roles.add(idgravidade)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    default:
                        response = 'Opção inválida!';
                    }
                    await interaction.followUp({ content: response, ephemeral: true })
                })

        collector.on('end', collected => {
            if (collected.size === 0) {
                interaction.followUp({ content: 'Tempo esgotado. Nenhuma opção foi selecionada.', ephemeral: true });
            }
        });
    }
        if(categoria == "mimicos"){
            function Mimicoefeitos(valor){
                const efeitos = {
                    1: { id: idafortunado, nome: "Afortunado" },
                    2: { id: idamaldicoado, nome: "Amaldiçoado" },
                    3: { id: idazarado, nome: "Azarado" },
                    4: { id: idbencao, nome: "Abençoado" },
                    5: { id: idcoincidente, nome: "Coincidente" },
                    6: { id: idcontigente, nome: "Contingente" },
                    7: { id: iddecadencia, nome: "Decadência" },
                    8: { id: iddesgraca, nome: "Desgraça" },
                    9: { id: iddesprezo, nome: "Desprezo" },
                    10: { id: identrelacado, nome: "Entrelaçados" },
                    11: { id: idinconveniente, nome: "Inconveniente" },
                    12: { id: idinfortunado, nome: "Infortunado" },
                    13: { id: idventurado, nome: "Venturado" },
                    14: { id: idprotegido, nome: "Protegido" }
                };
                if (efeitos[valor]) {
                    interaction.member.roles.add(efeitos[valor].id);
                    return efeitos[valor].nome}
            }
            function MimicoPoções(){
                const pocoes = ["Frasco Vazio (Nada)", "Frasco Vazio (Nada)", "Frasco Vazio (Nada)", "Frasco Vazio (Nada)", "Frasco Vazio (Nada)", "Frasco Vazio (Nada)", "Poção de Mana Simples", "Poção de Mana Grande", "Poção de Cura Simples", 
                    "Poção de Cura média", "Poção de Resistência Simples", "Poção de Resistência Avançadas", "Poção de Resistência Avançadas", "Poção de Purificação", "Poção de Sabor Ruim", "Poção de Pernas Duras", "Poção de Cura Retardada", 
                    "Poção de Descanso", "Poção de Anão", "Poção do Protetor", "Poção de Mana Simples", "Poção de Cura Simples", "Poção de Mana Simples", "Poção de Cura Simples", "Poção de Mana Simples", "Poção de Cura Simples", "Poção de Mana Simples", "Poção de Cura Simples"]
                const numeroefeitosrandom = Math.floor(Math.random() * (pocoes.length)) + 1;
                if (pocoes[numeroefeitosrandom]) {
                    return pocoes[numeroefeitosrandom]}
            }

            //OPÇÕES DA LOJA
            const opcoesgerais = [
                { label: 'Baú Mímico de Efeitos', description: '3500 ZENS', value: 'micefeitos' },
                { label: 'Vaso Mímico de Poções', description: '90000 ZENS', value: 'micpocoes' },
            ]
            //LOJA
            embed.addFields(
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
                { name: '\n「MÍMICOS」', value: `\u200B` },
                { name: 'Baú Mímico de Efeitos', value: '3500 ZENS\nAbrirá uma caixa Mimica que te dará um efeito aleatório do Risorius.', inline: true },
                { name: 'Vaso Mímico de Poções', value: '90000 ZENS\nAbrirá um vaso Mimico que te dará uma poção aleatória para Campanhas de Tormenta20', inline: true },
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
            );
            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('Nenhuma opção selecionada')
                        .addOptions(opcoesgerais),
            );

            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
            const filter = i => i.customId === 'select' && i.user.id === interaction.user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: milesegundos });

            collector.on('collect', async i => {
                invalidado = false
                await i.deferUpdate();
                let response;
                switch (i.values[0]) {
                    case 'micpocoes':
                        if(Cobrar(90000)){
                            Compra(90000);
                            const canvas = Canvas.createCanvas(750, 750);
                            const context = canvas.getContext('2d');
                            const image = await Canvas.loadImage('https://images2.imgbox.com/ce/58/kMJFbSmU_o.png');

                            context.drawImage(image, 0, 0, canvas.width, canvas.height);

                            context.font = 'bold 50px sans-serif';
                            context.fillStyle = '#ffffff';
                            context.textAlign = 'center';
                            context.textBaseline = 'middle';
                            context.fillText(`${MimicoPoções()}`, canvas.width / 2, canvas.height / 2);

                            const attachment = canvas.toBuffer();

                            await interaction.channel.send({ files: [{ attachment, name: 'image.png' }] });
                            }else{invalidado == true
                                return
                            }
                            return;
                    
                    case 'micefeitos':
                        if(Cobrar(3500)){
                            Compra(3500);
                            const numeroefeitosrandom = Math.floor(Math.random() * 14) + 1;
                            const canvas = Canvas.createCanvas(750, 750);
                            const context = canvas.getContext('2d');
                            const image = await Canvas.loadImage('https://images2.imgbox.com/3f/c6/3TdpnKq0_o.png');

                            context.drawImage(image, 0, 0, canvas.width, canvas.height);

                            context.font = 'bold 70px sans-serif';
                            context.fillStyle = '#ffffff';
                            context.textAlign = 'center';
                            context.textBaseline = 'middle';
                            context.fillText(`${Mimicoefeitos(numeroefeitosrandom)}`, canvas.width / 2, canvas.height / 2);

                            const attachment = canvas.toBuffer();

                            await interaction.channel.send({ files: [{ attachment, name: 'image.png' }] });
                            }else{invalidado == true
                                return
                            }
                            return;
                    default:
                        response = 'Opção inválida!';
                    }
                    await interaction.followUp({ content: response, ephemeral: true })
                })

        collector.on('end', collected => {
            if (collected.size === 0) {
                interaction.followUp({ content: 'Tempo esgotado. Nenhuma opção foi selecionada.', ephemeral: true });
            }
        });
    }
        if(categoria == "risorius"){
            //OPÇÕES DA LOJA
            const opcoesgerais = [
                { label: 'Entrelaçados', description: '5000 ZENS', value: 'lacos' },
                { label: 'Ágil', description: '3000 ZENS', value: 'agil' },
                { label: 'Protegido', description: '15000 ZENS', value: 'protegido' },
                { label: 'Higienizar Impurezes', description: '30000 ZENS', value: 'higiene' },
                { label: 'Sorte Minuscula', description: '300 ZENS', value: 'coincidente' },
                { label: 'Sorte Pequena', description: '750 ZENS', value: 'venturado' },
                { label: 'Sorte Média', description: '5000 ZENS', value: 'afortunado' },
                { label: 'Sorte Grande', description: '17777 ZENS', value: 'contingente' },
            ]
            //LOJA
            embed.addFields(
                    { name: '\n「RISORIUS」', value: `\u200B` },
                    { name: 'Ágil', value: '3000 ZENS\nIrá dar efeito de Ágil', inline: true },
                    { name: 'Entrelaçados', value: '5000 ZENS\nIrá dar efeito de Entrelaçado', inline: true },
                    { name: 'Higienizar Impurezes', value: '30000 ZENS\nIrá tirar todos os seus efeitos negativos', inline: true },
                    { name: 'Protegido', value: '15000 ZENS\nIrá dar efeito de Protegido', inline: true },
                    { name: 'Sorte Minuscula', value: '500 ZENS\nIrá dar sorte minuscula', inline: true },
                    { name: 'Sorte Pequena', value: '1050 ZENS\nIrá dar sorte pequena', inline: true },
                    { name: 'Sorte Média', value: '5000 ZENS\nIrá dar sorte média', inline: true },
                    { name: 'Sorte Grande', value: '17777 ZENS\nIrá dar sorte grande', inline: true },
                    { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
            );
            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('Nenhuma opção selecionada')
                        .addOptions(opcoesgerais),
            );

            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
            const filter = i => i.customId === 'select' && i.user.id === interaction.user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: milesegundos });

            collector.on('collect', async i => {
                invalidado = false
                await i.deferUpdate();
                let response;
                switch (i.values[0]) {
                    case 'higiene':
                        if(Cobrar(30000)){
                            Compra(30000);
                            if (user.roles.cache.has(iddesgraca)) {await user.roles.remove(iddesgraca);
                            }
                            if (user.roles.cache.has(idinfortunado)) {await user.roles.remove(idinfortunado);
                            }
                            if (user.roles.cache.has(idazarado)) {await user.roles.remove(idazarado);
                            }
                            if (user.roles.cache.has(idamaldicoado)) {await user.roles.remove(idamaldicoado);
                            }
                            if (user.roles.cache.has(idbanido)) {await user.roles.remove(idbanido);
                            }
                            if (user.roles.cache.has(iddesprezo)) {await user.roles.remove(iddesprezo);
                            }
                            if (user.roles.cache.has(idlerdo)) {await user.roles.remove(idlerdo);
                            }
                            if (user.roles.cache.has(idassustado)) {await user.roles.remove(idassustado);
                            }
                            if (user.roles.cache.has(idamalcuidado)) {await user.roles.remove(idamalcuidado);
                            }
                            if (user.roles.cache.has(idatrapaceiro)) {await user.roles.remove(idatrapaceiro);
                            }
                            if (user.roles.cache.has(idquebrado)) {await user.roles.remove(idquebrado);
                            }
                            if (user.roles.cache.has(idletargico)) {await user.roles.remove(idletargico);
                            }
                            if (user.roles.cache.has(idpreguica)) {await user.roles.remove(idpreguica);
                            }
                            if (user.roles.cache.has(idcaotico)) {await user.roles.remove(idcaotico);
                            }
                            if (user.roles.cache.has(idinconveniente)) {await user.roles.remove(idinconveniente);
                            }
                            if (user.roles.cache.has(iddecadencia)) {await user.roles.remove(iddecadencia);
                            }
                            if (user.roles.cache.has(idgatopreto)) {await user.roles.remove(idgatopreto)}
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                                return}
                        return;
                    case 'protegido':
                        if(user.roles.cache.has(idprotegido)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(15000)){
                            Compra(15000);
                            interaction.member.roles.add(idprotegido)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'agil':
                        if(user.roles.cache.has(idagil)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(3000)){
                            Compra(3000);
                            interaction.member.roles.add(idagil)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'coincidente':
                        if(user.roles.cache.has(idcoincidente)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(300)){
                            Compra(300);
                            interaction.member.roles.add(idcoincidente)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'venturado':
                        if(user.roles.cache.has(idventurado)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(750)){
                            Compra(750);
                            interaction.member.roles.add(idventurado)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'afortunado':
                        if(user.roles.cache.has(idafortunado)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(5000)){
                            Compra(5000);
                            interaction.member.roles.add(idafortunado)
                            response = 'Compra realizada com sucesso!'
                            }else{invalidado == true
                            return}
                            return;
                    case 'contingente':
                        if(user.roles.cache.has(idcontigente)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(17777)){
                        Compra(17777);
                        interaction.member.roles.add(idcontigente)
                        response = 'Compra realizada com sucesso!'
                        }else{invalidado == true
                        return}
                        return;
                    case 'lacos':
                        if(user.roles.cache.has(identrelacado)){
                            await interaction.channel.send({content: "Você já tem esse produto!", ephemeral: true})
                            return;
                        }
                        if(Cobrar(5000)){
                            Compra(5000);
                            interaction.member.roles.add(identrelacado)
                            response = 'Compra realizada com sucesso!';
                        }else{invalidado == true
                            return
                        }
                        return;
                    default:
                        response = 'Opção inválida!';
                    }
                    await interaction.followUp({ content: response, ephemeral: true })
                })

        collector.on('end', collected => {
            if (collected.size === 0) {
                interaction.followUp({ content: 'Tempo esgotado. Nenhuma opção foi selecionada.', ephemeral: true });
            }
        });
    }
        if(categoria == "rpg"){
            //OPÇÕES DA LOJA
            const opcoesgerais = [
                { label: 'Documento Aleatório', description: '20 ZENS', value: 'doc' },
                { label: 'Sussurros Históricos', description: '100 ZENS', value: 'sussurros' },
                { label: 'Palavras Importantes', description: '10000 ZENS', value: 'infos' },
                { label: 'Emote', description: '100000 ZENS', value: 'emote' },
                { label: 'Desenho', description: '1000000 ZENS', value: 'desenho' },
            ]
            //LOJA
            embed.addFields(
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
                { name: '\n「RPG」', value: `\u200B` },
                { name: 'Documento Aleatório', value: '20 ZENS\nIrá enviar um documento aleatório.', inline: true },
                { name: 'Sussurros Históricos', value: '100 ZENS\nIrá um conto de uma das Sessões das Campanhas do Servidor!.', inline: true },
                { name: 'Palavras Importantes', value: '10000 ZENS\nIrá dar uma informação aleatória das Campanhas de RPG no Palavras Importantes!', inline: true },
                { name: 'Emote', value: '100000 ZENS\nVocê terá direito a um emote para o servidor que seja relacionado ao RPG!', inline: true },
                { name: 'Desenho', value: '1000000 ZENS\nVocê terá direito a um desenho (possível) de qualquer coisa que deseje relacionada ao RPG.', inline: true },
                { name: '》══════════════════════════════════════════════ ◈', value: '\n'},
            );
            const row = new ActionRowBuilder()
                .addComponents(
                    new StringSelectMenuBuilder()
                        .setCustomId('select')
                        .setPlaceholder('Nenhuma opção selecionada')
                        .addOptions(opcoesgerais),
            );

            await interaction.reply({ embeds: [embed], components: [row], ephemeral: true });
            const filter = i => i.customId === 'select' && i.user.id === interaction.user.id;
            const collector = interaction.channel.createMessageComponentCollector({ filter, time: milesegundos });

            collector.on('collect', async i => {
                invalidado = false
                await i.deferUpdate();
                let response;
                switch (i.values[0]) {
                    case 'infos':
                        if(Cobrar(10000)){
                            Compra(10000);
                        let palavras
                        let numeroSorteado = Math.floor(Math.random() * 2) + 1;
                        let valorOrdem = data2.ordemvalor
                        let valorNE = data2.noitevalor
                        let palavrasOrdem = JSON.parse(fs.readFileSync(frasespoyo, 'utf-8')).ORDEM;
                        let palavrasNE = JSON.parse(fs.readFileSync(frasespoyo, 'utf-8')).NOITEESCURA;
                        let valorfrase;
                        if(palavrasOrdem.length == valorOrdem){
                            numeroSorteado = 2
                            console.log("Verificação Ordem passou aq")
                        } else if(palavrasOrdem.length == valorNE){
                            numeroSorteado = 1
                            console.log("Verificação NE passou aq")
                        }else if(palavrasOrdem.length == valorNE && palavrasOrdem.length == valorOrdem){
                            interaction.user.send({ content: "Não tem mais palavras importantes no estoque..."})
                            console.log("Verificação Final passou aq")
                            return;
                        }
                        if(numeroSorteado == 1){
                            palavras = palavrasOrdem
                            valorfrase = "data2.ordemvalor"
                            console.log(data2.ordemvalor)
                            data2.ordemvalor++
                        }
                        if(numeroSorteado == 2){
                            palavras = palavrasNE
                            valorfrase = "data2.noitevalor"
                            console.log(data2.noitevalor)
                            data2.noitevalor++
                        }
                        const randomfrase = palavras[valorfrase]
                        const channel = interaction.client.channels.cache.get(idpalavras);
                        channel.send({content: `**${randomfrase}**`});
                        }else{invalidado == true
                            return
                        }
                        writeDataToFile2(data2);
                        return;
                    case 'emote':
                        if(Cobrar(100000)){
                        Compra(100000);
                        await interaction.channel.send({content: "compra feita com sucesso", ephemeral: true})
                        }else{invalidado == true
                            return}
                    return;
                    case 'desenho':
                        if(Cobrar(1000000)){
                        Compra(1000000);
                        await interaction.channel.send({content: "compra feita com sucesso", ephemeral: true})
                        }else{invalidado == true
                            return}
                        return;
                    case 'doc':
                        if (Cobrar(20) && Compra(20)) {
                            let response = "."
                            const Docs = JSON.parse(fs.readFileSync(imagenspath, 'utf-8')).imagens;
                            const randomdoc = Docs.documentos;
                            response = randomdoc[Math.floor(Math.random() * randomdoc.length)];
                            await interaction.channel.send({ content: response});
                        } else {
                            invalidado = true;
                            break;
                        }
                        return
                    case 'sussurros':
                        if (Cobrar(100) && Compra(100)) {
                            const frasesbobby = datasussurros.sussurros;
                            const randomIndex = Math.floor(Math.random() * frasesbobby.length);
                            let randomMeme = ".";
                            let imagem = ".";

                            if(randomIndex == 0) {
                                const random = frasesbobby[randomIndex].EMPIREO;
                                randomMeme = random[Math.floor(Math.random() * random.length)];
                                imagem = "https://images2.imgbox.com/c9/61/D0xuAP00_o.png";
                            } else if(randomIndex == 1) {
                                const random = frasesbobby[randomIndex].EDFU;
                                randomMeme = random[Math.floor(Math.random() * random.length)];
                                imagem = "https://images2.imgbox.com/7f/82/0s1UlP5q_o.png";
                            } else if(randomIndex == 2) {
                                const random = frasesbobby[randomIndex].NOITEESCURA;
                                randomMeme = random[Math.floor(Math.random() * random.length)];
                                imagem = "https://images2.imgbox.com/a1/46/xkfejCBm_o.png";
                            } else if(randomIndex == 3) {
                                const random = frasesbobby[randomIndex].AFANO;
                                randomMeme = random[Math.floor(Math.random() * random.length)];
                                imagem = "https://images2.imgbox.com/4a/1e/jZ4jAfgH_o.png";
                            } else if(randomIndex == 4) {
                                const random = frasesbobby[randomIndex].TROPICAL;
                                randomMeme = random[Math.floor(Math.random() * random.length)];
                                imagem = "https://images2.imgbox.com/80/f4/ZuEe2Pve_o.png";
                            } else if(randomIndex == 5) {
                                const random = frasesbobby[randomIndex].THANATOS;
                                randomMeme = random[Math.floor(Math.random() * random.length)];
                                imagem = "https://images2.imgbox.com/40/b1/zwuJIKfb_o.png";
                            } else if(randomIndex == 6){
                                const random = frasesbobby[randomIndex].SOLARENS
                                randomMeme = random[Math.floor(Math.random() * random.length)];
                                imagem = "https://images2.imgbox.com/b6/52/q7Nf0vdh_o.png"
                            }

                            const frases = "*sussurros...*\n\n\n" + "# " + randomMeme;
                            interaction.user.send({
                                content: frases, 
                                files: [{ attachment: imagem }]
                            });

                        } else {
                            invalidado = true;
                            break;
                        }
                        return
                    default:
                        response = 'Opção inválida!';
                    }
                    await interaction.followUp({ content: response, ephemeral: true })
                })

        collector.on('end', collected => {
            if (collected.size === 0) {
                interaction.followUp({ content: 'Tempo esgotado. Nenhuma opção foi selecionada.', ephemeral: true });
            }
        });
    }

}
}
