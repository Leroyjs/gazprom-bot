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
const fs = require("fs");
require("dotenv").config();

const token = process.env.TELEGRAM_TOKEN;
console.log("token", token);
global.bot = new TelegramApi(token, { polling: true });

global.steps = {};

fs.readFile("./users.json", "utf8", (err, data) => {
  if (err) throw err;

  global.users = JSON.parse(data);
});

const signUpUser = async () => {
  fs.writeFile("./users.json", JSON.stringify(global.users), (err) => {
    if (err) throw err;
    console.log("signUp");
  });
};

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
      await signUpUser();

      break;
    case "main":
      await router(msg);
      break;

    default:
      unknown(msg);
  }
});

bot.on("callback_query", async (msg) => {
  const chatId = msg.message.chat.id;

  checkUser(chatId);

  switch (steps[chatId]) {
    case "department":
      departmentStep(msg);
      break;
  }
});
