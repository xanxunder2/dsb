
module.exports.config = {
  name: "prefix",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "LeiamNash",
  description: "guide",
  commandCategory: "Noprefix",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["mpre","mprefix","prefix", "dấu lệnh", "prefix của bot là gì","PREFIX"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
		const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`𝙃𝙀𝙍𝙀 𝙄𝙎 𝙈𝙔 𝙋𝙍𝙀𝙁𝙄𝙓 => [ ${global.config.PREFIX} ]`)
      }
      else return out(`bot prefix: ${global.config.PREFIX}\n\nplease use 【 ${global.config.PREFIX}help 】 for commands category\n\nOWNER: 𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘`)
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage("bot prefix: [  / ]\n\nplease use 【 /help 】 for commands category\n\nOWNER: 𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘", event.threadID)
}
