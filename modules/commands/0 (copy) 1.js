module.exports.config = {
  name: "t2v",
  version: "0.0.6",
  hasPermssion: 0,
  credits: "TANVIR_6X",
  description: "text to voice converted",
  commandCategory: "T2V",
  usages: "[type any text or reply any others text]",
  cooldowns: 6,
};

module.exports.run = async function ({ api, event, args }) {
  const { createReadStream, unlinkSync, writeFileSync } = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  const { threadID, messageID } = event;
  let url = event.type === "message_reply" ? event.messageReply.body : args.join(" ");

  // ... (previous code)

  let name = args[0] || "XANVIR";
  let code = args[1] || "bn";

  if (!url) {
    api.sendMessage('❐ Please input your text.', threadID, messageID);
    return;
  }

  const T4NmsG = await api.sendMessage(`Please wait 😽`, event.threadID);

  try {
    // Validate or sanitize 'name' and 'code' if needed

    const { data } = await axios.get(`https://text2voice.xanxunder11.repl.co/t2v?name=${name}&code=${code}&q=${encodeURIComponent(url)}`);
    var path = __dirname + `/cache/t2v.mp3`;

    if (data.success === false) {
      api.sendMessage(data.error, threadID, messageID);
    } else {
      const { data: stream } = await axios.get(data.data.url_voice, { responseType: 'arraybuffer' });
      api.unsendMessage(T4NmsG.messageID);
      writeFileSync(path, Buffer.from(stream, 'utf-8'));
      return api.sendMessage({ body: ``, attachment: createReadStream(path) }, threadID, () => unlinkSync(path), messageID);
    }
  } catch (error) {
    console.error("Error:", error);
    api.sendMessage("An error occurred while processing your request.", threadID, messageID);
    api.unsendMessage(T4NmsG.messageID);
  }
};
