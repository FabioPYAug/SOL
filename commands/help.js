const { SlashCommandBuilder, EmbedBuilder } = require("discord.js");
const { ButtonBuilder, ButtonStyle, ActionRowBuilder } = require('discord.js');
const fs = require('fs');
const path = require('path');

//ALTERAR QUAL A ULTIMA PÁGINA
const páginamax = 4
const paginamin = 1

const frasespath = path.join(__dirname, '..', 'comunidade', 'risorius.json');
const dadospath = path.join(__dirname, '..', 'comunidade', 'dados.json');
function readDataFromFile(){
    if (fs.existsSync(frasespath)) {
    const JSONDADOS = fs.readFileSync(frasespath, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}
function readDataFromFile2(){
    if (fs.existsSync(dadospath)) {
    const JSONDADOS = fs.readFileSync(dadospath, 'utf8');
    return JSON.parse(JSONDADOS);
    }
}

var timeout = [];
const milesegundos = 5000;
const segundos = milesegundos / 1000
module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("Commando para descobrir os comandos do servidor"),
    async execute (interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Este comando está em cooldown, espere ${segundos} segundos`, ephemeral: true});
            const data = readDataFromFile();
            const datadados = readDataFromFile2();
            const vezes = data.dados
            const dadosgeral = datadados.usosgeral       
            var numeropagina = 0
            var paginarisos = 0
            var MENU = 0
            var comandonome = "EXPLICAÇÃO"
            var descricao = "Este comando serve para descobrir sobre dados gerais de cada comando e suas funções. Você terá acesso a 4 botões, sendo eles:\n\n🟦-ANTERIOR: serve para voltar para a página anterior, caso esteja na página mínima, ele não funcionará;\n\n🟦-PRÓXIMO: ele irá para a próxima página e caso esteja na página máxima, ele não funcionará;\n\n🟩-ENTRAR: irá entrar na página atual;\n\n🟥-VOLTAR: irá voltar para a página principal."
            var pagina = new EmbedBuilder()
                .setColor("NotQuiteBlack")
                .setTitle(comandonome)
                .setAuthor({name: `Página ${numeropagina}`})
                .setDescription(descricao)
                
            const user = interaction.member;
            const updateComponents = () => {
                return new ActionRowBuilder().addComponents(
                    new ButtonBuilder()
                        .setCustomId('Anterior')
                        .setLabel('Anterior')
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(numeropagina === 0 || numeropagina === paginamin || paginarisos === 1 || MENU === 2),
                    new ButtonBuilder()
                        .setCustomId('Próximo')
                        .setLabel('Próximo')
                        .setStyle(ButtonStyle.Primary)
                        .setDisabled(numeropagina === páginamax || paginarisos === 3 || MENU === 2),
                    new ButtonBuilder()
                        .setCustomId('Entrar')
                        .setLabel('Entrar')
                        .setStyle(ButtonStyle.Success)
                        .setDisabled(MENU === 1 || numeropagina === 0 || MENU === 2 ),
                    new ButtonBuilder()
                        .setCustomId('Voltar')
                        .setLabel('Voltar')
                        .setStyle(ButtonStyle.Danger)
                        .setDisabled(MENU === 0)
                )
            };
            const message = await interaction.reply({
                embeds: [pagina],
                components: [updateComponents()],
                fetchReply: true,
                ephemeral: true
            });

            const filtro = i => i.user.id === interaction.user.id
            const collector = message.createMessageComponentCollector({ filtro, time: 180000 });
            collector.on('collect', async i => {
                if (i.customId === 'Anterior') {
                    if(MENU == 0){
                        numeropagina = numeropagina - 1
                        if(numeropagina == 1){
                            comandonome = "RISORIUS"
                            numeropagina = 1,
                           descricao = `Este comando é um jogo criado pelo Deus da Comédia, Bobby! Nele, você testará sua sorte com mais de 80 possibilidades diferentes, que variam entre boas e ruins.\n(Obs: algumas cartas podem interferir positiva ou negativamente em suas sessões de RPG.)\n\n-Vezes Usado: ${vezes.usos}\n`
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                        if(numeropagina == 2){
                            comandonome = "CARGOS"
                            numeropagina = 2,
                            descricao = `Este comando é criado para facilitar o acesso a canais do servidor ou não! Com o /cargo você poderá escolher quais canais você quer ou não ter acesso.\n\n-Vezes Usado: ${dadosgeral.cargos}`
                            pagina.setColor("Random")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                        if(numeropagina == 3){
                            comandonome = "GLÓRIA AO SOL"
                            numeropagina = 2,
                            descricao = `Este comando é criado para dar Glória ao Sol a todos no servidor!\n\n-Vezes Usado: ${dadosgeral.gloria}`
                            pagina.setColor("Yellow")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                        if(numeropagina == 4){
                            comandonome = "FIGURA"
                            numeropagina = 4
                            descricao = `Personagens fora do RPG? Com esse comando isso é possível! Com ele você pode interagir com alguns personagens fora de sessão!\n\n-Vezes Usado: ${dadosgeral.figura}\n-Vezes que a Parisa foi usada: ${dadosgeral.figuraparisa}\n-Vezes que o Poyo foi usada: ${dadosgeral.figurapoyo}\n-Vezes que o Joaozinho foi usada: ${dadosgeral.figurajoaozinho}`
                            pagina.setColor("DarkNavy")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    }
                    //RISORIUS
                    if(MENU == 1){
                        paginarisos = paginarisos - 1
                        if(paginarisos == 2){
                            comandonome = "RISORIUS"
                            numeropagina = "Status Neutros/Positivos",
                            descricao = "Existem diversos Status e todos eles fazem algo que interferem diretamente no seu jogo. A seguir terá listado em tópicos (por raridade) os Status Neutros e Positivos do Risorius:\n\n🔳COMUM🔳\n\n✱->Padrãozinho: Esse Status fará com que a sua próxima carta seja uma Comum\n✱->Normalizado: Você terá uma chance de 10% de pegar uma carta comum na próxima carta.\n\n⭕BENÉVOLA⭕\n\n✱->❤69❤: Faz com que a sua próxima carta ou tenha 6.9% de sorte ou 6.9% de azar\n✱->Venturado: Faz com que a sua próxima carta tenha 4% de sorte\n✱->Contração: Irá inverter a raridade da sua próxima carta\n✱->Entrelaçado: Faz com que você recebe 3% de sorte nas cartas enquanto você tenha o Status e que ele tenha cargas\n✱->Protegido: Irá proteger seus Status na próxima carta do tipo Anular Status\n\n⭕SUPERIOR⭕\n\n✱->Coincidente: Irá dar 3% de sorte para a próxima carta\n✱->Afortunado: Irá dar 8% de sorte para a próxima carta\n✱->Ágil: Irá diminuir o cooldown do risorius em 1.5x\n✱->Acelerado: Irá diminuir o cooldown do risorius em 2.0x\n✱->Celeríssimo: Irá diminuir o cooldown do risorius em 2.5x\n✱->Imperador: Irá dar a sorte de acordo com o dinheiro extra da carta Cofre da Dinastia\n\n⭕MARAVILHOSO⭕\n\n✱->Contingente: Irá dar 15% de sorte na próxima carta\n✱->Glorificado: Irá fazer a sua próxima carta ser de certeza uma carta boa\n✱->Espelhado: irá clonar a última carta lançada pelo risorius\n✱->BFFs: compartilhará seus status com o outro usuário de BFFs\n✱->SpeedRunner: Irá diminuir o cooldown do risorius em 3x\n\n⭕DIVINA⭕\n\n✱->Burlador: Irá dar sorte nos jogos do Bobby, variando de 10%-40%\n✱->Trevo de 4 Folhas: Você terá um multiplicador de 1.25 em todos os status de sorte.\n✱->Bem-Cuidado: Irá fazer com que a próxima carta amaldiçoada pega seja convertida em uma carta positiva\n✱->Vigilante: Torna imune a roubos de Status\n✱->Abençoado: Irá fazer a próxima carta ter uma sorte de 35%\n\n⭕SOLAR⭕\n\n✱->Divino: Irá te dar de 1%-7,5% de sorte em todas as cartas\n✱->Hanar: Irá fazer com que as próximas cartas amaldiçoadas pegas sejam convertidas em uma carta positiva\n✱->Juhur: Irá dar sorte nos jogos do Bobby e no Cofre da Dinastia e Ninho do Dragão, variando de 10%-40%\n✱->Herónos: Irá diminuir o cooldown do risorius em 5x"
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                            }
                        if(paginarisos == 3){
                            comandonome = "RISORIUS"
                            numeropagina = "Status Negativos",
                            descricao = "A seguir terá listado em tópicos (por raridade) os Status negativos do Risorius:\n\n❌INFORTUNADA❌\n\n✱->Azarado: Irá dar 4% de azar na próxima carta\n✱->Assustado: Irá dar o azar de acordo com o valor de perigo da carta Ninho do Dragão CInzento\n✱->Inconveniente: Você irá receber um azar de 2% na próxima carta\n\n❌LAMENTÁVEL❌\n\n✱->Infortunado: Irá dar azar de 8% na próxima carta\n✱->Lerdo: Irá aumentar o cooldown do risorius em 1.5x\n✱->Preguiçoso: Irá aumentar o cooldown do risorius em 2x\n✱->Letárgico: Irá aumentar o cooldown do risorius em 2.5x\n✱->Decadência: Faz com que você recebe 3% de azar nas cartas enquanto você tenha o Status e que ele tenha cargas. Além disso, quanto maior o número de cargas, maior a porcentagem de azar\n\n❌MISERÁVEL❌\n\n✱->Desprezado: Fará sua próxima carta ser uma negativa de certeza\n✱->Desgraçado: Irá dar azar de 15% na próxima carta\n✱->Quebrado: Fará com que tenha 10% de chance de você perder a roletada\n✱->Caótico: irá fazer a sua próxima carta ter 1-100% de sorte ou azar\n\n❌AMALDIÇOADA❌\n\n✱->Amaldiçoado: Irá dar azar de 35% na próxima carta\n✱->Mal-Cuidado: Fará com que sua próxima carta Divina seja convertida em uma negativa aleatória\n✱->Língua de Gato Preto: Irá te dar um multiplicador de azar de 1.25 nos seus status de azar.\n✱->Trapaceiro: Irá dar azar de 10%-40% nos jogos do Bobby\n✱->Banido: te impede de jogar no risorius por um tempo x\n\n❌LUNAR❌\n\n✱->Fadado: irá te dar um azar de 1%-7% em todas as cartas\n✱->Espelho Quebrado: Fará com que o espelho tenha uma chance de 40% de não funcionar\n✱->Destruído: Fará com que tenha 50% de chance de você perder a roletada\n✱->Marlan: Irá dar azar nos jogos do Bobby e no Cofre da Dinastia e Ninho do Dragão, variando de 10%-40%\n✱->Malitias: Irá fazer com que as próximas cartas divinas pegas sejam convertidas em uma carta negativa"
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                            }
                }
                }
                if (i.customId === 'Próximo') {
                    if(MENU == 0){
                        numeropagina = numeropagina + 1
                        if(numeropagina == 1){
                            comandonome = "RISORIUS"
                            numeropagina = 1,
                            descricao = `Este comando é um jogo criado pelo Deus da Comédia, Bobby! Nele, você testará sua sorte com mais de 80 possibilidades diferentes, que variam entre boas e ruins.\n(Obs: algumas cartas podem interferir positiva ou negativamente em suas sessões de RPG.)\n\n-Vezes Usado: ${vezes.usos}\n`
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                        if(numeropagina == 2){
                            comandonome = "CARGOS"
                            numeropagina = 2,
                            descricao = `Este comando é criado para facilitar o acesso a canais do servidor ou não! Com o /cargo você poderá escolher quais canais você quer ou não ter acesso.\n\n-Vezes Usado: ${dadosgeral.cargos}`
                            pagina.setColor("Random")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                        if(numeropagina == 3){
                            comandonome = "GLÓRIA AO SOL"
                            numeropagina = 3
                            descricao = `Este comando é criado para dar Glória ao Sol a todos no servidor!\n\n-Vezes Usado: ${dadosgeral.gloria}`
                            pagina.setColor("Yellow")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                        if(numeropagina == 4){
                            comandonome = "FIGURA"
                            numeropagina = 4
                            descricao = `Personagens fora do RPG? Com esse comando isso é possível! Com ele você pode interagir com alguns personagens fora de sessão!\n\n-Vezes Usado: ${dadosgeral.figura}\n-Vezes que a Parisa foi usada: ${dadosgeral.figuraparisa}\n-Vezes que o Poyo foi usada: ${dadosgeral.figurapoyo}\n-Vezes que o Joaozinho foi usada: ${dadosgeral.figurajoaozinho}`
                            pagina.setColor("DarkNavy")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    }
                    //RISORIUS
                    if(MENU == 1){
                        paginarisos = paginarisos + 1
                        if(paginarisos == 2){
                            comandonome = "RISORIUS"
                            numeropagina = "Status Neutros/Positivos",
                            descricao = "Existem diversos Status e todos eles fazem algo que interferem diretamente no seu jogo. A seguir terá listado em tópicos (por raridade) os Status Neutros e Positivos do Risorius:\n\n🔳COMUM🔳\n\n✱->Padrãozinho: Esse Status fará com que a sua próxima carta seja uma Comum\n✱->Normalizado: Você terá uma chance de 10% de pegar uma carta comum na próxima carta.\n\n⭕BENÉVOLA⭕\n\n✱->❤69❤: Faz com que a sua próxima carta ou tenha 6.9% de sorte ou 6.9% de azar\n✱->Venturado: Faz com que a sua próxima carta tenha 4% de sorte\n✱->Contração: Irá inverter a raridade da sua próxima carta\n✱->Entrelaçado: Faz com que você recebe 3% de sorte nas cartas enquanto você tenha o Status e que ele tenha cargas\n✱->Protegido: Irá proteger seus Status na próxima carta do tipo Anular Status\n\n⭕SUPERIOR⭕\n\n✱->Coincidente: Irá dar 3% de sorte para a próxima carta\n✱->Afortunado: Irá dar 8% de sorte para a próxima carta\n✱->Ágil: Irá diminuir o cooldown do risorius em 1.5x\n✱->Acelerado: Irá diminuir o cooldown do risorius em 2.0x\n✱->Celeríssimo: Irá diminuir o cooldown do risorius em 2.5x\n✱->Imperador: Irá dar a sorte de acordo com o dinheiro extra da carta Cofre da Dinastia\n\n⭕MARAVILHOSO⭕\n\n✱->Contingente: Irá dar 15% de sorte na próxima carta\n✱->Glorificado: Irá fazer a sua próxima carta ser de certeza uma carta boa\n✱->Espelhado: irá clonar a última carta lançada pelo risorius\n✱->BFFs: compartilhará seus status com o outro usuário de BFFs\n✱->SpeedRunner: Irá diminuir o cooldown do risorius em 3x\n\n⭕DIVINA⭕\n\n✱->Burlador: Irá dar sorte nos jogos do Bobby, variando de 10%-40%\n✱->Trevo de 4 Folhas: Você terá um multiplicador de 1.25 em todos os status de sorte.\n✱->Bem-Cuidado: Irá fazer com que a próxima carta amaldiçoada pega seja convertida em uma carta positiva\n✱->Vigilante: Torna imune a roubos de Status\n✱->Abençoado: Irá fazer a próxima carta ter uma sorte de 35%\n\n⭕SOLAR⭕\n\n✱->Divino: Irá te dar de 1%-7,5% de sorte em todas as cartas\n✱->Hanar: Irá fazer com que as próximas cartas amaldiçoadas pegas sejam convertidas em uma carta positiva\n✱->Juhur: Irá dar sorte nos jogos do Bobby e no Cofre da Dinastia e Ninho do Dragão, variando de 10%-40%\n✱->Herónos: Irá diminuir o cooldown do risorius em 5x"
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                            }
                        if(paginarisos == 3){
                            comandonome = "RISORIUS"
                            numeropagina = "Status Negativos",
                            descricao = "A seguir terá listado em tópicos (por raridade) os Status negativos do Risorius:\n\n❌INFORTUNADA❌\n\n✱->Azarado: Irá dar 4% de azar na próxima carta\n✱->Assustado: Irá dar o azar de acordo com o valor de perigo da carta Ninho do Dragão CInzento\n✱->Inconveniente: Você irá receber um azar de 2% na próxima carta\n\n❌LAMENTÁVEL❌\n\n✱->Infortunado: Irá dar azar de 8% na próxima carta\n✱->Lerdo: Irá aumentar o cooldown do risorius em 1.5x\n✱->Preguiçoso: Irá aumentar o cooldown do risorius em 2x\n✱->Letárgico: Irá aumentar o cooldown do risorius em 2.5x\n✱->Decadência: Faz com que você recebe 3% de azar nas cartas enquanto você tenha o Status e que ele tenha cargas. Além disso, quanto maior o número de cargas, maior a porcentagem de azar\n\n❌MISERÁVEL❌\n\n✱->Desprezado: Fará sua próxima carta ser uma negativa de certeza\n✱->Desgraçado: Irá dar azar de 15% na próxima carta\n✱->Quebrado: Fará com que tenha 10% de chance de você perder a roletada\n✱->Caótico: irá fazer a sua próxima carta ter 1-100% de sorte ou azar\n\n❌AMALDIÇOADA❌\n\n✱->Amaldiçoado: Irá dar azar de 35% na próxima carta\n✱->Mal-Cuidado: Fará com que sua próxima carta Divina seja convertida em uma negativa aleatória\n✱->Língua de Gato Preto: Irá te dar um multiplicador de azar de 1.25 nos seus status de azar.\n✱->Trapaceiro: Irá dar azar de 10%-40% nos jogos do Bobby\n✱->Banido: te impede de jogar no risorius por um tempo x\n\n❌LUNAR❌\n\n✱->Fadado: irá te dar um azar de 1%-7% em todas as cartas\n✱->Espelho Quebrado: Fará com que o espelho tenha uma chance de 40% de não funcionar\n✱->Destruído: Fará com que tenha 50% de chance de você perder a roletada\n✱->Marlan: Irá dar azar nos jogos do Bobby e no Cofre da Dinastia e Ninho do Dragão, variando de 10%-40%\n✱->Malitias: Irá fazer com que as próximas cartas divinas pegas sejam convertidas em uma carta negativa"
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                            }
                    }
                }
                if (i.customId === 'Entrar') {
                    if(comandonome == "RISORIUS"){
                            MENU = 1
                            paginarisos = 1
                            comandonome = "RISORIUS"
                            numeropagina = "Informações",
                            descricao = "Este comando é um simples jogo. Ao usar /risorius, você receberá uma carta aleatória com diversas raridades e efeitos. No entanto, esses efeitos podem interferir diretamente nas suas sessões de RPG (embora não drasticamente). Portanto, caso não deseje essa interferência, é recomendável não jogar.\nAo usar o comando /risorius, surgirá uma carta contendo o nome, a raridade (a cor também remete à raridade), um símbolo único da carta e a porcentagem de chance de obter aquela raridade específica. Existem 14 raridades diferentes de cartas e 4 tipos de cartas, que serão todos listados a seguir:\n\n⭕TIPOS DE CARTAS⭕\n\n->Cartas de Efeitos: Cartas que irão afetar de alguma forma suas próximas jogadas\n->Cartas de Eventos: Cartas que irão começar um evento\n->Cartas Aleatórias: Cartas que mostram algo aleatório ou faz algo específico\n->Cartas de Sessão: São cartas que interferem diretamente na sessão\n\n⭕RARIDADES⭕\n\n->Heresia: 4.9% de chance de pegar essa raridade\n->Amaldiçoada: 0.3% de chance de pegar essa raridade\n->Calamitosa: 1.4% de chance de pegar essa raridade\n->Miserável: 2.9% de chance de pegar essa raridade\n->Lamentável: 4.9% de chance de pegar essa raridade\n->Inoportuna: 19.9% de chance de pegar essa raridade\n->Comum: 40% de chance de pegar essa raridade\n->Benévola: 14.9% de chance de pegar essa raridade\n->Superior: 4.9% de chance de pegar essa raridade\n->Maravilhosa: 2.9% de chance de pegar essa raridade\n->Inigualável: 1.4% de chance de pegar essa raridade\n->Divina: 0.4% de chance de pegar essa raridade\n->Solar/Lunar: 0.046% de chance de pegar essa raridade"
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    if(comandonome == "CARGOS"){
                            MENU = 2
                            comandonome = "CARGOS"
                            numeropagina = "Informações",
                            descricao = "Este simples comando irá te dar um menu com botões onde poderá decidir entre ir para a próxima página (ou voltar para a última), pegar um cargo ou tirar um cargo, tudo isso usando o /cargos. Além disso, ele terá uma lista de diversos cargos onde cada um pode te dar permissão para um canal ou até só para ser marcado em alguns situações. Existem os seguintes cargos:\n\n->Player: Acesso a livros e conteúdos de RPG\n->Cauteloso: Acesso ao canal Patch-Notes-Sol\n->Artífice: Possibilidade de postar arte no canal de artes\n->Historiador: Acesso ao canal de palavras importantes\n->Alertado: ser marcado ao inicio de evento do Risorius\n->Cores: irá te dar diversas opções de cores para o seu nick"
                            pagina.setColor("Random")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    if(comandonome == "GLÓRIA AO SOL"){
                            MENU = 2
                            comandonome = "GLÓRIA AO SOL"
                            numeropagina = "Informações",
                            descricao = "Este comando é bem simples, usando uma vez por dia /gloria, ele possui apenas duas funções:\n\n->Desejar a todos um dia iluminado, dando Glória ao Sol a todos presentes no chat\n\n->Esquentar o servidor com a foto do Sol. Toda vez que ele é usado, o Sol volta para sua foto natural."
                            pagina.setColor("Yellow")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    if(comandonome == "FIGURA"){
                            MENU = 2
                            comandonome = "FIGURA"
                            numeropagina = "Informações",
                            descricao = "Este simples e carismático comando é bem útil para você interagir com NPCs fora de sessão! Com ele, você pode ter acesso a 3 personagens, sendo eles: Joaozinho, Poyo e Parisa! Ao escolher qual personagem com /figura, você poderá ter acesso as seguintes opções:\n\n->Aparência: Mostrará um desenho aleatório do personagem escolhido.\n->Competir: Você irá competir com a sua escolha\n->Conselhos: Você irá pegar um conselho aleatório vinda da sua escolha\n->Expressões: Uma expressão aleatória vinda da sua escolha\n->Frase Aleatória: Uma frase aleatória vinda da sua escolha\n->Piadas: Uma piada vinda da sua escolha\n->Quantidade de Frases: Irá dizer a quantidade de frases que a sua escolha tem no total"
                            pagina.setColor("DarkNavy")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                }
                if (i.customId === 'Voltar') {
                    MENU = 0
                    if(paginarisos == 1 || paginarisos == 2 || paginarisos == 3){
                            comandonome = "RISORIUS"
                            numeropagina = 1
                            paginarisos = 0
                            descricao = `Este comando é um jogo criado pelo Deus da Comédia, Bobby! Nele, você testará sua sorte com mais de 80 possibilidades diferentes, que variam entre boas e ruins.\n(Obs: algumas cartas podem interferir positiva ou negativamente em suas sessões de RPG.)\n\n-Vezes Usados: ${vezes.usos}\n`
                            pagina.setColor("Red")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    if(comandonome == "CARGOS"){
                            comandonome = "CARGOS"
                            numeropagina = 2
                            descricao = `Este comando é criado para facilitar o acesso a canais do servidor ou não! Com o /cargo você poderá escolher quais canais você quer ou não ter acesso.\n\n-Vezes Usado: ${dadosgeral.cargos}`
                            pagina.setColor("Random")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    if(comandonome == "GLÓRIA AO SOL"){
                            comandonome = "GLÓRIA AO SOL"
                            numeropagina = 3
                            descricao = `Este comando é criado para dar Glória ao Sol a todos no servidor!\n\n-Vezes Usado: ${dadosgeral.gloria}`
                            pagina.setColor("Yellow")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                    if(comandonome == "FIGURA"){
                            comandonome = "FIGURA"
                            numeropagina = 4
                            descricao = `Personagens fora do RPG? Com esse comando isso é possível! Com ele você pode interagir com alguns personagens fora de sessão!\n\n-Vezes Usado: ${dadosgeral.figura}\n-Vezes que a Parisa foi usada: ${dadosgeral.figuraparisa}\n-Vezes que a Poyo foi usada: ${dadosgeral.figurapoyo}`
                            pagina.setColor("DarkNavy")
                            pagina.setTitle(comandonome)
                            pagina.setAuthor({name: `Página ${numeropagina}`})
                            pagina.setDescription(descricao)
                        }
                }
                await i.update({ embeds: [pagina], components: [updateComponents()], ephemeral: true });

            });
            collector.on('end', collected => {
                return;
                
                
            });
        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
    }
}