/*
  宣言部長
*/
// 拡張要求
const mrSpeaker = require("./package.json");
require("dotenv").config();
require("@discordjs/voice");
const { Intents, Client } = require("discord.js");
const client = new Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_EMOJIS_AND_STICKERS",
    "GUILD_MESSAGES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGE_REACTIONS",
  ],
  partials: ["MESSAGE", "REACTION"],
});
const cron = require("node-cron");

// TOKENs
const TOKEN_MrSpeaker = process.env.TOKEN_DISCORD_BOT;

// BitServerIDs
const mrSpeakerId = process.env.ID_MR_SPEAKER;
const bitServerId = process.env.ID_BIT_SERVER;
const catId = process.env.ID_CAT;
const itoradiId = process.env.ID_ITORADI;
const kikisenId = process.env.ID_KIKISEN;
const bouonId = process.env.ID_BOUON;
const labId = process.env.ID_LAB;

// 外部ファイルの読込
const linkData = require("./asset/link/linkData.js");

// スキルファイルの読込
const tester = require("./skill/tester.js");
const setColor = require("./skill/setColor.js");
const apertureScience = require("./skill/apertureScience.js");
const spokesman = require("./skill/spokesman.js");
const randomMan = require("./skill/randomMan.js");
const sheriff = require("./skill/sheriff.js");
const deviloid = require("./skill/deviloid.js");
const mrPlayer = require("./skill/mrPlayer.js");

// スラッシュコマンドを登録するんだぜ
const slashCommands = [
  {
    name: "hello",
    description: "Hello! I'm Mr. Speaker!",
  },
  {
    name: "valve",
    description: "[STEALTH]Voice Channel Test Command",
  },
  {
    name: "beaver",
    description: "[STEALTH]ビーバーでステルス爆撃を行うわよ!",
  },
  {
    name: "meet",
    description: "[STEALTH]緊急会議を開くわよ!私はインポスターじゃあないわよ。",
  },
  {
    name: "set",
    description: "何かをセットするわよ!キョン!",
    options: [
      {
        type: "SUB_COMMAND",
        name: "color",
        description:
          "[STEALTH]アンタの名前の文字色を変更するわよ!色コードを教えなさい!",
        options: [
          {
            type: "STRING",
            name: "colorcode",
            description: "[STEALTH]ここにHex形式のカラーコードを入力するのよ!",
            required: true,
          },
        ],
      },
    ],
  },
  /* Railway対応
  {
    name: 'play',
    description: '任意の音声を再生するわよ!',
    options: [{
      type: 'STRING',
      name: 'url',
      description: 'ただのURLには興味ありません。このなかに、YouTube、音声ファイルへの直リンクがいたら、あたしのところに貼りなさい。以上!',
      requeired: true
    }]
  },
  */
  {
    name: "lbrt",
    description: "[STEALTH]アンタの代わりに伝えてあげるわ。アタシに任せなさい!",
    options: [
      {
        type: "STRING",
        name: "script",
        description:
          "アタシに喋らせたいセリフを書くのよ。変なこと言ったら殺すからね。",
        required: true,
      },
    ],
  },
];

/*
  ここから本番
*/
client.login(TOKEN_MrSpeaker);

client.once("ready", async () => {
  console.log(
    ">> System All Green!! <<\nNOW_RUNNING: Mr.Speaker_Ver" +
      mrSpeaker.version +
      "\n"
  );

  client.user.setActivity("Ver" + mrSpeaker.version, {
    type: "PLAYING",
    url: "https://uebit.tk/",
  });

  await client.application.commands.set(slashCommands, bitServerId);
});

// 定時連絡用 (JST)
cron.schedule("0 0 0 * * *", () => {
  console.log("PUN☆PUN");
  randomMan.announcers(client);
});

cron.schedule("0 0 4 * * *", () => {
  mrPlayer.mrPlayer(undefined, linkData.librarian("yamashita"), client);
});

// チャレンジャー出現!!
client.on("voiceStateUpdate", async (oldState, newState) => {
  // Curse of 無視
  if (oldState.member.user.bot) return;

  await randomMan.challenger(client, oldState, newState);
});

// リアクションを検知した時に発動
client.on("messageReactionAdd", async (reaction) => {
  console.log("EMOJI NAME: " + reaction.emoji.name);
  // Emojiボイス (リアクション編)
  if (reaction.emoji.name == "kokosuki") {
    mrPlayer.mrPlayer(undefined, linkData.librarian("kokosuki"), client);
  }

  if (reaction.emoji.name == "wakaruman") {
    mrPlayer.mrPlayer(undefined, linkData.librarian("wakaruman"), client);
  }

  if (reaction.emoji.name == "ehettenandayo") {
    mrPlayer.mrPlayer(undefined, linkData.librarian("ehettenandayo"), client);
  }

  if (reaction.emoji.name == "hamburg") {
    mrPlayer.mrPlayer(undefined, linkData.librarian("hamburg"), client);
  }

  if (reaction.emoji.name == "dameda") {
    var x = Math.random();
    if (x < 0.5) {
      mrPlayer.mrPlayer(undefined, linkData.librarian("dameda"), client);
    } else {
      mrPlayer.mrPlayer(
        undefined,
        linkData.librarian("tekinosensuikanwohakken"),
        client
      );
    }
  }
});

