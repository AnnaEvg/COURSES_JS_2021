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
