const { departments } = require("./constants");

const departmentButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: departments[0],
          callback_data: "department_0",
        },
        {
          text: departments[1],
          callback_data: "department_1",
        },
      ],
      [
        {
          text: departments[2],
          callback_data: "department_2",
        },
        {
          text: departments[3],
          callback_data: "department_3",
        },
      ],
      [
        {
          text: departments[4],
          callback_data: "department_4",
        },
        {
          text: departments[5],
          callback_data: "department_5",
        },
      ],
      [
        {
          text: departments[6],
          callback_data: "department_6",
        },
        {
          text: departments[7],
          callback_data: "department_7",
        },
      ],
      [
        {
          text: departments[8],
          callback_data: "department_8",
        },
        {
          text: departments[9],
          callback_data: "department_9",
        },
      ],
      [
        {
          text: departments[10],
          callback_data: "department_10",
        },
        {
          text: departments[11],
          callback_data: "department_11",
        },
      ],
      [
        {
          text: departments[12],
          callback_data: "department_12",
        },
        {
          text: departments[13],
          callback_data: "department_13",
        },
      ],
      [
        {
          text: departments[14],
          callback_data: "department_14",
        },
        {
          text: departments[15],
          callback_data: "department_15",
        },
      ],
      [
        {
          text: departments[16],
          callback_data: "department_16",
        },
        {
          text: departments[17],
          callback_data: "department_17",
        },
      ],
      [
        {
          text: departments[18],
          callback_data: "department_18",
        },
        {
          text: departments[19],
          callback_data: "department_19",
        },
      ],
      [
        {
          text: departments[20],
          callback_data: "department_20",
        },
        {
          text: departments[21],
          callback_data: "department_21",
        },
      ],
      [
        {
          text: departments[22],
          callback_data: "department_22",
        },
        {
          text: departments[23],
          callback_data: "department_23",
        },
      ],
      [
        {
          text: departments[24],
          callback_data: "department_24",
        },
      ],
    ],
  }),
};

// 1 lvl

const mainButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Твой старт",
          callback_data: "your-start",
        },
      ],
      [
        {
          text: "Все о ГТЕ",
          callback_data: "all-about-gte",
        },
      ],
      [
        {
          text: "Возможности",
          callback_data: "possibilities",
        },
      ],
      [
        {
          text: "Полезно",
          callback_data: "useful",
        },
      ],
      [
        {
          text: "График мероприятий",
          callback_data: "main_1",
        },
      ],
      [
        {
          text: "Вопрос ответ",
          callback_data: "main_2",
        },
      ],
      [
        {
          text: "Есть идея или вопрос",
          callback_data: "main_3",
        },
      ],
    ],
  }),
};

// 2 lvl

const yourStartButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Первые действия",
          callback_data: "yourStart_1",
        },
      ],
      [
        {
          text: "Администрация",
          callback_data: "yourStart_2",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "main",
        },
      ],
    ],
  }),
};

const allAboutGTEButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Общая информация",
          callback_data: "allAboutGTE_1",
        },
      ],
      [
        {
          text: "Администрация",
          callback_data: "allAboutGTE_2",
        },
      ],
      [
        {
          text: "Филиалы",
          callback_data: "allAboutGTE_3",
        },
      ],
      [
        {
          text: "СМУС",
          callback_data: "allAboutGTE_4",
        },
      ],
      [
        {
          text: "ПРОФСОЮЗ",
          callback_data: "allAboutGTE_5",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "main",
        },
      ],
    ],
  }),
};

const possibilitiesButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Наука",
          callback_data: "science",
        },
      ],
      [
        {
          text: "Спорт",
          callback_data: "sport",
        },
      ],
      [
        {
          text: "Творчество",
          callback_data: "creation",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "main",
        },
      ],
    ],
  }),
};

const usefulButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Контактные данные",
          callback_data: "contacts",
        },
      ],
      [
        {
          text: "Социальные сети",
          callback_data: "useful_1",
        },
      ],
      [
        {
          text: "Плюшки",
          callback_data: "useful_2",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "main",
        },
      ],
    ],
  }),
};
//3 lvl
const contactsButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "СМУС",
          callback_data: "contacts_1",
        },
      ],
      [
        {
          text: "Филиалы",
          callback_data: "contacts_2",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "useful",
        },
      ],
    ],
  }),
};

const scienceButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "НТК",
          callback_data: "science_1",
        },
      ],
      [
        {
          text: "Рацухи",
          callback_data: "science_2",
        },
      ],
      [
        {
          text: "Рац фест",
          callback_data: "science_3",
        },
      ],
      [
        {
          text: "ШПРМС",
          callback_data: "science_4",
        },
      ],
      [
        {
          text: "ШРК",
          callback_data: "science_5",
        },
      ],
      [
        {
          text: "Лучший МР",
          callback_data: "science_6",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "possibilities",
        },
      ],
    ],
  }),
};

const sportButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "Спартакиада летняя",
          callback_data: "sport_1",
        },
      ],
      [
        {
          text: "Спартакиада зимняя",
          callback_data: "sport_2",
        },
      ],
      [
        {
          text: "Тур слет",
          callback_data: "sport_3",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "possibilities",
        },
      ],
    ],
  }),
};

const creationButtons = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        {
          text: "КВН",
          callback_data: "creation_1",
        },
      ],
      [
        {
          text: "Зори",
          callback_data: "creation_2",
        },
      ],
      [
        {
          text: "Назад",
          callback_data: "possibilities",
        },
      ],
    ],
  }),
};

module.exports = {
  departmentButtons,
  mainButtons,
  yourStartButtons,
  allAboutGTEButtons,
  possibilitiesButtons,
  usefulButtons,
  contactsButtons,
  scienceButtons,
  sportButtons,
  creationButtons,
};
