module.exports = {
	data: new SlashCommandBuilder()
		.setName('players')
		.setDescription('Status de um jogador escolhido')
		.addStringOption(option =>
			option.setName('alvaro')
				.setDescription('Informações do Alvaro no server!')
				.setAutocomplete(true))
        .addStringOption(option =>
			option.setName('alexandre')
				.setDescription('Informações do Alexandre no server!')
				.setAutocomplete(true))
        .addStringOption(option =>
			option.setName('amanda')
				.setDescription('Informações da Amanda no server!')
				.setAutocomplete(true))
        .addStringOption(option =>
			option.setName('diogo')
				.setDescription('Informações do Diogo no server!')
				.setAutocomplete(true))
        .addStringOption(option =>
			option.setName('isis')
				.setDescription('Informações da Isis no server!')
				.setAutocomplete(true))
        .addStringOption(option =>
			option.setName('paulo')
				.setDescription('Informações do Paulo no server!')
				.setAutocomplete(true)),
	async autocomplete(interaction) {
		const focusedOption = interaction.options.getFocused(true);
		let choices = [`Status`, 'Mortes', 'Vezes Caído', 'LVP', "MVP", 'Acertos Críticos', 'Falhas Críticas'];

		const filtered = choices.filter(choice => choice.startsWith(focusedOption.value));

        if (!interaction) return;

		await interaction.respond(
			filtered.map(choice => ({ name: choice, value: choice })),
		);
	},
    async execute (interaction){

        //ALEXANDRE
        if(interaction.options.getString('alexandre')){
            const query = interaction.options.getString('alexandre')
            if(query == "Status"){
                await interaction.reply({ embeds: [Alexandre] })}
            if(query == "Mortes"){
                for (const [key, value] of alexandremortes) {
                    escrita = key + " " + value + "\n" + escrita}
                await interaction.reply({content: escrita})}
            if(query == "Vezes Caído"){
                await interaction.reply("Em manutenção!🔧")}
            if(query == "LVP"){
                for (const [key, value] of alexandreLVP) {
                    escrita = key + " " + value + "\n" + escrita}
                await interaction.reply({content: escrita})}
            if(query == "MVP"){
                for (const [key, value] of alexandreMVP) {
                    escrita = key + " " + value + "\n" + escrita}
                await interaction.reply({content: escrita})}
            if(query == "Acertos Críticos"){
                await interaction.reply("Em manutenção!🔧")}
            if(query == "Falhas Críticas"){
                await interaction.reply("Em manutenção!🔧")}}
}}