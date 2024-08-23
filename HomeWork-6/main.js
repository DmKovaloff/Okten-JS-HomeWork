// #dFeorS3m7u
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
let str1 ='hello world';
console.log(str1.length);
let str2 = 'lorem ipsum';
console.log(str2.length);
let str3 = 'javascript is cool'
console.log(str3.length);

let strArr = ['hello world', 'lorem ipsum', 'javascript is cool'];
console.log(strArr);
function sentItemLength (arr){
    let arrItemLenght = [];
    for (let item of arr) {
        arrItemLenght.push(item.length);
    }
    return arrItemLenght;
}
console.log(sentItemLength(strArr));

// ==========================================
// #8lld9HMxXWB
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

function upperCaseStr (arr){
    let arrUpperCase = [];
    for (let item of arr) {
        arrUpperCase.push(item.toUpperCase());
    }
    return arrUpperCase;
}
console.log(upperCaseStr(strArr));

// ==========================================
// #ClDsAm7xba7
// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let UpArrStr = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];

function lowerCaseStr (arr){
    let arrLowerCase = [];
    for (let item of arr) {
        arrLowerCase.push(item.toLowerCase());
    }
    return arrLowerCase;
}
console.log(lowerCaseStr(UpArrStr));

// ==========================================
// #0b89BkYZwu
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let dirtyStr = ' dirty string   ';


// ==========================================
//     #bfoJuse4ZzP
// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str = 'Ревуть воли як ясла повні';

let stringToArray = (str) => console.log(str.split(' '));
stringToArray(str);

// let arr = str.split(' ');
// console.log(arr);

function stringToArrayHW (str) {
    if (str) {
        const split = str.split(' ');
        return split;
    }
    return [''];
}
console.log(stringToArrayHW(str));

// ==========================================
// #Rbr5kEQ
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] .
// за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

let numArr = [10,8,-7,55,987,-1011,0,1050,0]

let mapedArr= numArr.map(num => num + '');
console.log(mapedArr);

// ==========================================
// #5hqyKTfmc
// - створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
//   або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];

function sortNums(array,direction){
        if (direction === 'ascending'){
            const ascending = array.sort((a,b)=> a- b);
            return ascending;
        }
        if (direction === 'descending') {
            const descending = array.sort((a,b)=> b - a);
            return descending;
        }
    }

console.log(sortNums(nums, 'ascending')); // [3,11,21]
console.log(sortNums(nums, 'descending')); // [21,11,3]

// ==========================================
// #yo06d74c1C
// - є масив
// let coursesAndDurationArray

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
let sortArr = coursesAndDurationArray.sort((a,b)=>{return b.monthDuration-a.monthDuration});
console.log(sortArr);

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
let filterArr = coursesAndDurationArray.filter(duration =>  duration.monthDuration > 5);
console.log(filterArr);

// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let mappedArrCourses = coursesAndDurationArray.map((value,id)=>{
    let mappedCourse = {
        id: id + 1,
        title: value.title,
        monthDuration: value.monthDuration
    }
    return mappedCourse;
})
console.log(mappedArrCourses);


// ==========================================
//     #bolvdlhP
// описати колоду карт (від 6 до туза без джокерів)
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king'
//     color:'', // 'red','black'
// }

const suits = [
    { cardSuit: 'heart', color: 'red' },
    { cardSuit: 'diamond', color: 'red' },
    { cardSuit: 'spade', color: 'black' },
    { cardSuit: 'clubs', color: 'black' },
]

const cardNames = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
const deck = [];

for (const suit of suits) {
    for (const cardName of cardNames) {
        const card = {
            cardSuit: suit.cardSuit,
            value: cardName,
            color: suit.color
        }
        deck.push(card);
    }
}
console.log(deck);

//  - знайти піковий туз
console.log(deck.find(value => value.cardSuit === 'spade' && value.value === 'ace'));

//  - всі шістки
console.log(deck.filter(value => value.value === 6));

//  - всі червоні карти
console.log(deck.filter(value => value.color === 'red'));

//  - всі буби
console.log(deck.filter(value => value.cardSuit === 'diamond'));

//  - всі трефи від 9 та більше
console.log(deck.filter(value => (value.cardSuit === 'clubs' && value.value >= 9) ||
    (value.cardSuit === 'clubs' && typeof value.value === 'string')));


// ==========================================
//     #EP5I1UUzAX
// Взяти описану колоду карт, та за допомоги   reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let suitDeck = deck.reduce((suit, card) => {
    if(card.cardSuit === 'spade') {
        suit.spades.push(card)
    }
    if(card.cardSuit === 'diamond') {
        suit.diamonds.push(card)
    }
    if(card.cardSuit === 'heart') {
        suit.hearts.push(card)
    }
    if(card.cardSuit === 'clubs') {
        suit.clubs.push(card)
    }
    return suit;
}, {
    spades:[],
    diamonds:[],
    hearts:[],
    clubs:[]
});
console.log(suitDeck);


// ==========================================
// #4LJn7zBx
// взяти з arrays.js масив coursesArray
// --написати пошук всіх об'єктів, в яких в modules є sass
// --написати пошук всіх об'єктів, в яких в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let sass = coursesArray.filter( modul =>  modul.modules.includes('sass'));
console.log(sass);

let docker = coursesArray.filter( modul => modul.modules.includes('docker'));
console.log(docker);