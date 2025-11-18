module.exports.config = {
  name: "movie",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SI TANVIR 6X",
  description: "hentai",
  usages: "password",
  commandCategory: "Other",
    cooldowns: 0,
};
module.exports.run = async function({ api, event, args }) {
    const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    let juswa = args.join(" ");
    const res = await axios.get(`https://api.zahwazein.xyz/webzone/imdb?query=${juswa}&apikey=zenzkey_781b13f7f146`);
    var title = res.data.result.title;
var released = res.data.result.released;
var year = res.data.result.year; 
var country = res.data.result.country; 
var actors = res.data.result.actors;  
var language = res.data.result.languages;
var poster_url = res.data.result.poster; 
var plot = res.data.result.plot;  
var writer = res.data.result.writer;
var genres = res.data.result.genres;
    var msg = [];
    let a = `${res.data.result.poster}`;

    let imgs1 = (await axios.get(`${a}`, {
        responseType: 'arraybuffer'
    })).data;
    fs.writeFileSync(__dirname + "/cache/img1.png", Buffer.from(imgs1, "utf-8"));

    var allimage = [];
    allimage.push(fs.createReadStream(__dirname + "/cache/img1.png"));
    return api.sendMessage({body:`「MOVIE INFORMATION」\n❏ Name: ${title}\n❏ Lan
    guage: ${language}\n❏ Country: ${country}\n❏ Writer: ${writer}\n❏ Actors: ${actors}\n❏ Release:  ${released}\n❏ Upload: ${year}\n❏ Details : ${plot}\n❏ Server : TANVIR_6X🔥`, attachment: allimage
    }, event.threadID);
  }