//ЗАДАНИЯ
//1.Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.

/* let sqr = (a) => a**2 ;

console.log(sqr (3)) ;*/

//2. Сделайте функцию, которая возвращает сумму двух чисел.

/*let sum = (a,b) => a+b ;

console.log (sum(8, 5));*/

//3. Сделайте функцию, которая отнимает от первого числа второе и делит на третье.

/*let sbtr = (a, b, c) => (a - b) / c ;

console.log (sbtr (1, 4, 10)) ;*/

//4. Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.

/*let day = ("День недели от 1 до 7", 8);

let week =
  day === 1
    ? "понедельник"
    : day === 2
    ? "вторник"
    : day === 3
    ? "среда"
    : day === 4
    ? "четверг"
    : day === 5
    ? "пятница"
    : day === 6
    ? "суббота"
    : day === 7
    ? "воскресенье"
    : "Под таким номером нет!";

console.log(week);*/

/* function week(day) {
  return day === 1
    ? "понедельник"
    : day === 2
    ? "вторник"
    : day === 3
    ? "среда"
    : day === 4
    ? "четверг"
    : day === 5
    ? "пятница"
    : day === 6
    ? "суббота"
    : day === 7
    ? "воскресенье"
    : "Под таким номером нет!";
}
console.log(week(5));*/

// 5. Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.

/* function getNum(a, b) {
  return a === b ? true : false;
}
console.log(getNum(8, 8));*/

// 6. Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.

/*function getSum(a, b) {
  return a + b > 10 ? true : false;
}
console.log(getSum(5, 4));*/

// 7. Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет.
//Если отрицательное - пусть функция вернет true, а если нет - false.

/* let ngtvNum = (a) => (a >= 0 ? false : true );
console.log (ngtvNum( -7 )); */

// 8. Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10.
//Если это так - пусть функция возвращает true, если не так - false.

/*let isNumberInRange = (a) => (a >= 0 && a < 10 ? true : false);
console.log(isNumberInRange(128)); */

// 9. Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти.
//Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.

/*let arr = [ 1, 2, 5, -9, 42, 87 ]; 

let isNumberInRange = (num) => (num > 0 && num < 10 ? true : false);

let arr_2 = [] ;
for ( let i = 0 ; i < arr.length ; i++ )  { 
    if (isNumberInRange (arr[i])) {
        arr_2.push (arr[i]) ;
    }
}
console.log(arr_2);*/

// 10. Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.

/*function getDigitsSum(num) {
  let Sum = 0;
  let str = String(num);
  for (let i = 0; i < str.length; i++) Sum += Number(str[i]);
  return Sum;
}

//console.log(getDigitsSum(128));

// 11. Найдите все года от 1 до 2020, сумма цифр которых равна 13.
//Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.

for (let years = 1; years <= 2020; years +=1) {
  if (getDigitsSum(years) === 13) {
    console.log(years);
  }
} */

// 12. Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет:
//четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.

/*let isEven = (num) => {
  return num % 2 === 0 ? true : false;
};
//console.log(isEven(20));

// 13. Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел.
//Для этого используйте вспомогательную функцию isEven из предыдущей задачи.

let arr = [2, 5, 10, 87, 76];
let arr_2 = [];
for (let i = 0, j = 0; i < arr.length; i++) {
  if (isEven(arr[i])) {
    arr_2[j] = arr[i];
    j += 1;
  }
}

console.log(arr_2);*/

// 14. Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей
//(чисел, на которое делится данное число).

/*function getDivisors(num) {
  let arr = [];
  for (let i = 0; i <= num; i++) {
    if (num % i == 0) {
      arr[i] = i;
    }
  }
  return arr;
}
console.log(getDivisors(14));*/

//15. Дан массив с числами. Выведите последовательно его элементы.

/*let arr = [10, 20, 17, -45, 23, 2];

let func = arr_2 => {
  for (let i = 0; i < arr_2.length; i += 1) {
  console.log(arr_2[i]);
  }  
};
console.log(func(arr));*/

// 16. Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры.
//И так, пока сумма не станет однозначным числом (9 и менее).

let getDigitsSum = (num) => {
  let Sum = 0;
  num = String(num);
  for (let i = 0; i < num.length; i++) {
    Sum += +num[i];
  }
  return Sum;
};
let get9sum = (n) => {
  for (; n > 9; ) {
    n = getDigitsSum(n);
  }
  return n;
};

console.log(get9sum(4796));
