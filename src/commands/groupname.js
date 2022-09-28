const axios = require(`axios`);

async function groupname(matches, event, api, extra) {
	var name = matches[1]
    console.log(matches)
	if (!name) api.sendMessage("❌ You have not entered the group name you want to change Example #groupname [text name new gc]", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`🔨 The bot changed the group name to: ${name}`, event.threadID, event.messageID));
}

module.exports = groupname;