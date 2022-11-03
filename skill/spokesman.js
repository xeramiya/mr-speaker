module.exports.staged = (interaction, script) => {
  interaction.channel.send(script);
  interaction.reply({content: "代わりに言っといてあげたんだから、紅茶を淹れておいてちょうだい。", ephemeral: true});
}