const axios = require("axios");
const { createReadStream, unlinkSync, writeFileSync } = require("fs");
const fs = require("fs-extra");

module.exports.config = {
  name: 'rimiv2',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X', // Respect the main owner😅
  description: 'talk to to mere with better experience',
  commandCategory: 'Meta',
  usePrefix: true,
  usages: '/rimiv2 hi',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;

  var q = args.join(" ");
  if (!q) return api.sendMessage(`Please type question `, threadID, messageID);

  try {
    const metaCH = await axios.get(`https://okay--s5-t4nv1r-6x.repl.co/sim?type=ask&ask=${q}`);
    var metaAns = metaCH.data.answer;

    const { data } = await axios.get(`https://text2voice.xanxunder11.repl.co/t2v?name=M&code=bn&q=${metaAns}`);
    var path = __dirname + `/cache/rimi.mp3`;

    if (data.success === false) return api.sendMessage(data.error, threadID, messageID);
    else {
      const { data: stream } = await axios.get(data.data.url_voice, { responseType: 'arraybuffer' });
      writeFileSync(path, Buffer.from(stream, 'utf-8'));

      // Assuming 'ser' is supposed to be 'data'
      var credit = data.admin;

      return api.sendMessage({ body: `${metaAns}`, attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
    return api.sendMessage('❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔', threadID, messageID);
  }
};
