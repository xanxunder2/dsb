module.exports.config = {
	name: "downloading",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "SI TANVIR 6X",
	description: "Getting a download URL from a video or audio sent by the group",
	commandCategory: "other",
	usages: "downloading",
	cooldowns: 5,
};
 
module.exports.languages = {
	"vi": {
		"invaidFormat": "🗿"
	},
	"en": {
		"invaidFormat": "❐- please reply your [ audio, video, photo ]  💖"
	}
}
 
module.exports.run = async ({ api, event, getText }) => {
	if (event.type !== "message_reply") return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	if (event.messageReply.attachments.length > 1) return api.sendMessage(getText("invaidFormat"), event.threadID, event.messageID);
	return api.sendMessage(event.messageReply.attachments[0].url, event.threadID, event.messageID);
  }