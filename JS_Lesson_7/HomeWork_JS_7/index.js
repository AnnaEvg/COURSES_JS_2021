// 1  Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.

/* var vegetables = ["Капуста", "Репа", "Редиска", "Морковка"];

var vegetableLength = vegetables.map(function(name) {
    return name.length;
  });

console.log(vegetableLength); // 7,4,7,8  */

// 2  Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19].
//Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов,
//в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.

/* let numbers = [2, 3, 5, 7, 11, 13, 17];
function currentSums(numbers) {
  var result = [];
  numbers.reduce(function (sum, current, i) {
    return (result[i] = sum + current);
  }, 0);
  console.log(result);
}
currentSums(numbers); */

// currentSums(numbers); // [2, 2+3, 2+3+5, 2+3+5+7, 2+3+5+7+11, 2+3+5+7+11+13, 2+3+5+7+11+13+17] = [ 2,5,10,17,28,41,58]

// 3  Напишите код, который получает из массива чисел новый массив,
//содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.

/* var arr = [0, 1, 2, 3, 4, 5, 6, 7];
function sumSeven(arr) {
  let newArr = [];
  for (let i of arr) {
    for (let j of arr) {
      if (i + j === 7) {
        newArr.push("(" + i + ":" + j + ")");
      }
    }
  }
  return newArr;
}
console.log(sumSeven(arr));
 */
// 4  Перед вами переменная, содержащая строку.
//Напишите код, создащий массив, который будет состоять из первых букв слов строки str.

/* var str = "Каждый охотник желает знать, где сидит фазан.";
let arr = str.split(" ");

function foo() {
  let New_arr = [];

  for (let i = 0; i < arr.length; i++) {
    New_arr.push(arr[i][0]);
  }

  console.log(New_arr);
}

foo(); */

//5   Перед вами переменная, содержащая строку. Напишите код, создащий массив, который будет состоять из строк,
//состоящих из предыдущего, текущего и следующего символа строки str.

/* var str = "JavaScript";

function foo() {
  let arr = [];

  for (let i = 0; i < str.length; i++) {
    arr.push(str.substring(i - 1, i + 2));
  }

  console.log(arr);
}

foo(); */ // [Ja,Jav,ava,vaS,aSc,Scr,cri,rip,ipt,pt]

//6   Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.

/* var numerics = [5, 7, 2, 9, 3, 1, 8];
numerics.sort();
console.log(numerics.sort()); */ // [9,8,7,5,3,2,1]

//7   Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
/* 
var a = [1, 2, 3];
var b = [4, 5, 6];
var c = [7, 8, 9];

function getArr(a, b, c) {
  let Arr = a
    .concat(b, c)
    .sort((a, b) => b - a)
    .join(" ")
    .split();
  console.log(Arr);
}

getArr(a, b, c); // [9 8 7 6 5 4 3 2 1]
 */
//8   Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]].
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным. Показать решение.
/* 
var arr = [[1, 2, 3], [4, 5], [6]];

function getSum() {
  Str = arr.toString();

  newArr = Str.split(",")
    .map(Number)
    .map((i) => (x += i), (x = 0))
    .reverse()[0];
  console.log(newArr);
}
getSum(); */

//9   Дан трехмерный массив с числами, например [[[1, 2], [3, 4]], [[5, 6], [7, 8]]].
//Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.

/* let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
function getSum() {
  Str = arr.toString();

  newArr = Str.split(",")
    .map(Number)
    .map((i) => (x += i), (x = 0))
    .reverse()[0];
  console.log(newArr);
}
getSum() */

//10   Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.

/* let arr = [1, 6, 6, 8, 9, 3];

function newreverse() {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    newArr.unshift(arr[i]);
  }
  console.log(newArr);
}
newreverse();
 */

//11   Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

/* let arr = [1, 6, 6, 8, 9, 3];
function sumTen() {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum > 10) {
      console.log(i + 1);
      break;
    }
    // console.log(sum);
  }
}

sumTen(); */

//12   Сделайте функцию arrayFill, которая будет заполнять массив заданными значениями.
//Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве.
//Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].

/* function arrayFill(el, lenght){
  let arr = [];
  for (let i = 0; i < lenght; i++ ) {
    arr.push(el);
  }
  console.log(arr);
};
arrayFill("x", 5); */
