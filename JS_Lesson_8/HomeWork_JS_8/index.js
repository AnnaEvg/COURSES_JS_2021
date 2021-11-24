/* 1. Реализовать таймер-функцию используя замыкания. 
Функция принимает два  аргумента начальное значение и значение завершения. Таймер движется назад.
Пример:
foo(start, end). 
При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера. */
/* 
function defer(f, ms) {
  return function () {
    setTimeout(() => f.apply(this, arguments), ms);
  };
}

function start(timer) {
 console.log("Время истекло " + timer);
}

let setTime = defer(start, 3000);
setTime("3 секунды"); */

// 2. Что выведет функция?
/* function f() {
  console.log(this); // в браузере выведет window, в Node.js - global т.к., 
                    // при вызове функции user.g()будет выполняться метод принадлежащий объекту user. 
                    //Метод g() определяется функцией f, с привязанным контекстом null/
}

let user = {
  g: f.bind(null),
};

user.g();
 */
// 3. Можем ли мы изменить this дополнительным связыванием?
/* function f() {
  console.log(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f(); */
//можем сделать новую привязку, но не изменить существующую,т.е. при вызове f.bind({ name: "Вася" })
//запоминает контекст во время создания и повторный bind будет устанавливать контекст уже для данного объекта, не влияя на объект.

// 4. В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
/* function sayHi() {
  alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася"
});

alert( bound.test ); */ // У bound не свойства test. Ответ: underfined

// 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему?
//ответ: При вызове фуекции отсутствует привязка контекста к user. При вызове loginOk/loginFail this=undefined.

/* function askPassword(ok, fail) {
  let password = prompt("Password?", "");
  if (password == "rockstar") ok();
  else fail();
}

let user = {
  name: "Вася",

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },
};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); */

// 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(?, ?); //(?)

// 8.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value есть функция const sum = (a, b, c) => a + b + c, которая складывает три числа.из переменной elem.
// var elem = {value: ‘Привет’}

// function func(surname, name) {
// 	alert(this.value + ', ' + surname + ' ' + name);
// }

// //Тут напишите конструкцию с bind()

// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 9. Есть функция которая складывает три числа.
// const sum = (a, b, c) => a + b + c
// Выполните каррирование.
