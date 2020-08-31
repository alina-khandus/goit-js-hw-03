//Задание 4
/*Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму запрплаты работников и возращает ее.
Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".*/

const countTotalSalary = function (employees) {
  // твой код
  let salery = Object.values(employees);
  let sum = 0;
  for (let i = 0; i < salery.length; i++) {
    sum += salery[i];
  }
  return sum;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400

///////варианты решения
//Задача №1:

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

let sumSalaries = salaries =>
  Object.values(salaries).reduce((total, current) => total + current, 0);
console.log(sumSalaries(salaries));

//бот
//Задача 3 - 4
/*Суммирование значений свойств объекта
Напиши функцию countTotalSalary(employees) принимающую объект зарплат.Функция считает общую сумму зарплаты работников и возвращает ее.Каждое поле объекта, передаваемого в функцию, имеет вид "имя": "зарплата".*/
//Задача 3 - 4 решение
const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  let sum = 0;
  for (let salary of Object.values(employees)) {
    sum += salary;
  }

  return sum;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
