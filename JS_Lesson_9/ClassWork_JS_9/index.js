//
/* const people = {
  getName: function () {
    return this.name;
  },
};

const user = {
  name: "Alex",
  __proto__: people,
};

const admin = {
  name: "Vsya",
  __proto__: people,
};

console.log(user.getName());
console.log(admin.getName()); */

/* const people = {
  getName: function () {
    return this.name;
  },
};

const user = {
  name: "Alex",
  __proto__: people,
};

const admin = {
  __proto__: user,
};

console.log(admin.getName()); */

/* let animal = {
  jumps: "Прыжок!",
};
let rabbit = {
  __proto__: animal,
  jumps: "Заяц прыгнул!",
};

console.log(rabbit.jumps);

delete rabbit.jumps;

console.log(rabbit.jumps);
delete animal.jumps;

console.log(rabbit.jumps); */

/* const obj = {} ;
console.log (obj) ; */

//Функции конструкторы

/* function CreateUser() {
  console.log("User CREATE");
}

const user = new CreateUser();

console.log(user);
 */
/* function CreateUser(name, age) {
  this.userName = name;
  this.userAge = age;
  this.sayHi = function () {
    return `HELLO! My name is ${this.userName}`;
  };
}

const userOne = new CreateUser("Alex", 25);
const userTwo = new CreateUser("Max", 30);

// console.log(userOne);
// console.log(userTwo);

console.log(userOne.sayHi());
console.log(userTwo.sayHi()); */

/* function CreateUser(name, age) {
  this.userName = name;
  this.userAge = age;
}

console.log(CreateUser.prototype);
CreateUser.prototype.sayHi = function () {
  return `HELLO! My name is ${this.userName}`;
};

const userOne = new CreateUser("Alex", 25);
const userTwo = new CreateUser("Max", 30);

console.log(userOne);
console.log(userTwo); */

/* Реализовать функцию конструктор для создания открыток. Функция должна создавать объект открытки со свойствами from, to и метод show(). Метод должен возвращать строку в которой будут указаны значения свойств  from и to.
Добавить в prototype создаваемого объекта метод заменяющий текущее значение  свойства from на новое переданное значение. */

/* function CreatePostCard(from, to) {
  this.from = from;
  this.to = to;
}

CreatePostCard.prototype.show = function () {
  console.log(`${this.from} отправил открытку ${this.to}`);
};

CreatePostCard.prototype.setFromValue = function (newFrom) {
  this.from = newFrom;
};

const firstCard = new CreatePostCard("Alex", "Ivan");
console.log(firstCard);
firstCard.show();
firstCard.setFromValue("Max");
console.log(firstCard);
firstCard.show(); */
// function test(b) {
//   const a = 0;
//   console.log(b);
// }

// // test();
// const bound = test.bind({ a: 10 }, 8);

// bound();

// let a = 0;
// console.log(a);

// const test = () => {
//   a = 10;
// };

// test();
// console.log(a);

// function getFullName() {
//   const firstName = "Alex";

//   function getSecondName(secondName) {
//     return `${firstName} ${secondName}`;
//   }

//   return getSecondName;
// }

// const clouser = getFullName();
// console.log(clouser("Smirnov"));

// const getArea = (a) => {
//   return (b) => a * b;
// };

// const areaWithTen = getArea(10);
// console.log(areaWithTen(5));
// console.log(areaWithTen(10));

// const areaWithFour = getArea(4);
// console.log(areaWithFour(3));
// console.log(areaWithFour(21));

// const getVol = () => {
//   const height = 10;
//   return (width, length) => height * width * length;
// };
// const getAll = getVol();
// console.log(getAll(4, 5));
// console.log(getAll(3, 3));
// const getAll2 = getVol(8);
// console.log(getAll2(35, 3));

//Классы

/* //создаем некий класс
class Parent {
  constructor (name) {
    this.name = name ;
  }
  sayName () {
    return `Привет, моё имя ${this.name}`;
  }
}
//создаем некий экземпяр
const firstParent = new Parent("Max") ;

console.log(firstParent)
console.log(firstParent.sayName()); */

//Наследование в классах

class Parent {
  constructor(name) {
    this.name = name;
  }
  sayName() {
    return `Привет, моё имя ${this.name}`;
  }
}
//создаем некий экземпяр
const firstParent = new Parent("Max");

// console.log(firstParent)
// console.log(firstParent.sayName());

/* class Child extends Parent {
  constructor(name, lastName) {
    super(name);
    this.lastName = lastName;
  }
  sayFullName() {
    return `Моё полное имя ${this.lastName} ${this.name}`;
  }
}

const firstChild = new Child("Ivan", "Petrov");
console.log(firstChild);
console.log(firstChild.sayName()); */

/* class Child extends Parent {
  lastName =  lastName
  constructor(name, lastName) {
    super(name);
    this.name = name ;
    this.lastName = lastName;
  }

sayName () {
  console.log("это мой внутренний метод");
}

  sayFullName() {
    const nameString = `${super.sayName()} ${this.lastName}`;
    return nameString;
  }
}

get lastName () {
  return this.lastName
};

set lastName (newValue) {
  this._lastName = newValue ; 
}

getLastName () {
  return this.lastName = newValue ;
}

const firstChild = new Child("Ivan", "Petrov");

console.log(firstChild);
/* console.log(firstChild.sayFullName());
firstChild.sayName(); */

/*firstChild.setlastName('Smirnov') ;
firstChild.lastName("Smirnov") ;

console.log(firstChild.getLastName());

console.log(firstChild.lastName); */

//Практика
/* class People {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }
  getFullName() {
    return `имя: ${this.name}, Фамилия ${this.surname}`;
  }
}

const firstPeople = new People ('Ivan', 'Ivanovich');
console.log(firstPeople.getFullName());

class Worker extends People {
  constructor(name, surname, rate, daysCount) {
    super(name, surname) ;
    this.rate = rate ;
    this.daysCount = daysCount;
  }

  getSalary() {
    return `${this.getFullName()}, Зарплата:${this.daysCount * this.rate} руб.`
  }
}
const firstWorker = new Worker('Semen', 'Semenovich', 1500, 20) ;
console.log(firstWorker.getSalary());
const secondWorker = new Worker ('Peter', "Petrovich", 2900, 20) ;
console.log(secondWorker.getSalary());
 */