// インタラクションを受け取ったときに発動
client.on("interactionCreate", async (interaction) => {
  // スラッシュコマンドじゃなければ帰ってもらうぜ
  if (!interaction.isCommand()) {
    return;
  }

  // スラッシュコマンドテスト用
  if (interaction.commandName === "hello") {
    interaction.reply("hello");
  }

  // Voiceテスト用
  if (interaction.commandName === "valve") {
    interaction.reply({ content: "TEST CHAMBER", ephemeral: true });
    await mrPlayer.mrPlayer(
      interaction,
      "https://cdn.glitch.com/3e3ea0c8-83cc-4a76-bb05-c9000eb70665%2Fvalve.ogg?v=1589352035171"
    );
  }

  // 問答無用 いけ！ビーバー！
  if (interaction.commandName === "beaver") {
    interaction.reply({ content: "FEAVER!!", ephemeral: true });
    await mrPlayer.mrPlayer(interaction, linkData.librarian("beaver"));
  }

  // 緊急会議
  if (interaction.commandName === "meet") {
    interaction.reply({ content: "緊急会議", ephemeral: true });
    await mrPlayer.mrPlayer(
      interaction,
      linkData.librarian("emergencyMeeting")
    );
  }

  // セットコマンド
  if (interaction.commandName === "set") {
    // 名前の文字色変更
    if (interaction.options.getSubcommand() === "color") {
      setColor.setColor(interaction);
    }
  }

  // 任意の音楽再生
  if (interaction.commandName === "play") {
    const url = interaction.options.getString("url");
    interaction.reply({ content: url });
    await mrPlayer.mrPlayer(interaction, url);
  }

  if (interaction.commandName === "lbrt") {
    spokesman.staged(interaction, interaction.options.getString("script"));
  }
});

// メッセージを受け取った時に発動
client.on("messageCreate", async (message) => {
  console.log("\n" + message.author.username + ": " + message.content);

  // Curse of 無視
  if (message.author.bot) return;

  // テキストチャンネルテスト用 [tester.js]
  if (message.content === "Hello") {
    tester.hello(message);
  }

  // ボイスチャンネルテスト用
  else if (message.content === "#11above") {
    if (message.member.voice.channel) {
      message.reply("AUDIO-TEST:START");
      await mrPlayer.mrPlayer(
        undefined,
        linkData.librarian("#11above"),
        client
      );
    }
  }

  // ここすき
  else if (
    message.content.match("ここすき|ここ好き") ||
    message.content.match(":kokosuki:")
  ) {
    await mrPlayer.mrPlayer(undefined, linkData.librarian("kokosuki"), client);
  }

  // わかるマン
  else if (
    message.content.match(
      "わかるマン|わかるまん|ワカルマン|わかる|ワカル|wakaru|WAKARU|ﾜｶﾙ|わっかる|ワッカル"
    ) ||
    message.content.match(":wakaruman:")
  ) {
    await mrPlayer.mrPlayer(undefined, linkData.librarian("wakaruman"), client);
  }

  // エヘッってなんだよ!
  else if (
    message.content.match("えへっ|エヘッ|ｴﾍｯ|衛兵|エセ|衛星") ||
    message.content.match(":ehettenandayo:")
  ) {
    await mrPlayer.mrPlayer(
      undefined,
      linkData.librarian("ehettenandayo"),
      client
    );
  }

  // 師匠スタンプボイス
  else if (
    message.content.match(":hamburg:") ||
    message.content.match("ハンバーグ")
  ) {
    await mrPlayer.mrPlayer(undefined, linkData.librarian("hamburg"), client);
  }

  // 呪語検知
  else if (message.content.match("キーボード")) {
    await mrPlayer.mrPlayer(undefined, linkData.librarian("kbc"), client);
  }

  // みなさ〜ん
  else if (message.content.match("永田")) {
    await mrPlayer.mrPlayer(undefined, linkData.librarian("killYou"), client);
  }

  // Fire Mario
  else if (message.content.match("ファイア|マリオ|mario|Mario|MARIO")) {
    await mrPlayer.mrPlayer(undefined, linkData.librarian("fireMario"), client);
  }

  // 恭平柴田の走り方
  else if (
    message.content.match("柴田恭兵|恭平柴田|走|run|RUN|ハリウッド|HOLLYWOOD")
  ) {
    await mrPlayer.mrPlayer(
      undefined,
      linkData.librarian("kyouheiShibata"),
      client
    );
  }

  // ApertureScience
  else if (message.content === "scienceIsFun") {
    apertureScience.logo(message, client);
  }

  // 注意喚起 (安倍さんsバージョン)
  else if (message.content === "abe") {
    if (message.member.voice.channel) {
      await mrPlayer.mrPlayer(undefined, linkData.librarian("abe"), client);
    }
  }

  // 注意喚起 (都知事バージョン)
  else if (message.content === "koike") {
    if (message.member.voice.channel) {
      await mrPlayer.mrPlayer(undefined, linkData.librarian("koike"), client);
    }
  }

  // バーチャルデビルマン
  else if (message.channel.id == kikisenId) {
    deviloid.deviloid(message, client);
  }

  // 悪は裁く...
  else if (message.member.roles.cache.has("810483288224563202")) {
    sheriff.outdraw(message);
  }
});
