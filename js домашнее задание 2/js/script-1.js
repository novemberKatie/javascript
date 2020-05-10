 // Задание 1

 let January = "1";
 let February = "2";
 let March = "3";
 let April = "4";
 let May = "5";
 let June = "6";
 let July = "7";
 let August = "8";
 let September = "9";
 let October = "10";
 let November = "11";
 let December = "12";

 let month = prompt("Введите число месяца от 1 до 12");

 if (month === "12" || month === "1" || month === "2") {
  alert("зима");
} else if (month === "3" || month === "4" || month === "5") {
  alert("весна");
} else if (month === "6" || month === "7" || month === "8") {
  alert("лето");
} else if (month === "9" || month === "10" || month === "11") {
  alert("осень");
} else {
  alert("Неверное число");
}

// Задание 2

let dm = "1";
let km = "2";
let m = "3";
let mm = "4";
let sm = "5";

let unit = prompt("Введите номер единицы измерения, где 1 — дециметр, 2 — километр, 3 — метр, 4 — миллиметр, 5 — сантиметр");
let length = prompt("Введите длину отрезка");

if (unit == 1) {
    console.log(parseInt(length) / 10 + "м"); 
} else if (unit == 2) {
    console.log(parseInt(length) * 1000 + "м"); 
} else if (unit == 3) {
    console.log(parseInt(length) + "м"); 
} else if (unit == 4) {
    console.log(parseInt(length) / 1000 + "м"); 
} else if (unit == 5) {
    console.log(parseInt(length) / 100 + "м"); 
} else {
    console.log("Вы ввели неверный номер"); 
}

// Задание 3

let num = prompt("Введите число от -999 до 999");

if (num === 0) {
    alert("Нулевое число"); 
} else if (num > 0 && num < 10) {
    alert("Положительное однозначное число"); 
} else if (num >= 10 && num < 100) {
    alert("Положительное двузначное число"); 
} else if (num >= 100 && num <= 999) {
    alert("Положительное трехзначное число"); 
} else if (num < 0 && num > -10) {
    alert("Отрицательное однозначное число"); 
} else if (num < -10 && num > -100) {
    alert("Отрицательное двузначное число"); 
} else if (num <= -100 && num >= -999) {
    alert("Отрицательное трехзначное число"); 
} else {
    alert("Вы ввели неверное число"); 
}


// Задание 4

 for (let i = 1; i <= 100; i++) {
 if (i % 3 == 0) {
    console.log("Three");
} else if (i % 5 == 0 && !(i % 3) == 0) {
    console.log("Five");
} else if (i % 3 == 0 && i % 5 == 0) {
    console.log("ThreeFive");
} else {
    console.log(i);
}
}
