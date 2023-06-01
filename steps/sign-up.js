const { departmentButtons, mainButtons } = require("../buttons");
const { messages } = require("../messages");
const { isCorrectAge } = require("./utils");

const startStep = async (msg) => {
  await bot.sendMessage(msg.chat.id, messages.start());
  await bot.sendMessage(msg.chat.id, messages.firstName());

  users[msg.chat.id] = {
    username: msg.from.username,
  };

  steps[msg.chat.id] = "first_name";
};

const firstNameStep = async (msg) => {
  users[msg.chat.id].first_name = msg.text;
  steps[msg.chat.id] = "last_name";

  await bot.sendMessage(msg.chat.id, messages.lastName());
};

const lastNameStep = async (msg) => {
  users[msg.chat.id].last_name = msg.text;
  steps[msg.chat.id] = "department";

  await bot.sendMessage(msg.chat.id, messages.department(), departmentButtons);
};

const departmentStep = async (msg) => {
  users[msg.message.chat.id].department = msg.data;

  steps[msg.message.chat.id] = "hobbies";

  await bot.sendMessage(msg.message.chat.id, messages.hobbies());
};

const hobbiesStep = async (msg) => {
  users[msg.chat.id].hobbies = msg.text;
  steps[msg.chat.id] = "age";

  await bot.sendMessage(msg.chat.id, messages.age());
};

const ageStep = async (msg) => {
  const age = msg.text;

  if (isCorrectAge(age)) {
    users[msg.chat.id].hobbies = msg.text;
    steps[msg.chat.id] = "main";

    if (age <= 35) {
      await bot.sendMessage(msg.chat.id, messages.young());
    } else {
      await bot.sendMessage(msg.chat.id, messages.oldMan());
    }

    await bot.sendMessage(msg.chat.id, messages.main(), mainButtons);
  } else {
    bot.sendMessage(msg.chat.id, messages.incorrectAge());
  }
};

module.exports = {
  startStep,
  firstNameStep,
  lastNameStep,
  departmentStep,
  hobbiesStep,
  ageStep,
};
