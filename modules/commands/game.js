module.exports.config = {
  name: "game",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mirai Team",
  description: "Play caro with AI",
  commandCategory: "game",
  cooldowns: 5,
  usages: "x/o/delete/continue"
};

var AIMove;
const fs = require("fs");
const { loadImage, createCanvas } = require("canvas");

function startBoard({isX, data}) {
  data.board = new Array(3);
  data.isX = isX;
  data.gameOn = true;
  data.gameOver = false;
  data.available = [];
  for(var i = 0; i < 3; i++) data.board[i] = new Array(3).fill(0);
  return data;
}

async function displayBoard(data) {
  const path = __dirname + "/cache/ttt.png";
  let canvas = createCanvas(1200, 1200);
  let cc = canvas.getContext("2d");
  let background = await loadImage("https://i.ibb.co/5R7wZ1H/20230306-143035.jpg");
  cc.drawImage(background, 0, 0, 1200, 1200);
  var quanO = await loadImage("https://i.ibb.co/Tg32RXF/20230306-143210.png");
  var quanX = await loadImage("https://i.ibb.co/jD4997k/20230306-143321.png");
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      var temp = data.board[i][j].toString();
      var x = 54 + 366*j;
      var y = 54 + 366*i;
      if (temp == "1") if (data.isX) { cc.drawImage(quanO, x, y, 360, 360) } else cc.drawImage(quanX, x, y, 360, 360);
      if (temp == "2") if (data.isX) { cc.drawImage(quanX, x, y, 360, 360) } else cc.drawImage(quanO, x, y, 360, 360);
    }
  }
  var ketqua = [];
  fs.writeFileSync(path, canvas.toBuffer("image/png"));
  ketqua.push(fs.createReadStream(path));
  return ketqua;
}

function checkAIWon(data) {
  if(data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 1) return true;
  if(data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 1) return true;   
  for(var i = 0; i < 3; ++i) {
    if(data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 1) return true;
    if(data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 1) return true;
  }
  return false;
}

function checkPlayerWon(data) {
  if(data.board[0][0] == data.board[1][1] && data.board[0][0] == data.board[2][2] && data.board[0][0] == 2) return true;
  if(data.board[0][2] == data.board[1][1] && data.board[0][2] == data.board[2][0] && data.board[0][2] == 2) return true;   
  for(var i = 0; i < 3; ++i) {
    if(data.board[i][0] == data.board[i][1] && data.board[i][0] == data.board[i][2] && data.board[i][0] == 2) return true;
    if(data.board[0][i] == data.board[1][i] && data.board[0][i] == data.board[2][i] && data.board[0][i] == 2) return true;
  }
  return false;
}

function solveAIMove({depth, turn, data}) {
  if (checkAIWon(data)) return +1;
  if (checkPlayerWon(data)) return -1;
  let availablePoint = getAvailable(data);
  if (availablePoint.length == 0) return 0;

  var min = Number.MAX_SAFE_INTEGER;
  var max = Number.MIN_SAFE_INTEGER;

  for (var i = 0, length = availablePoint.length; i < length; i++) {
    var point = availablePoint[i];
    if (turn == 1) {
      placeMove({point, player: 1, data});
      var currentScore = solveAIMove({depth: depth + 1, turn: 2, data});
      max = Math.max(currentScore, max);
      if (currentScore >= 0) {
        if (depth == 0) AIMove = point;
      }
      if (currentScore == 1) {
        data.board[point[0]][point[1]] = 0;
        break;
      }
       if(i == availablePoint.length - 1 && max < 0) {
        if(depth == 0) AIMove = point;
      }
    }
    else if (turn == 2) {
      placeMove({point, player: 2, data});
      var currentScore = solveAIMove({depth: depth + 1, turn: 1, data});
      min = Math.min(currentScore, min);
      if (min == -1) {
        data.board[point[0]][point[1]] = 0;
        break;
      }
    }
    data.board[point[0]][point[1]] = 0;
  }
  return turn == 1 ? max : min;
}

function placeMove({point, player, data}) {
  return data.board[point[0]][point[1]] = player;
}

function getAvailable(data) {
  let availableMove = []
  for (var i = 0; i < 3; i++) {
    for (var j = 0; j < 3; j++) {
      if (data.board[i][j] == 0) availableMove.push([i, j]);
    }
  }
  return availableMove;
}

function checkAvailableSpot(point, pointArray) {
  if (pointArray.find(element => element.toString() == point.toString())) return true;
  else return false;
}

