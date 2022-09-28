const axios = require(`axios`);
const request = require("request")
const fs = require("fs-extra")

async function img18plus(matches, event, api, extra) {
  const res = await axios.get(`https://api.phamvandien.xyz/images/mong`);
  var data = res.data.url;
  var msg = [];
  let img1 = `${res.data.url}`;

  let imgs1 = (await axios.get(`${img1}`, {
      responseType: 'arraybuffer'
  })).data;
  fs.writeFileSync(__dirname + "/cache/img18plus.png", Buffer.from(imgs1, "utf-8"));

  var allimage = [];
  allimage.push(fs.createReadStream(__dirname + "/cache/img18plus.png"));
  
  {
      msg += `Uy Wag Titigan At Wag mo ring Spamin `
  }
  
  return api.sendMessage({
      body: msg,
      attachment: allimage
  }, event.threadID);
}

module.exports = img18plus;