const { SlashCommandBuilder, EmbedBuilder } = require("discord.js")
const path = require('path');
const fs = require('fs');

//CÓDIGO PRO SORTEIO/FRASES DA PARISA
var timeout = [];
const milesegundos = 1000;
const segundos = milesegundos / 1000

//CÓDIGO DE OPÇÕES/AUTOCOMPLETE
module.exports = {
    data: new SlashCommandBuilder()
        .setName("musicas")
        .setDescription("Comando para musicas de sessões!")
        .addStringOption(option =>
			option.setName('tropical')
				.setDescription('Campanha Tropical de Ordem Paranormal')
				.setAutocomplete(true))
        .addStringOption(option =>
			option.setName('noiteescura')
				.setDescription('Campanha Noite Escura de Tormenta20')
				.setAutocomplete(true)),

    async autocomplete(interaction) {
		const focusedOption = interaction.options.getFocused(true);
		let choices;
        if (focusedOption.name === "tropical"){
            choices = ["Aparência", "Competir", "Conselhos", "Dados", "Expressões", "Frase Aleatória", "Horóscopo", "Piadas", "Playlist", "Quantidade de Frases"]
        }
        if (focusedOption.name === "noiteescura"){
            choices = ["Ambiente Tranquilo", "Falas da Lua", "Resumo da Sessão"]
        }
		const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));

        if (!interaction) return;

		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},

//CÓDIGO DE FUNCIONAMENTO
    async execute(interaction) {
        if (timeout.includes(interaction.user.id)) return await interaction.reply({ content: `Este comando está em cooldown, espere ${segundos} segundos`, ephemeral: true});

        if(interaction.options.getString('noiteescura')){
        const noiteescura = interaction.options.getString('noiteescura')
        
        if(noiteescura == "Ambiente Tranquilo"){
            await interaction.reply("# Ambiente Tranquilo")
            const musicas = new Map([
                ["**Ambiente Geral:**", "https://www.youtube.com/watch?v=ipFaubyDUT4"],
            ])

            for (let [key, value] of musicas) {
                interaction.channel.send(`${key} + m!p${value}"\n`)}}

        if(noiteescura == "Resumo da Sessão"){
            await interaction.reply("Resumo da Sessão")
            const musicas = new Map([
                ["**Resumo da Sessão:**", "https://youtu.be/u3EBlmzb9ds?si=TFgR93Q2b7c1eps2"],
            ])

            for (let elemento of musicas) {
                interaction.channel.send(elemento + "\n")}}

        if(noiteescura == "Falas da Lua"){
            await interaction.reply("Falas da Lua")
            let musicas = ["m!p https://youtu.be/4uKdU19drsw?si=ful8vI0-Y066Qnid"]

            for (let elemento of musicas) {
                interaction.channel.send(elemento + "\n")}}
        
        
        
        }

        timeout.push(interaction.user.id);
        setTimeout(() => {
            timeout.shift();
        }, milesegundos)
}}