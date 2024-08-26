// #XjJuucOMR0
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User (id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user = new User()

let users = [
    new User(1,'John1', 'Snow1','snow1@gmail.com','+380996644452'),
    new User(2,'John1','Snow1', 'snow2@gmail.com','+380996644453'),
    new User(3,'John1','Snow1','snow3@gmail.com','+380996644454'),
    new User(4,'John1','Snow1','snow4@gmail.com','+380996644455'),
    new User(5,'John1','Snow1','snow5@gmail.com','+380996644456'),
    new User(6,'John1','Snow1','snow6@gmail.com','+380996644457'),
    new User(7,'John1','Snow1','snow7@gmail.com','+380996644458'),
    new User(8,'John1','Snow1','snow8@gmail.com','+380996644459'),
    new User(9,'John1','Snow1','snow9@gmail.com','+380996644460'),
    new User(10,'John1','Snow1','snow10@gmail.com','+380996644461')
];
console.log(users);


// #2ikXsE2WiKZ
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати ,
//   залишивши тільки об'єкти з парними id (filter)

let filtration = users.filter(user => user.id  % 2 === 0 );
console.log(filtration);

// #pOeHKct
// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)


let ascending = users.sort((user1, user2) => user1.id  - user2.id );
console.log(ascending);

// let descending = users.sort((user1, user2) => user2.id  - user1.id );
// console.log(descending);

// #nkMXISv
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
//    створити пустий масив, наповнити його 10 об'єктами Client

function Client (id, name, surname , email, phone, order) {
    this.id = id;
    this.name =name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
    this.order = order;
}

let clients = [
    new Client(1,'John1', 'Snow1','snow1@gmail.com','+380996644452', ['apple', 'milk']),
    new Client(2,'John1','Snow1', 'snow2@gmail.com','+380996644453', ['apple2', 'orange']),
    new Client(3,'John1','Snow1','snow3@gmail.com','+380996644454', ['apple3', 'orange1']),
    new Client(4,'John1','Snow1','snow4@gmail.com','+380996644455', ['apple4', 'orange2']),
    new Client(5,'John1','Snow1','snow5@gmail.com','+380996644456', ['apple5', 'orange3', 'milk']),
    new Client(6,'John1','Snow1','snow6@gmail.com','+380996644457', ['apple6', 'orange4']),
    new Client(7,'John1','Snow1','snow7@gmail.com','+380996644458', ['apple7']),
    new Client(8,'John1','Snow1','snow8@gmail.com','+380996644459', ['apple8', 'orange6', 'milk', 'tee']),
    new Client(9,'John1','Snow1','snow9@gmail.com','+380996644460', ['apple9', 'orange7']),
    new Client(10,'John1','Snow1','snow10@gmail.com','+380996644461', ['apple10', 'orange2'])
];
console.log(clients);

// #8abtVjRv
// - Взяти масив (Client [] з попереднього завдання).
//   Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let ascendingOrder = clients.sort((user1, user2) => user1.order.length  - user2.order.length );
console.log(ascendingOrder);

// #vV9a6584I5
// - Створити функцію конструктор яка дозволяє створювати об'єкти car,
//   з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// --  - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

// function Car(model, manufacturer, year, maxspeed, engineСapacity){
//     this.model = model
//     this.manufacturer = manufacturer
//     this.year = year
//     this.maxspeed = maxspeed
//     this.engineСapacity = engineСapacity
//     this.drive = function () {
//         console.log(`їдемо зі швидкістю ${maxspeed} на годину`);
//     }
//     this.info = function () {
//         for (const key in this) {
//             console.log(key, this[key]);
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         this.maxspeed = this.maxspeed + newSpeed;
//     }
//     this.changeYear = function (newValue) {
//         this.year = newValue;
//     }
//     this.addDriver = function (driver) {
//         this.driver = driver
//     }
// }
//
// let car= new Car('a6', 'audi', 2016, 500, 3);
// console.log(car);
//
// car.drive ();
// car.info ();
// car.increaseMaxSpeed(20);
// console.log(car);
// car.changeYear(2020);
// console.log(car);
// car.addDriver({name: 'john', surn: 'snow'});
// console.log(car);

// #5kla3yMpgp
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car


class Car {
    constructor(model, manufacturer, year, maxspeed, engineСapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxspeed = maxspeed;
        this.engineСapacity = engineСapacity;
    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxspeed} на годину`)
    };
    info () {
        for (const key in this) {
            console.log(key, this[key]);
        }
    };
    increaseMaxSpeed  (newSpeed) {
        this.maxspeed = this.maxspeed + newSpeed;
    }
    changeYear (newValue) {this.year = newValue};
    addDriver  (driver) {this.driver = driver};
}

let car= new Car('a6', 'audi', 2016, 500, 3);
console.log(car);

car.drive ();
car.info ();
car.increaseMaxSpeed(20);
car.changeYear(2020);
car.addDriver({name: 'john', surn: 'snow'});
console.log(car);

// #zg6Fifnqig
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }

}

class Prince {
    constructor(name, age, finding) {
        this.name = name;
        this.age = age;
        this.finding = finding;
    }
}

let candidate = [
    new Cinderella('Anna', 20, 36),
    new Cinderella('Olga', 20, 37),
    new Cinderella('Iryna', 20, 38),
    new Cinderella('Galyna', 40, 42),
    new Cinderella('Anna2', 19, 337),
];

let prince = new Prince('Tolik', 34, 42);

// for (const cinderella of candidate) {
//     if (cinderella.size === prince.finding) {
//         prince.done = cinderella;
//     }
// }
//
// console.log(prince);

let truCinderella = candidate.filter(cinderella =>cinderella.size === prince.finding);
prince.done = truCinderella;
console.log(prince);


// #gsKLAsNWM
// *Через Array.prototype. створити власний foreach, filter

