function convert(time){
  var date = new Date(`${time}`);
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var minutes = date.getMinutes();
var seconds = date.getSeconds();
var formattedDate = `${ day < 10 ? "0" + day : day}` + "/" +`${ month < 10 ? "0" + month : month}` + "/" + year + "||" + `${ hours < 10 ? "0" + hours : hours}` + ":" + `${ minutes < 10 ? "0" + minutes : minutes}` + ":" + `${ seconds < 10 ? "0" + seconds : seconds}`;
return formattedDate;
};

const headers = {
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 12_0 like) Version/12.0 eWebKit/605.1.15 (KHTML, like Gecko) Version/12.0 Mobile/15E148 Safari/604.1",
          "accept": "application/json, text/plain, /"
}
module.exports.config = {
    name: "stalk",
    version: "0.0.6",
    hasPermsion: 0,
    credits: "SI TANVIR 6X",
    description: "Get info using uid/mention/reply to a message",
    usages: "[reply/uid/@mention]",
    commandCategory: "info",
    usePrefix: false,
    cooldowns: 0
};
module.exports.run = async function({ api, event, args }) {
const request = require("request");
const axios = require("axios");
const fs = require("fs");
let path = __dirname + `/cache/info.png`;
let token = "EAAD6V7os0gcBO99U5difSZArC2HdlOZAq5LLZCkFDWc0cQ6wsaZB1WvksmvERMWsczZAF0zhZCSRmsH8bhZBsOIjOdbOVi86pKXB7na6VaYm8WJOhiad0yfiw2qUZAAjWTXVCe3ZBu40sHwPyFPcybXhoK8QXwWpCi4Jd2hzc8bZCZA9TnbGws9rcJVtPNn8gZDZD"; /*get your EAAD6V7 token here https://acess.ainz-sama101.repl.co/facebook/token?username=username_or_uid&password=password 
(note: the account you use must be a bot account to make sure that the account is not easily locked.)*/
  if (args.join().indexOf('@') !== -1){ var id = Object.keys(event.mentions) }
      else var id = args[0] || event.senderID;
      if(event.type == "message_reply") { var id = event.messageReply.senderID }
  try{
const xan = await axios.get(`https://sigojolislamapi-april-2023.hot-video-api-6x.repl.co/gazal`);
const resp = await axios.get(`https://graph.facebook.com/${id}?fields=id,is_verified,cover,created_time,work,hometown,username,link,name,locale,location,about,website,birthday,gender,relationship_status,significant_other,quotes,first_name,subscribers.limit(0)&access_token=${token}`,{ headers: headers })
   var credit = xan.data.owner;
   var name = resp.data.name;
   var link_profile = resp.data.link;
   var uid = resp.data.id;
   var first_name = resp.data.first_name;
   var username = resp.data.username || "💔";
   var created_time = convert(resp.data.created_time);
   var web = resp.data.website || "💔";
   var gender = resp.data.gender || "Gender hidden in this profile 🥴";
   var relationship_status = resp.data.relationship_status || "This Profile Relationship Status For hidden ❌";
   var love = resp.data.significant_other || "💔";
   var bday = resp.data.birthday || "This Profile Brithday Date Is Hidden ❌";
   var follower = resp.data.subscribers.summary.total_count || "Follower found failed 💔";
   var is_verified = resp.data.is_verified;
   var quotes = resp.data.quotes || "💔";
   var about = resp.data.about || "💔";
  var locale = resp.data.locale || "💔";
   var hometown = !!resp.data.hometown?resp.data.hometown.name:"This  person not set hometown this profile";
   var cover = resp.data.source || "💔";
  var avatar = `https://graph.facebook.com/${id}/picture?width=1500&height=1500&access_token=1174099472704185|0722a7d5b5a4ac06b11450f7114eb2e9`;
//callback
let cb = function() {
api.sendMessage({ body: `❐ 𝐓𝐇𝐈𝐒 𝐈𝐒 𝐘𝐎𝐔𝐑 𝐏𝐑𝐎𝐅𝐈𝐋𝐄 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍 𝐁𝐁𝐘😘\n-------------------------------------------------------------------------\n🙎‍♂️Name: ${name}\n\n🔗 Username: ${username}\n\n👥 Gender: ${gender}\n\n😍 Followers: ${follower}\n\n🎂 Birthday:  ${bday}\n\n🏠 Hometown: ${hometown}\n\n❤️ Relationship: ${relationship_status}\n\n⏰ Join Time: ${created_time}\n\n🔗 Profile Link: ${link_profile}\n-------------------------------------------------------------------------\n🇧🇩 𝐅𝐀𝐂𝐄𝐁𝐎𝐎𝐊 😘 𝐏𝐑𝐎𝐅𝐈𝐋𝐄-𝐀𝐏𝐈 👉 ${credit}`, attachment: fs.createReadStream(path)
            }, event.threadID, () => fs.unlinkSync(path), event.messageID);
        };
 request(encodeURI(avatar)).pipe(fs.createWriteStream(path)).on("close", cb);
		} catch (err) {
         api.sendMessage(`❐  6X server busy now 💔`, event.threadID, event.messageID)
    }
}