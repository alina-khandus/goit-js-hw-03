//Задание 2
/*Напиши функцию countProps(obj), считающую кол - во свойств в объекте.Функция возвращает число - количество свойств.*/

//решение
const countProps = function (obj) {
  // твой код
  return Object.keys(obj).length;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

//варианты решения

let countProps = obj => Object.keys(obj).length;

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3

/*function count(obj) {
  return user;
  for (let value of Object.values(user)) {
    console.log(user);
  }
}

//варианты решения
let user = {
  name: 'Jhone',
  age: 16,
};

console.log(count(user));*/

//варианты решения
/*
let user = {
  name: 'John',
  age: 30,
};

function count(user) {
  return new Map(Object.entries(user)).size;
}

console.log(count(user));*/

const countProps = function (obj) {
  'use strict';
  // Write code under this line
  let message = '';
  const keys = Object.keys(obj);
  for (const key of keys) {
    message++;
  }
  return countProps;
};

console.log(countProps({})); // 0
