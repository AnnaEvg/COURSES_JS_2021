//const a = [1, 10, 40, 46];

//Дан массив с элементами 1, 2, 3, 4, 5, 6, 7, 8, 9. С помощью цикла for создайте строку '-1-2-3-4-5-6-7-8-9-'

/*const arr=[1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = "";

for ( let i = 0; i < arr.length; i += 1) {
    result += `$ {arr [i]}`
}
...*/

/*function helloWorld () {
    console.log ("Hello World") ;
    
}
helloWorld () ;*/

// одна функция, одно действие. Пример:

/*const isUserAuth = true ;
function chekAccess() {
    if (isUserAuth) {
        console.log (  "доступ есть" ) ;
    } else {
        console.log ( "доступа нет" ) ;
    }
}

chekAccess ();

function writeMassege() {
    if (isUserAuth) {
        console.log (  "Привет пользователь" ) ;
    } else {
        console.log ( "Привет гость" ) ;
    }
}

writeMassege () ;*/

//аргументы функции

/*function sum(a, b) {
    console.log ( a + b) ;
}

sum ( 1, 0 ) ;
sum ( 10 , 4) ;*/

/* function sum(a, b) {
    console.log ( a + b) ;
}

sum ( 1, 0 ) ;
sum ( 16) ; // получается число + underfind, поэтому получается Nan
*/
/* function sum(a, b = 0) {
  console.log(b);
  console.log(a + b);
}

sum(1, 4);
sum(16);*/

/*function getName(name) { 
    console.log (" да, return") ;
    return name ;
    console.log ( "после return" ) ;
    
}

const userName = getName ('Ivan') ;
console.log (userName) ;*/

//если забыть вернуть значение удет undefined
/*function getName(name) { 
}

const userName = getName ('Ivan') ;
console.log (userName) ;*/

/*let name = "Anna";
function getName(userName) {
  return userName;
}

const nameUserOne = getName(name);
console.log(nameUserOne);

name = "Ivan";

const nameUserTwo = getName(name);
console.log(nameUserTwo);*/

/*let name = "Anna";

console.log(name, "1");

function sayHi() {
  name = "Peter";

  console.log(name, "function");
}

sayHi();

console.log(name, "2");*/

// let name = "Anna";

// console.log(name, "1");

// function sayHi(userName) {
//   userName = "Peter";

//   console.log(userName, "function");
// }

// sayHi(name);

// console.log(name, "2");

// let a = 0;
// let b = 0;
// function sum() {
//   a += 1;
//   b += 1;
//   console.log(a + b);
// }

// sum();
// sum();
// sum();
// sum();
//  // вызываем одну и ту же функцию, в данном случае не является чистой.

// function sum () {
//     const a = 0 ;
//     const b = 0 ;
//     console.log (a + b );

// }

// sum () ;
// sum () ;
// sum () ; // чистая функция

//Практика

/* Написать функцию, которая будет принимать имя пользователя,
 и выводить строку с приветствием данного пользователя, 
 если имени пользователя нет, выводить приветствие гостя.*/

//  let useName = 'Anna' ;

//  function sayHi () {
//      return

//доделать

//Написать функцию, которая в качестве первого параметра будет принимать численное значение, а в качестве второго параметра будет принимать степень, в которую надо возвести первый аргумент. По умолчанию, второй аргумент единица.

// function exp(a, b = 1) {
//     console.log ( a**b ) ;
// }

// exp ( 2, 2) ;
// exp (2, 8 ) ;
// exp (28) ;

//Написать функцию, которая будет принимать в качестве входного параметра массив любых, целых чисел, и будет возвращать среднее арифметическое значение данного массива*.

/*
function getValue(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i += 1) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log((getValue[1, 23, 6]));
*/

//Функциональные выражения

/*const sayName = function (name) {
    return name;
};

const copy = sayName;

console.log (sayName ('Alex') ) ;

console.log (sayName ('Ivan') ) ;*/

/*const getName = function () {
    console.log ('Alex') ;
}

const getUserInfo = function (callBack) {

    console.log ('User Info') ;
    callBack () ;
    
};
getUserInfo (getName) ;*/

/*test();

function test() {
  console.log("test");
}


const test2 = function () {
  console.log("test2");
};
test2 () ;*/

// const myFirstArrowFunc = () => console.log("!!");

/* const test1 = name => console.log (name) ; */

// const test1 =( name, age) => console.log (name, age) ;
// test1 ("Alex", 19)

//дописать, zoom вылетел

/* //FD
function example1(param) {
  return param;
} ;
example1 (1);

//FE
const example2 = function (param) {
  return param;
};

example2(2);

//AF 1

const example3 = (param) => param;
example3(3);

//AF 2

const example3 = (param) => {
  //big body
  return param;
};
example3(3); */

//Напишите стрелочную функцию которая будет выводить
//переданную строку в консоль n раз. (она ничего не должна возращать, просто должна выполнить консол лог)

const getString = (str, count) => {
  for (let i = 0; i < count; i += 1) {
    console.log(str);
  }
};
getString("Ivan", 3);

getString("London", 30);

getString("Madrid", 310);
