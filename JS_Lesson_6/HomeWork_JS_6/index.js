//1. Преобразовать строку в массив слов

//Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

/*var str = "Каждый охотник желает знать";
function stringToarray(str) {
  return str.split(" ");
}

var arr = stringToarray(str);
console.log(arr);*/

//2. Удаление указанного количества символов из строки

//Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

/*var str = "Каждый охотник желает знать";

function delete_characters(str, length) {
  // return str.slice(str, length);
}
console.log(str.slice(8, 40));*/

//3. Вставить тире между словами строки

//Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами.
//При этом все символы строки необходимо перевести в верхний регистр.

/*var str = "HTML JavaScript PHP";

function insert_dash(str) {
  return str.replace(/ /g, "-");
}

console.log(insert_dash(str));*/

//4. Сделать первую букву строки прописной

//Напишите функцию, которая принимает строку в качестве аргумента и
//преобразует регистр первого символа строки из нижнего регистра в верхний.

/*var str = "string not starting with capital";

function cursive_letter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(cursive_letter(str));*/

//5. Первая буква каждого слова заглавная

//Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

/* var str = "каждый охотник желает знать";

function capitalize(str) {
  let str1 = str.split(" ");
  for (let i = 0; i < str1.length; i++) {
    str1[i] = str1[i].charAt(0).toUpperCase() + str1[i].slice(1);
  }
  console.log(str1);
}
capitalize(str);*/

//6. Смена регистра символов строки
//Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный.
//Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

/*var str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";

function change_register(str) {
  let str1 = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toLowerCase()) {
      str[i].toUpperCase();
      str1 += str[i].toUpperCase();
    } else  {
        str1 += str[i].toLowerCase();
    }
  }
  return str1;
}
console.log(change_register(str));*/

//7. Удалить все не буквенно-цифровые символы
//Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

/*var str = "every., -/ hunter #! wishes ds335235;: {} 66 to $ % ^ & * know";

function remove_char(str) {
  return (str1 = str.replace(/[^a-zа-яё0-9\s]/gi, " "));
}

console.log(remove_char(str));*/

//8. Нулевое заполнение строки
//Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение
//с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros (num, len, sign) {

// };

//9. Сравнение строк без учёта регистра
//Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

/*function comparison(str1, str2) {
let str = str1.toLowerCase() === str2.toLowerCase();
return str;
};
console.log (comparison("asdfghjk", "sdfghjkl"));*/

//10. Поиск без учета регистра
//Напишите функцию insensitive_search(str1, str2),
//которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
/*let str1 = "heLLow my world!";
let str2 = "OrL";

function insensitive_search(str1, str2) {
  new_str1 = str1.toLowerCase();
  new_str2 = str2.toLowerCase();

  console.log(new_str1.indexOf(new_str2));
}
insensitive_search(str1, str2);*/

//11. ВерблюжийРегистр (CamelCase)
//Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase,
//при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

/*str = "hEllo woRld";
function initCap(str) {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (str1) {
    return str1.toUpperCase().replace(/\s+/g, "");
  });
}
console.log(initCap(str));*/

//12. Змеиный_регистр (snake_case)
//Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case,
//при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

/*str = "hEllo woRld";

function initSnake(str) {
  return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function (str1) {
    return str1.replace(/\s+/g, "_");
  });
}

console.log(initSnake(str));*/

//13. Повторить строку n раз
//Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
/*let n = 10;
let str = " Hellow world! ";
function repeatStr(str, n) {
  return str.repeat(n);
}
console.log(repeatStr(str, n));*/

//14. Получить имя файла
//Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

/*var pathname = "/home/user/dir/file.txt";

function path(pathname) { 
 return pathname.split("/").pop();
};
console.log (path(pathname)) ; */

//15. Заканчивается ли строка символами другой строки
//Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str
// и определяет заканчивается ли строка символами подстроки.

var str = "Каждый охотник желает знать";
var str1 = "скрипт";
var str2 = "знать";

String.prototype.endsWith = function (substring) {
  let arr = str.split(" ");
  {
    return str2 == arr.pop() ? true : false;
  }
};

console.log(str.endsWith(str2));

// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или
//до указанного символа char в зависимости от параметра pos.

/*var str = "Астрономия — Наука о небесных телах"; //перерешать

function getSubstr(str, char, pos) {
  return str.slice(char, pos).join(" ");
}

console.log(getSubstr(str, "—", 5));


//17. Вставить подстроку в указанную позицию строки
//Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

/*let str = "Астрономия — Наука о небесных телах";
let substr = "substr";

function insert(str, substr, pos) {
  return str.split(str[pos]).join(substr + " ");
}

console.log(insert(str, substr, 15));*/

//18. Ограничить длину строки
//Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

/*let str = "Астрономия — Наука о небесных телах";

function limitStr(str, n, symb) {
  return str.substr(str, n) + symb;
}

console.log(limitStr(str, 22, "..."));*/

//19. Количество вхождений символа в строке
//Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

/*var symb = "о", str = "Астрономия это наука о небесных объектах";
function count(str, symb) {
  return str.split(symb).length - 1 ;
};

console.log(count(str, symb)) ;*/

//21. Удалить лишние пробелы из строки
//Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

/*var str = "    Max is a good      boy     ";

function strip(str) {
  return (str = str.replace(/\s+/g, " "));
}

console.log(strip(str));*/

//23. Удалить лишние слова из строки

//Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

/*var str = "Сила тяжести приложена к центру масс тела";

function cutString(str, n) {
  return str.split(" ").splice(0, n).join(" ");
}

console.log(cutString(str, 4));*/

//24. Найти слово в строке
//Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

/*var str = "abc def ghi jkl mno pqr jkl stu";
let word = "ghi ";

function findWord(word, str) {
  if (str.indexOf(word, str) != -1) {
    console.log("совпадение текста");
  } else {
    console.log("совпадений текста нет");
  }
}
findWord(word, str);*/
