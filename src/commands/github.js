const axios = require(`axios`);

async function github(matches, event, api, extra) {
    //const axios = global.nodemodule["axios"];
    var text = matches[1]
    console.log(matches)
    var msg;
    const res = await axios.get(`https://api.popcat.xyz/github/${text}`);
    var name = res.data.name;
    var location = res.data.location;
    var email = res.data.email;
    var twitter = res.data.twitter;
    var followers = res.data.followers;
    var following = res.data.following;
    var created = res.data.created_at;
    var bio = res.data.bio;
    var url = res.data.url;

    
    
    return api.sendMessage(`Name: ${name}\nUrl: ${url}\nBio: ${bio}\nLocation: ${location}\nEmail: ${email}\nTwitter: ${twitter}\nFollowers: ${followers}\nFollowing: ${following}`, event.threadID, event.messageID)
    }

module.exports = github;