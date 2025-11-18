module.exports.config = { usePrefix: true,
  name: "dbc",//your commands name! //
  version: "0.0.6",//don’t change this version //
  hasPermssion: 0,
  credits: "SI TANVIR 6X",//respect the main developer//
  description: "dbc fake news poster template",//just for fun use//
  commandCategory: "NEWS_DBC",
  usages: "/dbc sorry",
  dependencies: {
        "axios": "",
        "fs-extra": ""
  },
  cooldowns: 0
};
function _0x17ba(){const _0x345a28=['1007865NtVORk','424GeXuPh','133461iwPENu','141330NPXyfj','exports','5343545QENQGk','splice','40MIGZKs','measureText','1722809rRZJOQ','push','420RFUKBp','4523DmdXdM','1343024eZtrIU','slice','trim','width','210UFVNiD'];_0x17ba=function(){return _0x345a28;};return _0x17ba();}function _0x67f6(_0x217012,_0x40ea64){const _0x17ba4d=_0x17ba();return _0x67f6=function(_0x67f602,_0x420f6d){_0x67f602=_0x67f602-0x1b6;let _0x472999=_0x17ba4d[_0x67f602];return _0x472999;},_0x67f6(_0x217012,_0x40ea64);}const _0x1643eb=_0x67f6;(function(_0x30eb57,_0x5d19df){const _0x4cd292=_0x67f6,_0x175f3a=_0x30eb57();while(!![]){try{const _0x5122a9=-parseInt(_0x4cd292(0x1ba))/0x1*(-parseInt(_0x4cd292(0x1b9))/0x2)+parseInt(_0x4cd292(0x1c0))/0x3+parseInt(_0x4cd292(0x1bb))/0x4+parseInt(_0x4cd292(0x1c5))/0x5+-parseInt(_0x4cd292(0x1bf))/0x6*(parseInt(_0x4cd292(0x1c3))/0x7)+parseInt(_0x4cd292(0x1c1))/0x8*(-parseInt(_0x4cd292(0x1c2))/0x9)+-parseInt(_0x4cd292(0x1c7))/0xa*(parseInt(_0x4cd292(0x1b7))/0xb);if(_0x5122a9===_0x5d19df)break;else _0x175f3a['push'](_0x175f3a['shift']());}catch(_0x1ff827){_0x175f3a['push'](_0x175f3a['shift']());}}}(_0x17ba,0x8b733),module[_0x1643eb(0x1c4)]['wrapText']=(_0xfb9569,_0x3f684e,_0x4bfeb0)=>{return new Promise(_0x5a2864=>{const _0x801dd7=_0x67f6;if(_0xfb9569['measureText'](_0x3f684e)[_0x801dd7(0x1be)]<_0x4bfeb0)return _0x5a2864([_0x3f684e]);if(_0xfb9569[_0x801dd7(0x1b6)]('W')[_0x801dd7(0x1be)]>_0x4bfeb0)return _0x5a2864(null);const _0x51fec4=_0x3f684e['split']('\x20'),_0x35bc87=[];let _0x4cda6e='';while(_0x51fec4['length']>0x0){let _0x49c372=![];while(_0xfb9569[_0x801dd7(0x1b6)](_0x51fec4[0x0])[_0x801dd7(0x1be)]>=_0x4bfeb0){const _0x50836c=_0x51fec4[0x0];_0x51fec4[0x0]=_0x50836c['slice'](0x0,-0x1);if(_0x49c372)_0x51fec4[0x1]=''+_0x50836c[_0x801dd7(0x1bc)](-0x1)+_0x51fec4[0x1];else _0x49c372=!![],_0x51fec4[_0x801dd7(0x1c6)](0x1,0x0,_0x50836c[_0x801dd7(0x1bc)](-0x1));}if(_0xfb9569[_0x801dd7(0x1b6)](''+_0x4cda6e+_0x51fec4[0x0])[_0x801dd7(0x1be)]<_0x4bfeb0)_0x4cda6e+=_0x51fec4['shift']()+'\x20';else _0x35bc87[_0x801dd7(0x1b8)](_0x4cda6e[_0x801dd7(0x1bd)]()),_0x4cda6e='';if(_0x51fec4['length']===0x0)_0x35bc87['push'](_0x4cda6e[_0x801dd7(0x1bd)]());}return _0x5a2864(_0x35bc87);});});
//JS FUNCTION //
module.exports.run = async function ({ args, Users, Threads, api, event, Currencies }) {
  const { loadImage, createCanvas } = require("canvas");
  const fs = global.nodemodule["fs-extra"];
  const axios = global.nodemodule["axios"];
  //CALL CREDIT SERVER//
  var _0x447860=_0x5126;(function(_0x5737a9,_0x36bfa5){var _0x381989=_0x5126,_0x3fa508=_0x5737a9();while(!![]){try{var _0x5caff0=-parseInt(_0x381989(0x8a))/0x1+-parseInt(_0x381989(0x88))/0x2*(parseInt(_0x381989(0x8c))/0x3)+parseInt(_0x381989(0x7c))/0x4+parseInt(_0x381989(0x83))/0x5*(-parseInt(_0x381989(0x84))/0x6)+-parseInt(_0x381989(0x81))/0x7+parseInt(_0x381989(0x7e))/0x8+-parseInt(_0x381989(0x85))/0x9*(-parseInt(_0x381989(0x7f))/0xa);if(_0x5caff0===_0x36bfa5)break;else _0x3fa508['push'](_0x3fa508['shift']());}catch(_0x207cf8){_0x3fa508['push'](_0x3fa508['shift']());}}}(_0x2ff5,0x763cf));function _0x5126(_0xcbdbfe,_0x2cf189){var _0x2ff5cb=_0x2ff5();return _0x5126=function(_0x5126a1,_0x5b4ffa){_0x5126a1=_0x5126a1-0x7a;var _0x316db2=_0x2ff5cb[_0x5126a1];return _0x316db2;},_0x5126(_0xcbdbfe,_0x2cf189);}const server=await axios['get'](_0x447860(0x87));let dbcbg=__dirname+_0x447860(0x86),dbcextpp=__dirname+_0x447860(0x7a);var dbccr=server[_0x447860(0x89)][_0x447860(0x7b)],text=args[_0x447860(0x7d)]('\x20'),url=event[_0x447860(0x8b)][_0x447860(0x80)][0x0][_0x447860(0x82)]||args[_0x447860(0x7d)]('\x20');function _0x2ff5(){var _0x21df5d=['735576SBvyRR','messageReply','15dhepsV','/cache/fucker6X.png','dbc','3096024NZZkYC','join','5428208aEVZBK','3617950yZGMuC','attachments','2171064TdhDZi','url','45hWpgDk','225954KGbnJp','18TdfwPf','/cache/putkimariBG.png','https://server--credit-6x.repl.co/credit','122864mZkBzS','data'];_0x2ff5=function(){return _0x21df5d;};return _0x2ff5();}
//BACKGROUND IMAGE CALL//
  var background = "https://i.imgur.com/SUt1tsm.jpg";
  let getEXTPP = (
    await axios.get(
      `${url}`,
      { responseType: "arraybuffer" }
    )
  ).data;
  fs.writeFileSync(dbcextpp, Buffer.from(getEXTPP, "utf-8"));
  //CALL BACKGROUND CONTROL//
   let getbackground = (
    await axios.get(`${background}`, {
      responseType: "arraybuffer",
    })
  ).data;
  fs.writeFileSync(dbcbg, Buffer.from(getbackground, "utf-8"));
// CALLING LET PATH//
  let dbcimg = await loadImage(dbcbg);
  let dbcPP1 = await loadImage(dbcextpp);
  let canvas = createCanvas(dbcimg.width, dbcimg.height);
  let ctx = canvas.getContext("2d");
  ctx.drawImage(dbcimg, 0, 0, canvas.width, canvas.height);
  //CALL CTX SQUARE/CIRCLE//
  ctx.font = "400 26px  SVN-Arial 2";
  ctx.fillStyle = "#000000";
  ctx.textAlign = "start";
  let fontSize = 26;
  while (ctx.measureText(text).width > 2250) {
    fontSize--;
    ctx.font = `400 ${fontSize}px SVN-Arial2`;
  }
  const lines = await this.wrapText(ctx, text, 390);//text splitting//
  ctx.fillText(lines.join('\n'), 60, 345);//text position//CTX
  ctx.beginPath();
  ctx.drawImage(dbcPP1, 39,66, 402, 240);
  //IMAGE BUFFERING//
  const imageBuffer = canvas.toBuffer();
  fs.writeFileSync(dbcbg, imageBuffer);
  fs.removeSync(dbcextpp);
  return api.sendMessage({ body: `❐ ${dbccr}\n\n𝘽𝙤𝙩 𝙊𝙬𝙣𝙚𝙧:「 𝗥𝘅 𝗣𝗮𝘃𝗲𝗹 𝗜𝘀𝗹𝗮𝗺 」`, attachment: fs.createReadStream(dbcbg) },
      event.threadID,
      () => fs.unlinkSync(dbcbg),
      event.messageID);
    }
