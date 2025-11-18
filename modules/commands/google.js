module.exports.config = {
	name: "google",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Leiam Nash",
	description: "web search",
  usages: `Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}google <text>\n\nExample:\n${global.config.PREFIX}google animepahe\n`,
	commandCategory: "google",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
const google = require('googlethis');
let leiamnash = args.join(" ");
  if (!leiamnash) return api.sendMessage(`Search cannot be left blank\n\nHow to use?\n${global.config.PREFIX}google <text>\n\nExample:\n${global.config.PREFIX}google animepahe\n\nCreated by: 𝚂𝙸 𝚃𝙰𝙽𝚅𝙸𝚁😘`, event.threadID, event.messageID);
const leiamnashh = await google.search(`${leiamnash}`, {
  page: 0, 
  safe: false,
  parse_ads: false,
  additional_params: { 
    hl: 'en' 
  }
});
  console.log(leiamnashh);
  var leiamnash1 = leiamnashh.results[0];
  var leiamnash2 = leiamnash1.description;
  var leiamnash3 = leiamnash1.url;
  var leiamnash4 = (`${leiamnash2}\n\nsource:\n${leiamnash3}`);
api.sendMessage(leiamnash4, event.threadID, event.messageID);
  }