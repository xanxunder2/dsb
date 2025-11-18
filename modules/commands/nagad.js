module.exports.config = {
  name: 'nagad',
  version: '0.0.6',
  hasPermssion: 0,
  credits: 'SI TANVIR 6X',// respect the main owner😅//
  description: 'nagad number simple information',
  commandCategory: 'tools',
  usePrefix: true,
  usages: '/nagad 01XXXXXXXXX',
  cooldowns: 5,
};

module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
  const { threadID, messageID, senderID, body } = event;

  var number = args.join(" ");
  if (!number) return api.sendMessage(`Please type your nagad number`, event.threadID, event.messageID);
  
  const nagadInfo = await axios.get(`https://api.takaincomebd.xyz/key:-tech/nagad.php?input=${number}`);
  
  var name = nagadInfo.data.info.name;
  var userId = nagadInfo.data.info.userId;
  var status = nagadInfo.data.info.status;
  var userType = nagadInfo.data.info.userType;
  var rbBase = nagadInfo.data.info.rbBase;
  var authTokenInfo = nagadInfo.data.info.authTokenInfo;
  var verificationStatus = nagadInfo.data.info.verificationStatus;
  var executionStatus = nagadInfo.data.info.executionStatus;
  var VIP = nagadInfo.data.message;
  var tnX = " TANVIR_6X";
  
  const Vnagad = `❐ Here is your Nagad Acount information 😊🖤\n\nName: ${name}\nUser Id: ${userId}\nStatus: ${status}\nUser Type: ${userType}\nRb Base: ${rbBase}\nAuth Token Info: ${authTokenInfo}\nVerification Status: ${verificationStatus}\nExecution Status: ${executionStatus}\nWebSite: ${VIP}\nSpecial Thanks: ${tnX}`;

  return api.sendMessage({body: `${Vnagad}`,
  attachment: fs.createReadStream(__dirname + `/cache/fuckx/okay/nurin.jpeg`)
  }, event.threadID);
}
  
  