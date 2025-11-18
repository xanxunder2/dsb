module.exports.config = {
    name: "stylnumber",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "stylish number desing ai 6X",
    commandCategory: "game",
    usages: "❐- 6Xserver busy🥺💔",
    cooldowns: 5
};
module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
  text = text.replace(/\./g, `➊➋➌➍➎➏➐➑➒⓿`)
  .replace(/1/g, `➊`) 
   .replace(/2/g, `➋`)
    .replace(/3/g, `➌`)
    .replace(/4/g, `➍`)
    .replace(/5/g, `➎`)
    .replace(/6/g, `➏`)
    .replace(/7/g, `➐`)
    .replace(/8/g, `➑`)
    .replace(/9/g, `➒`)
    .replace(/0/g, `⓿`)
    .replace(/🙂/g, `　`)
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