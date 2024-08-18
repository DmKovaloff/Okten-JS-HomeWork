// Тут ті самі завдання, що і в занятті про базові функції, але зробити їх потрібно за допомоги стрілочних функцій
//
// #I2XsG6f
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

const square = (a,b) => a * b;
console.log(square(3,4));

// #ETGAxbEn8l
// - створити функцію яка обчислює та повертає площу кола з радіусом r
const squareCircle = (r) => Math.PI*Math.pow(2,r);
console.log(squareCircle(3));

// #Mbiz5K4yFe7
// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

const square5 = (h, r) => 2 * Math.PI * r * (h + r);
console.log(square5(7, 3));

// #SIdMd0hQ
// - створити функцію яка приймає масив та виводить кожен його елемент

let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react', 'angular', 'node.js'];

const arrWrite = (arrArg) => {
    for (let item of arrArg){
        console.log(item);
    }
}

arrWrite(listOfItems);

// #59g0IsA
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

const writeText = (textArg) => document.write(`<p>${textArg}</p>`);

writeText('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sint?');

// #hOL6126
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

const creatList = (textLi) => document.write(`<ul>
    <li>${textLi}</li>
    <li>${textLi}</li>
    <li>${textLi}</li>
</ul>`);

creatList('Lorem ipsum dolor sit amet.');

// #0Kxco1edSN
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

const textListLoops = (textLi, amountLi) => {
    document.write(`<ul>`);
    for (let sense = 0; sense < `${amountLi}`; sense++) {
        document.write(`<li>${textLi}</li>`);
    }
    document.write(`</ul>`);
}

textListLoops('Hello ipsum dolor sit amet, consectetur adipisicing.', 2);

// #gEFoxMMO
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

const list = (arrList) => {
    document.write(`<ul>`);
    for(let value of arrList) {
        document.write(`<li>${value}</li>`);
    }
    document.write(`</ul>`);
}
list (listOfItems);

// #bovDJDTIjt
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let party = [
    {name: 'andrey', age: 29, id: 8},
    {name: 'masha', age: 30, id: 9},
    {name: 'olya', age: 31, id: 10},
]

const cards = (arrUser) => {
    for (const user of arrUser) {
        document.write(`<div>`);
        document.write(`<h2>${user.name}</h2>`);
        document.write(`<p>Age - ${user.age}</p>`);
        document.write(`<p>ID - ${user.id}</p>`);
        document.write(`</div>`);
    }
};
cards(party);

//     #pghbnSB
// - створити функцію яка повертає найменьше число з масиву

let arrNums = [22, 23, 17, 54, 37, 41, 1, 0.88, 999];

const minNum = (sendArr)=> {
    let minNum = sendArr[0];
    for (let item of sendArr) {
        if (item < minNum){
            minNum = item
        }
    }
    return minNum;
}
console.log(minNum(arrNums));

// #EKRNVPM
// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
// #kpsbSQCt2Lf
// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
// #mkGDenYnNjn
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250