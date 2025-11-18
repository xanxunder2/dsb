const axios = require("axios");
const { createReadStream, unlinkSync, writeFileSync } = require("fs");
const fs = require("fs-extra");

module.exports.config = {
  name: 'rimiv2',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X', // Respect the main owner😅
  description: 'Talk to me with a better experience',
  commandCategory: 'Meta',
  usePrefix: true,
  usages: '/rimiv2 hi',
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;

  var q = args.join(" ");
  if (!q) return api.sendMessage(`Please type a question`, threadID, messageID);

  try {
    const metaCH = await axios.get(`https://okay--s5-t4nv1r-6x.repl.co/sim?type=ask&ask=${q}`);
    var metaAns = metaCH.data.answer;

    const { data } = await axios.get(`https://text2voice.xanxunder11.repl.co/t2v?name=M&code=bn&q=${metaAns}`);
    var path = __dirname + `/cache/rimi.mp3`;

    if (data.success === false) {
      // If an error occurs, generate a voice message for the error message
      const errorText = '> সার্ভারের সমস্যা কারনে উওর দিতে পারি নাই
কিছু মনে করবেন নাহ সঠিক প্রশ্ন করুন 😊❤️‍🩹';
      const errorVoice = await axios.get(`https://text2voice.xanxunder11.repl.co/t2v?name=M&code=bn&q=${errorText}`);
      const { data: errorStream } = await axios.get(errorVoice.data.data.data.url_voice, { responseType: 'arraybuffer' });
      const errorPath = __dirname + '/cache/error.mp3';
      writeFileSync(errorPath, Buffer.from(errorStream, 'utf-8'));
      return api.sendMessage({ body: `${errorText}`, attachment: createReadStream(errorPath) }, threadID, () => unlinkSync(errorPath), messageID);
    } else {
      const { data: stream } = await axios.get(data.data.url_voice, { responseType: 'arraybuffer' });
      writeFileSync(path, Buffer.from(stream, 'utf-8'));

      var credit = data.admin;

      return api.sendMessage({ body: `${metaAns}`, attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);
    }
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);

    // If an error occurs, generate a voice message for the error message
    const errorMessage = '> সার্ভারের সমস্যা কারনে উওর দিতে পারি নাই
কিছু মনে করবেন নাহ সঠিক প্রশ্ন করুন 😊❤️‍🩹';
    const errorVoice = await axios.get(`https://text2voice.xanxunder11.repl.co/t2v?name=M&code=bn&q=${errorMessage}`);
    const { data: errorStream } = await axios.get(errorVoice.data.data.data.url_voice, { responseType: 'arraybuffer' });
    const errorPath = __dirname + '/cache/error.mp3';
    writeFileSync(errorPath, Buffer.from(errorStream, 'utf-8'));
    return api.sendMessage({ body: `${errorMessage}`, attachment: createReadStream(errorPath) }, threadID, () => unlinkSync(errorPath), messageID);
  }
};
