module.exports.config = {
    name: "traning",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Joshua Sy",
    description: "Teach rimi",
    commandCategory: "...",
    usages: "[ask > ans]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
const axios = require("axios");
let { messageID, threadID, senderID, body } = event;
let tid = threadID,
mid = messageID;
const content = args.join(" ").split(">").map(item => item = item.trim());
 let ask = content[0]
 let ans = content[1] || "Answer Missing bby 💔😢";
if (!args[0]) return api.sendMessage("Use "+global.config.PREFIX+this.config.name+" your ask > Answer", tid, mid);
const res = await axios.get(`https://okay--s5-t4nv1r-6x.repl.co/sim?type=teach&ask=${ask}&ans=${ans}`);
api.sendMessage("Sir I have been able to learn from your training🥰\n"+"\nWhat you taught me! That is if someone asks me❔"+ask+"\nNow you can ask me🫠 \n💝 Inshallah I can answer your question🫣"+ans, tid , mid);
}