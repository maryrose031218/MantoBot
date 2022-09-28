const axios = require(`axios`);
const request = require("request")
const fs = require("fs-extra")

async function girl(matches, event, api, extra) {
  const res = await axios.get(`https://api.phamvandien.xyz/images/girl`);
  var data = res.data.url;
  var msg = [];
  let img1 = `${res.data.url}`;

  let imgs1 = (await axios.get(`${img1}`, {
      responseType: 'arraybuffer'
  })).data;
  fs.writeFileSync(__dirname + "/cache/girl.png", Buffer.from(imgs1, "utf-8"));

  var allimage = [];
  allimage.push(fs.createReadStream(__dirname + "/cache/girl.png"));
  
  {
    msg += `Ito Babae Jowain Mo na. `
  }
  
  return api.sendMessage({
      body: msg,
      attachment: allimage
  }, event.threadID);
}

module.exports = girl;