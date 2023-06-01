const TelegramApi = require("node-telegram-bot-api");
const {
  startStep,
  firstNameStep,
  lastNameStep,
  hobbiesStep,
  ageStep,
  departmentStep,
} = require("./steps/sign-up");
const { mainStep, allAboutGTEStep, router } = require("./steps/main");
const { unknown } = require("./steps/common");

const token = "5829342069:AAHS2FCuHY3ucm63Y_GEKJs2ll9hosg21Mo";

global.bot = new TelegramApi(token, { polling: true });

global.steps = {};
global.users = {
  418259847: {
    first_name: "Никита",
    last_name: "Колташов",
    username: "leroyJS",
  },
};

const checkUser = (chatId) => {
  if (users[chatId]) {
    steps[chatId] = "main";
  } else {
    steps[chatId] = undefined;
  }
};

bot.on("message", async (msg) => {
  const text = msg.text.toLowerCase();
  const chatId = msg.chat.id;

  checkUser(chatId);

  if (text === "/start") {
    startStep(msg);

    return;
  }

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
      await mainStep(msg);
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
