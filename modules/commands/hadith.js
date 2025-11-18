module.exports.config = {
	name: "hadis#bd",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "BotolBaba",
	description: "Islamic Hadis.",
	commandCategory: "Religious",
	cooldowns: 5
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
const axios = require("axios")
  const cheerio = require("cheerio")
	const url = `https://www.hadithbd.com/hadith/filter/?book=12&hadith=${Math.floor(Math.random()*7563)}`;
// Async function which scrapes the data
async function scrapeData() {
  try {
    // Fetch HTML of the page we want to scrape
    const { data } = await axios.get(url);
    // Load HTML we fetched in the previous line
    const $ = cheerio.load(data);
    // Select all the list items in plainlist class
    
    const listItems = $("p");
    
    //console.log(listItems)
    // Stores data for all countries
    var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 100) api.sendMessage("You must have at least BDT 100 ৳ to listen to Islamic verses!",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 100})
    var msg = [];
    msg.push(listItems[0].children[1].data + "\n\n")
    var good = listItems[0].next.next.next.next.next.next.children

    good.forEach(verygood)

    function verygood(arr) {
      if (arr.name === "p") {
        arr.children.forEach(vvgood)
      }
    }
    function vvgood(arrr) {
      if (arrr.type === "text") {
        msg.push(arrr.data)
      }

    }

api.sendMessage(msg.join(""), event.threadID)
  }
  catch (err) {
  	console.error(err);
  }
}
// Invoke the above function
scrapeData();
      }