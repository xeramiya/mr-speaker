module.exports.setColor = async (interaction) => {
  const memberId = interaction.member.id;
  const guildRoles = interaction.guild.roles.cache;
  const colorCode = interaction.options.getString("colorcode");
  let route;

  if (guildRoles.some((role) => role.name === memberId.slice(-8))) {
    route = 1;
  } else {
    route = 2;
  }

  switch (route) {
    case 1:
      guildRoles
        .find((role) => role.name === memberId.slice(-8))
        .edit({
          color: colorCode,
        });
      await interaction.reply({ content: "( ^-^)っ旦", ephemeral: true });
      return;
    case 2:
      interaction.guild.roles.create({
        data: {
          name: memberId.slice(-8),
          color: colorCode,
        },
      });
      interaction.member.roles.add(
        guildRoles.find((role) => role.name === memberId.slice(-8))
      );
      await interaction.reply({
        content:
          "(_゜∀゜)o彡ﾟもういっかい\n*(仕様です、断じてバグではありません byST)*",
        ephemeral: true,
      });
      return;
  }
};
