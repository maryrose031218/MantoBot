const axios = require(`axios`);
const fs = require(`fs-extra`)
const request = require(`request`)
async function avatar(matches, event, api, extra) {
	 const { threadID, messageID, senderID, body } = event;
	let text = matches[1].toString().replace(/,/g,  '  ');
	console.log(matches)
if (!text)
    return api.sendMessage("Add text lmao", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/avatar.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/avatar.png"),event.messageID);
	 return request(encodeURI(`https://manhict.tech/api/avtWibu5?id=3&tenchinh=${text}&tenphu=ManhICT&apikey=5EwHq8mA`)).pipe(fs.createWriteStream(__dirname+'/cache/avatar.png')).on('close',() => callback());     
}

module.exports = avatar