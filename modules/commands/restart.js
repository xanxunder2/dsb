module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "Leiam Nash",
	description: "bot start",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	const time = process.uptime();

	return api.sendMessage(`•THIS BOT MADE BY 😴\n\nMd Shariful Islam Tanvir🥴\n\nYou Use My Bot But Please Don't Change My Credit \n\n Happy Using Bot🤗•
IM RESTARTING♻️

Please Wait...\n${time}`, threadID, () => process.exit(1));
	
  }