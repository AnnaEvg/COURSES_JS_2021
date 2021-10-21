// if(true) {
//         console.log("TRUE") ;
// }

// if(0) {
//         console.log("FALS") ;
// }

/* console.log("START");

const value = 5;

if (value > 0) {
        console.log("TRUE");
} else {
        console.log("FALS");
}
console.log("FINISH");*/

/*console.log("START");

const value = -5;

if (value === 0) {
        console.log(value, "= value");
} else if (value > 1) {
        console.log(value, " > 1 ");
} else if (value < 1) {
        console.log(value, "< -1 ");
} else {
        console.log(value);
}

console.log("FINISH");*/

/* const age = 20;
let resalt = age >= 18 ? "Доступ разрешен" : "доступ запрещен";

console.log(resalt); */

/*switch ("Anna") {
        case "Helga":
                console.log("HELGA");
        case "Anna":
                console.log("ANNA");
        case "Max":
                console.log("MAX");
        default:
        console.log("Имя нет в списке"); //выполниться все кейсы

}*/

/*switch ("Anna") {
        case "Helga":
                console.log("HELGA");
                break;
        case "Anna":
                console.log("ANNA");
                break;
        case "Max":
                console.log("MAX");
                break;
        default:
                console.log("Имя нет в списке");
        case value:
}

console.log("FINISH");*/

/* С помощью условных операторов вывести на экран длину наибольшего отрезка из трех данных.*/

/* const Section_1 = 10;
const Section_2 = 70;
const Section_3 = 30;

let result =
  Section_1 > Section_2
    ? "Section_1"
    : Section_2 > Section_3
    ? "Section_2"
    : "Section_3";

console.log(result);*/

/* const a=1;
const b=2;
const c=3;

if (a>b) {
        a>c? console.log(c);       
} else {
        b>c? console.log(c);   
}*/

/* ниже -30:  “Оставайтесь дома!”;
от -30 до -10 включительно: “Сегодня холодно”;
от -10 до +5 включительно: “Не холодно”;
от +5 до +15 включительно: “Тепло”;
от +15 до +25 включительно: “Очень тепло”;
от +25 до +35: “Жарко”;*/

//Домашка 2-ая задача
const temperatura = 10;
if (temperatura < -30) {
  console.log("Оставайтесь дома!");
} else if ((temperatura >= -30, temperatura <= -10)) {
  console.log("Сегодня холодно");
} else if ((temperatura >= -10, temperatura <= 5)) {
  console.log("Не холодно");
} else if ((temperatura >= 5, temperatura <= 15)) {
  console.log("Тепло");
} else if ((temperatura >= 25, temperatura <= +35)) {
  console.log("Жарко");
} else {
  console.log("Нет данных");
}

/* С помощью конструкции switch и переменной, хранящей роль пользователя
 (admin, manager, user …), выводить на экран информацию о пользователе 
 (информацию любого типа, роль, дату рождения, любимый напиток и тд)*/

/* не правильно 
const admin = {
        sex: "woman" ,
        age: "20",
}

const manager = {
        sex: "man" ,
        age: "29",
}
const User = {
        sex: "woman" ,
        age: "16",
}

switch (information) {
        case manager:
                console.log(        sex: "man" ,
                age: "29",);
                break;
        case admin:
                userRole;
                break;
        case aUser:
                console.log(        sex: "woman" ,
                age: "16");
                break;
        default:
                console.log(нет данных);
        case information:
}*/

/* const userRole="manager" ;

switch (userRole) {
        case "user":
                console.log ("user Info");
                break;
        case "admin":
                console.log ("admin Info");
                break;
        case "manager":
        console.log ("manager Info");
                break;
        default:
                console.log("Имя нет в списке");
                case value:
        }
        
        console.log("FINISH"); */

/* const a = 100 ;
        const b = 1 ;
        const result = a|| b;
        console.log(result);*/

// const a = 10 ;
// const b = 1 ;
// const result = a &&b;
// console.log(result);

// const a = 1 ;
// const b = 2 ;
// const c = 3 ;

// if (a > b && a > c) {
//         console.log (a);
// } else if (b >a && b > c) {
//         console.log (b) ;
// } else {
//         console.log (c) ;
// }

// console.log ((a && b) || (c && d) ) ;

// const ( ! name ) = "" ;

// if (!name) {
//         console.log("Имя нет") ;
// } else {
//         console.log("Имя есть") ;}

//         console.log ("start");
//          while (false) {
//                  console.log ("loop") ;
//          }
// console.log ("end");

/* let i = 0;

 while (i < 10) {
 console.log(i);
   i += 1;
 }
 console.log("end");*/

/*let i = 0;

do {
        console.log ("work");
}

while (i)
console.log("end");*/

/* console.log("start");
let i = 0;
while (true) {
        console.log("loop");
        i==1
        
}
console.log("end");*/ //бесконечный код

/*Вывести в консоль заданную строку N раз.*/

/*for ( let i=1;
        i<5; 
        i += 1) {
        console.log ("string") ;       
        }
*/
/*Ежедневно количество доступных автомобилей в салоне уменьшается в два раза.
Выяснить, на какой день продаж, количество доступных к покупке авто станет меньше M, если известно, 
что в первый день продаж всего было N автомобилей.*/

/*let M =120;
let N = 23;
let days = 0;

while (M>=N) {
        N /= 2;
        days+-1;        
}

console.log (days);*/

/*Проанализировав временной промежуток начиная  с 1800 и до 2020 года найти и вывести в консоль:
Год первого полета человека в космос и количество итераций которое потребовалось для поиска.
Количество високосных годов принадлежащих данному отрезку и количество итераций которое потребовалось для поиска.*/

// разбор от 16.10.2021 Найдите сумму положительных элементов массива

/*const arr = [1, 2, 3, -4, -5, 6, -3, -1] ;

console.log(arr [0] === 1) ;

let sum = 0;

for (let i = 0; 1 < arr.length; i += 1) {

if (arr [i] > 0) {
        sum += arr [i] ;
}
        
}
console.log (sum);*/

//  Дан массив числами, например: [10, 20, 30, 50, 235, 3000]. Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или 5

/*const str = "anna";
console.log (str [0] str [3]) ;

const arr = [10, 20, 30, 50, 235, 3000] ;

console.log(arr [0] === 1) ;

let sum = 0;

for (let i = 0; 1 < arr.length; i += 1) {

if (
        +arr[i].toString()[0] == 1||
        +arr[i].toString()[0] == 2||
        +arr[i].toString()[0] == 5
) {
        console.log (arr [i]);
}
        
}*/

