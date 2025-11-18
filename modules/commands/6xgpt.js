module.exports.config = {
     name: "6xgpt",
     version: "1.1.0",
     hasPermssion: 0,
     credits: "SI TANVIR 6X",
     description: "An 6X AI designed to assist you at the best of its capabilities",
     usePrefix: false,
     commandCategory: "[]",
     cooldowns: 0
};

const axios = require('axios');
var suffixes = "🧲";

module.exports.onLoad = () => {
     global.oldMessageGoGPT = {}
     global.roleGoGPT = {};
}
module.exports.run = async ({ event, api, args }) => {
     let body = args.join(" ");
     if(body == "help") return api.sendMessage("ব্যবহার করুন: <prefix>6xgpt <content/reply>\nআপনি ব্যবহার করতে পারেন"+ suffixes + " 6X GPT উত্তর দেওয়ার জন্য শেষে", event. threadID, event.messageID);
     if (event.type == "message_reply") {
         body = event.messageReply.body;
     }
     var role = body.split("---")[1];
     if(role) {
         body = body.split("---")[0];
         global.roleGoGPT[event.senderID] = role;
         delete global.oldMessageGoGPT[event.senderID];
     }
     if(global.roleGoGPT[event.senderID] == undefined) global.roleGoGPT[event.senderID] = "আমি তানভীর 6X ROBOT, একজন মেসেঞ্জার এআই প্রোগ্রামার";
     const res = await chatGpt(event, body)
     return api.sendMessage(res, event.threadID, event.messageID);
}


module.exports.handleEvent = async ({ event, api }) => {
     const { body, senderID, threadID, messageID } = event;
     if (!body || senderID == api.getCurrentUserID() || !body.endsWith(suffixes) || body == suffixes || body.indexOf(`${global.config.PREFIX}${this.config. name}`) == 0) return;
     const res = await chatGpt(event, body);
     return api.sendMessage(res, threadID, messageID);
}

async function chatGpt(event, message) {
     if(global.roleGoGPT[event.senderID] == undefined) global.roleGoGPT[event.senderID] = "আমি তানভীর 6X ROBOT, একজন মেসেঞ্জার এআই প্রোগ্রামার";

     const oldMessage = global.oldMessageGoGPT[event.senderID];
     const prompt = `${global.roleGoGPT[event.senderID]}\n${oldMessage ? `User: ${oldMessage.userMessage}\nTANVIR_6X: ${oldMessage.botMessage}\n\n` : ''}User: ${message}\nTANVIR_6X: `;

     try {
         const content = await getGptResponse();
         global.oldMessageGoGPT[event.senderID] = {
             role: global.roleGoGPT[event.senderID],
             userMessage: message,
             botMessage: content
         };
         return content;
     } catch (error) {
         console.log(error);
         return "দুঃখিত,কিছু সমস্যা হচ্ছে.  অনুগ্রহ করে একটু পরে আবার চেষ্টা করুন!";
     }

     async function getGptResponse() {
         const { data } = await axios.get(`https://gptgo.ai/?q=${encodeURIComponent(prompt)}&hlgpt=default&hl=en#gsc.tab=0&gsc.q=${encodeURIComponent(prompt)}&gsc.page=1`);
         const token = data.split('renderUI("')[1].split('")')[0];
         const { data: resp } = await axios.get(`https://gptgo.ai/action_ai_gpt.php?token=${token}`);
         const content = resp.split("\n")
             .filter(line => line.includes("content"))
             .map(line => JSON.parse(line.split('data: ')[1]).choices[0].delta.content)
             .join("");
         return content.split("[DONE]")[0];
     }
}