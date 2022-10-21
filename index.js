const { count } = require("console");
const fs = require("fs");
const readlineSync = require("readline-sync");

const file1 = fs.readFileSync("./topics/Universe.txt", "utf8");
const file2 = fs.readFileSync("./topics/ChoseMe.txt", "utf8");
const file3 = fs.readFileSync("./topics/Cinema.txt", "utf8");

let arr1 = file1.split("\n");
let arr2 = file2.split("\n");
let arr3 = file3.split("\n");

function createObjects(array) {
  let res = [];
  for (let i = 0; i < array.length; i = i + 2) {
    res.push({ Вопрос: array[i], Ответ: array[i + 1] });
  }
  return res.slice(0, res.length - 1);
}
let theme1 = createObjects(arr1);
let theme2 = createObjects(arr2);
let theme3 = createObjects(arr3);

const topics = ["Вселенная", "Выбери меня", "Кино"];

// console.log(theme1);

function main() {
  let topic = readlineSync.question(
    `Темы на выбор : \n${topics[0]}\n${topics[1]}\n${topics[2]}\n`
  );
  if (topics.includes(topic)) {
    console.clear();
    console.log(`Тема ${topic} выбрана!\n`);
    question(topic);
  } else {
    main();
  }
}
function question(topic) {
  let count = 0;
  switch (topic) {
    case "Вселенная": {
      for (let i = 0; i < theme1.length; i++) {
        console.log(theme1[i]["Вопрос"]);
        let answer = readlineSync.question("\n");
        if (answer.toUpperCase() === theme1[i]["Ответ"].toUpperCase()) {
          console.log("Верно!");
          console.log("");
          count += 100;
          console.log(`Ваш долг ${count} руб.`);
          console.log("");
        } else {
          console.log(`Неверно! Ответ: ${theme1[i]["Ответ"]}`);
          console.log();
          count -= 1000;
          console.log(`Ваш долг ${count} руб.`);
          console.log("");
        }
      }
      main();
      break;
    }
    case "Выбери меня": {
      for (let i = 0; i < theme2.length; i++) {
        console.log(theme2[i]["Вопрос"]);
        let answer = readlineSync.question("\n");
        if (answer.toUpperCase() === theme2[i]["Ответ"].toUpperCase()) {
          console.log("Верно!");
          console.log("");
          count += 100;
          console.log(`Ваш долг ${count} руб.`);
          console.log("");
        } else {
          console.log(`Неверно! Ответ: ${theme2[i]["Ответ"]}`);
          console.log();
          count -= 1000;
          console.log(`Ваш долг ${count} руб.`);
          console.log("");
        }
      }
      main();
      break;
    }
    case "Кино": {
      for (let i = 0; i < theme3.length; i++) {
        console.log(theme3[i]["Вопрос"]);
        let answer = readlineSync.question("\n");
        if (answer.toUpperCase() === theme3[i]["Ответ"].toUpperCase()) {
          console.log("Верно!");
          console.log("");
          count += 100;
          console.log(`Ваш долг ${count} руб.`);
          console.log("");
        } else {
          console.log(`Неверно! Ответ: ${theme3[i]["Ответ"]}`);
          console.log();
          count -= 55000;
          console.log(`Ваш долг ${count} руб.`);
          console.log("");
        }
      }
      main();
      break;
    }
  }
}
main();
