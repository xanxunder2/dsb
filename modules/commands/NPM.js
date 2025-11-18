module.exports.config = {
  name: "npm",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "",
  description: "",
  commandCategory: "Thông tin",
  usages: "[url site]",
  cooldowns: 5
};

module.exports.run = async (
{
  api,
  event,
  args
}) =>
{
  const axios = require('axios');
  const request = require('request');
 const fs = require("fs");
  var cc = args.join(" ");
  if (!cc) return api.sendMessage(`❐- 6Xserver busy🥺💔`, event.threadID, event.messageID);
  else
  {
    axios.get(`https://api.popcat.xyz/npm?q=${encodeURIComponent(cc)}`).then(res =>
    {
      const c = res.data.author;
      const a = res.data.name;
      const b = res.data.description;
      const d = res.data.keywords;
      {
        api.sendMessage({body: `🇧🇩🔻🇧🇩\n\n🤦‍♂️: ${a}\n\n📜: ${b}\n\n🔍: ${d}`}, event.threadID, event.messageID);
      };
    })
  }
}