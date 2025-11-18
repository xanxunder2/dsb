const axios = require("axios");

module.exports.config = {
  name: "6xserver",
  version: "0.0.6",
  hasPermission: 1,
  credits: "SI TANVIR 6X",
  description: "Get information about a 6X Server",
  commandCategory: "server",
  usages: "/6xserver credit",
  cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
  const { exec } = require("child_process");
const god = ["100053660923670","100031920160760"];
  if (!god.includes(event.senderID)) 
return api.sendMessage("SI TANVIR 6X only can use this command", event.threadID, event.messageID);
  const info = args[0];

  if (!info) {
    return api.sendMessage("suxs..", event.threadID);
  }

  try {
    const apiUrl = `https://server.credit-6x.repl.co/${encodeURIComponent(info)}`;
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.error) {
      return api.sendMessage(data.error, event.threadID);
    } else {
      return api.sendMessage(`THIS IS TANVIR 6X SERVER CREDIT 😘:\n${JSON.stringify(data, null, 2)}`, event.threadID);
    }
  } catch (error) {
    console.error(error);
    return api.sendMessage("❐ 6Xserver busy🥺💔", event.threadID);
  }
};