function move(x, y, data) {
  var availablePoint = getAvailable(data);
  var playerMove = [x, y];
  if (checkAvailableSpot(playerMove, availablePoint)) {
    placeMove({point: playerMove, player: 2, data});
  } else return "Ã” nÃ y Ä‘Ã£ Ä‘Æ°á»£c Ä‘Ã¡nh dáº¥u rá»“i!";
  solveAIMove({depth: 0, turn: 1, data});
  placeMove({point: AIMove, player: 1, data});
}

function checkGameOver(data) {
  if (getAvailable(data).length == 0 || checkAIWon(data) || checkPlayerWon(data)) return true;
  return false;
}

function AIStart(data) {
  var point = [Math.round(Math.random()) * 2, Math.round(Math.random()) * 2];
  placeMove({point, player: 1, data});
}


module.exports.handleReply = async function({ event, api, handleReply }) {
  let { body, threadID, messageID, senderID } = event;
  if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
  let data = global.moduleData.tictactoe.get(threadID);
  if (!data || data.gameOn == false) return;
  var number = parseInt(body);
  if(!isNaN(number) && number > 0 && number < 10) {
    var row = number < 4 ? 0 : number < 7 ? 1 : 2;
    if (number == 1 || number == 4 || number == 7) var col = 0;
    if (number == 2 || number == 5 || number == 8) var col = 1;
    if (number == 3 || number == 6 || number == 9) var col = 2;
    var temp = move(row, col, data);
    var lmao = "";
    if(checkGameOver(data)) {
      var gayban = ["💛"];
      if(checkAIWon(data)) lmao = `you are loss${gayban[Math.floor(Math.random() * gayban.length)]}`;
      else if(checkPlayerWon(data)) lmao = "your are a Win😍";
      else lmao = "match drwa again play";
      global.moduleData.tictactoe.delete(threadID);
    }
    var msg = lmao !== "" ? lmao : temp == undefined ? "nice now next part" : temp;
    api.sendMessage({ body: msg, attachment: await displayBoard(data)}, threadID, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        author: senderID,
        messageID: info.messageID
      })
    }, messageID);
  } else return api.sendMessage("Sá»‘ Ã´ khÃ´ng há»£p lá»‡!", threadID, messageID);
}

module.exports.run = async function ({ event, api, args }) {
  if (!global.moduleData.tictactoe) global.moduleData.tictactoe = new Map();
  let { threadID, messageID, senderID } = event;
  const threadSetting = global.data.threadData.get(threadID) || {};
  var prefix = threadSetting.PREFIX || global.config.PREFIX;
  let data = global.moduleData.tictactoe.get(threadID) || { "gameOn": false, "player": "" };
  let concak = "" + prefix + this.config.name;
  let newData;
  if (args.length == 0) return api.sendMessage("❌Or 🔘", threadID, messageID);
  if (args[0].toLowerCase() == "delete") {
    global.moduleData.tictactoe.delete(threadID);
    return api.sendMessage("ÄÃ£ xÃ³a bÃ n cá»!", threadID, messageID);
  }
  if (args[0].toLowerCase() == "continue") {
    if (!data.gameOn) return api.sendMessage("KhÃ´ng cÃ³ dá»¯ liá»‡u! dÃ¹ng " + concak + " x/o Ä‘á»ƒ chÆ¡i má»›i", threadID, messageID);
    return api.sendMessage({ body: "Reply sá»‘ Ã´ Ä‘á»ƒ Ä‘Ã¡nh dáº¥u", attachment: await displayBoard(data)}, threadID, (error, info) => {
      global.client.handleReply.push({
        name: this.config.name,
        author: senderID,
        messageID: info.messageID
      })
    }, messageID);
  }
  if (!data.gameOn) {
    var abc = args[0].toLowerCase();
    if (abc !== "x" && abc !== "o") return api.sendMessage("❌ Or 🔘", threadID, messageID);
    if (abc == "o") {
      newData = startBoard({ isX: false, data, threadID });
      api.sendMessage({ body: "now play you", attachment: await displayBoard(newData)}, threadID, (error, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          author: senderID,
          messageID: info.messageID
        })
      }, messageID);
    }
    if (abc == "x") {
      newData = startBoard({ isX: true, data, threadID });
      AIStart(newData);
      api.sendMessage({ body: "Now Played", attachment: await displayBoard(data)}, threadID,(error, info) => {
        global.client.handleReply.push({
          name: this.config.name,
          author: senderID,
          messageID: info.messageID
        })
      }, messageID);
    }
    newData.player = senderID;
    global.moduleData.tictactoe.set(threadID, newData);
  } else return api.sendMessage("NhÃ³m nÃ y Ä‘Ã£ tá»“n táº¡i bÃ n cá»\nDÃ¹ng:\n" + concak + " continue -> tiáº¿p tá»¥c\n" + concak + " delete -> xÃ³a", threadID, messageID);
  }