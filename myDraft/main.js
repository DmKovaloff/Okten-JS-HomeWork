//    В index.html
// 1. отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2. Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3. Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
//    котра має детальну інфорацію про об'єкт на який клікнули


//    На странице user-details.html:
// 4. Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5. Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
//    (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6. Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.


//    На странице post-details.html:
// 7. Вивести всю, без виключення, інформацію про об'єкт post на який клікнули.
// 8. Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
//    Стилизація проєкта -
//     index.html - всі блоки з user - по 2 в рядок. кнопки/аосилвння розташувати під інформацією про user.

//     user-details.html - блок з інфою про user зверху сторінки. Кнопка нижчє, на 90% ширини сторінки, по центру.
//     блоки з короткою іфною про post - в ряд по 5 .

//     post-details.html - блок з інфою про пост зверху. Коментарі - по 4 в ряд.
//     Всі елементи котрі характеризують users, posts, comments візуалізувати,
//     так, щоб було видно що це блоки (дати фон. марджини і тд).

// const usersDiv = document.getElementById('users');

const list = document.getElementById('main');

fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            const cell = document.createElement('div');
            cell.classList.add('userCell')

            let h2 = document.createElement('h2');
            h2.innerText = `${user.name}`

            let userId = document.createElement('p');
            userId.innerText = `${user.id}`

            let detailUserButton = document.createElement('button');
            detailUserButton.innerText = `Details`;
            detailUserButton.onclick = function (){
                location.href = 'user-details.html'
            }

            cell.append(h2, userId, detailUserButton);
            list.appendChild(cell);
        }
    });

const userInfo = document.getElementById('userDetails');

fetch('https://jsonplaceholder.typicode.com/users/USER_ID/posts')