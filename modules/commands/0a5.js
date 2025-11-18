const fs = require("fs");
module.exports.config = {
	name: "nurin",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung - Fixed by LTD", 
	description: "sorry",
	commandCategory: "no prefix",
	usages: "tanvir",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("niha")==0 || event.body.indexOf("নুরিন")==0 || 
event.body.indexOf("Niha")==0 ||
event.body.indexOf("Nurin")==0 ||
event.body.indexOf("NURIN")==0 ||
event.body.indexOf("nurin")==0 || 
event.body.indexOf("নিহা")==0) {
		var msg = `নু্ঁরি্ঁন্ঁ মে্ঁডা্ঁম্ঁ এ্ঁখ্ঁন্ঁ খু্ঁব্ঁ বি্ঁজি্ঁ 😊🙋‍♀️`;
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🥰", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }