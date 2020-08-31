//Задание 1

/*
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле mood со значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for...of
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
*/

//Задача 2-1 решение

/*const user = {
  name: 'Mango',
  age: 20,
  ...{ mood: 'happy', hobby: 'skydiving', premium: false },
};

const keys = Object.keys(user); // ["name", "stars", "capacity"]
//console.log(user);

for (const key of keys) {
  console.log('Value: ', user[key]);
}*/

//бот
//Задача 2-1 условие
/*CRUD для свойств объекта
С - create(создать)
R - read(читать)
U - update(обновить)
D - delete (удалить)
Напиши скрипт, который, для объекта user, последовательно:

добавляет поле 'mood' со значением 'happy'
добавляет поле 'full time' со значением true
заменяет значение 'hobby' на 'skydiving'
заменяет значение 'premium' на false
в переменную message записывает содержимое объекта user:
для переменной keys присваивает массив свойств объекта, используя метод Object.keys()
с помощью оператора for...of
в формате ключ: значение
c переносом строки('\n')*/

//Задача 3-1 решение
let message = '';
const user = {
  age: 20,
  hobby: 'html',
  name: 'Mango',
  premium: true,
};

//Write code under this line
user.mood = 'happy';
user['full time'] = true;
user.hobby = 'skydiving';
user.premium = false;

const keys = Object.keys(user);
// Write code under this line

for (const key of keys) {
  message += `${key} : ${user[key]}\n`;
}
//message = key + ': ' + user[key];

console.log(message);

/*
for (const key of keys) {
  console.log(`${key} : ${user[key]}\n`);
}- только для вывода в консоль*/
