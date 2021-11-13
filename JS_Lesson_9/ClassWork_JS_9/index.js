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

function CreatePostCard(from, to) {
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
firstCard.show();
