const {joinVoiceChannel, entersState, VoiceConnectionStatus, createAudioResource, StreamType, createAudioPlayer, AudioPlayerStatus, NoSubscriberBehavior, generateDependencyReport} = require("@discordjs/voice");
const ytdl = require('ytdl-core');

// デフォルトステージ
const vchannelId = process.env.ID_ITORADI
const guildId = process.env.ID_BIT_SERVER;


/*
  mrPlayerをスラッシュコマンドで使用するときは何かしら気の利いたリプライをinteractionに飛ばしてください
*/
module.exports.mrPlayer = async (interaction, url, client) => {
  console.log("Hey Guys! We Have A Voice For You!");
  let guild, resource, stageId, disc;

  // 音源指定
  if (url !== undefined) {
    if (url.startsWith('https://youtu.be/') || url.startsWith('https://www.youtube.com/') || url.startsWith('https://music.youtube.com/')) {
      resource = ytdl(ytdl.getURLVideoID(url), {
        filter: format => format.audioCodec === 'opus' && format.container === 'webm',
        quality: 'highest',
        highWaterMark: 32 * 1024 * 1024
      });
      disc = createAudioResource(resource, {inputType: StreamType.WebmOpus});
    } else {
      resource = url;
      disc = createAudioResource(resource, {inputType: StreamType.Arbitrary});
    }
  } else {
    return interaction.reply({content: "ERR: URL未定義、管理者に報告をお願いします。", ephemeral: true});
  }

  // ステージ指定
  if (client !== undefined) {
    guild = await client.guilds.fetch(guildId);
    stageId = vchannelId;
  } else {
    if (!(memberVc = interaction.member.voice.channel)) {
      return interaction.editReply({content: "接続先VC不明: このコマンドは任意のVCに参加している時のみ使用可能です。", ephemeral: true});
    } else {
      guild = interaction.guild;
      stageId = memberVc.id;
    }
  }

  const connection = await joinVoiceChannel({
    guildId: guild.id,
    channelId: stageId,
    adapterCreator: guild.voiceAdapterCreator,
    selfMute: false
  });

  const player = createAudioPlayer({behaviors: {noSubscriber: NoSubscriberBehavior.Pause}});

  await player.play(disc);
  await connection.subscribe(player);
  console.log("Pre Play");
  await entersState(player, AudioPlayerStatus.Playing, 1000);
  console.log("PLAYing");
  await entersState(player, AudioPlayerStatus.Idle, 24 * 60 * 60 * 1000);
  console.log("DOOONE!");
  return;
}