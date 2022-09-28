const configs = require("./configs.js");
const commands = require("./src/utils/commands");
const command = require("./src/commands/allCommands");

const permissionMiddleware = require("./src/middlewares/permissionMiddleware");
const newParticipantMiddleware = require("./src/middlewares/newParticipantMiddleware");
const joinOrLeaveMiddleware = require("./src/middlewares/joinOrLeaveMiddleware");
const antiUnsendMiddleware = require("./src/middlewares/antiUnsendMiddleware");
const commandValidatorMiddleware = require("./src/middlewares/commandValidatorMiddleware");

commands.init({
  ...configs, 
  selfListen: true,
  listenEvents: true, 
  handleMatches: true
});

commands.addEventMiddleware(
  newParticipantMiddleware,
  antiUnsendMiddleware
);

commands.addCommandMiddleware(
  joinOrLeaveMiddleware,
  commandValidatorMiddleware,
  permissionMiddleware,
);

commands.add(command.info, {
  params: '^info\\s?(.*)?',
  usage: "info",
  description: "Shows information about MantoBOT.",
  name: "info"
});
//new Command
commands.add(command.csim, {
  params: '^csim\\s?(.*)?',
  usage: "csim",
  description: "Chat With Simsimi.",
  name: "csim"
});

commands.add(command.girl, {
  params: '^girl\\s?(.*)?',
  usage: "girl",
  description: "Generate And Send Picture Of Random Girl.",
  name: "girl"
});

commands.add(command.img18, {
  params: '^img18\\s?(.*)?',
  usage: "img18",
  description: "Generate And Send Picture Of Random Sexy Girl.",
  name: "img18"
});

commands.add(command.img18plus, {
  params: '^img18plus\\s?(.*)?',
  usage: "img18plus",
  description: "Generate And Send Picture Of Random Sexy Girl.",
  name: "img18plus"
});

commands.add(command.github, {
  params: '^github\\s?(.*)?',
  usage: "github",
  description: "Show Profile Of Github.",
  name: "github"
});

commands.add(command.setname, {
  params: '^setname\\s?(.*)?',
  usage: "setname @mention <nameyouwant>",
  description: "Set Nickname.",
  name: "setname"
});

commands.add(command.anime, {
  params: '^anime\\s?(.*)?',
  usage: "anime",
  description: "Send Anime Picture.",
  name: "anime"
});

commands.add(command.dictionary, {
  params: '^dictionary\\s?(.*)?',
  usage: "dictionary <word>",
  description: "Find the meaning of word.",
  name: "dictionary"
});

commands.add(command.groupname, {
  params: '^groupname\\s?(.*)?',
  usage: "groupname <desiredgroupname>",
  description: "Change The Group Chat Name.",
  name: "groupname"
});

commands.add(command.fbcover, {
  params: '^fbcover\\s?(.*)?',
  usage: "fbcover <desiredtext>",
  description: "Create Cover With Text.",
  name: "fbcover"
});

commands.add(command.avatar, {
  params: '^avatar\\s?(.*)?',
  usage: "avatar <desiredtext>",
  description: "Create Avatar With Text.",
  name: "avatar"
});

commands.add(command.wibu, {
  params: '^wibu\\s?(.*)?',
  usage: "wibu",
  description: "Send Wibu Pic.",
  name: "wibu"
});

//end here
commands.add(command.help, {
  params: '^help\\s?(.*)?',
  usage: "help",
  description: "Shows a list of available commands.",
  name: "help"
});

commands.add(command.imageSearch, {
  params: '^imageSearch\\s(.*)',
  usage: 'imageSearch <query>',
  description: 'Search for images in google',
  name: 'imageSearch',
  hasArgs: true
});

/* DISABLED FOR THE MEANTIME
commands.add(command.ris, {
  params: '^ris\\s?((http[s]?:\\/\\/(www\\.)?){1}([0-9A-Za-z-\\.@:%_\\+~#=]+)+((\\.[a-zA-Z]{2,3})+)(\\/(.)*)?(\\?(.)*)?)?',
  usage: "ris <optional: image url>",
  description: "Performs a reverse image search\n\nNote: When you reply this command to an image message, you do not need to specify an image url.",
  name: "ris",
  hasArgs: true
});
*/

