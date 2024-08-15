// Масиви та об'єкти:

//  - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let array1 = [];
array1[0] = 1;
array1[1] = 2;
array1[2] = 3;
array1[3] = 4;
array1[4] = 5;
array1[5] = 6;
array1[6] = 7;
array1[7] = 8;
array1[8] = 9;
array1[9] = 10;
console.log(array1);
console.log(array1[0], array1[1])


//  - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: '',
    pageCount: '',
    genre:''
}

let book2 = {
    title: '',
    pageCount: '',
    genre: ''
}

let book3 = {
    title: '',
    pageCount: '',
    genre: ''
}


//  - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//    Поле "автори" - являється  масивом. Кожен автор має поля name та age.

let book4 = {
    title:'',
    pageCount:'',
    genre:'',
    authors: [
        {name: '', age:''}
    ]
}

let book5 = {
    title:'',
    pageCount:'',
    genre:'',
    authors: [
        {name: '', age:''}
    ]
}

let book6 = {
    title:'',
    pageCount:'',
    genre:'',
    authors: [
        {name: '', age:''}
    ]
}

//  - Створити масив з 10 об'єктами які описують сутніть "користувач".
//    Поля: name, username,password. Вивести в консоль пароль кожного користувача

let user = [
    {name:'', username:'', password:'554wdrr3'},
    {name:'', username:'', password:'5f45ds'},
    {name:'', username:'', password:'dss2f12'},
    {name:'', username:'', password:'d1f2'},
    {name:'', username:'', password:'df212d'},
    {name:'', username:'', password:'3df6e'},
    {name:'', username:'', password:'erfdsfdsf'},
    {name:'', username:'', password:'3df511d'},
    {name:'', username:'', password:'d21f2d'},
    {name:'', username:'', password:'d2f1d2f'},
]

console.log(user[0]['password']);
console.log(user[1]['password']);
console.log(user[2]['password']);
console.log(user[3]['password']);
console.log(user[4]['password']);
console.log(user[5]['password']);
console.log(user[6]['password']);
console.log(user[7]['password']);
console.log(user[8]['password']);
console.log(user[9]['password']);

//  - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//    Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//    Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу

// First Option

let monday = {
    morning: 7,
    afternoon: 12,
    evening: 10
}
let tuesday = {
    morning: 7,
    afternoon: 12,
    evening: 10
}
let wednesday = {
    morning: 7,
    afternoon: 12,
    evening: 10
}
let thursday = {
    morning: 7,
    afternoon: 12,
    evening: 10
}
let friday = {
    morning: 7,
    afternoon: 12,
    evening: 10
}
let saturday = {
    morning: 7,
    afternoon: 12,
    evening: 10
}
let sunday = {
    morning: 7,
    afternoon: 12,
    evening: 10
}

let tempInfo = [];

tempInfo[0] = monday;
tempInfo[1] = tuesday;
tempInfo[2] = wednesday;
tempInfo[3] = thursday;
tempInfo[4] = friday;
tempInfo[5] = saturday;
tempInfo[6] = sunday;

console.log(tempInfo);

// Second Option

let weekTemp = [
    {day: 'Monday', morningTemp: 7, afternoonTemp: 8, eveningTemp: 12},
    {day: 'Tuesday', morningTemp: 7, afternoonTemp: 8, eveningTemp: 12},
    {day: 'Wednesday', morningTemp: 7, afternoonTemp: 8, eveningTemp: 12},
    {day: 'Thursday', morningTemp: 7, afternoonTemp: 8, eveningTemp: 12},
    {day: 'Friday', morningTemp: 7, afternoonTemp: 8, eveningTemp: 12},
    {day: 'Saturday', morningTemp: 7, afternoonTemp: 8, eveningTemp: 12},
    {day: 'Sunday', morningTemp: 7, afternoonTemp: 8, eveningTemp: 12}
]

console.log(weekTemp);


//  Логічні розгалуження:

//  - Є змінна х, якій ви надаєте довільне числове значення.
//    Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = 5;
if (x !== 0) {
    console.log('Вірно')
} else {
    console.log('Невірно')
}



//  - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
//    (в першу, другу, третю или четверту частину години).

let time = 37;

 if (0 <= time && time < 15) {
     console.log('1 part');
 } else if (15 <= time && time < 30) {
     console.log('2 part');
 } else if (30 <= time && time < 45) {
     console.log('3 part');
 } else if (45 <= time && time <= 59) {
     console.log('4 part');
} else {
     console.log('Error');
 }

//  - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 17;
if (1 <= day && day < 10) {
    console.log('1 dec');
} else if (10 <= day && day < 20) {
    console.log('2 dec');
} else if (20 <= day && day < 31) {
    console.log('3 dec');
}

//  - Скласти розклад на тиждень за домопоги switch.
//    Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день
//    (можна замість плану на день, назву дня англійською).

let dayNum = +prompt('Enter day number');
switch (dayNum) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
    default:
        console.log('Enter the week number (from 1 to 7)');
}

//  - Користувач вводить або має два числа.
//    потрібно знайти та вивести максимальне число з тих двох .
//    Також потрібно врахувати коли введені рівні числа.

let user1 = 26;
let user2 = 71;

if (user1 === user2) {
    console.log('Coincidence')
} else {
    console.log(Math.max(user1, user2))
}

//  - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно).
//    Напишіть код який, буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//    (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let numX = +prompt();
console.log(numX !== 0 || "default");

//  - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//    За допомоги іф перевірити кожен його елемент на тривалість навчання.
//    У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[1].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[2].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[3].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[4].monthDuration > 5) {
    console.log('Супер');
}

if (coursesAndDurationArray[5].monthDuration > 5) {
    console.log('Супер');
}