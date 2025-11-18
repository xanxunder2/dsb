var cred = "\u0044\u0065\u006b\u0075";
module.exports.config = {
  name: "removebg",
  version: "1.0.0",
  hasPermssion: 2,
  credits: `${cred}`,
  description: "Remove background of photo",
  usages: "reply",
  commandCategory: "...",
  cooldowns: 0
};
module.exports.run = async function({api, event, args, utils, Users, Threads}) {
  const axios = require('axios');
  const fs = require("fs");
  const FormData = require("form-data");
  if ((this.config.credits) != `${cred}`) { return api.sendMessage(`Sorry Server 6x Busy🥺`, event.threadID, event.messageID)}
const formData = new FormData();
formData.append('size', 'auto');
formData.append('image_url', event.messageReply.attachments[0].url);

axios({
  method: 'post',
  url: 'https://api.remove.bg/v1.0/removebg',
  data: formData,
  responseType: 'arraybuffer',
  headers: {
    ...formData.getHeaders(),
    'X-Api-Key': 'b18YRC4EUnCF6aQqefE35jvr',
  },
  encoding: null
})
.then((response) => {
  if(response.status != 200) return console.error('Error:', response.status, response.statusText);
  fs.writeFileSync(__dirname + "/cache/no-bg.png", response.data);
  api.sendMessage({body: ``, attachment: fs.createReadStream(__dirname + "/cache/no-bg.png")}, event.threadID, ()=> fs.unlinkSync(__dirname + "/cache/no-bg.png"), 
            event.messageID)
})
.catch((error) => {
    return console.error('Sorry Server 6x Busy🥺:', error);
});

                        }