module.exports.config = {
    name: "tiktok",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "❐ 6𝘟 𝘚𝘌𝘙𝘝𝘌𝘙 𝘉𝘜𝘚𝘠 𝘕𝘖𝘞 🥺💔",
    commandCategory: "media",
    usages: "/tiktok [url]",
    cooldowns: 5,
    dependencies: {
        "axios": "",
        "fs-extra": ""
    },
};

module.exports.run = async function({ api, event, args }) {
    const { createReadStream, unlinkSync, writeFileSync } = global.nodemodule["fs-extra"];
    const axios = global.nodemodule["axios"];
    const { threadID, messageID } = event;
  let url = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
  if (!url) {
      api.sendMessage('❐ 𝘗𝘓𝘌𝘈𝘚𝘌 𝘌𝘕𝘛𝘌𝘙 𝘠𝘖𝘜𝘙 𝘍𝘈𝘊𝘌𝘉𝘖𝘖𝘒 𝘝𝘐𝘋𝘌𝘖 𝘓𝘐𝘕𝘒 😊', threadID, messageID);
      return;
    }

  const T4NFB = (
    await axios.get(
      'https://drive.google.com/uc?export=download&id=1BqDqjHv8sOgwrZVd5LUNziOhWPhSKgb-',
      { responseType: 'stream' }
    )
  ).data;

  const T4NmsG = await api.sendMessage(
    {
      body: '❐ 𝘠𝘖𝘜𝘙 𝘝𝘐𝘋𝘌𝘖 𝘋𝘖𝘞𝘕𝘓𝘖𝘈𝘋 𝘗𝘙𝘖𝘊𝘌𝘚𝘚 𝘏𝘈𝘚 𝘚𝘛𝘈𝘙𝘛𝘌𝘋 ♻️\n\n 𝘗𝘓𝘌𝘈𝘚𝘌 𝘞𝘈𝘐𝘛 𝘈 𝘍𝘌𝘞 𝘔𝘐𝘕𝘜𝘛𝘌𝘚...',
      attachment: T4NFB,
    },
    threadID
  );
  const ser = await axios.get(`https://sigojolislamapi-april-2023.hot-video-api-6x.repl.co/gazal`);
    var { data } = await axios.get(`https://tiktok.xanxunder11.repl.co/tiktok?url=${url}`);
    var path = __dirname + `/cache/6xfacebook.mp4`;
    if (data.success == false) return api.sendMessage(data.error, threadID, messageID);
    else {
        const { data: stream } = await axios.get(data.data.play, { responseType: 'arraybuffer' });
      api.unsendMessage(T4NmsG.messageID);
        writeFileSync(path, Buffer.from(stream, 'utf-8'));
      var credit = ser.data.admin;
        return api.sendMessage({body:``, attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);       
    }
  }