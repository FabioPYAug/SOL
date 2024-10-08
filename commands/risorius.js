const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus, VoiceConnectionStatus } = require('@discordjs/voice');
const fs = require('fs');
const path = require('path');
const { info } = require("console");

const totalcartas = 127
//ID DOS CARGOS E CANAIS GERAIS
const frasespath = path.join(__dirname, '..', 'comunidade', 'risorius.json');
const imagenspath = path.join(__dirname, '..', 'comunidade', 'imagens.json');
const dinheiropath = path.join(__dirname, '..', 'comunidade', 'dinheiro.json');
const alertaid = "1247218108247310447";
const afortunado = "1244159113223475230";
const maldicaoid = "1243508945805381645";
const comandosid = "1223006309025321080";
const id69 = "1244742336408457266";
const venturadoid = "1244789708563812392";
const contigenteid = "1244795840430735410"
const divinoid = "1244795864078352445";
const bencaoid =  "1243775255106027632";
const azaradoid = "1244812565335380028";
const infortunaid = "1244812600756408461";
const desgraçaid = "1244815450299433001";
const fardoid = "1244815840331698239";
const desprezoid = "1245128660214743070";
const glorificadoid = "1245128518422102097";
const comumid = "1245132705037815849";
const ADM = "1099030674574422107";
const BAN = "1245448188165619743";
const lerdoid = "1245457565673066558";
const rapidoid = "1245457877221638154";
const entrelaid = "1245595127452536832";
const imperadorid = "1245812621081579622";
const coincidenteid = "1245812200019460267";
const assustadoid = "1245823898000294012";
const espelho = "1246139098259787807";
const malcuidadoid = "1247560603413774376";
const bemcuidadoid = "1247560429127860316";
const preguicosoid = "1248260988092944454";
const letargicoid = "1248261066669035601"
const aceleradoid = "1248261978917437491"
const celerissimoid = "1248261886122917958";
const speedrunnerid = "1248365621977157715";
const quebradoid = "1248366935045963877"
const burladorid = "1248596219383644250"
const trapaceiroid = "1248596517485412412"
const protegidoid = "1248614810585927681"
const vigilanteid = "1249115348771541096"
const juhurid = "1251038596119658518"
const heronosid = "1251038312807006248"
const malatiasid = "1251047479496151071"
const marlanid = "1251047418833797120"
const destruidoid = "1251047335719473192"
const espelhoqueradoid = "1251047237887332382"
const caoticoid = "1251353081959026739"
const bffsid = "1251357259787665529"
const contracaoid = "1251362458313166858"
const trevodouradoid = "1254163535341027419"
const linguagatoid = "1254169214453944491"
const normalzizadoid = "1254198559872647298"
const inconvenienteid = "1254213068217647164"
const decadenciaid = "1254225903421100033" 
const ancoraid = "1277463401362100306"
const wffid = "1277718062128173137"
const imaculadoid = "1277775778888679577"
const ancestralidadeid = "1277775959969366107"
const leiguidadeid = "1290956360661602354"
const Eventualid = ""

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
const thuanyid = "406048394650451969"
const embeds = new EmbedBuilder()

//PATH DO DINHEIRO
function readDataDinheiroFromFile3(){
    if (fs.existsSync(dinheiropath)) {
    const JSONDADOSDINHEIRO = fs.readFileSync(dinheiropath, 'utf8');
    return JSON.parse(JSONDADOSDINHEIRO);
    }
}
function writeDataDinheiroToFile(datadinheiro) {
    const jsonString = JSON.stringify(datadinheiro, null, 2);
    fs.writeFileSync(dinheiropath, jsonString, 'utf8');
}
const datadinheiro = readDataDinheiroFromFile3();


