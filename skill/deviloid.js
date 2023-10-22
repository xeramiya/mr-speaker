const request = require("request");
const mrPlayer = require("./mrPlayer.js");

async function slicedDialogueOr(letters, messageSize, curloca, client) {
  // Discordの文字数制限2000字で強制停止
  if (curloca >= messageSize || curloca >= 2000) {
    console.log("FINISHED");
    return;
  }

  await mrPlayer
    .mrPlayer(
      undefined,
      "./asset/audio/sound/deviloid/syllabary/" + letters[curloca] + ".mp3",
      client
    )
    .then(() => {
      console.log("発音: " + letters[curloca]);
      slicedDialogueOr(letters, messageSize, curloca + 1, client);
    });
}

module.exports.deviloid = async (message, client) => {
  // GooLab API SETUP
  const GooAPI_KEY = process.env.KEY_GOO_API;
  const BASE_URL = `https://labs.goo.ne.jp/api/hiragana`;
  const OUTPUT_TYPE = `hiragana`;
  var options = {
    uri: BASE_URL,
    headers: {
      "Content-Type": `application/x-www-form-urlencoded`,
      "Content-Type": `application/json`,
    },
    json: {
      app_id: GooAPI_KEY,
      sentence: message.content,
      output_type: OUTPUT_TYPE,
    },
  };

  request.post(options, async (error, response, body) => {
    console.dir(options);
    console.dir(body);
    var letters = body.converted.slice();
    var messageSize = letters.length;
    var curloca = 0;
    console.log(
      "DEVILOID_WAKEUP\nメッセージ配列:" + letters + "\n文字数:" + messageSize
    );

    slicedDialogueOr(letters, messageSize, curloca, client);
  });

  return;
};
