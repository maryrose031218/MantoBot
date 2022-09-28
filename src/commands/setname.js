const axios = require(`axios`);

async function setname(matches, event, api, extra) {
    const name = matches[1]
	const mention = Object.keys(event.mentions)[0];
	if (!mention) return api.changeNickname(`${name}`, event.threadID, event.senderID);
	if (mention[0]) return api.changeNickname(`${name.replace(event.mentions[mention], "")}`, event.threadID, mention);
    }

module.exports = setname;