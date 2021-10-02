        // string
// const firstValue = String (5);

// console.log (typeof firstValue);

// const odj = {

//     foo: 67,
// } ;

// console.log(typeof String(obj.foo)) ;

        //Number

// let testValue = "12345";

// console.log(typeof testValue);

// testValue = Number(testValue);

// console.log(typeof testValue);


// let testValue = "12345xre";

// console.log(typeof testValue);

// testValue = Number(testValue);

// console.log(typeof testValue); // лежит число NaN, очевидно не можем преобразовать


// let testValue;

// console.log(typeof testValue);

// testValue = Number(testValue);

// console.log(typeof testValue); // 


        //булевое значение 

// const isUser = true;
// const isAdmin = false;

// console.log(Number(isUser), Number(isAdmin));


// const voidString = "";

// console.log(Number(voidString));

        // логическое преобразование Boolean

// const value = "12";

// console.log(typeof Boolean(value), Boolean(value)) ;

// const value = 0;

// console.log(typeof Boolean(value), Boolean(value)) ;


// const obj = {

// };
// console.log(Boolean(obj));

// const obj = [];
// console.log(Boolean(obj)); //true
//  const obj = [].length;
// console.log(Boolean(obj)); //false length-возращает значение, итог: 0, сл-но false

// const obj =[1].length;
// console.log(Boolean(obj)); //true
// массив и объекты пустые всегда выдают true 

        //математические опер.
// console.log(4%2);

// console.log(16%5);

// console.log(2**5);

        // унарный плюс
// const value = "5";

// console.log(typeof value, typeof +value, typeof Number(value));

        // бинарный плюс (примененный к дыум значениям)

// const sum = 5 + 6 ;

// console.log(sum);

// let sum = 5 + 6 ;

// console.log(sum);

// sum = 1 + true;

// console.log(sum);

// sum = 5 + null;

// console.log(sum);

// const stringValue = "12x" ;
// const numberValue = 34 ;

// console.log(stringValue + numberValue) ;
// console.log(numberValue + stringValue) ;
// console.log(typeof (numberValue + stringValue)) ;
// console.log(+stringValue + numberValue) ;
// console.log(typeof (numberValue + +stringValue)) ;


// const firstName = "Ann" ;
// const lastName = "Kakurina" ;

// console.log (firstName + " " +lastName) ;
// console.log (`${firstName} ${lastName}`);

        // Операции сравнения

// console.log(5!=5);
// console.log(5==5);
// console.log(5!=7);
// console.log(false==0);


const firstString = "яблоко" ;
const secondString = "Яблоко" ;

console.log(firstString != secondString); // по таблице юникод прописные буквы идут после заклавных и код у них больше. Так же у кирилицы и латиницы. Сначала идет латиница


const a = 0;
const b = "0";

console.log (a==b);
console.log (true + false);

// при строгом равенстве типы различны null и undefined, если их сравнивать при строгом сравнении, то null будет равен null, undefined только undefined. При любом их сравнении относиться с осторожностью, если же не сторогое равенству

