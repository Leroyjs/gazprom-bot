const { messages } = require("../messages");

const unknown = async (msg) => {
  await bot.sendMessage(msg.chat.id, messages.unknown());
  // bot.sendDocument(msg.chat.id, "./media/winterSports.pdf");
};

module.exports = {
  unknown,
};
