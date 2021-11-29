// 1. Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days. И метод getFullName() - имя и фамиля работника.

/* class Worker {
  constructor(name, surname, rate, days) {
    this.name = name;
    this.surname = surname;
    this.rate = rate;
    this.days = days;
  }
  getFullName() {
    return `Полное имя: ${this.name} ${this.surname}`;
  }
  getSalary() {
    return `Зарплата работника: ${this.rate * this.days} рублей`;
  }
}

const worker = new Worker("Иван", "Иванов", 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иванов Иван'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// 2. Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников. И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// Пример:

class Boss extends Worker {
  constructor(name, surname, rate, days, workers) {
    super(name, surname, rate, days);
    this.workers = workers;
  }
  getSalary() {
    return `Зарплата работника: ${this.rate * this.days * this.workers} рублей`;
  }
}

const boss = new Boss("Василий", "Васильев", 10, 31, 10);

console.log(boss.name); //выведет 'Василий'
console.log(boss.surname); //выведет 'Василев'
console.log(boss.getFullName()); //выведет 'Василий Васильев'
console.log(boss.rate); //выведет 10
console.log(boss.days); //выведет 31
console.log(boss.workers); //выведет 10
console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10 */

// 3. Модифицируйте класс Worker из предыдущей задачи следующим образом: сделайте все его свойства приватными, а для их чтения сделайте методы-геттеры.
// 4. Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте еще и методы-сеттеры.
/* class Worker {
  constructor(name, surname, rate, days) {
    this._name = name;
    this._surname = surname;
    this._rate = rate;
    this._days = days;
  }

  getName() {
    return this._name;
  }

  getSurname() {
    return this._surname;
  }

  getRate() {
    return this._rate;
  }
  setRate(rate) {
    this._rate = rate;
  }

  getDays() {
    return this._days;
  }
  setDays(days) {
    this._days = days;
  }

  getFullName() {
    return `Полное имя: ${this._name} ${this._surname}`;
  }
  getSalary() {
    return `Зарплата работника ${this._days * this._rate} руб.`;
  }
}

let worker = new Worker("Степан", "Степанов", 10, 31);

console.log(worker.getName()); //выведет 'Степан'
console.log(worker.getSurname()); //выведет 'Степанов'
console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10 */

// 5. Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку, 
//а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, 
//а возвращает эту же строку, сделав ее первую букву заглавной и метод ucWords, который принимает строку 
//и делает заглавной первую букву каждого слова этой строки.

// Пример:
// var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// 6. Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.

// Пример:
// var validator = new Validator();

// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+375 (29) 817-68-92')); //тут можете формат своей страны

// 7. Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:
// class User {
// 	constructor(name, surname) {
// 		this.name = name;
// 		this.surname = surname;
// 	}

// 	getFullName() {
// 		return this.name + ' ' + this.surname;
// 	}
// }
