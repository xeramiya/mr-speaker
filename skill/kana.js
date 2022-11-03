// プロジェクト凍結

const request_pn = require('request-promise-native');

module.exports.kanaChange = async letter => {
  const GooAPI_KEY = "3219b2ea955ca7bac13c78eac9df18e89b4da740badcaf93e427f1af93af70ce";
  const BASE_URL = `https://labs.goo.ne.jp/api/hiragana`;
  const OUTPUT_TYPE = `hiragana`;

  var options = {
    uri: BASE_URL,
    headers: {
      'Content-Type': `application/x-www-form-urlencoded`,
      'Content-Type': `application/json`
    },
    json: {
      "app_id": GooAPI_KEY,
      "sentence": letter,
      "output_type": OUTPUT_TYPE
    }
  };

  return new Promise((resolve, reject) =>  {
    request_pn(options)
    .then((res) => {
      resolve(res);
    })
    .catch((err) => {
      reject(err);
    });
  });
}