// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

// function cutString(str, n) {
//   let res = [];
//   for(let i = 0 ; i < str.length; i += n) {
//     res.push(str.substring(i,i+ n));
//   }
//   return res;
// }
//
// document.writeln(cutString('наслаждение',3))
// console.log(cutString('наслаждение',3))
//
// // - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//   let str = 'Каждый охотник желает знать';
// function delete_characters(str, length){
//   if((str.constructor=== String) && (length>0))
//   {
//     return str.slice(0, length);
//   }
// }
// document.writeln(delete_characters(str, 7)); // Каждый
// console.log(delete_characters(str,7));

// // - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//   let str = "HTML JavaScript PHP";
//   function insert_dash(str){
//     return str.trim().toLocaleUpperCase().replaceAll(` `,`-`)
//   }
//
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
// console.log(insert_dash(str))
// // - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
// function fun (text)
// {
//   return text.toLocaleUpperCase();
// }
// console.log(fun(`яка приймає рядок`));

// - Дано список імен.
// let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
// function normStr ( str){
//   let rs ;
//   rs = str.replaceAll(`..` ,` `).replace(`---`,  ` `).replace(`__`,` `);
//   return rs
// }
// console.log(normStr(n1));
// console.log(normStr(n2));
// console.log(normStr(n3));

// let norm = (st) => {
//   let string = st.split('').map(value => (value >= 'A' && value <= 'Z') || (value >= 'a' && value <= 'z') ? value : ' ').join('').trim();
//   while (string.includes('  ')) {
//     string = string.replace('  ', ' ');
//   }
//   return string;
// }
// console.log(norm(n1),norm(n2),norm(n3));

// //   - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.


// function getRandom(nums) {
//   return Math.round(Math.random() * (nums));
// }
// console.log(getRandom(100))


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

// - створити (або згенерувати, за до
// помоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
//
// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
// let str =`кожне слово починається з великої літери`
// function capitalize(str) {
//   return str.split(` `).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
//
// }
//
// document.writeln(capitalize(str));
// console.log(capitalize(str));


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com

// let checkEmail = (email) => {
//  let emArr = email.split(`@`);
//   if(emArr.length !== 2){
//     return false }
//
//   let [name,fullDomein] = emArr;
//   let [deforeDot, afterDot] = fullDomein.split(`.`);
//   return !(deforeDot.length < 2 || !afterDot || !name);
//
// }
// console.log(checkEmail(`someemail@gmail.com`));
// console.log(checkEmail(`someeMAIL@gmail.com`));
// console.log(checkEmail(`someeMAIL@i.ua`));
// console.log(checkEmail(`some.email@gmail.com`));
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.

// - є масив
// let coursesArray = [
//   {
//     title: 'JavaScript Complex',
//     monthDuration: 5,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
//   },
//   {
//     title: 'Java Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'angular',
//       'aws',
//       'docker',
//       'git',
//       'java core',
//       'java advanced']
//   },
//   {
//     title: 'Python Complex',
//     monthDuration: 6,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'angular',
//       'aws',
//       'docker',
//       'python core',
//       'python advanced']
//   },
//   {
//     title: 'QA Complex',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
//   },
//   {
//     title: 'FullStack',
//     monthDuration: 7,
//     hourDuration: 909,
//     modules: ['html',
//       'css',
//       'js',
//       'mysql',
//       'mongodb',
//       'react',
//       'angular',
//       'aws',
//       'docker',
//       'git',
//       'node.js',
//       'python',
//       'java']
//   },
//   {
//     title: 'Frontend',
//     monthDuration: 4,
//     hourDuration: 909,
//     modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
//   }
// ];
// // відсортувати його в спадаючому порядку за кількістю елементів в полі modules
// console.log(coursesArray.sort(function (a,b){
// if (a.modules<b.modules){
//   return 1
// }
//   if (a.modules>b.modules){
//     return -1
//   }
//   if (a.modules===b.modules){
//     return  0
//   }
// }))


// // - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//   let symb = "о", str = "Астрономия это наука о небесных объектах";
// let count = (str, stringsearch) => str.split(``).reduce((acc,value) => value === stringsearch ? acc +1:acc,0);
//
// document.writeln(count(str, symb)) // 5
// console.log(count(str, symb))


//   let count = str.split(symb).length -1
// console.log(count)
// console.log(symb.split(str))

// // - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//   let str = "Сила тяжести приложена к центру масс тела";
// function cutString(str, n){
//   return str.split(` `).splice(0, n).join(` `);
// }
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// let books =[
//  {
//   title:`The Hobbit`,
//   pageCount: 384,
//   genre: `fantasy`,
//   authors:`John Tolkien`,
// },
// {
//   title:`The silent patient`,
//   pageCount: 200,
//   genre: `detective`,
//   authors:`Alex Hichaelides`
// },
//
// {
//   title:`Jane Eyre`,
//   pageCount: 190,
//   genre: [`novel`,`novel1`,`novel3`],
//   authors:`Chorlotte Bronte`,
// },
//   {
//     title:`The Hobbit`,
//     pageCount: 400,
//     genre: `fantasy`,
//     authors:`John Tolkien`,
//   },
//   {
//     title:`The silent patients`,
//     pageCount: 222,
//     genre: `detective`,
//     authors: [`Alex Hichaelides`, `Alex Hichaelides`]
//   },
//
//   {
//     title:`Jane Eyre`,
//     pageCount: 123,
//     genre: [`novel`,`detective`],
//     authors:`Chorlotte Bronte`,
//   }
// ]
//
// // // -знайти наібльшу книжку.
//
// let max =books[0]
// books.forEach((item => max =item.pageCount > max.pageCount? item:max))
// console.log(max)
// // // - знайти книжку/ки з найбільшою кількістю жанрів
// let maxGenre =books[0]
// books.forEach((item => maxGenre =item.genre > maxGenre.genre? item:maxGenre))
// console.log(maxGenre)
//
//
// // - знайти книжку/ки з найдовшою назвою
//
// let maxTitle =books[0]
// books.forEach((item => maxTitle =item.title > maxTitle.title? item:maxTitle))
// console.log(maxTitle)
//
// let maxPec = books.reduce((acc,value)=>acc.pageCount > value.pageCount?acc:value);
// console.log(maxPec)
// // - знайти книжку/ки з найдовшою назвою
// let maxTitle = books.reduce((acc,value)=>acc.title > value.title?acc:value);
// console.log(maxTitle)
// // - знайти книжку/ки які писали 2 автори
// console.log(array.filter(value => value.authors.length === 2))

// // - знайти книжку/ки які писав 1 автор
// console.log(array.filter(value => value.authors.length !== 2))

// // - вісортувати книжки по кількості сторінок по зростанню
// array.sort((a,b)=>{
//  if (a.pageCount > b.pageCount){
//    return 1
//  }
//  if (a.pageCount < b.pageCount){
//    return -1
//  }
//    if (a.pageCount === b.pageCount){
//      return 0
//    }
// })
// console.log(array)
