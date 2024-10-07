const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const path = require('path');
const fs = require('fs');

const imagenspath = path.join(__dirname, '..', 'comunidade', 'lore.json');
const embeds = new EmbedBuilder()
//CÓDIGO PRO SORTEIO/FRASES DA PARISA
var timeout = [];
const milesegundos = 60000;
const segundos = milesegundos / 1000

//PATH DAS IMAGENS
function readDataImagemFromFile(){
    if (fs.existsSync(imagenspath)) {
    const JSONDADOSIMAGENS = fs.readFileSync(imagenspath, 'utf8');
    return JSON.parse(JSONDADOSIMAGENS);
    }
}
const data = readDataImagemFromFile();

//CÓDIGO DE OPÇÕES/AUTOCOMPLETE
module.exports = {
    data: new SlashCommandBuilder()
        .setName("cofre")
        .setDescription("Comando para conceitos das Campanhas!")
        .addStringOption(option =>
			option.setName('forma')
				.setDescription('Forma geométrica do cofre')
				.setAutocomplete(true)
                .setRequired(true))
        .addStringOption(option =>
			option.setName('primeiro')
				.setDescription('Primeiro valor')
                .setAutocomplete(true)
				.setRequired(true))
        .addStringOption(option =>
			option.setName('segundo')
				.setDescription('Segundo valor')
                .setAutocomplete(true)
				.setRequired(true))
        .addStringOption(option =>
			option.setName('terceiro')
				.setDescription('Terceiro valor')
                .setAutocomplete(true)
				.setRequired(true)),

    async autocomplete(interaction) {
		const focusedOption = interaction.options.getFocused(true);
		let choices;
        if (focusedOption.name === "forma"){
            choices = [ "Quadrado", "Triângulo", "Círculo"]
        }
        if (focusedOption.name === "primeiro"){
            choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        }
        if (focusedOption.name === "segundo"){
            choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        }
        if (focusedOption.name === "terceiro"){
            choices = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
        }
		const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));

        if (!interaction) return;

		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},

//CÓDIGO DE FUNCIONAMENTO
    async execute(interaction) {
        let frase = false
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `A trava do cofre ainda está ativa. Ela fica ativa por cerca de ${segundos} segundos...`, ephemeral: true});

        if(interaction.options.getString('forma')){
            const noiteescura = interaction.options.getString('forma')
            let texto
            const segundo = interaction.options.getString('primeiro')
            const terceiro = interaction.options.getString('segundo')
            const quarto = interaction.options.getString('terceiro')
            texto = `${noiteescura} ${segundo} ${terceiro} ${quarto}`
            console.log(texto)

            embeds.setColor("White")
            embeds.setDescription(`Senha usada: ${texto}`)


            if(noiteescura == "Triângulo"){
                if(interaction.options.getString('primeiro')){
                    const um = interaction.options.getString('primeiro')
                    if(um == "7"){
                        if(interaction.options.getString('segundo')){
                            const dois = interaction.options.getString('segundo')
                            if(dois == "2"){
                                if(interaction.options.getString('terceiro')){
                                    const tres = interaction.options.getString('terceiro')
                                    if(tres == "1"){
                                        embeds.setTitle("Desbloqueado")
                                        embeds.setImage("https://images2.imgbox.com/1c/6d/2KsmJKZ1_o.png")
                                        frase = true
                                    }else{
                                        embeds.setTitle("Bloqueado")
                                        embeds.setImage("https://images2.imgbox.com/10/96/HXh7Xkbp_o.png")
                                    }
                                }
                            }else{
                                embeds.setTitle("Bloqueado")
                                embeds.setImage("https://images2.imgbox.com/10/96/HXh7Xkbp_o.png")
                            }
                        }
                    }else{
                        embeds.setTitle("Bloqueado")
                        embeds.setImage("https://images2.imgbox.com/10/96/HXh7Xkbp_o.png")
                    }
                }
            }else{
                embeds.setTitle("Bloqueado")
                embeds.setImage("https://images2.imgbox.com/10/96/HXh7Xkbp_o.png")
                frase = false
            }

            
        }
        interaction.reply({embeds: [embeds]})
        if(frase == false){
            interaction.channel.send("***A senha estava incorreta... Um dispositivo de trava de proteção foi ativado, tente novamente mais tarde...***")
        }else{
            interaction.channel.send("***A porta do cofre se abre lentamente, o metal range suavemente. Uma aura sombria e triste envolve o ambiente, o ar se torna pesado. O que... há aqui dentro?***")
        }
        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
}}