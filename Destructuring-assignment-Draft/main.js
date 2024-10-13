// let arrNd = [2025, 12, 31];
//
// let yearNd  = arrNd[0];
// let monthNd = arrNd[1];
// let dayNd   = arrNd[2];
// console.log(yearNd);
// console.log(monthNd);
// console.log(dayNd);
//
// // Destructuring assignment
// let arr = [2024, 10, 12];
// let [year, month, day] = arr;
// console.log(year);
// console.log(month);
// console.log(day);
//
// // Task
// let arrTask = ['John', 'Smit', 'development', 'programmer', 2000];
//
// let nameTask       = arrTask[0];
// let surnameTask    = arrTask[1];
// let departmentTask = arrTask[2];
// let positionTask   = arrTask[3];
// let salaryTask     = arrTask[4];
//
// Destructuring assignment
// let arrT = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary] = arrT;
// console.log(surname);
// console.log(position);

// // example
// function func() {
//     return [2025, 12, 31];
// }
//
// let [year, month, day] = func();
// console.log(year);

// // // Task
// // // В следующем коде части массива записываются в соответствующие переменные:
// // //
// //     let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// //
// // let name    = arr[0];
// // let surname = arr[1];
// //
// // let info = arr.slice(2);
// // console.log(info)// все элементы со второго до конца массива
// // // Переделайте этот код через деструктуризацию согласно изученной теории.
//
//
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info] = arr;
// console.log(name);
// console.log(info);


// В следующем коде части массива записываются в соответствующие переменные:
//     let arr = ['John', 'Smit', 'development', 'programmer'];
//
// let name       = arr[0];
// let surname    = arr[1];
// let department = arr[2];
//
// let position;
// if (arr[3] !== undefined) {
//     position = arr[3];
// } else {
//     position = 'trainee';
// }
// Переделайте этот код через деструктуризацию согласно изученной теории.

// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, department, position='trainee'] = arr;
// console.log(position);

// есть функция, возвращающая текущий день недели:


// let date = new Date();
// console.log(date.getSeconds());  // секунды
// console.log(date.getMinutes());  // минуты
// console.log(date.getHours());    // часы
// console.log(date.getDate());     // дни
// console.log(date.getMonth());    // месяцы с нуля
// console.log(date.getFullYear()); // год
// console.log(date.getDay());      // текущий день недели

// let date = new Date();
// console.log(date);
// let str  = date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate();
// console.log(str);

// function funcDay() {
//     return (new Date).getDate();
// }
// function funcMonth() {
//     return (new Date).getMonth();
// }
//
// // Давайте укажем эту функцию в качестве значения переменной day:
// let arr = [2024];
// // Модифицируйте полученный выше код так,
// //     чтобы при отсутствии в массиве значения для месяца по умолчанию брался текущий месяц,
// //     а при отсутствии значения для года - соответственно текущий год.
// let [year, month= funcMonth(), day = funcDay()] = arr;
// console.log(month)

// let options = {
//     width:  400,
//     height: 500,
// };
//
// let{width,height,color = 'black'} = options;
// console.log(options);

// function func([year, month, day]) {
//     console.log(year);  // выведет 2025
//     console.log(month); // выведет 12
//     console.log(day);   // выведет 31
// }
// func([2025, 12, 31]);

// function func(employee) {
//     let name       = employee[0];
//     let surname    = employee[1];
//     let department = employee[2];
//     let position   = employee[3];
//     let salary     = employee[4];
// }

// func( ['John', 'Smit', 'development', 'programmer', 2000] );
//
// function func([name, surname,department = 'junior', ...info]) {
//    console.log(name);
//    console.log(surname);
//    console.log(department);
//    console.log(info);
// }

// function func(department, employee, hired) {
//     let name     = employee[0];
//     let surname  = employee[1];
//
//     let year  = hired[0];
//     let month = hired[1];
//     let day   = hired[2];
// }

function func(department, [name, surname], [year, month, day]) {
    console.log(department);
    console.log(surname);
    console.log(year);
}

func( 'development', ['John', 'Smit'], [2018, 12, 31] )