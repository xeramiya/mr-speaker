const dotenv = require('dotenv');
dotenv.config();
const ytdl = require('ytdl-core');
const request = require('request');

module.exports.play = async (message) => {
  if (!message.member.voice.channel) {
    message.reply("まずはボイスチャンネルにジョインするんだ(´∀｀)９m");
    return;
  }

  async function stream() {
    const connection = await message.member.voice.channel.join();
    console.log("ID = " + ytId);
    const stream = await ytdl(path + ytId);
    const dispatcher = connection.play(stream);
  }

  async function keywordSearch() {
    const YTAPI_KEY = config.env.TOKEN_YOUTUBE_API;
    var words = CMD.length;
    url += "type=video";
    url += "&part=snippet";
    url += "&regionCode=JP";
    url += "&order=relevance";
    for (let i = 1; i < words; i++) {
      url += "&q=" + CMD[i];
    }
    url += "&maxResults=1";
    url += "&key=" + YTAPI_KEY;
    console.log(url);
    var options = {
      url: url,
      dataType: 'jsonp'
    }
    request.get(options, function(err, res, body) {
      let ninja = JSON.parse(body);
      console.log("TITLE = " + ninja.items[0].snippet.title);
      console.log(ninja);
      ytId = ninja.items[0].id.videoId;
    });
  }

  const CMD = message.content.split(' ');
  var url = "https://www.googleapis.com/youtube/v3/search?";
  var path = "https://www.youtube.com/watch?v=";
  var ytId;
  var random = Math.floor(Math.random() * 2);

  switch (random) {
    case 0:
      var kaomoji = "(σ'ω')σYO!!";
      break;
    case 1:
      var kaomoji = "(σ^ω^)σYO!!";
      break;
  }

  if (CMD[1].startsWith("https://youtu.be/")) {
    ytId = await CMD[1].replace("https://youtu.be/", "");
    await stream().then(message.reply(kaomoji));
  } else if (CMD[1].startsWith(path)) {
    ytId = await CMD[1].replace(path, "");
    await stream().then(message.reply(kaomoji));
  } else {
    ytId += await keywordSearch();
    await stream().then(message.reply(kaomoji));
  }
}