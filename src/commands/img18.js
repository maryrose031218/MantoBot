const axios = require(`axios`);
const request = require("request")
const fs = require("fs-extra")

async function img18(matches, event, api, extra) {
  const res = await axios.get(`https://api.phamvandien.xyz/images/du`);
  var data = res.data.url;
  var msg = [];
  let img1 = `${res.data.url}`;

  let imgs1 = (await axios.get(`${img1}`, {
      responseType: 'arraybuffer'
  })).data;
  fs.writeFileSync(__dirname + "/cache/img18.png", Buffer.from(imgs1, "utf-8"));

  var allimage = [];
  allimage.push(fs.createReadStream(__dirname + "/cache/img18.png"));
  
  {
    msg += `Sexy Diba hahaha. `
  }
  
  return api.sendMessage({
      body: msg,
      attachment: allimage
  }, event.threadID);
}

module.exports = img18;