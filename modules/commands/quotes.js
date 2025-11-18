module.exports.config = {
	name: "quotes",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Leiam Nash",
	description: "advice",
	commandCategory: "quotes",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const res = await axios.get(`https://api.leiamnash.repl.co/quotes`);
var leiamnash = res.data.quote;
return api.sendMessage(leiamnash, event.threadID, event.messageID)
}