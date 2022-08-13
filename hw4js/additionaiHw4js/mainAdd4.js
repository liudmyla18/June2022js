// --створити масив з:
//   - з 5 числових значень
// let n = [5,6,45,34,67];
// console.log(n);
// - з 5 стрічкових значень
// let s =[`hello`,`string`,`java`,`hw`,`script`];
// console.log(s);
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
// let nsb = [5,6,45,34,67,`hello`,`string`,`java`,`hw`,`script`,!0,!!8,0===0,!!!1,7>8,];
// console.log(nsb);

// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let massif =[5,12,45,34,67,`hello`,`string`,`java`,`hw`,`script`,!0,!!8,0===0,!!!1,7>8,];
// console.log(massif[0]);
// console.log(massif[1]);
// console.log(massif[5]);
// console.log(massif[11]);



// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// let mass = [2,17,13,6,22,31,45,66,100,-18];
// 1. перебрати його циклом while
// while (mass < 0 ){
//   mass++
// }
// console.log(mass);

//   2. перебрати його циклом for
// for (let i = 0;i < mass.length;i++){
//   console.log(mass)
// }
//   3. перебрати циклом while та вивести  числа тільки з непарним індексом

// i=0;
// while ( i < mass.length){
//   if(i % 2 !==0){
//     console.log(mass[i]);
//   }
//   i++
//   }


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i=0; i <= mass.length; i++){
// if(i%2 !== 0) {
//   console.log(mass[i])
//   alert([i])
// }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i=0;
// while ( i < mass.length){
//   if(i % 2 ===0){
//     console.log(mass[i]);
//   }
//   i++
//   }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i=0; i < mass.length; i++){
// if(i % 2 === 0){
//   console.log(mass[i])
// }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i=0; i <mass.length;i++){
//   if (mass[i]%3===0){
//     mass[i]=`okten`;
//     // console.log(mass[i]);
//   }
//   console.log(mass[i]);
// }
// 8. вивести масив в зворотньому порядку.
// for (let i=mass.length; i>=0; i--){
//   console.log(mass[i])
// }
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// for (let i=mass.length; i>=0; i--){
//   if (mass[i]%3===0){
//     mass[i]=`okten`;
//     // console.log(mass[i]);
//   }
//   console.log(mass[i]);
// }
// console.log(`-----------------`)
// for (let i= mass.length; i>=0;i--){
// if(i % 2 === 0){
//   console.log(mass[i]);
// }
//
// }
// console.log(`-----------------`)


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let mass = [2,17,13,6,22,31,45,66,100,-18];
// for (let i of mass){
//   console.log(i)
// }
// console.log(`---------------`)
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let massif =[`hello`,`string`,`java`,`hw`,`script`,`67`,`massif`,`array`,`nan`,`!!!`];
// for (let i of massif){
//   console.log(i)
// }
// console.log(`---------------`)
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let array = [`hello`,`string`,`java`,`hw`,`script`,45,100,-18,!0,1===2,];
// for (let i of array){
//   console.log(i)
// }
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arr = [`hello`,`string`,`java`,`hw`,`script`,100,-18,!0,true,false];
//      // for(let i of arr){
//
//   if (arr){
//     i = true;
//     i = false ;
//     i = !0;
//
//     console.log(typeof i);
//   }document.write(typeof i)
//        // }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arr = [`hello`,`string`,`java`,`hw`,`script`,100,-18,!0,true,false];

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//let arr = [`hello`,`string`,`java`,`hw`,`script`,100,-18,!0,true,false];
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// massif = [];
// massif[9] = "hello";
// massif[8] = true;
// massif[2] = false;
// massif[3] = 3.14;
// massif[4] = 888;
// massif[5] = "hw";
// massif[6] = true;
// massif[7] = false;
// massif[1] = 3.14;
// massif[0] = 123;
//
// for (let i = 0; i < massif.length; i++){
//   console.log(massif[i]);}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i++){
//   console.log(`step:`, i );
//   document.write(`<p>step: ${i} </p>`)
// }
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<100;i++){
//   console.log(`step:`, i );
//   document.write(`<p>step: ${i} </p>`)
// }
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let s=0;
// for (let i=0;i<10;i++){
//   console.log(`step:`,s);
//   document.write(`<p>step: ${s} </p>`)
//   s+=2
// }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for (let i=0;i<100;i++){
//   if (i%2===0){
//   console.log(`step:`, i);
//   document.write(`<p>step: ${i} </p>`)
//   }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

// for (let i=0;i<100;i++){
//   if (i%2===1){
//   console.log(`step:`, i);
//   document.write(`<p>step: ${i} </p>`)
//   }
// }

// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
let arr=[
  {
    title:`The Hobbit`,
    pageCount: 384,
    genre: `fantasy`,
    authors:`John Tolkien`,
  },
  {
    title:`The silent patient`,
    pageCount: 200,
    genre: `detective`,
    authors:`Alex Hichaelides`
  },

  {
    title:`Jane Eyre`,
    pageCount: 190,
    genre: `novel`,
    authors:`Chorlotte Bronte`,
  }
]
// -знайти наібльшу книжку.
for (const elements of arr){
  console.log(elements.pageCount);
}

// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 авто
