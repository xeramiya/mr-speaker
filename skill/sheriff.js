module.exports.outdraw = (message) => {
  var catId = "406798424864980995";
  var kikisenId = "681900450811084863";
  var bouonId = "682089572846534686";

  if (message.channel.id == catId) {
    if (message.member.voice.channel != null) {
      message.delete()
        .then(async message => {
          const alertMsg = await message.channel.send("**公安局情報秩序管理課からのおしらせ**\n_役職:WAKABA_を付与されているメンバーによる_テキストチャンネル:" + message.channel.name + "_への書き込みは、\n_任意のボイスチャンネル_に接続している間のみに制限されています。");
          alertMsg.delete({ timeout: 8000 });
        })
        .catch(console.error);
    }
  }

  if (message.channel.id == bouonId || message.channel.id == kikisenId) {
    if (message.member.voice.channel == null) {
      message.delete()
        .then(async message => {
          const alertMsg = await message.channel.send("**公安局情報秩序管理課からのおしらせ**\n_役職:WAKABA_を付与されているメンバーによる_テキストチャンネル:" + message.channel.name + "_への書き込みは、\n_ボイスチャンネル_に接続していない間のみに制限されています。");
          alertMsg.delete({ timeout: 8000 });
        })
        .catch(console.error);
    }
  }
}