//PATH DAS FRASES
function readDataFraseFromFile(){
    if (fs.existsSync(frasespath)) {
    const JSONDADOS = fs.readFileSync(frasespath, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
function writeDataFraseToFile(datafrase) {
    const jsonString = JSON.stringify(datafrase, null, 2);
    fs.writeFileSync(frasespath, jsonString, 'utf8');
}
const datafrase = readDataFraseFromFile();


//PATH DAS IMAGENS
function readDataImagemFromFile(){
    if (fs.existsSync(imagenspath)) {
    const JSONDADOSIMAGENS = fs.readFileSync(imagenspath, 'utf8');
    return JSON.parse(JSONDADOSIMAGENS);
    }
}
const dataimagem = readDataImagemFromFile();

//TIMEOUT DOS CARGOS
var timeout = {};
const cooldowns = {
    "Letárgico": 1500000, 
    "Preguiçoso": 1200000, 
    "Lerdo": 800000, 
    "Ágil": 400000,
    "Acelerado": 300000,
    "Celeríssimo": 240000,
    "SpeedRunner": 200000,
    "Herónos": 120000,
    "Dev": 2000
};
let imperador
let ninho
datafrase.eventos.tipo = "normal"
const listapositiva = [glorificadoid, contigenteid, afortunado, contracaoid, coincidenteid, protegidoid, entrelaid, venturadoid, id69]
const listanegativa = [inconvenienteid, azaradoid, infortunaid, lerdoid, preguicosoid, caoticoid, desgraçaid, desprezoid, id69, decadenciaid]
function RANDOMPOSITIVO(listapositiva){
    const randomefeito = Math.floor(Math.random() * listapositiva.length);
    return listapositiva[randomefeito];
}
let roletabobby = 1
let ancestral = 1
function getporce(mini, maxi){
    return ((maxi - mini) * 100) / 1000}
const defaultCooldown = 600000

module.exports = {
    data: new SlashCommandBuilder()
        .setName("risorius")
        .setDescription("Testar a sorte com o Deus da Comédia!"),
        async execute(interaction) {
            const user = interaction.member;
            let trevodourado = 1
            let linguagato = 1
            ninho = datafrase.infos.ninho
            imperador = datafrase.infos.dinastia
            //BLOQUEADO
            if(datafrase.eventos.tipo == "bloqueado"){
                interaction.reply({ content: "O Risorius está preparando um evento!", ephemeral: true })
                return
            }else if(user.roles.cache.has(BAN)){
                interaction.reply({ content: "Você está banido do Risorius.", ephemeral: true })
                return
            }
            const roles = user.roles.cache.map(role => role.name);
            let cooldownTime = defaultCooldown;
            for (const role of roles) {
                if (cooldowns[role]) {
                    cooldownTime = cooldowns[role];
                    break;
                }
            }
            if (timeout[interaction.user.id] && Date.now() - timeout[interaction.user.id] < cooldownTime) {
                const remainingTime = ((timeout[interaction.user.id] + cooldownTime) - Date.now()) / 1000;
                return await interaction.reply({ content: `Este comando está em cooldown, espere ${remainingTime.toFixed(1)} segundos`, ephemeral: true });
            }
            function TIRARPOSITIVO(){
                //STATUS DURADOURES
                if (user.roles.cache.has(imaculadoid)) {
                    user.roles.remove(imaculadoid)}
                if (user.roles.cache.has(ancestralidadeid)) {
                    user.roles.remove(ancestralidadeid)}
                if (user.roles.cache.has(rapidoid)) {
                    user.roles.remove(rapidoid)}
                if (user.roles.cache.has(entrelaid)) {
                    user.roles.remove(entrelaid)}
                if (user.roles.cache.has(bemcuidadoid)) {
                    user.roles.remove(bemcuidadoid)}
                if (user.roles.cache.has(aceleradoid)) {
                    user.roles.remove(aceleradoid)}
                if (user.roles.cache.has(celerissimoid)) {
                    user.roles.remove(celerissimoid)}
                if (user.roles.cache.has(speedrunnerid)) {
                    user.roles.remove(speedrunnerid)}
                if (user.roles.cache.has(burladorid)) {
                    user.roles.remove(burladorid)}
                if (user.roles.cache.has(vigilanteid)) {
                    user.roles.remove(vigilanteid)}
                if (user.roles.cache.has(bffsid)) {
                    user.roles.remove(bffsid)}
                if (user.roles.cache.has(trevodouradoid)) {
                    user.roles.remove(trevodouradoid)}
                //STATUS USO UNICO
                if (user.roles.cache.has(bencaoid)) {
                    user.roles.remove(bencaoid)}
                if (user.roles.cache.has(espelho)) {
                    user.roles.remove(espelho)}
                if (user.roles.cache.has(glorificadoid)) {
                    user.roles.remove(glorificadoid)}
                if (user.roles.cache.has(contigenteid)) {
                    user.roles.remove(contigenteid)}
                if (user.roles.cache.has(imperadorid)) {
                    user.roles.remove(imperadorid)}
                if (user.roles.cache.has(afortunado)) {
                    user.roles.remove(afortunado)}
                if (user.roles.cache.has(contracaoid)) {
                    user.roles.remove(contracaoid)}
                if (user.roles.cache.has(coincidenteid)) {
                    user.roles.remove(coincidenteid)}
                if (user.roles.cache.has(id69)) {
                    user.roles.remove(id69)}
                if (user.roles.cache.has(venturadoid)) {
                    user.roles.remove(venturadoid)} 
            }
            function TIRARNEGATIVO(){
                //EFEITOS DURADOUROS
                if (user.roles.cache.has(lerdoid)) {
                    user.roles.remove(lerdoid)}
                if (user.roles.cache.has(preguicosoid)) {
                    user.roles.remove(preguicosoid)}
                if (user.roles.cache.has(letargicoid)) {
                    user.roles.remove(letargicoid)}
                if (user.roles.cache.has(quebradoid)) {
                    user.roles.remove(quebradoid)}
                if (user.roles.cache.has(decadenciaid)) {
                    user.roles.remove(decadenciaid)}
                if (user.roles.cache.has(malcuidadoid)) {
                    user.roles.remove(malcuidadoid)}
                if (user.roles.cache.has(trapaceiroid)) {
                    user.roles.remove(trapaceiroid)}
                if (user.roles.cache.has(BAN)) {
                    user.roles.remove(BAN)}
                if (user.roles.cache.has(linguagatoid)) {
                    user.roles.remove(linguagatoid)}
                if (user.roles.cache.has(wffid)) {
                    user.roles.remove(wffid)}
                if (user.roles.cache.has(ancoraid)) {
                    user.roles.remove(ancoraid)}
                //EFEITOS USO UNICO
                if (user.roles.cache.has(maldicaoid)) {
                    user.roles.remove(maldicaoid)}
                if (user.roles.cache.has(desprezoid)) {
                    user.roles.remove(desprezoid)}
                if (user.roles.cache.has(desgraçaid)) {
                    user.roles.remove(desgraçaid)}
                if (user.roles.cache.has(caoticoid)) {
                    user.roles.remove(caoticoid)}
                if (user.roles.cache.has(infortunaid)) {
                    user.roles.remove(infortunaid)}
                if (user.roles.cache.has(assustadoid)) {
                    user.roles.remove(assustadoid)}
                if (user.roles.cache.has(azaradoid)) {
                    user.roles.remove(azaradoid)}
                if (user.roles.cache.has(inconvenienteid)) {
                    user.roles.remove(inconvenienteid)}
                if (user.roles.cache.has(normalzizadoid)) {
                    user.roles.remove(normalzizadoid)}
                if (user.roles.cache.has(comumid)) {
                    user.roles.remove(comumid)}
            }
            function EFEITOS(roletabobby){
                //TREVO
                if (user.roles.cache.has(trevodouradoid)){
                    trevodourado = 1.10
                }
                ///LINGUA DE GATO PRETO
                if (user.roles.cache.has(linguagatoid)){
                    linguagato = 1.10
                }

                //EFEITOS DE AZAR
                if (user.roles.cache.has(ancoraid)) { //AZAR PESADO
                    roletabobby = roletabobby - (datafrase.infos.ancora) * linguagato}
                if (user.roles.cache.has(assustadoid)) { //AZAR DO NINHO DO DRAGÃO
                    user.roles.remove(assustadoid);
                    roletabobby = roletabobby + ((150 + Math.ceil(ninho * 0.0001)) * linguagato)}
                if (user.roles.cache.has(decadenciaid)) {//DECADENCIA
                    if(!datafrase.infos.decadencia <= 0){
                        roletabobby = roletabobby - ((30 + (datafrase.infos.decadencia * 1.50))) * linguagato
                        datafrase.infos.decadencia--}}
                if (user.roles.cache.has(maldicaoid)) { //azar ENORME
                    user.roles.remove(maldicaoid)
                    roletabobby = roletabobby - (350 * linguagato)}
                if (user.roles.cache.has(desgraçaid)) { //AZAR GRANDE
                    user.roles.remove(desgraçaid);
                    roletabobby = roletabobby - (150) * linguagato}
                if (user.roles.cache.has(infortunaid)) { //AZAR MÉDIA
                    user.roles.remove(infortunaid);
                    roletabobby = roletabobby - (80) * linguagato}
                if (user.roles.cache.has(inconvenienteid)) { //AZAR MUITO PEQUENO
                    user.roles.remove(inconvenienteid);
                    roletabobby = roletabobby - (20) * linguagato}
                if (user.roles.cache.has(azaradoid)) { //AZAR PEQUENO
                    user.roles.remove(azaradoid);
                    roletabobby = roletabobby - (40) * linguagato}
                if (user.roles.cache.has(desprezoid)) { //AZAR GARANTIDA
                        user.roles.remove(desprezoid);
                        roletabobby = (299 - Math.floor(Math.random() * 299))}

                //EFEITOS COMUNS
                if (user.roles.cache.has(normalzizadoid)) { //NORMALIZATOR
                    user.roles.remove(normalzizadoid);
                    if(roletabobby < 300){roletabobby = roletabobby + 100}
                    if(roletabobby > 750){roletabobby = roletabobby - 100}
                    }
                if (user.roles.cache.has(comumid)) { //PADRAOZINHO
                    user.roles.remove(comumid);
                    roletabobby = (750 - Math.floor(Math.random() * 300))}

                //EFEITOS DE SORTE
                if (user.roles.cache.has(entrelaid)) {//SORTE ENTRELAÇADOS
                    if(!datafrase.infos.laços <= 0){
                        roletabobby = roletabobby + 30 * trevodourado
                        datafrase.infos.laços--}}
                if (user.roles.cache.has(coincidenteid)) { //SORTE MUITO PEQUENA
                    user.roles.remove(coincidenteid);
                    roletabobby = roletabobby + (20 * trevodourado)}
                if (user.roles.cache.has(venturadoid)) { //SORTE PEQUENA
                    user.roles.remove(venturadoid);
                    roletabobby = roletabobby + (40 * trevodourado)}
                if (user.roles.cache.has(afortunado)) { //SORTE MÉDIA
                    user.roles.remove(afortunado);
                    roletabobby = roletabobby + (80 * trevodourado)}
                if (user.roles.cache.has(contigenteid)) { //SORTE GRANDE
                    user.roles.remove(contigenteid);
                    roletabobby = roletabobby + (150 * trevodourado)}
                if (user.roles.cache.has(bencaoid)) { //SORTE ENORME
                    user.roles.remove(bencaoid);
                    roletabobby = roletabobby + (350 * trevodourado)}
                if (user.roles.cache.has(imperadorid)) { //SORTE DA DINASTIA
                    user.roles.remove(imperadorid);
                    roletabobby = roletabobby + ((150 + Math.ceil(imperador * 0.0001)) * trevodourado)}
                if (user.roles.cache.has(glorificadoid)) { //SORTE GARANTIDA
                    user.roles.remove(glorificadoid);
                    roletabobby = Math.floor(Math.random() * 249) + 750}
                if (user.roles.cache.has(divinoid)) { //SOLAR
                    roletabobby = roletabobby + ((Math.floor(Math.random() * 100) + 1) * trevodourado)}

                //OUTROS EFEITOS
                if (user.roles.cache.has(contracaoid)) { //SORTE INVERSA
                    user.roles.remove(contracaoid);
                    roletabobby = 500 - (roletabobby - 500)}
                if (user.roles.cache.has(id69)) { //69
                    user.roles.remove(id69);
                    let valor69 = (Math.floor(Math.random() * 2))
                    if (valor69 == 1){roletabobby = roletabobby + (69 * trevodourado)}
                    if (valor69 == 0){roletabobby = roletabobby - (69 * linguagato)}}
                if (user.roles.cache.has(caoticoid)) {//CAÓTICA ENERGIA
                        user.roles.remove(caoticoid);
                        roletabobby = roletabobby - (roletabobby + (500 - Math.floor(Math.random() * 1000))) + 299}


                return (roletabobby)
            }
            function EVENTOS(roletabobby){
                //EVENTO GRAVIDADE
                if(datafrase.eventos.tipo == "gravidade"){
                    roletabobby = 500 - (roletabobby - 500)
                }
                //ESTRELA CADENTE
                if (datafrase.eventos.tipo == "estrela"){
                    var teste2 = Math.floor(Math.random() * 10) + 1;
                    if(teste2 == 10){
                        datafrase.dados.estrelas++
                        roletabobby = roletabobby + 150
                        interaction.channel.send(`☄${interaction.user} viu uma estrela cadente caindo do céu...☄`)}}
                //POTE DE OURO
                if (datafrase.eventos.tipo == "pote"){
                    var teste2 = Math.floor(Math.random() * 10) + 1;
                    if(teste2 == 10){
                        DINHEIROTESTE(5000)
                        interaction.channel.send(`💵${interaction.user} achou um pote de ouro com 5 mil Zens!💵`)}}
                //COMUNGAR
                if (datafrase.eventos.tipo == "comungar"){
                    roletabobby = roletabobby + 80}
                //MARLAN
                if (datafrase.eventos.tipo == "marlan"){
                    roletabobby = roletabobby - 80}
                //PISAR EM FALSO
                if (datafrase.eventos.tipo == "pisar"){
                var moeda = Math.floor(Math.random() * 2) + 1;
                if (moeda == 1){
                    roletabobby = 930}
                if (moeda == 2){
                    roletabobby = 243}}
                //CAOTICO
                if (datafrase.eventos.tipo == "caotico"){
                    var teste2 = Math.floor(Math.random() * 10) + 1;
                    if(teste2 > 5){roletabobby = roletabobby + 80}
                    if(teste2 < 6){roletabobby = roletabobby - 80}
                    }

                return (roletabobby)
            }
            async function BFFs(user, statustipo){
                return;
                if(user.roles.cache.has(bffsid)){
                    const guild = interaction.guild;
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                    let contador = 1
                    while(contador != 100){
                        var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                        var member = await guild.members.fetch(randomMeme);
                        contador++
                        if (user != member && member.roles.cache.has(bffsid)){
                            member.roles.add(statustipo)}}
            }}
            async function WFFs(user, statustipo){
                return;
                if(user.roles.cache.has(wffid)){
                    const guild = interaction.guild;
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                    let contador = 1
                    while(contador != 100){
                        var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                        var member = await guild.members.fetch(randomMeme);
                        contador++
                        if (user != member && member.roles.cache.has(wffid)){
                            member.roles.add(statustipo)}}
            }}
            function OutrosValores(roletabobby){
                //HANAR
                if (user.roles.cache.has(bemcuidadoid)) {
                    if(roletabobby <= 4){
                    user.roles.remove(bemcuidadoid);
                    interaction.channel.send(`🔅Minha criança ${interaction.user}, eu te protegi dessa vez, que a Misericórdia do Sol te siga e te proteja🔅`)
                    roletabobby = Math.floor(Math.random() * 249) + 750
                }}
                //MALITIAS
                if (user.roles.cache.has(malcuidadoid)) {
                    if(roletabobby >= 995){
                    user.roles.remove(malcuidadoid);
                    interaction.channel.send(`⭕Pecador ${interaction.user}, sua maldição foi libertada, mas sua sorte foi anulada⭕`)
                    roletabobby = (299 - Math.floor(Math.random() * 299))
                }}
                //QUEBRADO
                if (user.roles.cache.has(quebradoid)) {
                    var teste2 = Math.floor(Math.random() * 10) + 1;
                    console.log(teste2)
                    if(teste2 == 1){
                        interaction.reply({ content: `Ué, o sistema quebrou? Eita, você está quebrado mesmo HAHAHAHAHAHAHA. Volte para fila e tente na próxima!`, ephemeral: true})
                        bloqueio = true
                    }}

                return (roletabobby)
            }
            async function LUNARSOLAR(){
            if(user.roles.cache.has(divinoid)){
                if(user.roles.cache.has(speedrunnerid)){
                    await interaction.member.roles.add(heronosid)
                    await user.roles.remove(speedrunnerid)
                }
                if(user.roles.cache.has(burladorid)){
                    await interaction.member.roles.add(juhurid)
                    await user.roles.remove(burladorid)
                }}
            }
            function DINHEIROTESTE(valor){
                const userMap = {
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
                    [vitorid]: 'vitor',
                    [thuanyid]: 'thuany'
                };
            
                const userName = userMap[user.id];
                if (userName) {
                    datadinheiro.DINHEIRO[userName] += valor;
                    writeDataDinheiroToFile(datadinheiro);
                }
            }

            //ROLETABOBBY
            let bloqueio = false
            datafrase.dados.usos++
            if(!user.roles.cache.has(espelho)){
                ancestral = Math.floor(Math.random() * 100) + 1
                if(user.roles.cache.has(ancestralidadeid)){
                    ancestral = ancestral - 5
                }
                console.log(`Valor ANCESTRAL: ${ancestral}`)
                roletabobby = Math.floor(Math.random() * 1000) + 1

                if(user.roles.cache.has(divinoid) || (user.roles.cache.has(fardoid))){
                    LUNARSOLAR()
                }
                console.log(`Valor natural: ${roletabobby}`)
                roletabobby = EFEITOS(roletabobby)
                if(datafrase.eventos.tipo != "normal"){
                    roletabobby = EVENTOS(roletabobby)}
            }else{
                roletabobby == datafrase.infos.espelho
                datafrase.dados.espelho++
                await user.roles.remove(espelho)}

                roletabobby = OutrosValores(roletabobby)
                if(bloqueio == true){return}
                console.log(`Valor com efeitos: ${roletabobby}\n-----------`)
                await interaction.reply("Abrindo pacote de cartas...")

                if(ancestral <= 2){
                    ANCESTRAL()
                }else{CARTAS(roletabobby)}
                

            //7 CARTAS ANCESTRAIS
            async function ANCESTRAL(){
                datafrase.dados.ancestral++
                let dinheirorandom
                writeDataFraseToFile(datafrase)
                let cartas = ["Transformção de Crenças", "Cornucópia", "Numismática", "Vicissitude", "Imaculabilidade", "Loquaz da Verdade", "Ufanismo"]
                const cartarandom = cartas[Math.floor(Math.random() * cartas.length)];
                console.log(cartarandom)
                const teste100 = 2 / 100
                embeds.setColor("Blue")
                embeds.setAuthor({ name: `Ancestral`, iconURL: "https://images2.imgbox.com/85/b7/eAqAIjZW_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //UFANISMO
                if(cartarandom == "Ufanismo"){
                    embeds.setTitle(`UFANISMO`)
                    embeds.setDescription(`Temos anseios, vontades, desejos, que infelizmente, foram apagados contra nossa vontade. Viramos um rascunho falho de nós mesmos... Esta carta irá te dar o efeito Leiguidade, fazendo com que todas as cartas que você tire, estejam sem descrição e título (não tem efeito em cartas ancestrais)."`)
                    embeds.setThumbnail("https://images2.imgbox.com/2a/92/d2t1R6RW_o.png")
                    interaction.member.roles.add(leiguidadeid)
                    interaction.channel.send({ embeds: [embeds]})}
                //TRANSFORMAÇÃO DE CRENÇAS
                if(cartarandom == "Transformção de Crenças"){
                    embeds.setTitle(`TRANSFORMAÇÃO DE CRENÇAS`)
                    embeds.setDescription(`A troca do seu conceito e ideias é algo normal, afinal, vocês são humanos. Essa carta fará você receber um status aleatório, porém, ele sempre será da raridade Abençoada ou Amaldiçoada.`)
                    embeds.setThumbnail("https://images2.imgbox.com/2a/92/d2t1R6RW_o.png")
                    const NOMESJSON = datafrase.idsdivindades;
                    const randomefeito = NOMESJSON[Math.floor(Math.random() * NOMESJSON.length)];
                    interaction.member.roles.add(randomefeito)
                    interaction.channel.send({ embeds: [embeds]})}
                //CORNUCÓPIA
                if(cartarandom == "Cornucópia"){
                    embeds.setTitle(`CORNUCÓPIA`)
                    embeds.setDescription(`Em tempos antigos, onde a vida se resumia a batalhas e guerras incessantes, as duas poderosas entidades, mesmo após sua grandiosa batalha de sete dias, mantiveram acesas suas profundas rivalidades. As chamas da discórdia se espalharam, atingindo até mesmo aqueles que nada tinham a ver com suas contendas. Mas, será que todo esse esforço valeu a pena? Essa carta irá pegar uma carta aleatória do Risorius, fazendo com que todas as cartas tenham a mesma chance de serem pegas.`)
                    embeds.setThumbnail("https://images2.imgbox.com/d8/42/2UM0Buod_o.png")
                    roletabobby = Math.floor(Math.random() * (1300 - (-300) + 1)) + (-300);
                    interaction.channel.send({ embeds: [embeds]})
                    CARTAS(roletabobby)}
                //NUMISMÁTICA
                if(cartarandom == "Numismática"){
                    embeds.setTitle(`NUMISMÁTICA`)
                    embeds.setDescription(`Nossa moeda é de tempos imemoriais, nossas riquezas, colunas de ouro maciço, tudo isso, outrora, tinha outro propósito. Não buscávamos apenas a acumulação de tesouros, mas sim a essência da beleza; não ansiávamos pelo poder terreno, mas pela força espiritual daqueles que nos cercavam. Esta carta, ao ser lançada, conferirá um valor de 0 a 50 mil Zens.`)
                    embeds.setThumbnail("https://images2.imgbox.com/ab/e1/qZ0pXBmr_o.png")
                    dinheirorandom = Math.floor(Math.random() * (50000 - 0 + 1)) + 0;
                    console.log(dinheirorandom)
                    interaction.channel.send({ embeds: [embeds]})
                    DINHEIROTESTE(dinheirorandom)}
                //VICISSITUDE
                if (cartarandom == "Vicissitude") {
                    embeds.setTitle("VICISSITUDE");
                    embeds.setDescription(`A proteção, a fortaleza, e todas as nossas forças foram dedicadas a preservar aquilo que mais nos era caro: a vida. Contudo, não foi suficiente. Teu vício, tua sede insaciável por mais, teu ego desmedido, nos conduziram à ruína, e, paradoxalmente, também à nossa prosperidade. Esta carta irá jogar 5 vezes no Risorius em seguida.`);
                    embeds.setThumbnail("https://images2.imgbox.com/65/0e/PBk8jzNU_o.png");
                    interaction.channel.send({ embeds: [embeds] });
                    for (let i = 0; i < 5; i++) {
                        roletabobby = Math.floor(Math.random() * 1601) - 300;
                        CARTAS(roletabobby)}}
                //IMACULABILIDADE
                if(cartarandom == "Imaculabilidade"){
                    embeds.setTitle(`IMACULABILIDADE`)
                    embeds.setDescription(`Nós não somos inúteis; somos a parte mais essencial. E, embora sejamos fracos, somos a peça indispensável para a realização do teu desígnio. Esta carta fará com que toda vez que pegue a carta Zé Ninguém, você irá receber um abênçoado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/4e/d7/VyXxuL1x_o.png")
                    interaction.member.roles.add(imaculadoid)
                    interaction.channel.send({ embeds: [embeds]})}
                //Loquaz da Verdade
                if(cartarandom == "Loquaz da Verdade"){
                    embeds.setTitle(`LOQUAZ DA VERDADE`)
                    embeds.setDescription(`Você não é o único que está aqui, temos milhares de mentes, pensamentos, sentimentos e todos eles, almejam algo... Você não é melhor que ninguém. Está carta irá dar um palavras importantes!`)
                    embeds.setThumbnail("https://images2.imgbox.com/4e/d7/VyXxuL1x_o.png")
                }
            }
            //120 - CARTAS:
            async function CARTAS(roletabobby){
            //1/1 SOLAR
            if (roletabobby >= 1375){
                const teste100 = 466 / 10000
                datafrase.dados.lunarsolar++
                embeds.setColor("Yellow")
                embeds.setAuthor({ name: `Solar`, iconURL: "https://thumbs2.imgbox.com/df/e9/DcGo6iIv_b.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                embeds.setTitle(`ACAUSALIDADE`)
                embeds.setDescription(`Essa carta queima com o poder da sua sorte. O Sol irá te dar o poder de uma divindade, TODAS as suas cartas a partir de agora terão uma sorte divina que funciona com outros status. Além disso, quaisquer Status de azar que você ter serão desintegrados.\nAlém disso, alguns Status de sorte serão evoluídos para divindades, sendo eles: Speedrunner para Herónos (Deus do tempo) e Burlador para Juhur (Deus da gratidão).\n\nPor fim, quaisquer efeitos e desvantagens pegos anteriormente, serão anuladas (caso já tenha sido afetado pelas desvantagens durante a sessão, não mudará nada).`)
                embeds.setThumbnail("https://images2.imgbox.com/f6/f9/6jLSvsDM_o.png")
                TIRARNEGATIVO()
                interaction.member.roles.add(divinoid)
            }
            //8/? DIVINA (996-1329)
            if (roletabobby > 995 && roletabobby <= 1299){
                const teste100 = getporce(996, 1000)
                embeds.setColor("White")
                embeds.setAuthor({ name: `Divina`, iconURL: "https://images2.imgbox.com/47/44/O8yhCGx8_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //ITEM LENDÁRIO
                if (roletabobby > 995 && roletabobby <= 997){
                    embeds.setTitle(`VALOR LENDÁRIO`)
                    datafrase.dados.ganhariten++
                    embeds.setDescription(`O toque de uma divindade manipula todas as chances e probabilidades, fazendo com que essa carta te de um item garantido em alguma campanha a sua escolha ou poderá te dar uma informação para auxiliar a encontrar um item de classe Lendária em uma campanha aleatória. A verdadeira divina comédia...`)
                    embeds.setThumbnail("https://images2.imgbox.com/c1/1c/MTLdc75F_o.png")}
                //ABENÇOADO
                if (roletabobby > 997 && roletabobby <= 1020){
                    embeds.setTitle(`GLÓRIA AO SOL`)
                    embeds.setDescription(`Uma divindade te toca, dando-lhe uma bênção. Essa carta faz com que a sua próxima carta tenha uma ENORME sorte. Que o calor do Sol traga paz a sua alma...`)
                    embeds.setThumbnail("https://images2.imgbox.com/e6/b3/5MS4ub3v_o.png")
                    BFFs(user, bencaoid)
                    interaction.member.roles.add(bencaoid)}
                //COMUNGAR
                if (roletabobby > 1020 && roletabobby <= 1040){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = 990}
                    if (roletabobby >= 1020 && roletabobby <= 1040){
                    embeds.setTitle(`COMUNGAR`)
                    embeds.setDescription(`Essa carta irá trazer uma bênção para todos do servidor, compartilhando entre todos a mais boa e pura bondade, aumentando a sorte das cartas de todos por 60 minutos. Esse evento vai acontecer em 1 minuto...\n\n(Essa sorte acumula com outros status)`)
                    embeds.setThumbnail("https://images2.imgbox.com/f6/d6/vcgIVFvO_o.png")
                    datafrase.eventos.tipo = "bloqueado"
                    datafrase.dados.cartastipoevento++
                    setTimeout(async () => {
                        interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} os próximos 60 minutos TODOS do servidor terão sorte nas cartas. Se divirtam!`)
                        datafrase.eventos.tipo = "comungar"
                        setTimeout(async () => {
                            datafrase.eventos.tipo = "normal"
                            interaction.channel.send(`Tivemos o fim do Comungar... Uma boa sorte a todos!`)
                        }, 3600000);
                    }, 60000 )}}
                //BÊNÇÃO DAS APOSTAS
                if (roletabobby > 1040 && roletabobby <= 1080){
                    embeds.setTitle(`BÊNÇÃO DAS APOSTAS`)
                    embeds.setDescription(`Talvez seja sorte? Ou você é apenas um gnomo ligeiro, mas isso não importa, o que importa é que os jogos do Bobby foram BURLADOS por você.\nEssa carta faz com que você consiga manipular a banca do Bobby, recebendo 25% a mais de dinheiro em suas apostas.`)
                    embeds.setThumbnail("https://images2.imgbox.com/0c/6c/fjJMlCQU_o.png")
                    BFFs(user, burladorid)
                    interaction.member.roles.add(burladorid)}
                //VIGILÂNCIA DIVINA
                if (roletabobby > 1080 && roletabobby <= 1100){
                    embeds.setTitle(`VIGILÂNCIA DIVINA`)
                    embeds.setDescription(`Você está sob bons olhos. Não se preocupe meu jovem, nenhuma maldade passará por aqui. Com essa carta você se torna imune a quaisquer roubos de Status na maioria das cartas do bot.`)
                    embeds.setThumbnail("https://images2.imgbox.com/e1/e3/553Xtw5k_o.png")
                    BFFs(user, vigilanteid)
                    interaction.member.roles.add(vigilanteid)}
                //PROTEÇÃO DE HANAR
                if (roletabobby > 1100 && roletabobby <= 1120){
                    embeds.setTitle(`PROTEÇÃO DE HANAR`)
                    embeds.setDescription(`Hanar, a Deusa da Misericórdia te traz uma Dádiva, uma proteção, igual uma mãe cuidando de sua cria. \nEssa carta faz com que a Hanar te proteja da próxima carta amaldiçoada ou Lunar que pegar, fazendo com que ela se torne uma carta positiva garantida.`)
                    embeds.setThumbnail("https://images2.imgbox.com/e8/db/0gbwRsco_o.png")
                    BFFs(user, bemcuidadoid)
                    interaction.member.roles.add(bemcuidadoid)}
                //TREVO DE 4 FOLHAS DOURADO
                if (roletabobby > 1120 && roletabobby <= 1140){
                    embeds.setTitle(`TREVO DE 4 FOLHAS DOURADO`)
                    embeds.setDescription(`Em um lugar distante, reside um espírito chamado de Tróska. Este espírito traz sorte para todos os aventureiros que chegam no seu recinto.\nEssa carta irá te dar um trevo dourado que é muito comum na moradia de Tróska. Esste Trevo irá multiplicar todos os status de sorte em 10%.`)
                    embeds.setThumbnail("https://images2.imgbox.com/b8/89/v7EZGTBV_o.png")
                    BFFs(user, trevodouradoid)
                    interaction.member.roles.add(trevodouradoid)}
                //LOTERIA
                if (roletabobby > 1140 && roletabobby <= 1299){
                    embeds.setTitle(`LOTERIA`)
                    embeds.setDescription(`Graças ao Sol, você ganhou aquela pequena aposta que havia feito... Quais chances? Não importa, pois tudo isso foi graças ao Sol! Você irá receber 25k de Zens.`)
                    embeds.setThumbnail("https://images2.imgbox.com/d7/8d/iQxN1Lj4_o.png")
                    DINHEIROTESTE(100000)}

            }
            // 4/4 INIGUALAVEL
            if (roletabobby > 980 && roletabobby <= 995){
                const teste100 = getporce(981, 995)
                embeds.setColor("LuminousVividPink")
                embeds.setAuthor({ name: `Inigualável`, iconURL: "https://images2.imgbox.com/d7/ab/HXOLyUa7_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //BOBBYLHÃO
                if (roletabobby > 980 && roletabobby <= 981){
                    embeds.setTitle(`BOBBYLHÃO`)
                    embeds.setDescription(`A comédia é o verdadeiro remédio para essa vida monótona! Essa carta irá convocar um Bobbylhão ou Show do Anfitrião para uma das próximas sessÔes. \nSe o Bobbylhão ou Show do Anfitrião já foram pegados e planejados, essa carta não irá ter efeito.`)
                    embeds.setThumbnail("https://images2.imgbox.com/1d/45/tYT4RBb6_o.png")}
                //EMOTECOLION
                if (roletabobby > 981 && roletabobby <= 985){
                    embeds.setTitle(`EMOTECOLION`)
                    embeds.setDescription(`A sua forma de expressão e criatividade me deixa sem fôlego! Essa carta te dá a chance de escolher um novo emote ou gif para o servidor!`)
                    embeds.setThumbnail("https://images2.imgbox.com/9b/1d/VO4aZWpN_o.png")}
                //PASSA TUDO
                if (roletabobby > 985 && roletabobby <= 990){
                    embeds.setTitle(`PASSA TUDO`)
                    embeds.setDescription(`O caos é o que mantém esse jogo de pé, e você é aquilo que os outros mais detestam! Essa carta faz com que você ROUBE os status positivos de alguma pessoa aleatória do servidor!\n\n(Essa carta só roubará aqueles que possuem status positivos, caso não tenha algum no servidor, ela não funcionará)`)
                    embeds.setThumbnail("https://images2.imgbox.com/9b/3e/BkVAREai_o.png")
                    datafrase.dados.roubos++
                    const guild = interaction.guild;
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                    var contador = 1
                    while(contador != 200){
                        var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                        var member = await guild.members.fetch(randomMeme);
                        contador++
                        if (user != member || member.roles.cache.has(vigilanteid)){
                        if (member.roles.cache.has(divinoid) || member.roles.cache.has(bencaoid) || member.roles.cache.has(entrelaid) || member.roles.cache.has(espelho) || member.roles.cache.has(glorificadoid) || member.roles.cache.has(contigenteid) || member.roles.cache.has(imperadorid) || member.roles.cache.has(rapidoid) || member.roles.cache.has(afortunado) || member.roles.cache.has(coincidenteid) || member.roles.cache.has(venturadoid) || member.roles.cache.has(bemcuidadoid) || member.roles.cache.has(aceleradoid) || member.roles.cache.has(celerissimoid) || member.roles.cache.has(burladorid) || member.roles.cache.has(speedrunnerid) || member.roles.cache.has(entrelaid)
                            || member.roles.cache.has(bffsid) || member.roles.cache.has(trevodouradoid)){
                            contador = 200
                            if (member.roles.cache.has(bencaoid)) {
                                await member.roles.remove(bencaoid);
                                interaction.member.roles.add(bencaoid)};
                            if (member.roles.cache.has(contigenteid)) {
                                await member.roles.remove(contigenteid);
                                interaction.member.roles.add(contigenteid)};
                            if (member.roles.cache.has(venturadoid)) {
                                await member.roles.remove(venturadoid);
                                interaction.member.roles.add(venturadoid)};
                            if (member.roles.cache.has(afortunado)) {
                                await member.roles.remove(afortunado);
                                interaction.member.roles.add(afortunado)};
                            if (member.roles.cache.has(coincidenteid)) {
                                await member.roles.remove(coincidenteid);
                                interaction.member.roles.add(coincidenteid)};
                            if (member.roles.cache.has(rapidoid)) {
                                await member.roles.remove(rapidoid);
                                interaction.member.roles.add(rapidoid)};
                            if (member.roles.cache.has(imperadorid)) {
                                await member.roles.remove(imperadorid);
                                interaction.member.roles.add(imperadorid)};
                            if (member.roles.cache.has(glorificadoid)) {
                                await member.roles.remove(glorificadoid);
                                interaction.member.roles.add(glorificadoid)};
                            if (member.roles.cache.has(entrelaid)) {
                                await member.roles.remove(entrelaid);
                                interaction.member.roles.add(entrelaid)};
                            if (member.roles.cache.has(bemcuidadoid)) {
                                await member.roles.remove(bemcuidadoid);
                                interaction.member.roles.add(bemcuidadoid)};
                            if (member.roles.cache.has(entrelaid)) {
                                await member.roles.remove(entrelaid);
                                interaction.member.roles.add(entrelaid)};
                            if (member.roles.cache.has(protegidoid)) {
                                await member.roles.remove(protegidoid);
                                interaction.member.roles.add(protegidoid)};
                            if (member.roles.cache.has(aceleradoid)) {
                                await member.roles.remove(aceleradoid);
                                interaction.member.roles.add(aceleradoid)};
                            if (member.roles.cache.has(celerissimoid)) {
                                await member.roles.remove(celerissimoid);
                                interaction.member.roles.add(celerissimoid)};
                            if (member.roles.cache.has(speedrunnerid)) {
                                await member.roles.remove(speedrunnerid);
                                interaction.member.roles.add(speedrunnerid)};
                            if (member.roles.cache.has(burladorid)) {
                                await member.roles.remove(burladorid);
                                interaction.member.roles.add(burladorid)};
                            if (member.roles.cache.has(trevodouradoid)) {
                                await member.roles.remove(trevodouradoid);
                                interaction.member.roles.add(trevodouradoid)};
                            if (member.roles.cache.has(bffsid)) {
                                await member.roles.remove(bffsid);
                                interaction.member.roles.add(bffsid)};
                                interaction.channel.send(`A pessoa que roubou os Status de ${member.nickname} foi ${interaction.user}`)
                        }}
                        if (contador == 198){
                            interaction.channel.send(`**⚠ Não existe membros com Status positivos para roubar ⚠**`)
                            contador = 200
                        }}
                        datafrase.infos.espelho = roletabobby
                        writeDataFraseToFile(datafrase)}
                //APOSENTADORIA
                if (roletabobby > 990 && roletabobby <= 995){
                    embeds.setTitle(`APOSENTADORIA`)
                    embeds.setDescription(`A sua aposentadoria chegou mais cedo... Você irá receber 20k de Zens.`)
                    embeds.setThumbnail("https://images2.imgbox.com/fe/6e/3arBwLst_o.png")
                    DINHEIROTESTE(20000)}
                                
            }
            //8/8 MARAVILHOSA
            if (roletabobby > 950 && roletabobby <= 980){
                const teste100 = getporce(951, 980)
                embeds.setColor("Gold")
                embeds.setAuthor({ name: `Maravilhosa`, iconURL: "https://images2.imgbox.com/72/00/9xMmv4Db_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //JOGAR BÊNÇÃO
                if (roletabobby > 950 && roletabobby <= 952){
                    embeds.setTitle(`JOGAR BÊNÇÃO`)
                    const BENÇAOJSON = datafrase.efeitos.persobencao;
                    const randombencao = BENÇAOJSON[Math.floor(Math.random() * BENÇAOJSON.length)];
                    embeds.setDescription(`Você irá receber uma Bênção de um personagem de jogador aleatório deste servidor. \nConsidere essa Bênção como se o seu personagem tivesse acordado muito bem para fazer aquela coisa especifica\n(Está bênção é apenas para uma sessão!)\n\n${randombencao}`)
                    embeds.setThumbnail("https://images2.imgbox.com/24/e4/QhhFHwVH_o.png")}
                //RENDA EXTRA
                if (roletabobby > 952 && roletabobby <= 955){
                    embeds.setTitle(`POUPANÇA RENDEU`)
                    embeds.setDescription(`Aquele dinheiro que sua mãe deixou na sua poupança para que quando você for fazer 21,tenha acesso. PRONTO! Agora gaste todo esse dinheiro em ACTIONS FIGURES DA HATSUNE MIKU!!\n\nVocê irá receber 10k de Zens`)
                    embeds.setThumbnail("https://images2.imgbox.com/79/00/Nul73YJN_o.png")
                    DINHEIROTESTE(10000)}
                //CONTIGENCIA
                if (roletabobby > 955 && roletabobby <= 958){
                    embeds.setTitle(`CONTRA CONTINGÊNCIA CAÓTICA`)
                    embeds.setDescription(`Essa carta faz com que o destino seja quebrado pelo caos, fazendo com que a sua sorte vá para as alturas, te dando uma sorte grande na próxima carta.`)
                    interaction.member.roles.add(contigenteid);
                    BFFs(user, contigenteid)
                    embeds.setThumbnail("https://images2.imgbox.com/81/95/z3hmJNyM_o.png")}
                 //ESPELHO PERFEITO
                 if (roletabobby > 958 && roletabobby <= 962){
                    embeds.setTitle(`ESPELHO PERFEITO`)
                    embeds.setDescription(`Essa carta irá permitir que você possa duplicar a última carta usada. Ou seja, caso a pessoa pegue a carta -Afortunado- e você usar logo em seguida, você pegará a carta -Afortunado-. \n\nPorém, após 2 horas, essa carta perderá o efeito, ou seja, você terá até lá para espelhar a carta de alguém.`)
                    interaction.member.roles.add(espelho);
                    BFFs(user, espelho)
                    embeds.setThumbnail("https://images2.imgbox.com/c8/c5/1WN5CgUN_o.png")
                    setTimeout(() => {
                        user.roles.remove(espelho);
                    }, 7200000);}
                //VELOCIDADE ALÉM DA COMPREENSÃO
                if (roletabobby > 962 && roletabobby <= 967){
                    embeds.setTitle(`VELOCIDADE ALÉM DA COMPREENSÃO`)
                    embeds.setDescription(`Essa carta faz com que você receba uma velocidade nas cartas tão alta que meros mortais nem vêem você jogando. Essa carta irá dar os status de SpeedRunner (3.0x).`)
                    embeds.setThumbnail("https://images2.imgbox.com/80/82/lc0MV5g7_o.png")
                    if(!user.roles.cache.has(rapidoid) && !user.roles.cache.has(celerissimoid) && !user.roles.cache.has(aceleradoid) && !user.roles.cache.has(heronosid)){
                        interaction.member.roles.add(speedrunnerid)
                        BFFs(user, speedrunnerid)}
                    user.roles.remove(rapidoid)
                    user.roles.remove(celerissimoid)
                    user.roles.remove(aceleradoid)
                    user.roles.remove(lerdoid)
                    user.roles.remove(preguicosoid)
                    user.roles.remove(letargicoid)}
                //BEST FRIENDS FOREVER!
                if (roletabobby > 967 && roletabobby <= 970){
                    embeds.setTitle(`BEST FRIENDS FOREVER!`)
                    embeds.setDescription(`Nós somos Melhores amigos! Está escrito nas estrelas!\nA carta irá pegar uma pessoa aleatória e fazer ela ser sua bestie. Ao estarem com cargos de Besties, vocês irão compartilhar TODOS os status positivos (Menos efeitos Solares) que um dos dois pegarem em cartas.\n\nBFFS❤`)
                    embeds.setThumbnail("https://images2.imgbox.com/6a/6f/BWObMIz1_o.png")
                    const guild = interaction.guild;
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                    var contador = 1
                    interaction.member.roles.add(bffsid);
                    while(contador != 100){
                        var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                        var member = await guild.members.fetch(randomMeme);
                        contador++
                        if (user != member || !member.roles.cache.has(bffsid)){
                            member.roles.add(bffsid)
                            interaction.channel.send(`🎉 ${member.user.tag} recebeu o cargo!`);
                            contador = 100
                        if (contador == 98){
                            interaction.channel.send(`**⚠ Não existe pessoas que queiram ser seu amigo⚠**`)
                            contador = 100
                            }
                        }}}
                //Higienização de Impurezas
                if (roletabobby > 970 && roletabobby <= 975){
                    embeds.setTitle(`HIGIENIZAÇÃO DE IMPUREZAS`)
                    embeds.setDescription(`Essa carta irá limpar todas as impurezas que você tem. Ela irá tirar todos os status negativos do seu perfil`)
                    embeds.setThumbnail("https://images2.imgbox.com/4d/4e/gZbo71Q5_o.png")
                    TIRARNEGATIVO()}
                 //ESTRELA CADENTE
                 if (roletabobby > 975 && roletabobby <= 980){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = 901}
                    if (roletabobby >= 975 && roletabobby <= 980){
                    embeds.setTitle(`ESTRELAS CADENTES`)
                    embeds.setDescription(`É muito comum cair fragmentos Solares no nosso mundo. Muitas pessoas chamam esses fragmentos de Estrelas Cadentes e todos aqueles que acabam, por alguma sorte, vendo um, ganhará sorte até o final de suas vidas.\n\nEssa carta irá começar um evento em 1 minuto, onde todas as pessoas terão 10% de chance de ver uma Estrela Cadente, ganhando sorte Grande na carta. \n\nO evento tem duração de 60 minutos...`)
                    embeds.setThumbnail("https://images2.imgbox.com/5c/aa/vb9SJvoe_o.png")
                    datafrase.eventos.tipo = "bloqueado"
                    datafrase.dados.cartastipoevento++
                    setTimeout(async () => {
                        interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} os próximos 60 minutos terão chance de cair uma estrela cadente!`)
                        datafrase.eventos.tipo = "estrela"
                        setTimeout(async () => {
                            datafrase.eventos.tipo = "normal"
                            interaction.channel.send(`Tivemos o fim das ESTRELAS CADENTES... Fragmentos Solares indicam uma boa sorte até o final da vida!`)
                        }, 3600000);
                    }, 60000 )}}

            }
            //12/12 SUPERIOR
            if (roletabobby > 900 && roletabobby <= 950){
                const teste100 = getporce(901, 950)
                embeds.setColor("DarkAqua")
                embeds.setAuthor({ name: `Superior`, iconURL: "https://images2.imgbox.com/e5/71/fFV7HGgZ_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //GLORIFICAR
                if (roletabobby > 900 && roletabobby <= 904){
                    embeds.setTitle(`GLORIFICAÇÃO`)
                    embeds.setDescription(`Essa carta serve para mostrar o quão perfeitx você é. \nO ${interaction.user} é admirável, agradável, alegre, amável, apaixonante, apreciável, arrojado, astuto, autêntico, bem-humorado, bondoso, brilhante, carinhoso, carismático, cativante, competente, confiável, corajoso, criativo, culto, dedicado, determinado, digno, diplomático, dinâmico, doce, educado, eficaz, eficiente, elegante, emocionante, encantador, engenhoso, entusiasta, equilibrado, espetacular, espirituoso, esplêndido, estimado, ético, excepcional, exemplar, exímio, extraordinário, fabuloso, fantástico, fiel, forte, formidável, generoso, genial, gentil, gracioso, grandioso, heroico, honesto, honrado, íntegro, inovador, inspirador, inteligente, íntimo, irresistível, jovial, justo, leal, lindo, lúcido, magnífico, maravilhoso, memorável, meticuloso, notável, nobre, obstinado, original, otimista, paciente, perceptivo, perfeito, perseverante, perspicaz, ponderado, positivo, precioso, prestativo, primoroso, proativo, prodigioso, proeminente, prudente, puro, querido, radiante, realista, refinado, resiliente, resoluto, respeitável, responsável, rigoroso, sagaz, sábio, seguro, sensato, sensível, sereno, simpático, singular, solidário, sublime, talentoso, tenaz, tolerante, triunfante, único, valente, valoroso, versátil, virtuoso, visionário, vivaz, vigoroso, vitorioso e zeloso!\n\nEspero que tenha um dia perfeito, e para ajudar, irei te Glorificar, pois você merece😘. Sua próxima carta será de raridade 100% como POSITIVA.`)
                    embeds.setThumbnail("https://images2.imgbox.com/99/f0/lZVdpFme_o.png")
                    BFFs(user, glorificadoid)
                    interaction.member.roles.add(glorificadoid)}
                //AJUDANTE DO POVO
                if (roletabobby > 904 && roletabobby <= 908){
                    embeds.setTitle(`AJUDANTE DO POVO`)
                    embeds.setDescription(`Você é a verdadeira bondade pura! Você irá dar sorte média para todos do servidor!`)
                    embeds.setThumbnail("https://images2.imgbox.com/2e/b0/W0BrGezh_o.png")
                    const guild = interaction.guild;
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                    var contador = 1
                    while(contador != 200){
                        var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                        var member = await guild.members.fetch(randomMeme);
                        contador++
                        member.roles.add(afortunado)}}
                //POTE DE OURO
                if (roletabobby > 908 && roletabobby <= 912){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = 900}
                    if (roletabobby >= 910 && roletabobby <= 915){
                    embeds.setTitle(`POTE DE OURO`)
                    embeds.setDescription(`Existe uma lenda de uma pequena divindade que esconde todo o seu dinheiro no fim de um arco íris...\n\nEssa carta irá começar um evento em 1 minuto, onde todas as pessoas terão 10% de chance de achar um pote de ouro, ganhando 5k de ZENs. \n\nO evento tem duração de 60 minutos...`)
                    embeds.setThumbnail("https://images2.imgbox.com/a0/7b/sEYfVoES_o.png")
                    datafrase.eventos.tipo = "bloqueado"
                    datafrase.dados.cartastipoevento++
                    setTimeout(async () => {
                        interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} os próximos 60 minutos terão chance de achar um pote de ouro!`)
                        datafrase.eventos.tipo = "pote"
                        setTimeout(async () => {
                            datafrase.eventos.tipo = "normal"
                            interaction.channel.send(`Tivemos o fim do POTE DE OURO...`)
                        }, 3600000);
                    }, 60000 )}}
                //AFORTUNADO
                if (roletabobby > 912 && roletabobby <= 916){
                    embeds.setTitle(`AFORTUNADA`)
                    embeds.setDescription(`Essa carta traz a fortuna, te dando uma sorte média na próxima carta`)
                    interaction.member.roles.add(afortunado);
                    BFFs(user, afortunado)
                    embeds.setThumbnail("https://images2.imgbox.com/dc/6f/CLWIIy4j_o.png")}
                //RAPI E DASH
                if (roletabobby > 916 && roletabobby <= 920){
                    embeds.setTitle(`RAPI E DASH`)
                    embeds.setDescription(`Essa carta faz com que você seja tão rápido nas cartas que chamas aparecem em suas mãos, um verdadeiro diabo das apostas. \nO Cooldown do bot para você é diminuido em 2x a partir de agora e caso tenha pego algum status de lerdeza, ele será apagado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/0c/43/n0mab3pK_o.png")
                    await user.roles.remove(rapidoid)
                    await user.roles.remove(lerdoid)
                    await user.roles.remove(preguicosoid)
                    await user.roles.remove(letargicoid)
                    if(!user.roles.cache.has(rapidoid) && !user.roles.cache.has(celerissimoid) && !user.roles.cache.has(speedrunnerid) && !user.roles.cache.has(heronosid)){
                        interaction.member.roles.add(aceleradoid)
                        BFFs(user, aceleradoid)}}
                //XLR8
                if (roletabobby > 920 && roletabobby <= 924){
                    embeds.setTitle(`XLR8`)
                    embeds.setDescription(`յყ ﻨร รօ νﻨռռﻨց ժձէ յყ ռﻨε εεгร հﻨεгժﻨε աօօгժε ĸձռ lεεร ռﻨε, հսllε ﻨร รօ օռժսﻨժεlﻨĸ. \nO Cooldown do bot para você é diminuido em 2.5x a partir de agora e caso tenha pego algum status de lerdeza, ele será apagado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/c3/a5/6Ieqw0b2_o.png")
                    await user.roles.remove(rapidoid)
                    await user.roles.remove(aceleradoid)
                    await user.roles.remove(lerdoid)
                    await user.roles.remove(preguicosoid)
                    await user.roles.remove(letargicoid)
                    if(!user.roles.cache.has(rapidoid) && !user.roles.cache.has(aceleradoid) && !user.roles.cache.has(speedrunnerid) && !user.roles.cache.has(heronosid)){
                    interaction.member.roles.add(celerissimoid)}}
                //COFRE DA DINASTIA
                if (roletabobby > 924 && roletabobby <= 927){
                    embeds.setTitle(`COFRE DA DINASTIA`)
                    embeds.setDescription(`Essa carta te permite acessar o Cofre dos Reis de Aystea através do poder de Bobby. Ao acessar, a carta irá rolar 1d20, tendo essas opções:\n\n-Caso caia valores maiores que 1 e menores que 20, você irá dobrar o valor dentro do cofre\n-Caso caia 1 você irá resetar todo o valor dentro do cofre\n-Caso caia 20 você irá pegar o valor para você e será resetado).\n\n\nTABELA DE PREÇOS:\n\n🟩 1 a 16 JONS: Sorte Minuscula\n🟩 32 a 256 JONS:Sorte Pequena\n🟩 512 a 2048 JONS: Sorte Média\n🟩 4096 a 16384 JONS: Sorte Grande\n🟩 32768 JONS para cime: Sorte Grande + Sorte pela quantidade de dinheiro\n\n🟦 Preço atual: ${datafrase.infos.dinastia} JONS`)
                    embeds.setThumbnail("https://images2.imgbox.com/e9/ad/Oz4ELYJz_o.png")
                    const dados = Math.floor(Math.random() * 20) + 1;
                    interaction.channel.send(`**${dados}**  ⟵ [${dados}] 1d20`);
                    if (dados == 1){
                        datafrase.infos.dinastia = 1
                        var testopadrao = `Graças ao ${interaction.user} o dinheiro do banco foi zerado! `
                    }
                    if (dados == 20){
                        var testopadrao = `# A PESSOA QUE CONSEGUIU O COFRE FOI... ${interaction.user}! Você conseguiu ${datafrase.infos.dinastia} JONS e poderá comprar: `
                        datafrase.dados.cofredragao++
                        if (datafrase.infos.dinastia >= 1 && datafrase.infos.dinastia <= 16){
                            testopadrao = testopadrao + `Sorte Minuscula!`
                            interaction.member.roles.add(coincidenteid)
                            BFFs(user, coincidenteid);
                        }
                        if (datafrase.infos.dinastia >= 17 && datafrase.infos.dinastia <= 256){
                            testopadrao = testopadrao + `Sorte Pequena!`
                            interaction.member.roles.add(venturadoid)
                            BFFs(user, venturadoid);
                        }
                        if (datafrase.infos.dinastia >= 257 && datafrase.infos.dinastia <= 2048){
                            testopadrao = testopadrao + `Sorte Média!`
                            interaction.member.roles.add(afortunado)
                            BFFs(user, afortunado);
                        }
                        if (datafrase.infos.dinastia >= 2049 && datafrase.infos.dinastia <= 16384){
                            testopadrao = testopadrao + `Sorte Grande!`
                            interaction.member.roles.add(contigenteid)
                            BFFs(user, contigenteid);
                        }
                        if (datafrase.infos.dinastia >= 16385){
                            testopadrao = testopadrao + `Sorte Constante!`
                            interaction.member.roles.add(imperadorid);
                            imperador = datafrase.infos.dinastia
                        }
                        datafrase.infos.dinastia = 1
                    }
                    if (dados >= 2 && dados <= 19){
                        datafrase.infos.dinastia = datafrase.infos.dinastia * 2
                        writeDataFraseToFile(datafrase)
                        var testopadrao = `Graças ao ${interaction.user} o dinheiro foi duplicado! Agora ele tem ${datafrase.infos.dinastia} JONS`
                    }interaction.channel.send(testopadrao)}
                //ÁGUA PURA
                if (roletabobby > 927 && roletabobby <= 930){
                    embeds.setTitle(`ÁGUA PURA`)
                    embeds.setDescription(`Essa carta irá te dar a água mais pura de todo o mundo! Caso você tenha pego a carta *Dor no RIm* e a sessão ainda não ocorreu, você poderá anular totalmente o dano. Caso você tenha pego *Dor no Rim* ela irá anular a próxima *Dor no Rim* (Não acumula)`)
                    embeds.setThumbnail("https://images2.imgbox.com/bb/3c/YGalobRk_o.png")}
                //EVENTUALIDADE
                if (roletabobby > 930 && roletabobby <= 934){
                    embeds.setTitle(`EVENTUALIDADE`)
                    embeds.setDescription(`Essa carta irá te dar uma Sorte Eventual. Com este efeito você terá 25% de chance de receber uma sorte média toda vez que jogar no Risorius`)
                    embeds.setThumbnail("https://images2.imgbox.com/bb/3c/YGalobRk_o.png")
                    interaction.member.roles.add(Eventualid);
                    BFFs(user, Eventualid)
                }
                //PRIMEIRA ESTACA
                if (roletabobby > 934 && roletabobby <= 940){
                    embeds.setTitle(`PRIMEIRA ESTACA`)
                    embeds.setDescription(`Essa carta irá te colocar na primeira estaca, tirando todos os seus status e colocando um novo status de sorte aleatório.`)
                    embeds.setThumbnail("https://images2.imgbox.com/bb/3c/YGalobRk_o.png")
                    if(!(user.roles.cache.has(protegidoid))) {
                        TIRARPOSITIVO()
                        TIRARNEGATIVO()
                    }else{
                        user.roles.remove(protegidoid)
                        interaction.channel.send(`${interaction.user}, sua proteção foi gastada!`)}
                    const randomItem = RANDOMPOSITIVO(listapositiva);
                    interaction.member.roles.add(randomItem);
                    BFFs(user, randomItem)}
                //RENDA EXTRA
                if (roletabobby > 940 && roletabobby <= 946){
                    embeds.setTitle(`RENDA EXTRA`)
                    embeds.setDescription(`Essa carta vai te dar uma renda extra para sua vida. Você irá ganhar 10k Zens.`)
                    embeds.setThumbnail("https://images2.imgbox.com/45/dd/yNdBaPOt_o.png")
                    DINHEIROTESTE(5000)}
                //GRAVIDADE INVERTIDA   
                if (roletabobby > 946 && roletabobby <= 950){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = 900}
                    if (roletabobby >= 942 && roletabobby <= 950){
                    embeds.setTitle(`GRAVIDADE INVERTIDA`)
                    embeds.setDescription(`Essa carta irá quebrar a gravidade do servidor por 60 minutos, fazendo com que suas cartas sejam totalmente opostas. Esse evento vai acontecer em 1 minuto...`)
                    embeds.setThumbnail("https://images2.imgbox.com/96/76/OAfyzC4U_o.png")
                    datafrase.eventos.tipo = "bloqueado"
                    datafrase.dados.cartastipoevento++
                    setTimeout(async () => {
                        interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} os próximos 60 minutos terão a sorte invertida!`)
                        datafrase.eventos.tipo = "gravidade"
                        setTimeout(async () => {
                            datafrase.eventos.tipo = "normal"
                            interaction.channel.send(`Tivemos o fim do GRAVIDADE INVERTIDA... Os cientistas finalmente conseguiram arrumar a gravidade do servidor!`)
                        }, 3600000);
                    }, 60000 )}}
            }
            //9/16 BENÉVOLA
            if(roletabobby > 750 && roletabobby <= 900){
                const teste100 = getporce(751, 900)
                embeds.setColor("DarkBlue")
                embeds.setAuthor({ name: `Benévola`, iconURL: "https://images2.imgbox.com/6d/fc/AEsRWlSK_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //GABRIEX10
                if (roletabobby > 750 && roletabobby <= 771){
                    embeds.setTitle(`VOLTA EX`)
                    embeds.setDescription(`Essa carta traz a presença do Gabriel, a maior incógnita do mundo, fazendo com que a sua próxima carta tenha sorte 69 ou azar 69`)
                    interaction.member.roles.add(id69);
                    BFFs(user, id69)
                    embeds.setThumbnail("https://images2.imgbox.com/7a/4e/xKLFDbI2_o.png")}
                //COINCIDÊNCIA
                if (roletabobby > 771 && roletabobby <= 792){
                    embeds.setTitle(`COINCIDÊNCIA`)
                    embeds.setDescription(`Essa carta irá te dar uma sorte minuscula na próxima carta`)
                    interaction.member.roles.add(coincidenteid);
                    BFFs(user, coincidenteid)
                    embeds.setThumbnail("https://images2.imgbox.com/0a/8f/k7xSyS41_o.png")}
                //Rabo de Sorte
                if (roletabobby > 792 && roletabobby <= 813){
                    embeds.setTitle(`RABO DE SORTE`)
                    embeds.setDescription(`Essa carta traz uma pequena Ventura, te dando uma pequena sorte na próxima carta`)
                    interaction.member.roles.add(venturadoid);
                    BFFs(user, venturadoid)
                    embeds.setThumbnail("https://images2.imgbox.com/f5/1c/1lbfJ92o_o.png")}
                //LAÇOS DA SORTE
                if (roletabobby > 813 && roletabobby <= 834){
                        embeds.setTitle(`LAÇOS DA SORTE`)
                        embeds.setDescription(`Essa carta irá criar um laço, fazendo com que você tenha uma sorte compartilhada. Caso alguém caia nessa carta, ela irá jogar 4d4 e o valor que cair será a quantidade de vezes com sorte pequena que serão adicionados. Todos que tiverem o Status de Entrelaçado terão essa sorte, não importando se foi você que aumentou ou não o tempo de duração dela. \nTodos vocês estão ligados pelo destino...`)
                        embeds.setThumbnail("https://images2.imgbox.com/e3/a4/QbItKnVv_o.png")
                        const dados = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
                        interaction.channel.send(`**${dados}**  ⟵ [${dados}] 6d6`);
                        datafrase.infos.laços = dados + datafrase.infos.laços
                        interaction.member.roles.add(entrelaid);
                        BFFs(user, entrelaid)
                        setTimeout(() => {
                            interaction.channel.send(`${interaction.user} aumentou a duração dos Laços da sorte em: ${dados} vezes\nAtualmente o valor é de: ${datafrase.infos.laços}`)
                        }, 2000)}
                //ESCUDO NULO
                if (roletabobby > 834 && roletabobby <= 845){
                    embeds.setTitle(`ESCUDO NULO`)
                    embeds.setDescription(`Essa carta irá te dar uma defesa para a próxima carta do tipo que anulam status. Funciona apenas uma vez\n\n(Lunar e Solar são imunes a essa defesa)`)
                    embeds.setThumbnail("https://images2.imgbox.com/74/e6/kxRaroOe_o.png")
                    BFFs(user, protegidoid)
                    interaction.member.roles.add(protegidoid)}
                //GANHA PÃO
                if (roletabobby > 845 && roletabobby <= 855){
                    embeds.setTitle(`GANHA PÃO`)
                    embeds.setDescription(`Essa carta vai te dar um pequeno dinheiro para te ajudar. Você irá ganhar 2.5k Zens.`)
                    embeds.setThumbnail("https://images2.imgbox.com/1f/e0/QHUpG8va_o.png")
                    DINHEIROTESTE(2500)}
                //COLAPSO GRAVITACIONAL
                if (roletabobby > 855 && roletabobby <= 876){
                    embeds.setTitle(`COLAPSO GRAVITACIONAL`)
                    embeds.setDescription("˙ɔʇǝ 'ɐpɐunʇɹoɟuı ɐɹɐd ɐןoʌǝ̗uǝq 'opɐoɔıpןɐɯɐ ɐɹɐd opıʇɹǝʌuoɔ ɐ̗ɹǝs ouıʌıp ɯn ɹɐɹıʇ 'ɐɾǝs no 'ɐpıʇɹǝʌuı ɐ̗ɹǝs ɐʇɹɐɔ ɐɯıxo̗ɹd ɐns ∀ ˙ɐpıʇɹǝʌuı ɐɾǝs ǝpɐpıʌɐɹƃ ɐ ǝnb ɯoɔ ɐ̗ɹɐɟ ɐʇɹɐɔ ɐssƎ")
                    embeds.setThumbnail("https://images2.imgbox.com/ed/c4/JIMtv0DR_o.png")
                    BFFs(user, contracaoid)
                    interaction.member.roles.add(contracaoid)}
                //RAPIDINHO
                if (roletabobby > 876 && roletabobby <= 888){
                    embeds.setTitle(`VÍCIO VELOZ`)
                    embeds.setDescription(`Essa carta faz com que você seja mais rápido nas cartas. \nO Cooldown do bot para você é diminuido em 1.5x a partir de agora e caso tenha pego algum status de lerdeza, ele será apagado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/e4/22/zCppWMmG_o.png")
                    if(!user.roles.cache.has(aceleradoid) && !user.roles.cache.has(celerissimoid) && !user.roles.cache.has(speedrunnerid) && !user.roles.cache.has(heronosid)){
                    interaction.member.roles.add(rapidoid)
                    BFFs(user, rapidoid)}
                    user.roles.remove(lerdoid)
                    user.roles.remove(preguicosoid)
                    user.roles.remove(letargicoid)}
                //SORTE POSITIVA
                if (roletabobby > 888 && roletabobby <= 900){
                    embeds.setTitle(`SORTE POSITIVA`)
                    embeds.setDescription(`Você quer ter sorte agora ou daqui 5 minutinhos?\n Essa carta irá ter 50% de chance de te dar uma sorte média daqui 5 minutos`)
                    var teste4 = Math.floor(Math.random() * 10) + 1;
                    embeds.setThumbnail("https://images2.imgbox.com/1e/df/Ung4ck95_o.png")
                    if(teste4 > 4){
                        setTimeout(() => {
                            interaction.member.roles.add(afortunado);
                            BFFs(user, afortunado)
                        }, 300000);
                    }}  
            }
            //35 COMUM (300-750)
            if(roletabobby > 300 && roletabobby <= 700){
                const teste100 = getporce(300, 750)
                embeds.setColor("Grey")
                embeds.setAuthor({ name: `Comum`, iconURL: "https://images2.imgbox.com/fc/a3/OhwSEVlM_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //NORMALIZATOR
                if (roletabobby > 300 && roletabobby <= 310){
                    embeds.setTitle(`NORMALIZATOR`)
                    embeds.setDescription(`Essa carta irá fazer com que a sua próxima carta tenha uma chance mediana de ser comum`)
                    embeds.setThumbnail("https://images2.imgbox.com/cb/dd/WM5zB9Gy_o.png")
                    interaction.member.roles.add(normalzizadoid)}
                //JOGO DE CARTAS
                if (roletabobby > 310 && roletabobby <= 320){
                    embeds.setTitle(`JOGO DE CARTAS`)
                    embeds.setDescription(`Essa carta irá pegar um desenho de uma carta aleatória do Risorius. Tendo um total de ${totalcartas} cartas atualmente!`)
                    embeds.setThumbnail("https://images2.imgbox.com/e0/9d/vHZOkLlp_o.png")
                    const CARTAIMAEGEM = dataimagem.risorius.cartas;
                    const randomcarta = CARTAIMAEGEM[Math.floor(Math.random() * CARTAIMAEGEM.length)];
                    embeds.setImage(randomcarta)}
                //ITENATOR
                if (roletabobby > 320 && roletabobby <= 330){
                    embeds.setTitle(`ITENATOR`)
                    const NOMESJSON = datafrase.nomes.itens;
                    const randomitem = NOMESJSON[Math.floor(Math.random() * NOMESJSON.length)];
                    embeds.setDescription(`Essa carta irá buscar um item aleatório de todas as Campanhas de RPG dentro deste Servidor!\n\n${randomitem}`)
                    embeds.setThumbnail("https://images2.imgbox.com/8a/e0/i63K2YnM_o.png")}
                //NERDIE
                if (roletabobby > 330 && roletabobby <= 345){
                    embeds.setTitle(`NERDIE`)
                    embeds.setDescription(`Essa carta irá buscar um travesseiro com uma <3-Waifu-Ɛ> aleatória que com certeza o Paulo teria em seu quarto.`)
                    embeds.setThumbnail("https://images2.imgbox.com/55/23/DleZKmga_o.png")
                    const WAIFUIMAGEM = dataimagem.risorius.paulowaifus;
                    const randomwaifu = WAIFUIMAGEM[Math.floor(Math.random() * WAIFUIMAGEM.length)];
                    embeds.setImage(randomwaifu)}
                //ZÉ NINGUÉM
                if (roletabobby > 345 && roletabobby <= 360){
                    embeds.setTitle(`ZÉ NINGUÉM`)
                    embeds.setDescription(`Essa carta vale absolutamente nada.`)
                    if(user.roles.cache.has(imaculadoid)){
                        interaction.member.roles.add(bencaoid)
                    }
                    embeds.setThumbnail("https://images2.imgbox.com/38/4d/nCqbpakd_o.png")}
                //MUSICAN LETÓRIAN
                if (roletabobby > 360 && roletabobby <= 375){
                    embeds.setTitle(`MUSICAN LETÓRIAN`)
                    embeds.setDescription(`Essa carta fará uma magia que irá trazer uma playlist aleatóriado Spotify.`)
                    embeds.setThumbnail("https://images2.imgbox.com/73/1a/xQO4w8QA_o.png")
                    const PLAYLISTS = datafrase.outros.playlists;
                    const randomplaylist = PLAYLISTS[Math.floor(Math.random() * PLAYLISTS.length)];
                    setTimeout(() => {
                        interaction.channel.send(randomplaylist)
                    }, 1500);}
                //DUELO DE LENDAS
                if (roletabobby > 375 && roletabobby <= 390){
                    embeds.setTitle(`DUELO DAS LENDAS`)
                    embeds.setDescription(`Essa carta irá pegar um personagem aleatório de todas as campanhas e fará ele lutar contra outro personagem. ESCOLHA O MAIS FORTE!\n\n(Obs: Essa carta é feita puramente para o entreterimento, caso você leve a sério e comece a nerdar e brigar saiba que está passando vergonha.)`)
                    embeds.setThumbnail("https://images2.imgbox.com/e2/60/ZHidv4jR_o.png")
                    const LENDAS = datafrase.nomes.personagens;
                    const duelo1 = LENDAS[Math.floor(Math.random() * LENDAS.length)];
                    const duelo2 = LENDAS[Math.floor(Math.random() * LENDAS.length)];
                    const infoddoduelo = datafrase.outros.batalhas;
                    const infoduelo = infoddoduelo[Math.floor(Math.random() * infoddoduelo.length)];
                    const DUELO = new EmbedBuilder()
                        .setColor("Random")
                        .setTitle(`${duelo1} VS ${duelo2}`)
                        .addFields({ name: "Combate:", value: `${infoduelo}`})
                    interaction.channel.send({ embeds: [DUELO]})}
                //MAGIA DOS MEMES
                if (roletabobby > 390 && roletabobby <= 405){
                    embeds.setTitle("MEMEN ALEATÓRION")
                    embeds.setDescription("Essa carta lança uma magia que faz um meme aleatório")
                    embeds.setThumbnail("https://images2.imgbox.com/9c/47/NwK4NhNi_o.png")
                    const memeimagem = dataimagem.imagens.memes;
                    const randommeme = memeimagem[Math.floor(Math.random() * memeimagem.length)];
                    embeds.setImage(randommeme)}
                //PIETRO LUDWIG BULLYWUG II
                if (roletabobby > 405 && roletabobby <= 420){
                    embeds.setTitle("PIETRO LUDWIG BULLYWUG II")
                    datafrase.dados.pietrosapo++
                    embeds.setDescription("Essa carta irá te lembrar de que o Pietro, em algum lugar, é um sapo.")
                    embeds.setThumbnail("https://images2.imgbox.com/46/e0/0Gf5o4qP_o.png")}
                //HATSUNE MIKU
                if (roletabobby > 420 && roletabobby <= 435){
                    datafrase.dados.hatsune++
                    embeds.setTitle("HATSUNE MIKU")
                    embeds.setDescription("Essa carta irá te lembrar de que a Hatsune Miku existe e que você deve agradecer que ela existe no mesmo mundo que você.")
                    embeds.setThumbnail("https://images2.imgbox.com/84/bb/1qd4sntW_o.png")
                    const suneimagem = dataimagem.risorius.miku;
                    const randomsune = suneimagem[Math.floor(Math.random() * suneimagem.length)];
                    embeds.setImage(randomsune)}
                //PLAYMEMER
                if (roletabobby > 435 && roletabobby <= 442){
                    embeds.setTitle("PLAYMEMER")
                    embeds.setDescription("Essa carta serve para zoar com a cara dos jogadores, lançando um meme aleatório das campanhas.")
                    embeds.setThumbnail("https://images2.imgbox.com/ad/4f/nnxnqeQq_o.png")
                    const playersmemes = dataimagem.risorius.memesplayers;
                    const randommemeplayers = playersmemes[Math.floor(Math.random() * playersmemes.length)];
                    embeds.setImage(randommemeplayers)}
                //LOCALIZATOR
                if (roletabobby > 442 && roletabobby <= 450){
                    embeds.setTitle(`LOCALIZATOR`)
                    const locais = datafrase.nomes.Localizator;
                    const localrandom = locais[Math.floor(Math.random() * locais.length)];
                    embeds.setDescription(`Essa carta irá puxar um dispositivo localizador e pegar uma localização aleatória que os players estiveram durante as sessões de RPG!\n\n${localrandom}`)
                    embeds.setThumbnail("https://images2.imgbox.com/f5/44/m1CmFWNG_o.png")}
                //ANIMAIS FOFOS
                if (roletabobby > 450 && roletabobby <= 465){
                    embeds.setTitle("AI CUTI CUTI")
                    embeds.setDescription("Essa carta irá te dar uma imagem aleatória de um animal fofo.")
                    embeds.setThumbnail("https://images2.imgbox.com/9f/ed/Ape1ssWO_o.png")
                    const animais = dataimagem.imagens.animais;
                    const randomanimais = animais[Math.floor(Math.random() * animais.length)];
                    embeds.setImage(randomanimais)}
                //PALAVRAO
                if (roletabobby > 465 && roletabobby <= 475){
                    embeds.setTitle("PALAVRÃO")
                    const palavrao = datafrase.outros.palavrao;
                    const randompalavrao = palavrao[Math.floor(Math.random() * palavrao.length)];
                    embeds.setDescription(`Essa carta irá te dar um PALAVRÃO!\n\n${randompalavrao}`)
                    embeds.setThumbnail("https://images2.imgbox.com/ae/03/j8cOmUb8_o.png")}
                //MALDI-ÇO-NAR
                if (roletabobby > 475 && roletabobby <= 485){
                    embeds.setTitle("MALDI-ÇO-NAR")
                    const maldiconar = dataimagem.risorius.maldiçonar;
                    const randommaldi = maldiconar[Math.floor(Math.random() * maldiconar.length)];
                    embeds.setDescription(`Essa carta irá lançar uma maldição aleatória no universo de Noite Escura!`)
                    embeds.setThumbnail("https://images2.imgbox.com/eb/29/8LG0w5GP_o.png")
                    embeds.setImage(randommaldi)}
                //TOKENATOR
                if (roletabobby > 485 && roletabobby <= 495){
                    embeds.setTitle("TOKENATOR")
                    const token = dataimagem.risorius.tokens;
                    const randomtoken = token[Math.floor(Math.random() * token.length)];
                    embeds.setDescription(`Essa carta irá lançar um ritual que irá trazer um Token aleatório de todas as campanhas!`)
                    embeds.setThumbnail("https://images2.imgbox.com/fe/88/F0rcIljP_o.png")
                    embeds.setImage(randomtoken)}
                //CASAL DO ANO
                if (roletabobby > 495 && roletabobby <= 510){
                    embeds.setTitle("CASAIS DO ANO")
                    embeds.setDescription("Essa carta traz uma imagem aleatória dos ships que existem para lembrar dos maiores casais que já existiram.")
                    embeds.setThumbnail("https://images2.imgbox.com/5e/da/TnuhISjW_o.png");
                    const ships = dataimagem.risorius.ships;
                    const randomship = ships[Math.floor(Math.random() * ships.length)];
                    embeds.setImage(randomship)}
                //PERSONAGEM ALEATÓRIO
                if (roletabobby > 510 && roletabobby <= 525){
                    embeds.setTitle("FIGURA MISTERIOSA")
                    embeds.setDescription("Essa carta serve para deixar registrado a existência de cada ser. Ela irá trazer um personagem aleatório de uma das campanhas feitas até agora.")
                    embeds.setThumbnail("https://images2.imgbox.com/64/f2/z1yOcYWg_o.png");
                    const figuras = dataimagem.risorius.figura;
                    const randomfigura = figuras[Math.floor(Math.random() * figuras.length)];
                    embeds.setImage(randomfigura)}
                //CARTA PEQUENA
                if (roletabobby > 525 && roletabobby <= 530){
                    embeds.setTitle("ᵐᶦⁿᶦ ᶜᵃʳᵗᵃ")
                    embeds.setDescription("ᴱˢˢᵃ ᶜᵃʳᵗᵃ ᵉ́ ᵐᵘᶦᵗᵒ ᵖᵉᑫᵘᵉⁿᵃ")
                    embeds.setThumbnail("https://images2.imgbox.com/ae/3d/4VcQTjMJ_o.png")}
                //CARTA BONITA
                if (roletabobby > 530 && roletabobby <= 535){
                    embeds.setTitle("𝕮𝖆𝖗𝖙𝖆 𝕭𝖔𝖓𝖎𝖙𝖆")
                    embeds.setDescription("𝕰𝖘𝖘𝖆 𝖈𝖆𝖗𝖙𝖆 𝖊́ 𝖒𝖚𝖎𝖙𝖔 𝖇𝖔𝖓𝖎𝖙𝖆!")
                    embeds.setThumbnail("https://images2.imgbox.com/15/e2/VocL118D_o.png")}
                //CARTA GIGANTE
                if (roletabobby > 535 && roletabobby <= 540){
                    embeds.setTitle("𝐂 𝐀 𝐑 𝐓 𝐀  𝐆 𝐈 𝐆 𝐀 𝐍 𝐓 𝐄")
                    embeds.setDescription("𝐄\n𝐒\n𝐒\n𝐀\n\n𝐂\n𝐀\n𝐑\n𝐓\n𝐀\n\n𝐄́\n\n𝐌\n𝐔\n𝐈\n𝐓\n𝐎\n\n𝐆\n𝐈\n𝐆\n𝐀\n𝐍\n𝐓\n𝐄")
                    embeds.setThumbnail("https://images2.imgbox.com/fc/a3/OhwSEVlM_o.png")}
                //LEITURA MOMENTO
                if (roletabobby > 540 && roletabobby <= 554){
                    embeds.setTitle("LEITURA MOMENTO")
                    embeds.setDescription("Essa carta irá magicamente te dar um documento aleatório de todas as campanhas. Hora de Refrescar a lore😉")
                    embeds.setThumbnail("https://images2.imgbox.com/36/f1/5LRCNsVC_o.png")
                    const documentos = dataimagem.imagens.documentos;
                    const randomdocumento = documentos[Math.floor(Math.random() * documentos.length)];
                    embeds.setImage(randomdocumento)}
                //ADOÇÃO DE PSEUDÔNIMO
                if (roletabobby > 554 && roletabobby <= 570){
                    if (user.roles.cache.has(ADM)) {
                        roletabobby = 299
                    }
                if (roletabobby > 554 && roletabobby <= 569){
                    embeds.setTitle("ADOÇÃO DE PSEUDÔNIMO")
                    embeds.setDescription("Essa carta irá mudar o seu nome no servidor para algum aleatório.")
                    const nomes = datafrase.nomes.personagens;
                    const randmnomes = nomes[Math.floor(Math.random() * nomes.length)];
                    interaction.member.setNickname(randmnomes);
                    embeds.setThumbnail("https://images2.imgbox.com/3c/8d/zIssOdOA_o.png")}}
                //EXAME MÉDICO
                if (roletabobby > 570 && roletabobby <= 580){
                    embeds.setTitle("EXAME MÉDICO")
                    const exame = datafrase.outros.exames;
                    const randomexame = exame[Math.floor(Math.random() * exame.length)];
                    embeds.setDescription(`Essa carta irá chamar um doutor muito famoso do Distrito 3 de Daimonas, Doutor Tasheco. Ele irá te examinar, e dizer qual doença você tem:\n\n-Acredito que você tenha ${randomexame}`)
                    embeds.setThumbnail("https://images2.imgbox.com/66/a3/KfDQ7vY2_o.png")}
                //O MAIS HONRADO
                if (roletabobby > 580 && roletabobby <= 585){
                    embeds.setTitle("O MAIS HONRADO")
                    embeds.setDescription(`Essa carta irá trazer o mais <honrado> para o servidor`)
                    embeds.setThumbnail("https://images2.imgbox.com/66/a3/KfDQ7vY2_o.png")
                    embeds.setImage("https://cdn.discordapp.com/attachments/1142623385944334449/1276248554121199809/O_MAIS_HONRADO.png?ex=66e68056&is=66e52ed6&hm=a0c31a5d4770388b25689967456ebe154e7dbaba6989224b558297bbd9df61f1&")}
                //CHAPÉU DE TARTARUGA
                if (roletabobby > 585 && roletabobby <= 595){
                    embeds.setTitle("CHAPÉU DE TARTARUGA")
                    embeds.setDescription("Essa carta irá mostrar uma página aleatória da tão famosa HQ Chapéu de Tartaruga.")
                    embeds.setThumbnail("https://images2.imgbox.com/12/2e/SWKWnVUg_o.png")
                    const hqchapeu = dataimagem.risorius.chapeu;
                    const randomhq = hqchapeu[Math.floor(Math.random() * hqchapeu.length)];
                    embeds.setImage(randomhq)}
                //CATALISADORES
                if (roletabobby > 595 && roletabobby <= 600){
                    embeds.setTitle("CATALISADORES")
                    embeds.setDescription("Essa carta irá trazer um traço de um dos catalisadores do universo de Ordem.")
                    embeds.setThumbnail("https://images2.imgbox.com/82/37/3os6oWhx_o.png")
                    const catalisadores = dataimagem.risorius.catalisadores;
                    const randomcata = catalisadores[Math.floor(Math.random() * catalisadores.length)];
                    embeds.setImage(randomcata)}
                //DADOS BANCÁRIOS
                if (roletabobby > 600 && roletabobby <= 605){
                    embeds.setTitle("DADOS BANCÁRIOS")
                    embeds.setDescription(`Essa carta irá atrás de todos os dados bancários dos membros do servidor e deixar eles públicos!`)
                    embeds.setThumbnail("https://images2.imgbox.com/66/a3/KfDQ7vY2_o.png")
                    const userIds = {
                        "407937359389261858": "amanda",
                        "546734558431674369": "alvaro",
                        "546377246420762651": "diogo",
                        "424982351593078785": "fabio",
                        "1054515144950030356": "heloise",
                        "725490324960575570": "isis",
                        "309439524730044448": "kelson",
                        "1002730228998742067": "otavio",
                        "340298478494154752": "vitor",
                        "862809964401393665": "paulo",
                        "507585124624236545": "gabriel",
                        "406048394650451969": "thuany"
                    };
                    let dinheiro;
                    if (userIds[user.id]) {
                        dinheiro = datadinheiro.DINHEIRO[userIds[user.id]];
                    }
                    const dinheiroList = Object.keys(userIds).map(id => ({
                        nome: userIds[id],
                        valor: datadinheiro.DINHEIRO[userIds[id]]
                    }));
                    dinheiroList.sort((a, b) => b.valor - a.valor);
                    const dinheiroMessage = dinheiroList.map(item => `${item.nome}: ${item.valor}`).join('\n');
                    setTimeout(() => {
                        interaction.channel.send(dinheiroMessage)
                    }, 2000)}
                //EX-CHEFES
                if (roletabobby > 605 && roletabobby <= 615){
                    embeds.setTitle("MEU EX CHEFE")
                    embeds.setDescription("Essa carta irá trazer algum chefe aleatório que foi morto durante as campanhas do servidor!")
                    embeds.setThumbnail("https://images2.imgbox.com/cf/f8/gMoVdy7w_o.png")
                    const boss = dataimagem.risorius.chefes;
                    const randomboss = boss[Math.floor(Math.random() * boss.length)];
                    embeds.setImage(randomboss)}
                //FRASERNATOR
                if (roletabobby > 615 && roletabobby <= 630) {
                    const outros = datafrase.frasenator.outros;
                    const copulativos = datafrase.frasenator.copulativo;
                    const adjetivos = datafrase.frasenator.adjetivos;
                    const acoes = datafrase.frasenator.acoes;
                    const objetos = datafrase.frasenator.objetos;
                    embeds.setTitle("FRASERNATOR");
                    embeds.setDescription(`Essa carta irá criar uma frase aleatória com o SEU nome!`);
                    embeds.setThumbnail("https://images2.imgbox.com/a8/c8/JP0reC55_o.png");
                    let frase = "";
                    let chance = Math.floor(Math.random() * 20) + 1;
                    if (chance <= 10) {
                        frase += acoes[Math.floor(Math.random() * acoes.length)];
                        chance = Math.floor(Math.random() * 20) + 1;
                
                        if (chance <= 14) {
                            const objeto = objetos[Math.floor(Math.random() * objetos.length)];
                            const artigo = (objeto.endsWith("a") || objeto.endsWith("l") || objeto.endsWith(")") || objeto.endsWith("m")) ? "uma" : "um";
                            frase += ` ${outros[Math.floor(Math.random() * outros.length)]} ${artigo} ${objeto}`;
                            
                            chance = Math.floor(Math.random() * 20) + 1;
                            if (chance <= 14) {
                                const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
                                frase += ` ${adjetivo[Math.floor(Math.random() * adjetivo.length)]}`;
                            }
                        }
                    } else {
                        const copulativo = copulativos[Math.floor(Math.random() * copulativos.length)];
                        frase += copulativo;
                        chance = Math.floor(Math.random() * 20) + 1;
                
                        if (chance <= 6) {
                            const adjetivo = adjetivos[Math.floor(Math.random() * adjetivos.length)];
                            frase += ` ${adjetivo[Math.floor(Math.random() * adjetivo.length)]}`;
                        } else {
                            const objeto = objetos[Math.floor(Math.random() * objetos.length)];
                            const artigo = (objeto.endsWith("a") || objeto.endsWith("l") || objeto.endsWith(")") || objeto.endsWith("m")) ? "uma" : "um";
                            frase += ` ${outros[Math.floor(Math.random() * outros.length)]} ${artigo} ${objeto}`;
                        }
                    }
                    interaction.channel.send(`<@${interaction.user.id}> ${frase}`);}
                //SUSSURROS HISTÓRICOS
                if (roletabobby > 630 && roletabobby <= 645){
                    embeds.setTitle("SUSSURROS HISTÓRICOS")
                    embeds.setDescription("Essa carta irá sussurrar para você um conto de uma das sessões de RPG dentro deste servidor!")
                    embeds.setThumbnail("https://images2.imgbox.com/9a/53/lPKMWJ37_o.png")
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).sussurros;
                    const randomIndex = Math.floor(Math.random() * frasesbobby.length);
                    let randomMeme = "."
                    let imagem = "."
                    if(randomIndex == 0){
                        const random = frasesbobby[randomIndex].EMPIREO
                        randomMeme = random[Math.floor(Math.random() * random.length)];
                        imagem = "https://images2.imgbox.com/c9/61/D0xuAP00_o.png"
                    }
                    if(randomIndex == 1){
                        const random = frasesbobby[randomIndex].EDFU
                        randomMeme = random[Math.floor(Math.random() * random.length)];
                        imagem = "https://images2.imgbox.com/7f/82/0s1UlP5q_o.png"
                    }
                    if(randomIndex == 2){
                        const random = frasesbobby[randomIndex].NOITEESCURA
                        randomMeme = random[Math.floor(Math.random() * random.length)];
                        imagem = "https://images2.imgbox.com/a1/46/xkfejCBm_o.png"
                    }
                    if(randomIndex == 3){
                        const random = frasesbobby[randomIndex].AFANO
                        randomMeme = random[Math.floor(Math.random() * random.length)];
                        imagem = "https://images2.imgbox.com/4a/1e/jZ4jAfgH_o.png"
                    }
                    if(randomIndex == 4){
                        const random = frasesbobby[randomIndex].TROPICAL
                        randomMeme = random[Math.floor(Math.random() * random.length)];
                        imagem = "https://images2.imgbox.com/80/f4/ZuEe2Pve_o.png"
                    }
                    if(randomIndex == 5){
                        const random = frasesbobby[randomIndex].THANATOS
                        randomMeme = random[Math.floor(Math.random() * random.length)];
                        imagem = "https://images2.imgbox.com/40/b1/zwuJIKfb_o.png"
                    }
                    if(randomIndex == 6){
                        const random = frasesbobby[randomIndex].SOLARENS
                        randomMeme = random[Math.floor(Math.random() * random.length)];
                        imagem = "https://images2.imgbox.com/b6/52/q7Nf0vdh_o.png"
                    }
                    const frases = "*sussurros...*\n\n\n" + "# " + randomMeme
                    interaction.user.send({
                        content: frases, 
                        files: [{ attachment: imagem }]})}
                //PADRÃOZINHO
                if (roletabobby > 645 && roletabobby <= 660){
                    embeds.setTitle(`PADRÃOZINHO`)
                    embeds.setDescription(`Essa carta mostra o quão padrão você é na visão do Bobby. Você é tão padrão que ele vai fazer a sua próxima carta ser uma comum garantido.`)
                    embeds.setThumbnail("https://images2.imgbox.com/c3/08/EOYDhOEk_o.png")
                    interaction.member.roles.add(comumid)};
                //PRESS F TO PAY RESPECTS
                if (roletabobby > 660 && roletabobby <= 671){
                    embeds.setTitle(`PRESS F TO PAY RESPECTS`)
                    const morto = datafrase.outros.Mortos;
                    const randommorto = morto[Math.floor(Math.random() * morto.length)];
                    embeds.setDescription(`Todos falam que eu não me importo, mas na verdade, me importo sim, afinal, esses mortos fedem mais que o teu banheiro HAHAHHAHA. Essa carta irá citar um personagem aleatório das campanhas que infelizmente veio a falecer... \n\nDeixe seu F para ${randommorto}`)
                    embeds.setThumbnail("https://images2.imgbox.com/1f/ca/4DEu6rR5_o.png")}
                //INIMIGOS DE PAIXÃO
                if (roletabobby > 671 && roletabobby <= 686){
                    embeds.setTitle("INIMIGOS DE PAIXÃO")
                    embeds.setDescription("Essa carta irá trazer algum inimigo aleatório que teve nas campanhas deste servidor!")
                    embeds.setThumbnail("https://images2.imgbox.com/0e/be/BwDNqG4R_o.png")
                    const inimigo = dataimagem.risorius.inimigospixao;
                    const randominimigo = inimigo[Math.floor(Math.random() * inimigo.length)];
                    embeds.setImage(randominimigo)}
                //AUDIENCIA DO SHOW
                if (roletabobby > 686 && roletabobby <= 700){
                    embeds.setTitle("AUDIÊNCIA DO JOGO")
                    embeds.setDescription(`Essa carta mostra os dados atuais do jogo do Risorius. As risadas sempre serão o melhor remédio!\n\n┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━∎\n∎Vezes Usado: ${datafrase.dados.usos}\n\n∎Cartas Totais: ${totalcartas}\n\n∎Status Totais: ${datafrase.dados.statustotais}\n\n∎Eventos iniciados: ${datafrase.dados.cartastipoevento}\n\n∎Cartas Heresia Pegas: ${datafrase.dados.heresia}\n\n∎Cartas Comuns Pegas: ${datafrase.dados.CartasComunsPegas}\n\n∎Cartas Positivas Pegas: ${datafrase.dados.cartaspositivaspegas}\n\n∎Cartas Negativas Pegas: ${datafrase.dados.cartasnegativaspegas}\n\n∎Cartas Ancestrais Pegas: ${datafrase.dados.heresia}\n\n∎Estrelas Cadentes vistas: ${datafrase.dados.estrelas}\n\n∎Vezes que Foram Banidos: ${datafrase.dados.banidos}\n\n∎Vezes que Perderam Itens: ${datafrase.dados.perderiten}\n\n∎Vezes que Ganharam Itens: ${datafrase.dados.ganhariten}\n\n∎Vezes que Ficaram de Castigo: ${datafrase.dados.castigo}\n\n∎Vezes que Lunar/Solar Foram Pegos: ${datafrase.dados.lunarsolar}\n\n∎Vezes que Lembramos do Pietro Sapo: ${datafrase.dados.pietrosapo}\n\n∎Vezes que a Maldição do Caos Foi Pega: ${datafrase.dados.bobby}\n\n∎Vezes Que Copiaram uma | atraC moc ohlepsE: ${datafrase.dados.espelho}\n\n∎Vezes que Roubaram Status de Outro Jogador: ${datafrase.dados.roubos}\n\n∎Vezes que Pegaram os Valores de Dragão/Cofre: ${datafrase.dados.cofredragao}\n\n∎Vezes que Lembramos de Agradecer a Hatsune Miku: ${datafrase.dados.hatsune}\n┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━∎`)
                    embeds.setThumbnail("https://images2.imgbox.com/04/7d/TRAuvCq5_o.png")
            }}
            //4/4 HERESIA (701-750)
            if (roletabobby > 700 && roletabobby <= 750){
                if(user.roles.cache.has(divinoid) || user.roles.cache.has(fardoid)){
                const teste100 = getporce(701, 750)
                embeds.setColor("DarkPurple")
                embeds.setAuthor({ name: `Heresia`, iconURL: "https://htmlcolorcodes.com/assets/images/colors/dark-purple-color-solid-background-1920x1080.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                datafrase.dados.heresia++
                //PAREGRINAÇÃO
                if (roletabobby > 700 && roletabobby <= 706){
                    embeds.setTitle(`Peregrinação`)
                    embeds.setDescription(`Eu não acredito mais em você.. Você é uma farsa e tudo o que você fez para mim?.\nEssa carta faz com que você troque solar por lunar e vice versa.`)
                    embeds.setThumbnail("https://images2.imgbox.com/a6/fa/TrFWEW8t_o.png")
                    if(user.roles.cache.has(divinoid)){
                        user.roles.remove(divinoid);
                        interaction.member.roles.add(fardoid);}
                    if(user.roles.cache.has(fardoid)){
                        user.roles.remove(fardoid);
                        interaction.member.roles.add(divinoid);}}
                //AGNÓSTICO
                if (roletabobby > 706 && roletabobby <= 725){
                    embeds.setTitle(`Agnóstico`)
                    embeds.setDescription(`O que eu sou? O que vocês são? Por que devemos seguir esse ciclo?.\nEssa carta faz com que você abandone todos os status de divindades.`)
                    embeds.setThumbnail("https://images2.imgbox.com/b6/6f/XbQ7gPrA_o.png")
                    await user.roles.remove(heronosid);
                    await user.roles.remove(juhurid)
                    await user.roles.remove(marlanid)
                    await user.roles.remove(malatiasid)}
                //Apostasia
                if (roletabobby > 725 && roletabobby <= 737){
                    embeds.setTitle(`Apostasia`)
                    embeds.setDescription(`Um afastamento definitivo daquilo que você foi marcado.\nEssa carta faz com que você abandone a marca de uma entidade presa a você, perdendo status de Divino ou Fadado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/89/ae/AFQEgsmT_o.png")
                    await user.roles.remove(divinoid);
                    await user.roles.remove(fardoid)
                    await user.roles.remove(heronosid);
                    await user.roles.remove(juhurid)
                    await user.roles.remove(destruidoid)
                    await user.roles.remove(espelhoqueradoid);
                    await user.roles.remove(marlanid)
                    await user.roles.remove(malatiasid)}
                //ANCESTRALIDADE
                if (roletabobby > 737 && roletabobby <= 750){
                    embeds.setTitle(`Ancestralidade`)
                    embeds.setDescription(`Um conhecimento do passado que formou esse mundo.\nEssa carta faz com que você tenha mais sorte para conseguir cartas Ancestrais.`)
                    embeds.setThumbnail("https://images2.imgbox.com/3e/1c/isjICcHg_o.png")
                    interaction.member.roles.add(ancestralidadeid);
                }

            }else{roletabobby = 299 - Math.floor(Math.random() * 100) + 1}}
            //10/16 Inoportuna (100-299)
            if (roletabobby > 100 && roletabobby <= 299){
                const teste100 = getporce(100, 299)
                embeds.setColor("DarkerGrey")
                embeds.setAuthor({ name: `Inoportuna`, iconURL: "https://images2.imgbox.com/82/79/wDFgjRpT_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //AZART POSITIVA
                if (roletabobby > 100 && roletabobby <= 119){
                    embeds.setTitle(`AZAR POSITIVO`)
                    embeds.setDescription(`Você quer ter azar agora ou daqui 5 minutinhos?\n Essa carta irá ter 50% de chance de te dar um azar médio daqui 5 minutos`)
                    var chance = Math.floor(Math.random() * 10) + 1;
                    embeds.setThumbnail("https://images2.imgbox.com/03/22/Y1r3k5NL_o.png")
                    if(chance > 4){
                        setTimeout(() => {
                            WFFs(user, infortunaid)
                            interaction.member.roles.add(infortunaid);
                        }, 300000);
                    }}
                //INCONVENIENTE
                if (roletabobby > 119 && roletabobby <= 125){
                    embeds.setTitle(`INCONVENIÊNCIA`)
                    embeds.setDescription(`Essa carta traz uma pequena inconveniência para você, te dando azar minusculo na próxima carta`)
                    interaction.member.roles.add(inconvenienteid);
                    WFFs(user, inconvenienteid)
                    embeds.setThumbnail("https://images2.imgbox.com/ba/ba/YnRWv6fQ_o.png")}
                //ÂNCORA MÁGICA
                if (roletabobby > 125 && roletabobby <= 140){
                    embeds.setTitle(`ÂNCORA MÁGICA`)
                    embeds.setDescription(`Essa carta irá trazer uma enorme âncora mágica para amarrar em suas pernas e te deixar com um peso que poderá crescer... \nQuanto mais você pegar essa carta mais o azar se acumula e a única forma de tirar é caso alguém sem a âncora pegue essa carta.`)
                    if(user.roles.cache.has(ancoraid)){
                        datafrase.infos.ancora = datafrase.infos.ancora + 5
                    }else{
                        interaction.member.roles.add(ancoraid);
                        WFFs(user, ancoraid)
                        datafrase.infos.ancora = 5
                    }
                    embeds.setThumbnail("https://images2.imgbox.com/4b/0c/IjYtdrSu_o.png")}
                 // GIGAMERON
                if (roletabobby > 140 && roletabobby <= 171) {
                        embeds.setTitle("GIGAMERON");
                        embeds.setDescription("Essa carta irá lançar uma magia que irá soltar em algum canal uma bomba numérica que cresce com o tempo!");
                        embeds.setThumbnail("https://images2.imgbox.com/54/27/xiPpnxZw_o.png");
                        interaction.channel.send({ embeds: [embeds]})
                        const channel = interaction.client.channels.cache.get("1223006309025321080");
                        let valor = Math.floor(Math.random() * 9) + 1;
                        let multi = Math.floor(Math.random() * 9) + 1;
                        const message = await channel.send(`${valor}`);
                        for (let i = 0; i < 1500; i++) {
                            valor = Math.floor(Math.random() * 10) + 1;
                            multi = `${multi}${valor}`;
                            await message.edit(`${multi}`);
                        }
                        return}
                 //AZARADO
                 if (roletabobby > 171 && roletabobby <= 195){
                    embeds.setTitle(`AZAR DA VIDA`)
                    embeds.setDescription(`Essa carta faz com que todo aquele pequeno azar que você tem em dias comuns seja acumulado tudo na sua próxima carta, fazendo com que a sua próxima carta tenha um pequeno Azar`)
                    interaction.member.roles.add(azaradoid);
                    WFFs(user, azaradoid)
                    embeds.setThumbnail("https://images2.imgbox.com/5a/eb/eMhmYI6i_o.png")}
                //CASTIGO NO CANTO DA SALA
                if (roletabobby > 195 && roletabobby <= 219){
                    if (user.roles.cache.has(ADM)) {
                        roletabobby = 288
                    }}
                if (roletabobby > 195 && roletabobby <= 219){
                    embeds.setTitle(`CASTIGO NO CANTO DA SALA`)
                    embeds.setDescription(`Essa carta faz com que você fique de castigo por 5 minutos. Espero que se comporte na próxima vez ein mocinho!!`)
                    embeds.setThumbnail("https://images2.imgbox.com/09/d5/Vkw6AnJ9_o.png")
                    datafrase.dados.castigo++
                    setTimeout(async () => {
                        await user.timeout(300000, `Você está de castigo por se comportar extremamente mal! Devido a esse mal comportamento, você irá ficar no cantinho da sala bem quietinho até eu (Bobby) deixar sair em 5 minutos :D`)
                    },4000)}
                //NINHO DO DRAGÃO CINZENTO
                if (roletabobby > 219 && roletabobby <= 243){
                    embeds.setTitle(`NINHO DO DRAGÃO CINZENTO`)
                    embeds.setDescription(`Essa carta te leva para o ninho do Dragão Cinzento... CUIDADO!! Ele está dormindo, então não pegue os pontos de perigo...\nEssa carta irá rolar 1d20, tendo essas opções:\n\n-Caso caia 1 você irá receber todos os pontos de perigo e resetar os valor de perigo\n-Caso caia valores maiores que 1 e menores que 20, você irá dobrar os pontos de perigo\n-Caso caia 20, você irá resetar os valores de perigo para 1\n\nCaso você pegue os valores de perigo, o dragão irá acordar e te assustar, fazendo com que sua próxima carta tenha um azar definido pela quantidade de perigo que você pegou (quanto mais, maior o azar e o susto, claro)\n\nNível de perigo atual: ${ninho}`)
                    embeds.setThumbnail("https://images2.imgbox.com/36/3c/IVRJEND3_o.png")
                    const dados = Math.floor(Math.random() * 20) + 1;
                    interaction.channel.send(`**${dados}**  ⟵ [${dados}] 1d20`);
                    if (dados == 1){
                        datafrase.dados.cofredragao++
                        var testopadrao = `A pessoa que acordou o dragão foi ${interaction.user}! Mas não se preocupem, ele já voltou a dormir...`
                        interaction.member.roles.add(assustadoid);
                    }
                    if (dados == 20){
                        var testopadrao = `A pessoa que derrotou o dragão foi ${interaction.user}. Porém cuidado! O filho do dragão voltou e o nível de perigo desceu para 1!`
                        datafrase.infos.ninho = 1
                    }
                    if (dados >= 2 && dados <= 19){
                        datafrase.infos.ninho = datafrase.infos.ninho * 2
                        ninho = datafrase.infos.ninho
                        var testopadrao = `O ${interaction.user} conseguiu passar pelo dragão, porém o nível de perigo aumentou para ${ninho}`
                    }
                    setTimeout(() => {
                        interaction.channel.send(testopadrao)
                    },5000 )};
                //PISAR EM FALSO
                if (roletabobby > 243 && roletabobby <= 256){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = 299}
                    if (roletabobby > 243 && roletabobby <= 256){
                        embeds.setTitle(`PISAR EM FALSO`)
                        embeds.setDescription(`Nada melhor que esperar alguém perder, tudo não é mesmo?\n Essa carta irá bloquear todas as cartas por 60m, deixando apenas o Ninho do Dragão e Cofre da Dinastia acessíveis. Esse evento vai começar em 1m... Cuidado para não pisar em falso HAHAHAHA`)
                        embeds.setThumbnail("https://images2.imgbox.com/51/b9/2BU0xUm6_o.png")
                        datafrase.eventos.tipo = "bloqueado"
                        datafrase.dados.cartastipoevento++
                        setTimeout(async () => {
                            interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} o Bobby bloqueou todas as cartas, menos Cofre da Dinastia e Ninho do Dragão por 45 minutos. Cuidado onde pisam...`)
                            datafrase.eventos.tipo = "pisar"
                            setTimeout(async () => {
                                datafrase.eventos.tipo = "normal"
                                interaction.channel.send(`Tivemos o fim do Pisar em Falso... Na próxima sejam 2x mais cuidadosos...`)
                            }, 3600000);
                        }, 60000 )}}
                //LERDOU
                if (roletabobby > 256 && roletabobby <= 270){
                    embeds.setTitle(`LERDOU`)
                    embeds.setDescription(`Essa carta faz com que você seja mais lento nas cartas. O Cooldown do bot para você é aumentado em 1.5x a partir de agora e caso tenha pego algum status de velocidade, ele será apagado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/2d/60/skM4uoRA_o.png")
                    if(!user.roles.cache.has(lerdoid) && !user.roles.cache.has(preguicosoid) && !user.roles.cache.has(letargicoid)){
                    interaction.member.roles.add(lerdoid)
                    WFFs(user, lerdoid)}
                    user.roles.remove(rapidoid)
                    user.roles.remove(aceleradoid)
                    user.roles.remove(celerissimoid)}
                //EU SEI UMA PIADA BOA
                if (roletabobby > 270 && roletabobby <= 299){
                    embeds.setTitle(`EU SEI UMA PIADA BOA`)
                    embeds.setDescription(`Eu HAHAHAHAHA eu HAHAHAHAHAH sei uma piada HAHAHAHAHHA muito boa. \nEssa carta irá rir da piada que você é.`)
                    embeds.setThumbnail("https://images2.imgbox.com/30/ca/ORsrkleE_o.png")
                    var texto = "HA"
                    const mensagem = await interaction.user.send(`${texto}`)
                    for (var i = 0; i < 900; i++){
                        texto = texto + "HA"
                        mensagem.edit(`${texto}`)}}

            }
            //8/12 LAMENTÁVEL (50-99)
            if (roletabobby > 50 && roletabobby <= 99){
                const teste100 = getporce(50, 99)
                embeds.setColor("DarkOrange")
                embeds.setAuthor({ name: `Lamentável`, iconURL: "https://images2.imgbox.com/81/82/q3lfQxx0_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //DECADÊNCIA
                if (roletabobby > 50 && roletabobby <= 57){
                    embeds.setTitle(`DECADÊNCIA`)
                    embeds.setDescription(`Essa carta é a mais má e pura Decadência de uma pessoa. Caso alguém caia nessa carta, ela irá jogar 12d6 e o valor que cair será a quantidade de vezes que você terá um azar. Todos que tiverem o Status Decadência terá um azar que será aumentado pela quantidade do valor da decadência, não importando se foi você ou não que aumentou a duração da carta.`)
                    embeds.setThumbnail("https://images2.imgbox.com/ba/a7/eFzKgYwC_o.png")
                    const dados = (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1) + (Math.floor(Math.random() * 6) + 1);
                    interaction.channel.send(`**${dados}**  ⟵ [${dados}] 12d6`);
                    datafrase.infos.decadencia = dados + datafrase.infos.decadencia
                    interaction.member.roles.add(decadenciaid);
                    WFFs(user, decadenciaid)
                    setTimeout(() => {
                        interaction.channel.send(`${interaction.user} aumentou a duração da decadência em: ${dados} vezes\nAtualmente o valor é de: ${datafrase.infos.decadencia}`)
                    }, 2000)}
                //INFORTUNADO
                if (roletabobby > 57 && roletabobby <= 62){
                    embeds.setTitle(`INFORTUNADO`)
                    embeds.setDescription(`Essa carta traz a infortuna, te dando um azar médio na próxima carta`)
                    interaction.member.roles.add(infortunaid);
                    WFFs(user, infortunaid)
                    embeds.setThumbnail("https://images2.imgbox.com/96/2f/LIgFXjYM_o.png")}
                //Desprezar
                if (roletabobby > 62 && roletabobby <= 66){
                    embeds.setTitle(`DESPREZO`)
                    embeds.setDescription(`Essa carta serve para mostrar o quão fudidx você é. \nO ${interaction.user} é um merda, fudido, desgraçado, feio, horroroso, horrendo, arrombado, capeta, vacilão, bosta, cu, fedido, cheiro de cu, ruim, horrivel, péssimo, horroroso, ser que da dó de olhar, cara que sinto dor de ver, nerd fudido,  cabeça de vento, paspalho, boboca, Zé Mané, lerdo, palerma, panaca, bocó, pateta, trapalhão, abobado, tanso, Zé Ruela, tonto, abestado, bananas, lesado, mula, jumento e pastrana. E espero que tu e teu dia vão para casa do Caralho seu merda! Você é tão fudido que eu vou te desprezar, estragar a sua sorte. \nA sua próxima carta será 100% de certeza NEGATIVA.`)
                    embeds.setThumbnail("https://images2.imgbox.com/4b/4c/DDzZxLUg_o.png")
                    interaction.member.roles.add(desprezoid)
                    WFFs(user, desprezoid)};
                //DOR NO RIM
                if (roletabobby > 66 && roletabobby <= 75){
                    embeds.setTitle(`DOR NO RIM`)
                    embeds.setDescription(`A dor no Rim causa mais dano na sua sanidade do que no seu corpo. Em algum momento aleatório na próxima sessão, você vai sentir uma dor no rim, recebendo 1d4 de dano mental.`)
                    embeds.setThumbnail("https://images2.imgbox.com/fb/a6/bIHvY6Fk_o.png")
                    const dados = (Math.floor(Math.random() * 4) + 1)
                    interaction.channel.send(`**${dados}**  ⟵ [${dados}] 1d6`)}
                //EXPULSO DA SALA
                if (roletabobby > 75 && roletabobby <= 84){
                    if(user.roles.cache.has(ADM)) {roletabobby = 99}}
                if (roletabobby > 75 && roletabobby <= 84){
                    embeds.setTitle(`EXPULSO DA SALA`)
                    embeds.setDescription(`Essa carta faz com que você fique de castigo por 15 minutos. Você não é mais uma criança para ficar fazendo essas coisas coisas ai.`)
                    embeds.setThumbnail("https://images2.imgbox.com/14/7e/XfY5IaJA_o.png")
                    datafrase.dados.castigo++
                    setTimeout(async () => {
                        await user.timeout(900000, `Não é mais brincadeira, para com isso. Estamos em uma sala de aula, respeite todos.`)
                    },4000)}
                //ESTACA ZERO
                if (roletabobby > 84 && roletabobby <= 93){
                    embeds.setTitle(`ESTACA ZERØ`)
                    embeds.setDescription(`Essa carta irá te colocar na estaca zero, tirando todos os seus status e colocando um novo status de azar aleatório.`)
                    embeds.setThumbnail("https://images2.imgbox.com/00/21/2bCGxVAU_o.png")
                    if(!(user.roles.cache.has(protegidoid))) {
                        TIRARPOSITIVO()
                        TIRARNEGATIVO()
                    }else{
                        user.roles.remove(protegidoid)
                        interaction.channel.send(`${interaction.user}, sua proteção foi gastada!`)}
                    const randomItem = RANDOMPOSITIVO(listanegativa);
                    interaction.member.roles.add(randomItem)
                    WFFs(user, randomItem)}
                //AIIII QUE PREGUIÇAAA
                if (roletabobby > 93 && roletabobby <= 96){
                    embeds.setTitle(`AIIII QUE PREGUIÇAAA`)
                    embeds.setDescription(`Ai que preguiçaaaa, vou ficar de cama hoje. Essa carta faz com que você seja mais lento nas cartas. O Cooldown do bot para você é aumentado em 2.0x a partir de agora e caso tenha pego algum status de velocidade, ele será apagado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/4c/cb/XDZWtUbd_o.png")
                    await user.roles.remove(lerdoid)
                    await user.roles.remove(rapidoid)
                    await user.roles.remove(aceleradoid)
                    await user.roles.remove(celerissimoid)
                    if(!user.roles.cache.has(lerdoid) && !user.roles.cache.has(preguicosoid) && !user.roles.cache.has(letargicoid)){
                    interaction.member.roles.add(preguicosoid)
                    WFFs(user, preguicosoid)}}
                //PROCRASTINADOR NATO
                if (roletabobby > 96 && roletabobby <= 99){
                    embeds.setTitle(`PROCRASTINADOR NATO`)
                    embeds.setDescription(`Você é tão bom nisso que venceu um torneio mundial de procrastinar. Foi declarado o vencedor após você não ir ao torneio por preguiça.\n Essa carta faz com que você seja mais lento nas cartas. O Cooldown do bot para você é aumentado em 2.5x a partir de agora e caso tenha pego algum status de velocidade, ele será apagado.`)
                    embeds.setThumbnail("https://images2.imgbox.com/c2/f9/Eum56aM7_o.png")
                    await user.roles.remove(lerdoid)
                    await user.roles.remove(preguicosoid)
                    await user.roles.remove(rapidoid)
                    await user.roles.remove(aceleradoid)
                    await user.roles.remove(celerissimoid)
                    if(!user.roles.cache.has(lerdoid) && !user.roles.cache.has(preguicosoid) && !user.roles.cache.has(letargicoid)){
                    interaction.member.roles.add(letargicoid)
                    WFFs(user, letargicoid)}}
            }
            //8/8 MISERÁVEL (20-49)
            if (roletabobby > 20 && roletabobby <= 49){
                const teste100 = getporce(20, 49)
                embeds.setColor("DarkRed")
                embeds.setAuthor({ name: `Miserável`, iconURL: "https://images2.imgbox.com/89/61/1XorRaX8_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //DESGRAÇADO
                if (roletabobby > 20 && roletabobby <= 24){
                    embeds.setTitle(`DESGRAÇADO`)
                    embeds.setDescription(`Essa carta traz toda a desgraça do mundo para você, fazendo com que sua próxima carta tenha um Azar grande`)
                    interaction.member.roles.add(desgraçaid);
                    WFFs(user, desgraçaid)
                    embeds.setThumbnail("https://images2.imgbox.com/1f/ae/AQvzVQRG_o.png")}
                //JOGAR MALDADE
                    if (roletabobby > 24 && roletabobby <= 28){
                    embeds.setTitle(`JOGAR MALDADE`)
                    const MALDICOES = datafrase.efeitos.persomaldi;
                    const RANDOMMALDI = MALDICOES[Math.floor(Math.random() * MALDICOES.length)];
                    embeds.setDescription(`Você irá receber uma Maldade de um personagem de jogador aleatório deste servidor. \nConsidere está Maldade como se o seu personagem tivesse acordado muito mal para fazer aquela coisa especifica\n(Está Maldade é apenas para uma sessão!)\n\n${RANDOMMALDI}`)
                    embeds.setThumbnail("https://images2.imgbox.com/e5/d3/nYOAwhJO_o.png")}
                //BANIDO DO CAMPUS
                if (roletabobby > 28 && roletabobby <= 32){
                    if (roletabobby > 26 && roletabobby <= 32){
                        if (user.roles.cache.has(ADM)) {roletabobby = 49}}
                    if (roletabobby > 26 && roletabobby <= 32){
                        const comandos = interaction.client.channels.cache.get(comandosid);
                        embeds.setTitle(`BANIDO DO CAMPUS`)
                        embeds.setDescription(`Essa carta faz com que você seja banido até que as autoridades te liberem. Você não pode cuspir na cara do professor e falar que ele é um merda e falar que as IAs vão pegar o trabalho.`)
                        embeds.setThumbnail("https://images2.imgbox.com/02/6e/Kjvl86NZ_o.png")
                        datafrase.dados.castigo++
                        setTimeout(async () => {
                            await user.timeout(3600000, `Você está banido até que volte com os advogados.`)
                        },4000)
                        setTimeout(async () => {
                            comandos.send(`Após a chegada dos advogados, ${interaction.user} foi preso e agora está na liberdade condicional! \nTomem cuidado!`)
                        },3600000)}}
                //HORA CAÓTICA
                if (roletabobby > 32 && roletabobby <= 36){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = 49}
                    if (roletabobby > 32 && roletabobby <= 36){
                    embeds.setTitle(`HORA CAÓTICA`)
                    embeds.setDescription(`Essa carta irá fazer com que suas cartas ou tenham um azar mediano ou tenham uma sorte mediana durante 60 minutos, variando a cada vez que usa. Esse evento vai acontecer em 1 minuto... O Risorius ficou caótico!`)
                    embeds.setThumbnail("https://images2.imgbox.com/f2/2e/DzUNc0B5_o.png")
                    datafrase.eventos.tipo = "bloqueado"
                    datafrase.dados.cartastipoevento++
                    setTimeout(async () => {
                        interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} os próximos 60 minutos o Risorius terá ou uma sorte média ou dar um azar mediano. Se divirtam!`)
                        datafrase.eventos.tipo = "caotico"
                        setTimeout(async () => {
                            datafrase.eventos.tipo = "normal"
                            interaction.channel.send(`Tivemos o fim da -Hora Caótica-... MAS AS PIADAS PERMANECEM EM PÉ!`)
                        }, 3600000);
                    }, 60000 )}}
                 //SISTEMA QUEBRADO
                 if (roletabobby > 36 && roletabobby <= 40){
                    embeds.setTitle(`SISTEMA QUEBRADO`)
                    embeds.setDescription(`Essa carta serve para aqueles que reclamam que o sistema está quebrando, fazendo com que SUAS PERNAS sejam quebradas!! Essa carta irá te dar o status Quebrado, fazendo com que toda vez que você jogue uma carta ela tenha 10% de chance de NÃO funcionar (caso não funcione, o cooldown irá se manter).`)
                    embeds.setThumbnail("https://images2.imgbox.com/86/0c/zOEcXkBx_o.png")
                    user.roles.remove(lerdoid)
                    user.roles.remove(preguicosoid)
                    user.roles.remove(letargicoid)
                    user.roles.remove(rapidoid)
                    user.roles.remove(aceleradoid)
                    user.roles.remove(celerissimoid)
                    if(!user.roles.cache.has(lerdoid) && !user.roles.cache.has(quebradoid) && !user.roles.cache.has(preguicosoid) && !user.roles.cache.has(letargicoid)){
                    interaction.member.roles.add(quebradoid)
                    WFFs(user, quebradoid)}}
                //ENERGIA CAÓTICA
                if (roletabobby > 40 && roletabobby <= 43){
                    embeds.setTitle(`ENERGIA CAÓTICA`)
                    embeds.setDescription(`E̸͔̗̅͑s̸̗͍̅s̷͈̣̈a̷̞̦̍͝ ̷̣̄c̶̺̗̈́ȁ̸̲r̴̛̘̙̉t̶͕̓a̸͍̕͠ ̸̩̕͜i̴̼͋̅r̸̬̂á̵͕̞̀̽ ̴̜̔̕d̴͔͂͝e̴̮̚s̶̢̜̔̆t̵͕͗r̷̯̯̄͐ǘ̴̡͈ḯ̸͉̥̀r̶̻̻͐͠ ̷̢̬̀t̸̟̫̂ȗ̶͓̗d̶̪̿o̴̠͝ ̸̥͐e̸̦͊ ̶̱̼̄͂t̴̜̠̒̑o̷͙̅d̵̳̐o̷͉͗̉s̸̹̓ ̷̹͠ȩ̴̣̇m̴̃͜ ̶͕̒ṳ̷̆m̶̲̓ ̶̫̗͠c̵̠̩͊â̸͚̘̊ö̵̩͇́̄s̶̠͑͘ ̵͈̈s̸̼͆́e̴̤̒m̶̥͘ ̵̮̫͗f̷͙̮͗ỉ̷͔͜m̵̞̀͝.̶͚͆͌ ̷̨̪́Ǎ̷͈ ̶̖̾s̸͖̀͜ų̷̺̐a̶̗͗̚ ̶̝̃͐ṕ̶̧̿r̶̢͓̔͝ó̴̧͈̍́x̷̛̳̅i̷͔̔m̶͎̩̔a̸̦̓͝ ̴̠͙̀c̶̛̣͒a̷͖̔ŕ̵̛̝̹t̸̼̏ą̵̻̄̑ ̸̳̜̏̋t̸̬́ę̶̛̃r̶̜̩̾̀á̸̞̗̽ ̴̹͋u̶̫͆͂ṃ̵̌ ̸͎͐̅a̵̬̽t̶̫͓͂̀r̸͕̿i̸͚̳͛̈́b̵̠̊ú̶̝̿t̴͙̕o̵̱̎̚ ̸̖̇a̷͔͚͒ļ̴͔̄e̵͔̿̚a̸̱͂͋ţ̴̮̉ó̶̗̪̿r̵͇͐̕ī̷̙̫͐o̸͉̔͛,̵̮̈́ ̷̖̜͆v̸̺̓͝a̴͈̽̑r̴̪͆i̴̯̅͛a̷̞͠ṇ̴̟̓̈́ḓ̷͊͗o̷̘̾͝ ̶͖̻̾d̸̙́ê̷̯̯ ̶̛͈1̶̨̳͊ ̴̥̤̍ȧ̸̭̤ ̸̹̩̐͠1̸̢͍͛͠0̸̗̰̔͑0̸͓̖̊̋%̷̜̿,̷͍̂̽ ̸̱͠s̷̰̦͊͋e̸̹̐ň̴̡͕̈́ḋ̷͕̞o̶̻̓̑ ̷̬͝o̵̧̩̒ú̸̖̒ ̸̨̊͝s̷̼̐ǫ̷͆͋r̸͈̺̈́ṭ̸̅̂e̶̳͋͝ ̵̿͂ͅo̶̹̿̈ǘ̶͊͜͜ ̵͚̊ạ̷̝͊̚z̴̗̀̈́à̷͇͕r̵̜̣͐̎`)
                    interaction.member.roles.add(caoticoid);
                    WFFs(user, caoticoid)
                    embeds.setThumbnail("https://images2.imgbox.com/12/94/To8EjuhG_o.png")}
                //MAL AGOURO
                if (roletabobby > 43 && roletabobby <= 46){
                    embeds.setTitle(`MAL AGOURO`)
                    embeds.setDescription(`Você é o mais puro suco da maldade... E É ISSO QUE EU MAIS GOSTO! Essa carta irá dar a todos do servidor um Status de Azar Médio.`)
                    embeds.setThumbnail("https://images2.imgbox.com/9a/33/9CYmLhiT_o.png")
                    const guild = interaction.guild;
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                    var contador = 1
                    while(contador != 200){
                        var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                        var member = await guild.members.fetch(randomMeme);
                        contador++
                        member.roles.add(infortunaid)}};
                //FAXINA PORCA
                if (roletabobby > 46 && roletabobby <= 49){
                    embeds.setTitle(`FAXINA PORCA`)
                    embeds.setDescription(`Eca, que nojo, você tem coisas boas de mais, deixa eu te limpar...\n\n(limpando...)\n\n.Pronto! Agora você não tem mais nenhum status positivo com você!`)
                                embeds.setThumbnail("https://images2.imgbox.com/a2/a2/jNhnJibQ_o.png")
                    if(!(user.roles.cache.has(protegidoid))) {
                        TIRARPOSITIVO()
                    }else{
                        user.roles.remove(protegidoid)
                        interaction.channel.send(`${interaction.user}, sua proteção foi gastada!`)}}

            }
            //4/4 CALAMITOSA (5-19)
            if (roletabobby > 5 && roletabobby <= 19){
                const teste100 = getporce(5, 19)
                embeds.setColor("Orange")
                embeds.setAuthor({ name: `Calamitosa`, iconURL: "https://images2.imgbox.com/88/be/X9QUTvMs_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                //DOBRA E PASSA
                if (roletabobby > 5 && roletabobby <= 7){
                                embeds.setTitle(`DOBRA E PASSA`)
                                embeds.setDescription(`A calamidade de perder algo que você lutou é triste, vejo em seu olhar. MAS PARA MIM NÃO!HAHAHHA\n Essa carta faz com que você DOE um status positivo que você tenha para alguma pessoa aleatória do servidor! Além disso, você irá doar um extra!\n\n Com um item eu sinto dó, com dois eu caio na gargalhada!!`)
                                embeds.setThumbnail("https://images2.imgbox.com/67/bb/enXJG8ZJ_o.png")
                                const guild = interaction.guild;
                                const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                                var contador = 1
                                while(contador != 200){
                                    var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                                    var member = await guild.members.fetch(randomMeme);
                                    contador++
                                    if (user != member){
                                    if (user.roles.cache.has(divinoid) || user.roles.cache.has(bencaoid) || user.roles.cache.has(entrelaid) || user.roles.cache.has(espelho) || user.roles.cache.has(glorificadoid) || user.roles.cache.has(contigenteid) || user.roles.cache.has(imperadorid) || user.roles.cache.has(rapidoid) || user.roles.cache.has(afortunado) || user.roles.cache.has(coincidenteid) || user.roles.cache.has(venturadoid) || user.roles.cache.has(bemcuidadoid) || user.roles.cache.has(speedrunnerid) || user.roles.cache.has(celerissimoid) || user.roles.cache.has(aceleradoid) || user.roles.cache.has(entrelaid) || user.roles.cache.has(burladorid)){
                                        contador = 200
                                        if (user.roles.cache.has(bencaoid)) {
                                            await user.roles.remove(bencaoid);
                                            member.roles.add(bencaoid)};
                                        if (user.roles.cache.has(contigenteid)) {
                                            await user.roles.remove(contigenteid);
                                            member.roles.add(contigenteid)};
                                        if (user.roles.cache.has(venturadoid)) {
                                            await user.roles.remove(venturadoid);
                                            member.roles.add(venturadoid)};
                                        if (user.roles.cache.has(afortunado)) {
                                            await user.roles.remove(afortunado);
                                            member.roles.add(afortunado)};
                                        if (user.roles.cache.has(coincidenteid)) {
                                            await user.roles.remove(coincidenteid);
                                            member.roles.add(coincidenteid)};
                                        if (user.roles.cache.has(rapidoid)) {
                                            await user.roles.remove(rapidoid);
                                            member.roles.add(rapidoid)}                                        
                                        if (user.roles.cache.has(imperadorid)) {
                                            await user.roles.remove(imperadorid);
                                            member.roles.add(imperadorid)};                                       
                                        if (user.roles.cache.has(glorificadoid)) {
                                            await user.roles.remove(glorificadoid);
                                            member.roles.add(glorificadoid)};                                      
                                        if (user.roles.cache.has(entrelaid)) {
                                            await user.roles.remove(entrelaid);
                                            member.roles.add(entrelaid)};
                                        if (user.roles.cache.has(bemcuidadoid)) {
                                            await user.roles.remove(bemcuidadoid);
                                            member.roles.add(bemcuidadoid)};
                                        if (user.roles.cache.has(entrelaid)) {
                                            await user.roles.remove(entrelaid);
                                            member.roles.add(entrelaid)};
                                        if (user.roles.cache.has(protegidoid)) {
                                            await user.roles.remove(protegidoid);
                                            member.roles.add(protegidoid)};
                                        if (user.roles.cache.has(aceleradoid)) {
                                            await user.roles.remove(aceleradoid);
                                            member.roles.add(aceleradoid)};
                                        if (user.roles.cache.has(celerissimoid)) {
                                            await user.roles.remove(celerissimoid);
                                            member.roles.add(celerissimoid)};
                                        if (user.roles.cache.has(speedrunnerid)) {
                                            await user.roles.remove(speedrunnerid);
                                            member.roles.add(speedrunnerid)};
                                        if (user.roles.cache.has(burladorid)) {
                                            await user.roles.remove(burladorid);
                                            member.roles.add(burladorid)};
                                        if (user.roles.cache.has(bffsid)) {
                                            await user.roles.remove(bffsid);
                                            member.roles.add(bffsid)};
                                        if (user.roles.cache.has(trevodouradoid)) {
                                            await user.roles.remove(trevodouradoid);
                                            member.roles.add(trevodouradoid)};
                                        if (user.roles.cache.has(contracaoid)) {
                                            await user.roles.remove(contracaoid);
                                            member.roles.add(contracaoid)}}}
                                }
                                const BUFFRANDOM = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).sorterandom;
                                const BUFF = BUFFRANDOM[Math.floor(Math.random() * BUFFRANDOM.length)];
                                interaction.channel.send(`Graças a ${interaction.user}, o ${member.nickname} recebeu uma dádiva! HAHAHAHAHA`)
                                member.roles.add(BUFF)}
                //ANTI-VÍCIO
                if (roletabobby > 7 && roletabobby <= 12){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = 19}
                    if (roletabobby > 7 && roletabobby <= 12){
                        embeds.setTitle(`ANTI-VÍCIO`)
                        embeds.setDescription(`Essa carta irá lembrar todos vocês que vício nunca é legal. Por 60 minutos, o Risorius estará BLOQUEADO para TODOS. Esse evento vai acontecer em 1 minuto...`)
                        embeds.setThumbnail("https://images2.imgbox.com/ec/3c/53H1vuNb_o.png")
                        datafrase.eventos.tipo = "bloqueado"
                        datafrase.dados.cartastipoevento++
                        setTimeout(async () => {
                            interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} o Risorius estará indisponível por 60 minutos!`)
                            setTimeout(async () => {
                                datafrase.eventos.tipo = "normal"
                                interaction.channel.send(`Tivemos o fim do Anti-Vício... Não se esqueçam`)
                            }, 36000);
                        }, 60000 )}}
                //HERÓI QUE TODOS PRECISAM
                    if (roletabobby > 12 && roletabobby <= 16){
                                embeds.setTitle(`HERÓI QUE TODOS PRECISAM`)
                                embeds.setDescription(`VOCÊ! Isso mesmo, VOCÊ! Você é o herói que TODOS precisam! Obrigado!\nVocê irá aguentar a dor de seus amigos, pegando TODOS os Status ruins de alguém aleatório do servidor!`)
                                embeds.setThumbnail("https://images2.imgbox.com/aa/8a/x3jSIGEr_o.png")
                                const guild = interaction.guild;
                                const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                                var contador = 1
                                while(contador != 200){
                                    var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                                    var member = await guild.members.fetch(randomMeme);
                                    contador++
                                    if (user != member){
                                    if (member.roles.cache.has(fardoid) || member.roles.cache.has(BAN) || member.roles.cache.has(trapaceiroid) || member.roles.cache.has(malcuidadoid) || member.roles.cache.has(quebradoid) || member.roles.cache.has(desprezoid) || member.roles.cache.has(desgraçaid) || member.roles.cache.has(letargicoid) || member.roles.cache.has(preguicosoid) || member.roles.cache.has(lerdoid) || member.roles.cache.has(infortunaid) || member.roles.cache.has(assustadoid) || member.roles.cache.has(azaradoid)){
                                        contador = 200
                                        if (member.roles.cache.has(trapaceiroid)) {
                                            await member.roles.remove(trapaceiroid);
                                            interaction.member.roles.add(trapaceiroid)};
                                        if (member.roles.cache.has(malcuidadoid)) {
                                            await member.roles.remove(malcuidadoid);
                                            interaction.member.roles.add(malcuidadoid)};
                                        if (member.roles.cache.has(quebradoid)) {
                                            await member.roles.remove(quebradoid);
                                            interaction.member.roles.add(quebradoid)};
                                        if (member.roles.cache.has(desprezoid)) {
                                            await member.roles.remove(desprezoid);
                                            interaction.member.roles.add(desprezoid)};
                                        if (member.roles.cache.has(desgraçaid)) {
                                            await member.roles.remove(desgraçaid);
                                            interaction.member.roles.add(desgraçaid)};
                                        if (member.roles.cache.has(letargicoid)) {
                                            await member.roles.remove(letargicoid);
                                            interaction.member.roles.add(letargicoid)};
                                        if (member.roles.cache.has(preguicosoid)) {
                                            await member.roles.remove(preguicosoid);
                                            interaction.member.roles.add(preguicosoid)};
                                        if (member.roles.cache.has(lerdoid)) {
                                            await member.roles.remove(lerdoid);
                                            interaction.member.roles.add(lerdoid)};
                                        if (member.roles.cache.has(infortunaid)) {
                                            await member.roles.remove(infortunaid);
                                            interaction.member.roles.add(infortunaid)};
                                        if (member.roles.cache.has(assustadoid)) {
                                            await member.roles.remove(assustadoid);
                                            interaction.member.roles.add(assustadoid)};
                                        if (member.roles.cache.has(azaradoid)) {
                                            await member.roles.remove(azaradoid);
                                            interaction.member.roles.add(azaradoid)};
                                        if (member.roles.cache.has(caoticoid)) {
                                            await member.roles.remove(caoticoid);
                                            interaction.member.roles.add(caoticoid)};
                                        if (member.roles.cache.has(bffsid)) {
                                            await member.roles.remove(bffsid);
                                            interaction.member.roles.add(bffsid)};
                                        if (member.roles.cache.has(contracaoid)) {
                                            await member.roles.remove(contracaoid);
                                            interaction.member.roles.add(contracaoid)};
                                        interaction.channel.send(`A pessoa que roubou os Status de ${member.nickname} foi ${interaction.user}`)}}
                                    if (contador == 198){
                                        interaction.channel.send(`**⚠ Não existe membros com Status positivos para roubar ⚠**`)
                                        contador = 200}}}
                //WORST FRIENDS FOREVER!
                if (roletabobby > 16 && roletabobby <= 19){
                    embeds.setTitle(`WORST FRIENDS FOREVER!`)
                    embeds.setDescription(`Nós somos Melhores Inimigos! Está escrito no fundo da privada!\nA carta irá pegar uma pessoa aleatória e fazer ela ser sua inimiga declarada. Ao estarem com cargos de WFFs, vocês irão compartilhar TODOS os status NEGATIVOS (Menos efeitos Lunares) que um dos dois pegarem em cartas.`)
                    embeds.setThumbnail("https://images2.imgbox.com/4c/f7/euESgdY3_o.png")
                    const guild = interaction.guild;
                    const frasesbobby = JSON.parse(fs.readFileSync(frasespath, 'utf-8')).Ids;
                    var contador = 1
                    interaction.member.roles.add(wffid);
                    while(contador != 100){
                        var randomMeme = frasesbobby[Math.floor(Math.random() * frasesbobby.length)];
                        var member = await guild.members.fetch(randomMeme);
                        contador++
                        if (user != member || !member.roles.cache.has(wffid)){
                            member.roles.add(wffid)
                            interaction.channel.send(`🎉 ${member.user.tag} recebeu o cargo!`);
                            contador = 100
                        if (contador == 98){
                            interaction.channel.send(`**⚠ Não existe pessoas que queiram ser seu inimigo⚠**`)
                            contador = 100
                            }
                        }}}
            }
            //8/? AMALDIÇOADA (1-4)
            if (roletabobby > -299 && roletabobby <= 5){
                const teste100 = getporce(1, 4)
                embeds.setColor("Red")
                embeds.setAuthor({ name: `Amaldiçoada`, iconURL: "https://images2.imgbox.com/52/b8/aOqgO6nC_o.png"})
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                interaction.member.roles.add(maldicaoid)
                WFFs(user, maldicaoid)
                //PERDER ITEM
                if (roletabobby > 2 && roletabobby <= 5){
                    embeds.setTitle(`PIADA CRUEL`)
                    datafrase.dados.perderiten++
                    embeds.setDescription(`Essa carta é um chamado do Deus da Comédia, um chamado bom para ele mas cruel para você... Deus da Comédia irá pegar um dos itens do seu inventário na próxima sessão.\n\n (Caso você não tenha nenhum item no inventário, a carta irá anular uma carta de -Valor Lendário- que tenha pego e não tenha ganhado o item ainda. Caso você não tenha NENHUM dos dois, a carta não irá funcionar)`)
                    embeds.setThumbnail("https://images2.imgbox.com/d8/83/3KudwvyY_o.png")}
                //A MALDIÇÃO DO CAOS
                if (roletabobby > -4 && roletabobby <= 2){
                datafrase.dados.bobby++
                embeds.setTitle(`MALDIÇÃO DO CAOS`)
                embeds.setDescription(`Essa carta irá invocar o poder do verdadeiro caos do Deus da Comédia. Além disso, você ficará amaldiçoado, fazendo com que você tenha um azar ENORME na próxima carta. \n\nO caos irá dominar o servidor...`)
                embeds.setThumbnail("https://images2.imgbox.com/f1/9e/6vQUHHhG_o.png")
                const nomebobby = "Bobby"
                const avatarbobby = "https://images2.imgbox.com/0e/f6/mNnY7rrO_o.png"
                const caos = (Math.floor(Math.random() * 100) + 1) + (Math.floor(Math.random() * 100) + 1);
                const ideiasid = '1157781850442436680';
                const ideias = interaction.client.channels.cache.get(ideiasid);
                interaction.client.user.setAvatar(avatarbobby);
                interaction.client.user.setUsername(nomebobby);
                ideias.threads.create({ name: `Agradecimento ao Amaldiçoado!`, message: { content: `Obrigado ${interaction.user}!\n\n\n Espero que todos parabenizem o ${interaction.user} por me permitir trazer o caos nesse servidor!`}})
                for (var i = 0; i < caos; i++){
                    const MEMESJSON = dataimagem.imagens.memes;
                    const randomeme = MEMESJSON[Math.floor(Math.random() * MEMESJSON.length)];
                    const GATOSJSON = dataimagem.risorius.gatosmemes;
                    const randomgato = GATOSJSON[Math.floor(Math.random() * GATOSJSON.length)];
                    interaction.channel.send(randomeme);
                    interaction.user.send(randomgato);
                }
                setTimeout(async () => {
                    const nomenormal = "Sol"
                    const avatarnormal = 'https://images2.imgbox.com/df/e9/DcGo6iIv_o.png'; 
                    interaction.client.user.setAvatar(avatarnormal);
                    interaction.client.user.setUsername(nomenormal);
                    console.log("Funcionou a troca para o Sol");
                }, 600000)};
                //BANIMENTO AMALDIÇOADO
                if (roletabobby > -15 && roletabobby <= -4){
                    embeds.setTitle(`BANIMENTO AMALDIÇOADO`)
                    const tempo = Math.floor(Math.random() * 24) + 1
                    embeds.setDescription(`Essa carta irá te amaldiçoar, te banindo do Risórius por ${tempo} horas. Você é uma piada tão engraçada que está roubando o show do meu jogo, tire esse tempo para refletir e deixar de ser uma piada..`)
                    embeds.setThumbnail("https://images2.imgbox.com/ad/c8/mmeYPJoi_o.png")
                    const timer = tempo * 3600000
                    interaction.member.roles.add(BAN);
                    datafrase.dados.banidos++
                    setTimeout(async () => {
                        await user.roles.remove(BAN);
                    },timer)}
                //MALDIÇÃO DO MARLAN
                if (roletabobby > -30 && roletabobby <= -15){
                    if (datafrase.eventos.tipo != "normal"){roletabobby = -50}
                    if (roletabobby > -30 && roletabobby <= -15){
                    embeds.setTitle(`MALDIÇÃO DE MARLAN`)
                    embeds.setDescription(`Essa carta irá trazer a presença do Marlan, o Deus do Azar, deixando o mais puro azar e sentimentos extremos a todos, aumentando o azar das cartas de todos por 60 minutos. Esse evento vai acontecer em 10 minutos...\n\n(Esse azar acumula com outros status)`)
                    embeds.setThumbnail("https://images2.imgbox.com/1b/ac/cMm40x99_o.png")
                    datafrase.eventos.tipo = "bloqueado"
                    datafrase.dados.cartastipoevento++
                    setTimeout(async () => {
                        interaction.channel.send(`<@&${alertaid}>! Graças ao ${interaction.user} um pacto foi feito, trazendo a presença de Marlan, o Deus da Azar. Os próximos 60 minutos vocês terão azar em todas as cartas. O meu divertimento é a queda de vocês...`)
                        datafrase.eventos.tipo = "marlan"
                        setTimeout(async () => {
                            datafrase.eventos.tipo = "normal"
                            interaction.channel.send(`Tivemos o fim da Maldição do Pacto... Não se esqueçam`)
                        }, 3600000);
                    }, 60000 )}}
                //MALDIÇÃO DE MALITIAS
                if (roletabobby >= -48 && roletabobby <= -30){
                    embeds.setTitle(`MALDIÇÃO DE MALITIAS`)
                    embeds.setDescription(`Malitias, o Demônio do Ódio irá te Amaldiçoar, guardando seus sentimentos em ti. \nEssa carta faz com que Malitias ANULE a próxima carta divina que você for pegar, fazendo com que ela se torne uma carta azarada garantida.`)
                    embeds.setThumbnail("https://images2.imgbox.com/4a/43/YKMNLUKO_o.png")
                    WFFs(user, malcuidadoid)
                    interaction.member.roles.add(malcuidadoid)}
                //MALDIÇÃO DAS APOSTAS
                if (roletabobby > -70 && roletabobby <= -48){
                    embeds.setTitle(`MALDIÇÃO DAS APOSTAS`)
                    embeds.setDescription(`Talvez seja azar? Ou você é apenas um trapaceiro ruim, mas isso não importa, o que importa é que você foi pego trapaceando nos jogos do Bobby e advinha? Ele não está feliz com isso.\nEssa carta faz com que você tenha azar nos jogos do Bobby, tendo mais chance de ganhar recompensas ruins.\n\n-Trapaceando no meu jogo é? HAHAHAHHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHHAHAHAHAHHAHAHAHAHA`)
                    embeds.setThumbnail("https://images2.imgbox.com/a9/37/TaT3KdOU_o.png")
                    WFFs(user, trapaceiroid)
                    interaction.member.roles.add(trapaceiroid)}
                //LÍNGUA DE GATO PRETO
                if (roletabobby > -90 && roletabobby <= -70){
                    embeds.setTitle(`LÍNGUA DE GATO PRETO`)
                    embeds.setDescription(`A língua de gato preto é algo muito comum para fazer maldições para pessoas. Ela te traz um estrago na sua vida, destruíndo todos os momentos de felicidade que você poderia ter. Esta carta irá te dar uma Língua de Gato morto, um item amaldiçoado que fará você ter um multiplicador em todos os status de azar em 1.25x`)
                    embeds.setThumbnail("https://images2.imgbox.com/22/45/aB9cUHXi_o.png")
                    WFFs(user, linguagatoid)
                    interaction.member.roles.add(linguagatoid)}
                //CHARISMA
                if (roletabobby > -300 && roletabobby <= -90){
                    embeds.setTitle(`CHARISMA`)
                    embeds.setDescription(`Charisma é um jogo traiçoeiro. Alguns até dizem que é amaldiçoado, mas a verdade... É que a culpa é toda a sua por correr tal risco.\nEssa carta poderá tirar uma grande quantidade de dinheiro ou de dar uma pequena quantidade.`)
                    embeds.setThumbnail("https://images2.imgbox.com/45/dd/yNdBaPOt_o.png")
                    const valorAleatorio = Math.floor(Math.random() * (2500 - (-10000) + 1)) + (-10000);
                    console.log(valorAleatorio)
                    DINHEIROTESTE(valorAleatorio)}
            }
            //1/1 LUNAR
            if (roletabobby <= -375){
                const teste100 = 466 / 10000
                datafrase.dados.lunarsolar++
                embeds.setColor("Purple")
                embeds.setAuthor({ name: `Lunar`, iconURL: "https://images2.imgbox.com/0f/6b/LoRFGdn4_o.png"})
                embeds.setTimestamp()
                embeds.setFooter({ text: `Chance: ${teste100}%`});
                embeds.setTitle(`FARDO ETERNO`)
                embeds.setDescription(`Essa carta é considerada aquilo que é mais maldito no universo, e o seu azar foi o que criou isso, foi ele quem criou a existência amaldiçoada dessa carta. A Lua irá te dar um fardo eterno fazendo com que TODAS as suas cartas apartir de agora tenham azar. Além disso, quaisquer Status de sorte que você ter serão Apagados da existência.\nFora isso, alguns Status irão evoluir, sendo eles: Mal-Cuidado para Malitias (Demônio do Ódio), Trapaceiro para Marlan (Deus do Azar), Espelho para Espelho Quebrado e Quebrado para Destruído. \nPor fim, caso tenha pego quaisquer itens ou vantagens para a próxima sessão, eles serão desconsiderados.\n\n(caso você já tenha usado a vantagem na sessão, ou ganhou o item, a carta não terá efeito)`)
                embeds.setThumbnail("https://images2.imgbox.com/2f/df/JjdnE0lI_o.png")
                TIRARPOSITIVO()
                interaction.member.roles.add(fardoid)
            }
        datafrase.infos.espelho = roletabobby
        if(!user.roles.cache.has(leiguidadeid)){
            interaction.channel.send({ embeds: [embeds]})
        } else{
            embeds.setTitle(`?`)
            embeds.setDescription(`?`)
            interaction.channel.send({ embeds: [embeds]})
        }
        if(roletabobby > 750){
            datafrase.dados.cartaspositivaspegas++
        } else if (roletabobby <= 750 && roletabobby >= 300){
            datafrase.dados.CartasComunsPegas++
        } else if (roletabobby < 300){
            datafrase.dados.cartasnegativaspegas++
        }
        writeDataFraseToFile(datafrase)
        embeds.setImage(null) 
        }
            timeout[interaction.user.id] = Date.now();
        }
    };