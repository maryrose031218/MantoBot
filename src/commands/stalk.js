const axios = require(`axios`);

async function stalk(matches, event, api, extra) {
    //const axios = require("axios")
    const request = require("request")
    const fs = require("fs-extra")
    var text = matches[1];
     if(!text){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
   const res = await axios.get(`https://manhict.tech/api/fbInfo?id=${uid}&apikey=5EwHq8mA`); //may limit 500 lang then pag nagamit na ung 500 antay ulit 12 hrs :3
    var id = res.data.result.id; 
    var name = res.data.result.name; 
    var fname = res.data.result.firstName;
    var username = res.data.result.vanity; 
    var bday = res.data.result.birthday;
    var f = res.data.result.follow;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`Name: ${name}\nFirst Name: ${fname}\nFacebook Username: ${fname}\nBirthday: ${bday}\nFollowers: ${f}\nLocation: ${loc}\nRelationship: ${rs}\nProfile Url: ${url}\nHometown: ${ht}\nUID: ${id}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${uid}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
   }

    else {
    if (text.indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://manhict.tech/api/fbInfo?id=${mentions}&apikey=5EwHq8mA`);
    var id = res.data.result.id;
    var name = res.data.result.name;
    var fname = res.data.result.firstName;
    var username = res.data.result.vanity;
    var bday = res.data.result.birthday;
    var f = res.data.result.follow;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`Name: ${name}\nFirst Name: ${fname}\nFacebook Username: ${fname}\nBirthday: ${bday}\nFollowers: ${f}\nLocation: ${loc}\nRelationship: ${rs}\nProfile Url: ${url}\nHometown: ${ht}\nUID: ${id}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else {
    const res = await axios.get(`https://manhict.tech/api/fbInfo?id=${text}&apikey=5EwHq8mA`);
    var id = res.data.result.id;
    var name = res.data.result.name;
    var fname = res.data.result.firstName;
    var username = res.data.result.vanity;
    var bday = res.data.result.birthday;
    var f = res.data.result.follow;
    var url = res.data.result.profileUrl;
    var ht = res.data.result.hometown;
    var loc = res.data.result.location;
    var rs = res.data.result.love;
    var quotes = res.data.result.quotes;
    var data = res.data.result.thumbSrc;
    var callback = () => api.sendMessage({body:`Name: ${name}\nFirst Name: ${fname}\nFacebook Username: ${fname}\nBirthday: ${bday}\nFollowers: ${f}\nLocation: ${loc}\nRelationship: ${rs}\nProfile Url: ${url}\nHometown: ${ht}\nUID: ${id}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`https://graph.facebook.com/${text}/picture?height=1500&width=1500&access_token=463372798834978|csqGyA8VWtIhabZZt-yhEBStl9Y`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
  }
  }

module.exports = stalk;