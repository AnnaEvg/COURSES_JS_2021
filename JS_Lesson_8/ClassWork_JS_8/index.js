// console.log (global)

// var name = "Ann";

// function example() {
//   console.log(this);
// }
// example();

// // console.log(global.global); //в браузере будет window

// //console.log(globalThis); // в браузере будет name

// name = "Max";

// console.log(global.name);
// почему нет name?

// const user = {
//     name: 'Ann',
//     age:'25',
//     getName: function() {
//         console.log (this.name);
//     },
// };

// user.getName()

// function getName() {
//   console.log(this.name);
// }
// const user = {
//   name: "Ann",
//   age: "25",
//   getUserName: getName,
// };

// user.getUserName();

// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
// };

// admin.getAdminName();

// const user = {
//     name: 'Ann',
//     age:'25',
//     getName: function() {
//         console.log (this.name);
//     },
// };

// user.getName()

// function getName() {
//   console.log(this.name);
// }

// function getName(newName) {
//   this.name = newName;
// }

// const user = {
//   name: "Ann",
//   age: "25",
//   getUserName: getName,
//   setUserName: setName,
// };

// const user1 = {
//   name: "Ivan",
//   age: "18",
//   getUserName: getName,
//   setUserName: setName,
// };

// const admin = {
//   name: "Max",
//   age: "45",
//   getAdminName: getName,
//   setAdminName: setName,
// };

// user.getUserName();
// user1.getUserName();
// admin.getAdminName();

// console.log(user);
// user.setUserName("Ira");
// user.getUserName();
// console.log(user);

// function example() {console.log(this);}
// const testObject = {
// testMethod: example,
// }
// testObject.testMethod();

/* function startFight() {
  return this.strange * this.agility; //автом. подставл, взависимости от обращения к объекту
}

const hero = {
  name: "Jon",
  strange: 20,
  agility: 10,
  health: 100,
  fight: startFight, //function () {
  //     return hero.strange * hero.agility;
  //   },
};

const dracula = {
  name: "Vlad",
  strange: 50,
  agility: 7,
  health: 1000,
  fight: startFight, //function () {
  //    return dracula.strange * dracula.agility;
  //  },
};

console.log(hero.fight(), dracula.fight());

if (hero.fight() > dracula.fight()) {
  console.log("Герой победил! Ура!");
} else {
  console.log("Провал, Вы погибли!");
}
 */

/* //пример того что у стрелочных функций нет собственного this, они его берут из внешнего лексического окружения
const startFight = () => {
  return this.strange * this.agility; //автом. подставл, взависимости от обращения к объекту
};

const hero = {
  name: "Jon",
  strange: 20,
  agility: 10,
  health: 100,
  fight: startFight, //function () {
  //     return hero.strange * hero.agility;
  //   },
};

const dracula = {
  name: "Vlad",
  strange: 50,
  agility: 7,
  health: 1000,
  fight: startFight, //function () {
  //    return dracula.strange * dracula.agility;
  //  },
};

console.log(hero.fight(), dracula.fight());

if (hero.fight() > dracula.fight()) {
  console.log("Герой победил! Ура!");
} else {
  console.log("Провал, Вы погибли!");
} */

// const startFight = () => {
//     return this.strange * this.agility; //автом. подставл, взависимости от обращения к объекту
//   };

//   const hero = {
//     name: "Jon",
//     strange: 20,
//     agility: 10,
//     health: 100,
//     fight: startFight, //function () {
//     //     return hero.strange * hero.agility;
//     //   },
//    sayName: function() {
//         return this.name;
//     }
//   };

//   const dracula = {
//     name: "Vlad",
//     strange: 50,
//     agility: 7,
//     health: 1000,
//     fight: startFight, //function () {
//     //    return dracula.strange * dracula.agility;
//     //  },
//   };

//   console.log(hero.fight(), dracula.fight());

//   if (hero.fight() > dracula.fight()) {
//     console.log("Герой победил! Ура!");
//   } else {
//     console.log("Провал, Вы погибли!");

//Практика

// function startFight() {
//     return this.strange * this.agility; //автом. подставл, взависимости от обращения к объекту
//   }

// function city() {
//     return this.population;

// const town = {
//     name: "London",
//     population: 8961989,
//     getKey: city,
// };

// const town1 = {
//     name: "London",
//     population: 8961989,
//     getKey: city,
// };

// const town2 = {
//     name: "Madrid",
//     population: 3266126,
//     getKey: city,
// };

// const town3 = {
//     name: "Amsterdam",
//     population: 872757,

// };

// const town = {
//   townName: "London",
//   population: "8961989",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSmeValue: function (key, value) {
//     this[key] = value;
//   },
// };

// console.log(town);
// town.setSmeValue("townName", "paris");
// town.setSmeValue("Population", "9 ml");
// console.log(town.getTownName());

