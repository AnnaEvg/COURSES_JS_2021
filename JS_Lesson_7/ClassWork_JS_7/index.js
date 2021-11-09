// const arr = "arring Random";
// const subarr = "Randomsss";

// arring.prototype.endsWith = (arr, subarr) => {
//   const findarr = arring(arr.match(/(\S+)$/g));
//   if (subarr === findarr) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(arring.prototype.endsWith(arr, subarr));

// const arr = "Астрономия — Наука о небесных телах";

// const getSubarr = (arr, char, pos) => {
//   if (pos === "до") {
//     return arr.slice(0, char);
//   } else if (pos === "после") {
//     return arr.slice(char);
//   } else {
//     return "Error";
//   }
// };

// console.log(getSubarr(arr, 10, "после"));

// const arr = "Астрономия — Наука о небесных телах";

// const count = (arr, arrSymbol) => {
//   let count = 0;
//   arr = arr.toLowerCase();
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arrSymbol) {
//       count += 1;
//     }
//   }
//   return count;
// };

// console.log(count(arr, "р"));

// const arr1 = new Array(4, 5, 66, 8, 9);

// console.log(arr1.length);

// const arr2 = new Array(4);

// console.log(arr2.length);

// const arr3 = [1, 2, 3, 4, 5];

// console.log(arr3);

// arr3[0] = 10;

// console.log(arr3);

// const data = [
//   {
//     name: "Alex",
//     age: "18",
//     parent: [{

//     }]
//   },
//   {
//     name: "Ivan",
//     age: "20",
//   },
//   {
//     name: "Max",
//     age: "23",
//   },
// ];

// console.log(data[0].name);

// const arr = [];

// console.log(arr);

// arr[0] = "НОЛЬ";

// console.log(arr);

// arr[10] = "ДЕСЯТЬ";

// console.log(arr);

// arr[5] = "ПЯТЬ";

// console.log(arr);

// console.log(arr.length);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// console.log(arr);

// arr.length = 2;

// console.log(arr);

// const arr = [];

// const testLength = arr.push(1);
// console.log(testLength);

// arr.push(10, 100, 120);
// console.log(arr);

// const customFind = (arr, arrSymbol) => {
//   let result;
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] === arrSymbol) {
//       result = arr[i];
//     }
//   }
//   return result;
// };

// console.log(customFind([1, 2, 3, 4], 3));

// console.log([1, 2, 3, 4].find((el) => el === 3));

// const data = [
//   { title: "First", writer: "Alex" },
//   { title: "Second", writer: "Ivan" },
//   { title: "Third", writer: "Alex" },
//   { title: "Four", writer: "Max" },
//   { title: "Fife", writer: "Max" },
//   { title: "Six", writer: "Ivan" },
//   { title: "Seven", writer: "Alex" },
// ];

// console.log(data);
// const filterData = data.filter((el) => el.writer === "Alex");
// console.log(filterData);
// console.log(data);

// const newData = data.map((el) => el.title);

// console.log(newData);

// console.log(data);
// const testForEach = data.forEach((el, i, arr) => {
//   if (i % 2 === 0) {
//     el.title = "TEST";
//     console.log(arr[i]);
//   }
// });
// // console.log(data);

// const data = [
//   1, 45, 44,
//   // { value: 2, month: "январь" },
//   // { value: 3, month: "февраль" },
//   // { value: 5, month: "март" },
// ];

// const valueSum = data.reduce((acum, curValue) => acum - curValue);
// console.log(valueSum);

// const str = "ABCD";

// const a = str.toLowerCase().toUpperCase().trim().toString().length;
// console.log(a);

// const posSum = (arr) =>
//   arr
//     .filter((el) => el > 0 && el % 2 === 0)
//     .reduce((acum, value) => acum + value);

// console.log(posSum([1, -2, -4, 6, 7, 8, 5]));
// console.log(posSum([1, 2, 4, -6, 7, -8, 5]));

// const arr = [1, 5, 5, 2, 3, 3, 4, 5, 6, 6, 1, 1, 7, 8];
//[1,5,2,3,4,6,7,8]

// const uniqArr = (arr) => {
//   const result = [];
//   // for (let i = 0; i < arr.length; i += 1) {
//   //   if (!result.includes(arr[i])) {
//   //     result.push(arr[i]);
//   //   }
//   // }
//   arr.forEach((el) => {
//     if (!result.includes(el)) {
//       result.push(el);
//     }
//   });
//   return result;
// };

// console.log(uniqArr(arr));

// const arr1 = [1, 2, 3, 4];
// const arr2 = [1, 3, 3, 4];

// const isEqualArr = (arr1, arr2) => {
//   if (arr1.length === arr2.length) {
//     return !arr1.map((el, i) => el === arr2[i]).includes(false);
//   }
//   return false;
// };

// console.log(isEqualArr(arr1, arr2));

//копирование объектов
// const obj1 = { a: "Hello" };
// const obj11 = { b: "Hello Alex" };
// const obj2 = Object.assign({}, obj1, obj11);

// console.log(obj1, obj2);
// obj1.a = "Goodbye";
// console.log(obj1, obj2);

// const obj1 = {
//   sayHello: "Hello",
//   user: { name: "Alex", age: { date: "28", year: "1996", month: "03" } },
// };

// // const obj2 = Object.assign({}, obj1);

// const obj2 = JSON.parse(JSON.stringify(obj1));

// console.log(obj1.user, obj2.user);

// obj1.user.age.year = "2021";

// console.log(obj1.user, obj2.user);

// const arr1 = [1, 2, 3, 4];

// const arr2 = [7, 8, 9];

// const arr3 = [...arr1, 5, 6, ...arr2];
// console.log(arr3);

// const obj1 = { name: "Alex", age: "25" };

// const obj2 = { ...obj1, key: "user1" };

// console.log(obj1, obj2);

// obj1.name = "Ivan";

// console.log(obj1, obj2);

// const getSum = (type, ...args) => {
//   if (type === "sum") {
//     //сумма
//     console.log(Array.isArray(args), "sum");
//   } else {
//     //вычитать
//     console.log(args, "negative");
//   }
// };

// getSum("sum", 1, 2, 3, 4, 5, 6, 78, 9, 0);
// функция которая первым аргументовм принимает действие (сумма, вычитание), после принимает параметры для вычистления

// const arr = [1, 2, 3, 4];

// for (let elem in arr) {
//   console.log(elem);
// }

// for (let i = 0; i < arr.length; i += 1) {
//   console.log(arr[i]);
// }

// const obj = { a: 1, b: 2 };
// for (let elem of obj) {
//   console.log(elem);
// }

// const someArgs = (...args) => {
//   let result = 0;
//   for (let el of args) {
//     if (el % 2 === 0) {
//       result += el;
//     }
//   }
//   return result;
// };

// console.log(someArgs(1, 2, 4, -6, 2, 8, 9));

// const getCommonValue = (arr1, arr2) => {
//   // const result = [];
//   // for (let i = 0; i < arr1.length; i += 1) {
//   //   if (arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//   //     result.push(arr1[i]);
//   //   }
//   // }
//   // return result;
//   return arr1.filter((el) => arr2.includes(el));
// };

// console.log(getCommonValue([1, 2, 3, 4, 5, 5, 4], [6, 5, 4]));