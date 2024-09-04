// #8Nmt60ZT
// - створити блок,
//   - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

const div = document.createElement('div');
div.classList.add('wrap');
div.classList.add('collapse');
div.classList.add('alpha');
div.classList.add('beta');

document.body.appendChild(div);

const clone = div.cloneNode(true);
document.body.appendChild(clone);

// #OPLI89c9G
// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main','Products','About us','Contacts'];

const head = document.createElement('ul');
document.body.appendChild(head);

for (const headElement of arr) {
    const li = document.createElement('li');
    li.innerText = headElement;
    head.appendChild(li);
}

// #jeBqHV525U5
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for (const coursesArrayElement of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.innerText = `${coursesArrayElement.title} ${coursesArrayElement.monthDuration}`;
    document.body.appendChild(div);
}

//     #Kx1xgoKy8
//     - Є масив
//      За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
//      в якому буде <h1 class='heading'>  з title  елементу,
//      та <p class='description'> з monthDuration елементу.
//      Завдання робити через цикли.

for (const element of coursesAndDurationArray) {
    const div = document.createElement('div');
    div.classList.add('item');

    const h1 = document.createElement('h1');
    h1.classList.add('heading');
    h1.innerText = `${element.title}`;

    const p = document.createElement('p');
    p.classList.add('description');
    p.innerText = `${element.monthDuration}`;

    div.append(h1, p);
    document.body.appendChild(div);
}



// ==========================

//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками,
// в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом
// ------------------
//
//
//
//     створити три блоки з різним текстовим контентом. зробити так, щоб всі блоки мали висоту найбільшого з них.