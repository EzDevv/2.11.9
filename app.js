"use strict";

let adminPassword = "Я главный";
let userLogin = prompt("Введите свой логин", "");

if (userLogin === "Админ") {
    let inputPassword = prompt("Введите пароль", "");
    if (inputPassword === adminPassword) {
        alert("Здравствуйте!");
    } else if (inputPassword === null || inputPassword === "") {
        alert("Отменено");
    } else {
        alert("Неверный пароль");
    }
} else if (userLogin === null || userLogin === "") {
    alert("Отменено");
} else {
    alert("Я вас не знаю");
}