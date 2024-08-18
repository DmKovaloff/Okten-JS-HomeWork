// let arr = [];
// let arr2 = [];
//
// function aadToArray (obj, array){
//     array[array.length] = obj;
// }
//
// aadToArray({id: 1}, arr);
// aadToArray({id: 2}, arr);
// aadToArray({id: 3, name: 'kokos'}, arr2);
//
// console.log(arr);
// console.log(arr2);
//
// function printToDocument (msg, tag) {
//     document.write(`<${tag}>${msg}</${tag}>`);
// }
//
// printToDocument('hello', 'p');
//
//
// function restArg(...num) {
//     console.log((num));
// }
//
// restArg(1,2,'ere',3,);



// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

function square (sideA, sideB){
    console.log(sideA * sideB);
}
square(10, 5);

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r

function squareCircle (radius){
    return Math.PI * Math.pow(radius,2);
}
console.log(squareCircle(10));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

function square5(h, r) {
    let result;
    result = 2 * Math.PI * r * (h + r);
    return result;
}
console.log(square5(7, 3));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

function arrWrite (arrArg) {
        for(let value of arrArg){
            console.log(value);
        }
}
arrWrite(listOfItems);

// #59g0IsA
// - створити функцію яка створює параграф з текстом та виводить його через document.write. Текст задати через аргумент

function writeText (textArg){
    document.write(`<p>${textArg}</p>`);
}

writeText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint?');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li та виводить його через document.write.
//   Текст li задати через аргумент всім однаковий
// Lorem ipsum dolor sit amet.

function creatList (textLi){
    document.write(`<ul>`);
    for (let amount = 0; amount < 3; amount++) {
        document.write(`<li>${textLi}</li>`)
    }
    document.write(`</ul>`);
}

creatList('Lorem ipsum dolor sit amet.');

// #0Kxco1edSN
// - створити функцію яка створює ul з  елементами li. Текст li задати через аргумент всім однаковий.
//   Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл) та виводить його через document.write

// Lorem ipsum dolor sit amet, consectetur adipisicing.

function textListLoops (textLi, amountLi) {
    document.write(`<ul>`);
    for (let sense = 0; sense < `${amountLi}`; sense++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}

textListLoops('Lorem ipsum dolor sit amet, consectetur adipisicing.', 5);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві),
//    та будує для них список (ul li) та виводить його через document.write

let arrPrimitive = ['hello', 'owu', 'com', 'ua', 1, 10, -999, 123, 2.7, 16, true, false]
console.log(arrPrimitive);

function list (arrList){
    document.write(`<ul>`);
    for(let value of arrList) {
        document.write(`<li>${value}</li>`);
    }
    document.write(`</ul>`);
}
list (arrPrimitive);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let users = [
    {name: 'vasya', age: 31, id: 1},
    {name: 'petya', age: 30, id: 2},
    {name: 'kolya', age: 29, id: 3},
    {name: 'olya', age: 28, id: 4},
    {name: 'max', age: 30, id: 5},
    {name: 'anya', age: 31, id: 6},
    {name: 'oleg', age: 28, id: 7},
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
    {name: 'max', age: 31, id: 11}
];

function userCards (arrUsers){
    for (const user of arrUsers) {
        document.write(`<div>`);
            document.write(`<h2>${user.name}</h2>`);
            document.write(`<p>Age - ${user.age}</p>`);
            document.write(`<p>ID - ${user.id}</p>`);
        document.write(`</div>`);
    }
}
userCards(users);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let arrNums = [22, 23, 17, 54, 37, 41, 1, 0.88, 999];

function minNum (sendArr) {
    let minNum = sendArr[0];
    for (let item of sendArr) {
        if (item < minNum){
            minNum = item
        }
    }
    return minNum;
}
console.log(minNum(arrNums))



// #EKRNVPM
// - створити функцію sum(arr) яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13


function arrSum (someArr) {
    let start = 0;
    for (const sum of someArr) {
        start = start + sum;
    }
    return start;
}

console.log(arrSum(arrNums));

// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відповідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

let swap =[11,22,33,44];

function swapper (arrN) {
    let a = arrN[1] // 22
    arrN[1] = arrN[0]
    arrN[0] = a;
    return arrN;
}
console.log(swapper(swap));

// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:25},{currency:'EUR',value:42}],'USD') // => 400
//

function exchange(sumUAH,currencyValues,exchangeCurrency) {
    let currency;
    for (const currencyElement of currencyValues) {
        if (currencyElement.currency === exchangeCurrency) {
            currency = currencyElement;
        }
    }
    return sumUAH / currency.value;
}

//     if (exchangeCurrency === 'USD') {
//         for (const sumUAHElement of currencyValues) {
//             if (currencyValues.currency === 'USD') {
//                 sum = sumUAH/currencyValues.value;
//             }
//         }
//     }
//     return a;
// }


console.log(exchange(10000,
    [{currency:'USD',value:25},
                  {currency:'EUR',value:42}],
    'USD'));