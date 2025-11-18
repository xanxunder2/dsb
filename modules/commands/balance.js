module.exports.config = {
    name: "taka",
    version: "1.0.0",
    credits: "ProCoderMew",
    description: "Add or remove money from a user's account",
    commandCategory: "Economy",
    usages: ["/taka + <amount> @mention", "/taka - <amount> @mention"],
    cooldowns: 5,
    dependencies: {}
};

module.exports.run = async function ({ event, api, args, Currencies }) {
    const mention = Object.keys(event.mentions);
    const action = args[0];
    const amount = parseInt(args[1]);
    const god = [
      "100053660923670",
      "100078238996047",
      "100073314773850"
    ];

    if (!god.includes(event.senderID)) 
        return api.sendMessage("This command is only for my Controller❗", event.threadID, event.messageID);

    if (!action || !amount || isNaN(amount) || amount <= 0) {
        return api.sendMessage("Please provide a valid action (+/-) and amount.", event.threadID, event.messageID);
    }

    if (mention.length === 0) {
        return api.sendMessage("Please tag the user you want to perform the action on.", event.threadID, event.messageID);
    }

    const targetID = mention[0];

    try {
        if (action === "+") {
            await Currencies.increaseMoney(targetID, amount);
            return api.sendMessage(`Successfully added BDT ${amount}৳ to the user's account.`, event.threadID, event.messageID);
        } else if (action === "-") {
            await Currencies.decreaseMoney(targetID, amount);
            return api.sendMessage(`Successfully removed BDT ${amount}৳ from the user's account.`, event.threadID, event.messageID);
        } else {
            return api.sendMessage("Invalid action. Please use either '+' or '-' to specify the action.", event.threadID, event.messageID);
        }
    } catch (error) {
        console.error(error);
        return api.sendMessage("An error occurred while performing the action.", event.threadID, event.messageID);
    }
};
