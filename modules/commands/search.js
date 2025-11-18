module.exports.config = {
	name: "search",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Leiam Nash",
	description: "web search",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}search <text>\n\nExample:\n${global.config.PREFIX}search magnetic reversal\n`,
	commandCategory: "google",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const google = require('googlethis');
let leiamnash = args.join(" ");
  if (!leiamnash) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}search <text>\n\nExample:\n${global.config.PREFIX}search girl love status\n\nCreated by: 𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘`, event.threadID, event.messageID);
const leiamnashh = await google.search(`${leiamnash}`, {
  page: 0, 
  safe: false,
  parse_ads: false,
  additional_params: { 
    hl: 'bn' 
  }
});
  console.log(leiamnashh);
  var leiamnash1 = leiamnashh.results[0];
  var leiamnash2 = leiamnash1.description;
api.sendMessage(leiamnash2, event.threadID, event.messageID);
  }