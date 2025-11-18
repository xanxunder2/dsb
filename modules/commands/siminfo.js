module.exports.config = {
  name: "siminfo",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Your name",
  description: "Retrieves SIM information based on the phone number",
  commandCategory: "siminfo",
  usages: [],
  cooldowns: 5,
  dependencies: {
    "request": ""
  }
};

module.exports.run = async function ({ api, event, args }) {
  // Get the user input phone number from the command arguments
  const phoneNumber = args[0];

  // Make a request to the API endpoint with the user phone number
  request.get({
    url: `https://teamtasik.xyz/api/numberinfo.php?key=messenger_bot&number=${encodeURIComponent(phoneNumber)}`
  }, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      // If the request was successful, extract the result from the response body
      const result = JSON.parse(body);

      // Build the response message with the extracted information
      const message = `✅ | User Information -
Name: ${result.name}
Gender: ${result.gender}
NID Type: ${result.nid_type}
NID: ${result.nid_no}
Date of Birth: ${result.dob}

🛰️ | User Location -
Area Name: ${result.area}
Thana: ${result.thana}
District: ${result.district}
Division: ${result.division}
Postal Code: ${result.postal_code}

📞 | SIM Information -
Sim Brand: ${result.sim_brand}
Sim Catagory: ${result.sim_category}
Sim Type: ${result.user_type}
IMSI: ${result.imsi}
Sim Register Date: ${result.sim_create_date}

📡 | Network Status -
Sim Status: ${result.sim_status}
Sim Network Status: ${result.sim_network_status}
Sim Active Status: ${result.sim_active_status}`;

      // Send the message back to the user on Messenger
      api.sendMessage(message, event.threadID, event.messageID);
    } else {
      // If the request failed, log the error and send an error message back to the user
      console.error('Error making API request:', error);
      api.sendMessage('Failed to retrieve SIM information. Please try again.', event.threadID, event.messageID);
    }
  });
};