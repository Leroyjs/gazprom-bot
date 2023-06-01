const TelegramApi = require("node-telegram-bot-api");
const {
  startStep,
  firstNameStep,
  lastNameStep,
  hobbiesStep,
  ageStep,
  departmentStep,
} = require("./steps/sign-up");
const { router } = require("./steps/main");
const { unknown } = require("./steps/common");
const { messages } = require("./messages");
const { mainButtons } = require("./buttons");

const token = "5829342069:AAHS2FCuHY3ucm63Y_GEKJs2ll9hosg21Mo";

global.bot = new TelegramApi(token, { polling: true });

global.steps = {};
global.users = {};

const checkUser = (chatId) => {
  if (users[chatId]) {
    const hasUsername = users[chatId]?.username;
    const hasFirstName = users[chatId]?.first_name;
    const hasLastName = users[chatId]?.last_name;
    const hasDepartment = users[chatId]?.department;
    const hasHobbies = users[chatId]?.hobbies;
    const hasAge = users[chatId]?.age;

    if (hasUsername && hasFirstName && hasLastName && hasDepartment && hasHobbies && hasAge) {
      steps[chatId] = "main";
    }
  } else {
    steps[chatId] = undefined;
  }
};

bot.on("message", async (msg) => {
  const text = msg.text.toLowerCase();
  const chatId = msg.chat.id;

  checkUser(chatId);

  if (text === "/start" && steps[chatId] === undefined) {
    startStep(msg);

    return;
  }

  console.log(chatId, steps[chatId], users[msg.chat.id]);
  switch (steps[chatId]) {
    case "first_name":
      await firstNameStep(msg);

      break;
    case "last_name":
      await lastNameStep(msg);

      break;
    case "hobbies":
      await hobbiesStep(msg);

      break;
    case "age":
      await ageStep(msg);

      break;
    case "main":
      await bot.sendMessage(msg.chat.id, messages.main(), mainButtons);
      break;

    default:
      unknown(msg);
  }

  // console.log(msg);
});

bot.on("callback_query", async (msg) => {
  const chatId = msg.message.chat.id;

  checkUser(chatId);

  switch (steps[chatId]) {
    case "department":
      departmentStep(msg);
      break;
    case "main":
      router(msg);
      break;
  }
});
