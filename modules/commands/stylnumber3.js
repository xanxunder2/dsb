module.exports.config = {
    name: "number",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "SI TANVIR 6X",
    description: "stylish number desing ai 6X",
    commandCategory: "game",
    usages: "bigtext <nội dung>",
    cooldowns: 5
};
module.exports.run = async ({ event, api, args }) => {
   var text = args.join("").toLowerCase();
       text = text.toLowerCase();
  text = text.replace(/\./g, `𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗𝟎`)
  .replace(/1/g, `𝟏`) 
   .replace(/2/g, `𝟐`)
    .replace(/3/g, `𝟑`)
    .replace(/4/g, `𝟒`)
    .replace(/5/g, `𝟓`)
    .replace(/6/g, `𝟔`)
    .replace(/7/g, `𝟕`)
    .replace(/8/g, `𝟖`)
    .replace(/9/g, `𝟗`)
    .replace(/0/g, `𝟎`)
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