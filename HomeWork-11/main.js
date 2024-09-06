// #HmvAfRQM
// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.


const cartsDiv = document.getElementById('carts');

fetch('https://dummyjson.com/carts')
    .then(value => value.json())
    .then(cartsObject => {
        const {carts} = cartsObject;
        console.log(carts);

        for (const cart of carts) {
            const div = document.createElement('div');
            div.classList.add('cart-container');

            const divInfo = document.createElement('div');
            divInfo.innerText = `
                "id": ${cart.id},
                "total": ${cart.total},
                "totalProducts": ${cart.totalProducts},
                "totalQuantity": ${cart.totalQuantity}
            `
            
            const listProduct = document.createElement('ol');

            for (const listProductElement of cart.products) {
                const li = document.createElement('li');
                const info = document.createElement('p');
                info.innerText = `
                "title": ${listProductElement.title},
                "price": ${listProductElement.price}
                `

                const img = document.createElement('img');
                img.src = listProductElement.thumbnail;
                li.append(img, info);
                listProduct.appendChild(li)
            }

            div.append(divInfo, listProduct);
            cartsDiv.appendChild(div);
        }
    });

//     #whXxOBlYS0H
//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.


// discountedTotal
//     :
//     89686.65
// id
//     :
//     1
// products
//     :
//     (4) [{…}, {…}, {…}, {…}]
// total
//     :
//     103774.85
// totalProducts
//     :
//     4
// totalQuantity
//     :
//     15
// userId
//     :
//     33