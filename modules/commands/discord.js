module.exports.config = {
	name: "discord",
	version: "1.0.9",
	hasPermssion: 0,
	credits: "Leiam Nash",
	description: "discord server",
	commandCategory: "chatbot",
	usages: `Please add some context\n\nHow to use?\n${global.config.PREFIX}discord <context>\n\nExample:\n${global.config.PREFIX}discord hello\n`,
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
  const Chatbot  =  require("discord-chatbot");

if (!args[0]) {api.sendMessage(`Please add some context\n\nHow to use?\n${global.config.PREFIX}discord <context>\n\nExample:\n${global.config.PREFIX}discord hello\n\nCreated by: 𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘`,event.threadID, event.messageID)}
  else{
 var mess = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
const chatbot  =  new  Chatbot({name: "Udit", gender: "Male"});
    const res = await chatbot.chat(mess).catch(e => console.log(e));
                                }
}