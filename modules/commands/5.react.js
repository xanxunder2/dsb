module.exports.config = {
	name: "autoreact",
	version: "1.1.1",
	hasPermission: 0,
	credits: "John Lester",
	description: "Bot React",
	commandCategory: "No Prefix",
	cooldowns: 0,
};
const fs = require("fs");
module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	let react = event.body.toLowerCase();
	if(react.includes("hahaha") || react.includes("HAHA") || react.includes("pakyu") || react.includes("Pakyu") || react.includes("bobo") || react.includes("Bobo") || react.includes("gago") || react.includes("tangina") || react.includes("tang") || react.includes("pak") || react.includes("shit") || react.includes("amp") || react.includes("lol") || react.includes("LOL") || react.includes("ulol") || react.includes("walang utak") || react.includes("Amp") || react.includes("tanga") || react.includes("bts") || react.includes("Bts") || react.includes("BTS") || react.includes("burat") || react.includes("kantutin") || react.includes("Kantutin") || react.includes("unggoy") || react.includes("bano") || react.includes("kulang") || react.includes("😆") || react.includes("😂") || react.includes(":)") || react.includes("🙂") || react.includes("😹") || react.includes("🤣") || 
react.includes("😅") ||
react.includes("🤤") || react.includes("😀") || react.includes("🤨") || react.includes("hasipay") || react.includes("Hasipay") || react.includes("fuck") || react.includes("fuckyou") || react.includes("vuda") || react.includes("Vuda") || react.includes("bold") || react.includes("Bold") || react.includes("am") || react.includes("nan") || react.includes("Am") || react.includes("Xuda Xudi") || react.includes("gagi") || react.includes("bastos") || react.includes("Bastos") || react.includes("deputa") || react.includes("Deputa") || react.includes("puta") || react.includes("Puta") || react.includes("Pota") || react.includes("baboy") || react.includes("kababuyan") || react.includes("🖕") || react.includes("🤢") || react.includes("😝") || react.includes("hayup") || react.includes("hayop") || react.includes("nigga") || react.includes("Nigga") || react.includes("script kiddie") || react.includes("trash") || react.includes("Hayop") || react.includes("Hayup") || react.includes("kagagohan") || react.includes("kagaguhan") || react.includes("Nan") || react.includes("kingina") || react.includes("Kingina") || react.includes("KINGINA") || react.includes("hindot") ||  react.includes("abno") || react.includes("Abno") || react.includes("Script kiddie") || react.includes("lmao") || react.includes("Lmao") || react.includes("LMAO") || react.includes("xd") || react.includes("Xd") || react.includes("XD") || react.includes("biot") || react.includes("Biot") || react.includes("bayot") || react.includes("Bayot") || react.includes("Bayut") || react.includes("bayut") || react.includes("bakla") || react.includes("Bakla") || react.includes("bading") || react.includes("Bading") || react.includes("poor") || react.includes("Poor")) {
    var msg = {