commands.add(command.say.say, {
  params: '^say\\s([^\\s]+)\\s(.*)',
  usage: "say <language> <word/phrase>",
  description: "Sends an audio recording of the word/phrase",
  name: "say",
  hasArgs: true
});

commands.add(command.say.list, {
  params: '\\b(say languages-list)\\b',
  usage: "say languages-list",
  description: "Lists all the supported text-to-speech languages",
  name: "say languages-list",
  hasArgs: true
});

commands.add(command.download.tiktok, {
  params: '^downloadTiktok\\s?(.*)?',
  usage: "downloadTiktok <tiktok-video-url>",
  description: "Downloads videos from the tiktok",
  name: "downloadTiktok",
  hasArgs: true
});

commands.add(command.play, {
  params: '^play\\s?(.*)?',
  usage: "play <song title>",
  description: "Plays a song from youtube music and returns the lyrics of the song if there's any",
  name: "play",
  hasArgs: true
});

commands.add(command.wiki, {
  params: '^wiki\\s?(.*)?',
  usage: "wiki <query>",
  description: "Send a search query to Wikipedia's API",
  name: "wiki",
  hasArgs: true
});

commands.add(command.translate, {
  params: '^translate\\s(.*)\\sto\\s(.*)',
  usage: "translate <phrase> to <language>",
  description: "Translates a phrase/word using Google Translate API",
  name: "translate",
  hasArgs: true
});

commands.add(command.define, {
  params: '^define\\s?(.*)?',
  usage: "define <word>",
  description: "Returns the definition of the word using Google Dictionary API",
  name: "define",
  hasArgs: true
});

/** ADMIN COMMANDS **/

commands.add(command.admin, {
  params: '^admin\\s(promote|demote|list)\\s?(.*)?',
  usage: 'admin <promote|demote|list> <@person [, @person, ..] | @all | @you>',
  description: 'Promote/Demote users as administrator of this chat bot',
  name: 'admin',
  hasArgs: true,
  adminOnly: true
});


commands.add(command.join, {
  params: '^join\\s?(.*)?',
  usage: "join",
  description: "Allows MantoBOT to respond to every commands in a conversation.",
  name: "join",
  adminOnly: true
});

commands.add(command.leave, {
  params: '^leave\\s?(.*)?',
  usage: "leave",
  description: "Prevents MantoBOT from responding to every commands in a conversation.",
  name: "leave",
  adminOnly: true
});

commands.add(command.pin, {
  params: '^pin\\s(add|get|purge|remove|list)\\s?([\\w|\\W]+)?',
  usage: 'pin <add|get|purge|remove|list> <name of pin>',
  description: 'Pins a message in a certain thread',
  name: 'pin',
  hasArgs: true,
  adminOnly: true
});

commands.add(command.permission.grant, {
  params: '^permission\\sgrant\\s([^@]+)\\s(.*)',
  usage: "permission grant <all | command> <@all | @you | @person-name>",
  description: "Grants permission to all or a specific command to all members or specific member of a conversation.",
  name: "permission-grant",
  hasArgs: true,
  adminOnly: true
});

commands.add(command.permission.revoke, {
  params: '^permission\\srevoke\\s([^@]+)\\s(.*)',
  usage: "permission revoke <all | command> <@all | @you | @person-name>",
  description: "Revokes permission to all or a specific command to all members or a specific member of a conversation.",
  name: "permission-revoke",
  hasArgs: true,
  adminOnly: true
});

commands.add(command.settings.settings, {
  params: '^settings\\s(.*)\\s(.*)',
  usage: "settings <bot settings> <option>",
  description: "Updates bot's settings from the current thread",
  name: "settings",
  hasArgs: true,
  adminOnly: true
});

commands.add(command.settings.list, {
  params: '^settings\\slist\\s?(.*)?',
  usage: "settings list",
  description: "Lists bot's settings from the current thread",
  name: "settings-list",
  adminOnly: true
});

/* DISABLED FOR THE MEANTIME
commands.add(command.permission.list, {
	params: '^permission\\slist\\s([^@]+)\\s(.*)',
	usage: "permission list <all | command> <all | person-name>",
	description: "Lists permissions that are granted to all or a specific member of a conversation.",
	name: "permission-list",
	hasArgs: true,
	adminOnly: true
});
*/