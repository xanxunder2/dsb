module.exports.config = {
    name: "adduser",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "愚かな切断者",
    description: "add group member easily using fblink and uid",
    commandCategory: "Group",
    usages: `Please insert a UID\n\nHow to use?\n${global.config.PREFIX}adduser <uid>\n\nExample\n${global.config.PREFIX}adduser 100053660923670\n`,
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Threads, Users }) {
const { threadID, messageID } = event;
const axios = require('axios')
const link = args.join(" ")
if(!args[0]) return api.sendMessage(`Please insert a UID\n\nHow to use?\n${global.config.PREFIX}adduser <uid>\n\nExample\n${global.config.PREFIX}adduser 100053660923670\n\nCreated by: 𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘`, threadID, messageID);
var { participantIDs, approvalMode, adminIDs } = await api.getThreadInfo(threadID);
if(link.indexOf(".com/")!==-1) {
    const res = await axios.get(`http://le31.glitch.me/fb/finduid?url=${link}`);
    var uidUser = res.data.uid
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`This member is already in the group`, threadID, messageID);
    if (err) return api.sendMessage(`Can't add this member to the group `, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Successfully added this user to the approval list\n\nPlease contact the group admin to approve your join request `, threadID, messageID);
    else return api.sendMessage(`Successfully added\n\nWelcome to the group\n\ntype 『 ${global.config.PREFIX}help 』 for commands category`, threadID, messageID);
    });
    }
  else { 
    var uidUser = args[0] 
    api.addUserToGroup(uidUser, threadID, (err) => {
    if (participantIDs.includes(uidUser)) return api.sendMessage(`This member is already in the group`, threadID, messageID);
    if (err) return api.sendMessage(`Can't add this member to the group`, threadID, messageID);
    else if (approvalMode && !adminIDs.some(item => item.id == api.getCurrentUserID())) return api.sendMessage(`Successfully added this user to the approval list\n\nPlease contact the group admin to approve your join request`, threadID, messageID);
    else return api.sendMessage(`Successfully added\n\nWelcome to the group\n\ntype 『 ${global.config.PREFIX}help 』 for commands category`, threadID, messageID);
    });
  }
}