// use the below package to convert json to xls
var json2xls = require("json2xls");
const fs = require("fs");
const { departments } = require("./constants");

const getDepartmentName = (department) =>
  departments[Number(department.replace("department_", ""))];

const transformJSON = (users) =>
  Object.keys(users).map((key) => ({
    id: key,
    username: users[key].username,
    Имя: users[key].first_name,
    Фамилия: users[key].last_name,
    Департамент: getDepartmentName(users[key].department),
    Увлечения: users[key].hobbies,
    Возраст: users[key].age,
  }));

fs.readFile("./users.json", "utf8", (err, data) => {
  if (err) throw err;

  const users = JSON.parse(data);

  const arrayOfUsers = transformJSON(users);

  const xls = json2xls(arrayOfUsers);

  fs.writeFileSync("users.xlsx", xls, "binary");
});
