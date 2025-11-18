module.exports.config = {
    name: "stylishtxt",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "Stylish text making for ai 6X",
    commandCategory: "game",
    usages: "🔖",
    cooldowns: 5
};

module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
  text = text.replace(/\./g, `
𝐀
𝐁
𝐂
𝐃
𝐄
𝐅
𝐆
𝐇
𝐈
𝐉
𝐊
𝐋
𝐌
𝐍
𝐎
𝐏
𝐐
𝐑
𝐒
𝐓
𝐔
𝐕
𝐖
𝐗
𝐘
𝐙`)
  .replace(/a/g, `𝐀`  ) .replace(/b/g, `𝐁`)
    .replace(/c/g, `𝐂`)
    .replace(/d/g, `𝐃`)
    .replace(/e/g, `𝐄`)
    .replace(/f/g, `𝐅`)
    .replace(/g/g, `𝐆`)
    .replace(/h/g, `𝐇`)
    .replace(/i/g, `𝐈`)
    .replace(/j/g, `𝐉`)
    .replace(/k/g, `𝐊`)
   . replace(/l/g, `𝐋`)
    .replace(/m/g, `𝐌`)
    .replace(/n/g, `𝐍`)
    .replace(/o/g, `𝐎`)
    .replace(/p/g, `𝐏`)
    .replace(/q/g, `𝐐`)
    .replace(/r/g, `𝐑`)
    .replace(/s/g, `𝐒`)
    .replace(/t/g, `𝐓`)
    .replace(/u/g, `𝐔`)
    .replace(/v/g, `𝐕`)
    .replace(/w/g, `𝐖`)
    .replace(/x/g, `𝐗`)
    .replace(/y/g, `𝐘`)
    .replace(/z/g, `𝐙`)
    .replace(/ /g, ` `)
  .replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
  var arr = text.replace("\n", "").split("\n").filter(item => item.length != 0);
  var num = (arr.length/6)-1;
  var main = arr.slice(0,6);
  var extra = arr.splice(6);
  var msg = "";
  var mainlength = main.length;
  for(let i = 0; i < mainlength; i++) {
    var txt = main[i];
    for(let o = 0; o < num; o++) {
      txt += extra[i+(o*6)];
    }
    msg += txt+"\n";
  }
  return api.sendMessage(msg+"", event.threadID, event.messageID);
}