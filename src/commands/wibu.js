const axios = require(`axios`);
const fs = require(`fs-extra`)
const request = require(`request`)
async function fbcover(matches, event, api, extra) {
	axios.get('https://wibu.ocvat2810.repl.co').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({
						body: `𝐖𝐢𝐛𝐮`,
						attachment: fs.createReadStream(__dirname + `/cache/wibu.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/wibu.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/wibu.${ext}`)).on("close", callback);
			})
        }
module.exports = fbcover