// const town = {
//   townName: "London",
//   population: "13 ml",
//   getTownName: function () {
//     return this.townName;
//   },
//   getPopulation: function () {
//     return this.population;
//   },
//   setSomeValue: function (key, value) {
//     this[key] = value;
//   },
// };
// console.log(town);
// town.setSomeValue("townName", "Paris");
// town.setSomeValue("population", "9 ml");
// console.log(town);
//Работа с контекстом вызова

// из домашки Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.
//var arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {

//     // ваш код

//    }

// const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// function sumSeven(numbers) {
//   return numbers
//     .map((el) => `(${el} : ${7 - el})`)
//     .filter((_, i, arr) => i < arr.length / 2);

//   // ваш код
// }
// console.log(sumSeven(arr));

// function sayFullName(firstName, lastName) {
//   return `${this.phrase} ${firstName} ${lastName}` ;
// }

// console.log(sayFullName("Alex", "Shirokov")) ;
// console.log(sayFullName.call({phrase: 'Hello'}, 'Ivan', 'Smirnov'));

/* function sayFullName(firstName, lastName) {
  return `${this.phrase} ${firstName} ${lastName}` ;
}

let boundFullName = sayFullName.bind ({phrase: 'Bye'}, 'Max', 'Petrov');
console.log(boundFullName()); */

/* function sayFullName(firstName, lastName) {
  return `${this.phrase} ${firstName} ${lastName}`;
}

let boundFullName = sayFullName
  .bind({ phrase: "Bye" }, "Max", "Petrov") // не можем переназначить функцию, с-ная функция никак не изменитьс, мы должны вызывать новый байнд
  .bind({ phrase: "Hello" }, "Kate", "Petrova");
console.log(boundFullName()); */

/* function sayFullName(firstName, lastName) {
  return `${this.phrase} ${firstName} ${lastName}`;
}

let boundFullName = sayFullName.bind({ phrase: "Bye" }, "Max", "Petrov");
let bound2 = sayFullName.bind({ phrase: "Hello" });

console.log(boundFullName());
console.log(bound2("Kate", "Petrova")); */

/* function sayFullName(firstName, lastName) {
  return `${this.phrase} ${firstName} ${lastName}`;
}

let boundFullName = sayFullName.bind({ phrase: "Bye" }, "Max", "Petrov");
let sayHelloKate = sayFullName.bind({ phrase: "Hello" }, "Kate");

console.log(boundFullName());
console.log(sayHelloKate("Smirnova"));
console.log(sayHelloKate("Petrova")); */

//Практика

/* const town = {
  townName: "London",
  population: "13 ml",
  getTownName: function () {
    return this.townName;
  },
  getPopulation: function () {
    return this.population;
  },
  setSomeValue: function (key, value) {
    this[key] = value;
  },
};

const town2 = {
  townName: "Paris",
  population: "20ml",
};

// console.log(town.getTownName());
// console.log(town.getTownName.call(town2));

console.log(town2);

// const bound = town.setSomeValue.bind(town2, "townName", "Moscow");

// bound();

const bound = town.setSomeValue.bind(town2);

bound("townName", "Moscow");
bound("population", "20ml");
bound("country", "RUS");

console.log(town2); */
/* 
function test() {
  const a = 0;
  console.log(a);
}

const bound = test.blind({a: 10});

bound (); //будет 0, т.к. нет this  */

/* function test() {
  const a = 0;
  console.log(this.a);
}

const bound = test.bind({ a: 10 },8);

bound(); //будет 10 т.к. вызван единственны байнд */

/* function test(b) {
  const a = 0;
  console.log(b);
}

const bound = test.bind({ a: 10 }, 8);

bound(); //будет 8 */

/* let a = 0;
console.log(a);

const test = () => {
  a = 10;
};
test();
console.log(a); */

/* function getFullName() {
  const firstName = "Alex";
  function getSecondName(secondName) {
    return `${firstName} ${secondName}`;
  }
  return getSecondName;
}

const clouser = getFullName();
console.log(clouser("Smirnov")); */

/* const getArea = (a) => {
  return (b) => a * b;
};

const areaWidthTen = getArea(10);

console.log(areaWidthTen(5));
console.log(areaWidthTen(50));
console.log(areaWidthTen(230));

const areaWidthFor = getArea(4);

console.log(areaWidthFor(3));
console.log(areaWidthFor(21)); */

//Используя замыкание написать функцию которая будет вычислять объём
//параллелепипеда с высотой 10.

/* let c = 10;
const getVolume = (a) => {
  return (b) => a * b * c;
};

const volumeWidthfiver = getVolume(5);

console.log(volumeWidthfiver(15)); */

/* const getVol = (height) => (width, length) => height * width * length;
const getAll = getVol(10);

console.log(getAll(15, 2));
console.log(getAll(3, 3));
const getAll2 = getVol(8);
console.log(getAll2(11, 8)); */

//Используя каррирование написать функцию которая будет вычислять объём
//параллелепипеда.
