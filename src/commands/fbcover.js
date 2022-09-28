const axios = require(`axios`);
const fs = require(`fs-extra`)
const request = require(`request`)
async function fbcover(matches, event, api, extra) {
	 const { threadID, messageID, senderID, body } = event;
	let text = matches[1].toString().replace(/,/g,  '  ');
	console.log(matches)
if (!text)
    return api.sendMessage("Add text lmao", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/cover.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/cover.png"),event.messageID);
	 return request(encodeURI(`https://manhict.tech/api/fbcover2?name=${text}&id=5&subname=${text}&apikey=5EwHq8mA`)).pipe(fs.createWriteStream(__dirname+'/cache/cover.png')).on('close',() => callback());     
}

module.exports = fbcover