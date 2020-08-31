//Задание 3
/*Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного
(который выполнил больше всех задач).
Сотрудники и кол - во выполненых задач содержатся как свойства объекта в формате "имя": "кол-во задач".*/

//max число
/*const findBestEmployee = function (employees) {
    // твой код
    return Math.max(...Object.values(employees));
};


console.log(
    findBestEmployee({
        ann: 29,
        david: 35,
        helen: 1,
        lorence: 99,
    }),
); // 99

console.log(
    findBestEmployee({
        poly: 12,
        mango: 17,
        ajax: 4,
    }),
); // 17

console.log(
    findBestEmployee({
        lux: 147,
        david: 21,
        kiwi: 19,
        chelsy: 38,
    }),
); // 147*/

//бот

//Задача 3-3 условие

/*Поиск наибольшего значения среди свойств объекта
Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников и возвращает имя самого продуктивного(который выполнил больше всех задач).
Сотрудники и кол - во выполненных задач содержатся как свойства объекта в формате "имя": "кол-во задач".*/

//Задача 3-3 решение

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  let max = 0;
  let BestEmployee = '';
  for (const i in employees) {
    if (employees[i] > max) {
      max = employees[i];
      BestEmployee = i;
    }
  }

  return BestEmployee;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

//Задача 3-3 решение //вариант с Object.keys(employees)

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const keys = Object.keys(employees);
  let result = '';
  let maxValue = 0;
  for (const key of keys) {
    if (employees[key] > maxValue) {
      maxValue = employees[key];
      result = key;
    }
  }
  return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'

//Задача 3-3 решение  Разобраться!!! Варианты с Object.entries(employees)

const findBestEmployee = function (employees) {
  'use strict';
  // Write code under this line
  const entries = Object.entries(employees);

  let result = '';
  let maxValue = 0;
  for (const [name, value] of entries) {
    if (value > maxValue) {
      maxValue = value;
      result = name;
    }
  }
  return result;
};

// Объекты и ожидаемый результат
const developers = {
  ann: 29,
  david: 35,
  helen: 1,
  lorence: 99,
};
console.log(findBestEmployee(developers));
// 'lorence'

const supports = {
  poly: 12,
  mango: 17,
  ajax: 4,
};
console.log(findBestEmployee(supports));
// 'mango'

const sellers = {
  lux: 147,
  david: 21,
  kiwi: 19,
  chelsy: 38,
};
console.log(findBestEmployee(sellers));
// 'lux'
