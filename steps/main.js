const {
  mainButtons,
  allAboutGTEButtons,
  yourStartButtons,
  possibilitiesButtons,
  usefulButtons,
  contactsButtons,
  scienceButtons,
  sportButtons,
  creationButtons,
} = require("../buttons");
const { messages } = require("../messages");

const mainStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.main(), mainButtons);
};

const yourStartStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.yourStart(), yourStartButtons);
};

const allAboutGTEStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.allAboutGTE(), allAboutGTEButtons);
};

const possibilitiesStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.possibilities(), possibilitiesButtons);
};

const usefulStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.useful(), usefulButtons);
};

const contactsStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.contacts(), contactsButtons);
};

const scienceStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.science(), scienceButtons);
};

const sportStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.sport(), sportButtons);
};

const creationStep = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, messages.creation(), creationButtons);
};

const main_1 = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, "TODO");
};

const main_2 = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, "TODO");
};

const main_3 = async (msg) => {
  await bot.sendMessage(
    msg.message.chat.id,
    "Переходи сюда\nhttps://forms.yandex.ru/u/6478b6f590fa7b0eabaabfe4/"
  );
};

const yourStart_1 = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, "TODO");
};

const yourStart_2 = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, "TODO");
};

const allAboutGTE_1 = async (msg) => {
  await bot.sendDocument(msg.message.chat.id, "./media/info.pdf");
};

const allAboutGTE_2 = async (msg) => {
  await bot.sendDocument(msg.message.chat.id, "./media/admin.pdf");
};

const allAboutGTE_3 = async (msg) => {
  await bot.sendDocument(msg.message.chat.id, "./media/branch.pdf");
};

const allAboutGTE_4 = async (msg) => {
  await bot.sendDocument(msg.message.chat.id, "./media/SMUS.pdf");
};

const allAboutGTE_5 = async (msg) => {
  await bot.sendDocument(msg.message.chat.id, "./media/tradeUnion.pdf");
};

const useful_1 = async (msg) => {
  await bot.sendMessage(msg.message.chat.id, "TODO");
  await bot.sendDocument(msg.message.chat.id, "./media/socialLinks.pdf");
};

const useful_2 = async (msg) => {};

const contacts_1 = async (msg) => {};

const contacts_2 = async (msg) => {};

const science_1 = async (msg) => {};

const science_2 = async (msg) => {};

const science_3 = async (msg) => {};

const science_4 = async (msg) => {};

const science_5 = async (msg) => {};

const science_6 = async (msg) => {};

const sport_1 = async (msg) => {};

const sport_2 = async (msg) => {};

const sport_3 = async (msg) => {};

const creation_1 = async (msg) => {};

const creation_2 = async (msg) => {};

const router = async (msg) => {
  switch (msg.data) {
    case "your-start":
      yourStartStep(msg);
      break;

    case "all-about-gte":
      allAboutGTEStep(msg);
      break;
    case "possibilities":
      possibilitiesStep(msg);
      break;
    case "useful":
      usefulStep(msg);
      break;

    case "contacts":
      contactsStep(msg);
      break;
    case "science":
      scienceStep(msg);
      break;
    case "sport":
      sportStep(msg);
      break;
    case "creation":
      creationStep(msg);
      break;
    case "main_1":
      main_1(msg);
      break;
    case "main_2":
      main_2(msg);
      break;
    case "main_3":
      main_3(msg);
      break;
    case "yourStart_1":
      yourStart_1(msg);
      break;
    case "yourStart_2":
      yourStart_2(msg);
      break;
    case "allAboutGTE_1":
      allAboutGTE_1(msg);
      break;
    case "allAboutGTE_2":
      allAboutGTE_2(msg);
      break;
    case "allAboutGTE_3":
      allAboutGTE_3(msg);
      break;
    case "allAboutGTE_4":
      allAboutGTE_4(msg);
      break;
    case "allAboutGTE_5":
      allAboutGTE_5(msg);
      break;
    case "useful_1":
      useful_1(msg);
      break;
    case "useful_2":
      useful_2(msg);
      break;
    case "contacts_1":
      contacts_1(msg);
      break;
    case "contacts_2":
      contacts_2(msg);
      break;
    case "science_1":
      science_1(msg);
      break;
    case "science_2":
      science_2(msg);
      break;
    case "science_3":
      science_3(msg);
      break;
    case "science_4":
      science_4(msg);
      break;
    case "science_5":
      science_5(msg);
      break;
    case "science_6":
      science_6(msg);
      break;
    case "sport_1":
      sport_1(msg);
      break;
    case "sport_2":
      sport_2(msg);
      break;
    case "sport_3":
      sport_3(msg);
      break;
    case "creation_1":
      creation_1(msg);
      break;
    case "creation_2":
      creation_2(msg);
      break;

    default:
      mainStep(msg);
  }
};

module.exports = {
  router,
};
