const axios = require("axios");
const cloudscraper = require("cloudscraper");
const configs = require("../../configs");
const fs = require("fs");

const searchWiki = async (query) => {
    let request = await axios.get("https://en.wikipedia.org/api/rest_v1/page/summary/" + query)
        .then((response) => { return response.data})
        .catch((error) => { return error });
    
    return request;
}

const openSettings = () => {
    return JSON.parse(fs.readFileSync(configs.APP_SETTINGS_LIST_FILE, {encoding: "utf8"}));
}

module.exports = async (matches, event, api, extra) => {
	let settingsList = openSettings();
  let settings = settingsList.threads[event.threadID] || settingsList.defaultSettings;

	let query = matches[1];
	console.log(matches);
	
	if(query === undefined) {
		let stopTyping = api.sendTypingIndicator(event.threadID, (err) => {
			if(err) return console.log(err);
			
			api.sendMessage(`⚠️ Invalid use of command: '${settings.prefix}wiki'\n\nUsage: ${extra.usage}`, event.threadID, event.messageID);
			stopTyping();
		});
		
		return;
	}
	
	let response = await searchWiki(query);
	
	if(response === undefined || response.title === undefined) {
		let stopTyping = api.sendTypingIndicator(event.threadID, (err) => {
			if(err) return console.log(err);
			
			api.sendMessage(`⚠️ Wikipedia did not find the word: '${query}'`, event.threadID, event.messageID);
			stopTyping();
		});
		
		return;
	}
	
	let definition = `📖 Definition of '${response.title || query}':\n\n`;
	definition += `💡 Timestamp: \n  ${response.timestamp}\n\n`;
	definition += `💡 Desription: \n  ${response.description || 'none'}\n\n`;
	definition += `💡 Info: \n  ${response.extract || 'none'}\n\n`;
	definition += 'Source: https://en.wikipedia.org';
	
	let hasImage = (response.originalimage !== undefined) && (response.originalimage.source !== undefined);
	let path = `./temps/${query}.jpg`;
	let msg = {body: definition};
	
	if(hasImage) {
	  let url = response.originalimage.source;
	  
	  await cloudscraper.get({uri: url, encoding: null})
	    .then((buffer) => fs.writeFileSync(path, buffer))
	}
	
	let stopTyping = api.sendTypingIndicator(event.threadID, (err) => {
		if(err) return console.log(err);
		
		if(hasImage)
		  msg.attachment = fs.createReadStream(path).on("end", async () => {
		    if(fs.existsSync(path)) {
		      fs.unlink(path, (err) => {
		        if(err) console.log(err);
		        
		        console.log(`Deleted file: ${path}`);
		      });
		    }
		  });
		
		api.sendMessage(msg, event.threadID, event.messageID);
		stopTyping();
	});
}