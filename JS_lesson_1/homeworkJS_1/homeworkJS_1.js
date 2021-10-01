// Вывести в терминал строку “Hello World!”
let greetings = "Hello World!";

console.log(greetings);
//Создать переменную для каждого типа данных В JavaScript есть 8 основных типов.
//number для любых чисел: целочисленных или чисел с плавающей точкой; целочисленные значения ограничены диапазоном ±(253-1).
//bigint для целых чисел произвольной длины.
//string для строк. Строка может содержать ноль или больше символов, нет отдельного символьного типа.
//boolean для true/false.
//null для неизвестных значений – отдельный тип, имеющий одно значение null.
//undefined для неприсвоенных значений – отдельный тип, имеющий одно значение undefined.
//object для более сложных структур данных.
//symbol для уникальных идентификаторов.

let n = 1;
console.log(n);

let bigDate = 1380526758654n;
console.log(bigDate);

let str1 = "Привет всем! как ваши дела? ПУСТАЯ ИНФА";
console.log(str1);

let nametrue = false;
console.log(nametrue);

let apple = null;
console.log(apple);

let vitamin;
console.log(vitamin);

let manDomination = {
    name: "Max",
    age: 26,
};
console.log(manDomination);

let id = Symbol("id");
console.log(id);

console.log(typeof manDomination);

console.log(typeof 1);

console.log(typeof 1380526758654n);

console.log(typeof nfalse);

console.log(typeof null);

console.log(typeof Symbol("id"));

console.log(typeof str1);

console.log(typeof undefined);

//Попробовать изменить переменную объявленную через const
//Попробовать изменить переменную с типом object объявленную через const


const namej = 106;
console.log(namej);

// namej = 234; если попытаться изменить переменную в конст будет ошибка.

const cat = {
    nickname: "Zhuzha",
    ageMonth: 30,
};

console.log(cat);

cat.ageMonth = 33;
console.log(cat);

// cat = "Кошка", не могу изменить переменную, тип.

//Попробовать изменить переменную с типом object объявленную через let

let dog = {
    color: "black",
};
console.log(dog);

dog = 12359664n;
console.log(dog);


//Попробовать изменить переменную с типом object объявленную через var

var mouse = {
    eye: "red",
    family: "mouse",

};
console.log(mouse);

mouse.family = "rat";
console.log(mouse);

mouse = false;
console.log(mouse);