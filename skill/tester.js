// テスト用-テキストチャンネル
module.exports.hello = (message) => {
  let author = message.author.username;
  let reply_text = "Hello";
  message.reply(reply_text)
    .then(message => console.log('Hello Console'))
    .catch(console.error);
  return;
}
