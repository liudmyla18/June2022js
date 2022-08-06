// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function areaRectangle(a,b) {
//  return a * b;
// }
// let see = areaRectangle(4,2);
// console.log(see);

// - створити функцію яка обчислює та повертає площу кола з радіусом r

// function circle( pi, r) {
//   return pi * r * r;
// }
//
// let s = circle(3.14,5);
// console.log(s)

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r

// function areaCylinderHeight (h,r){
//   return  (r * r) + h;
// }
// let x = areaCylinderHeight (3.5, 2.5)
// console.log(x)


// - створити функцію яка приймає масив та виводить кожен його елемент

// let array = [ 1, `!`, `hello`,{name: 'lisa', age: 25, status: false},[123]]
// function arrayPrinter (array) {
//   for (const item of array ) {
//     console.log(item );
//
//   }
// }
// arrayPrinter(array);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// let paragraph = 'створити функцію яка створює параграф з текстом. Текст задати через аргумент'
// function textPrint (text) {
//   console.log (`<p>${text}</p>`)
//   document.write (`<p>${text}</p>`)
//
// }
//   textPrint(paragraph)

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function fuNulLi(text) {
//   console.log(
//     `<ul>
//      <li>${text}</li>
//      <li>${text}</li>
//      <li>${text}</li>
//
// </ul>`)
//
// }
// fuNulLi(`створити функцію` );


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// function funLi(text) {
//   document.write(`<ul>`)
//   for (a=0; a<3; a++){
//     document.write(`<li>${text}</li>`)
//   }
//   document.write(`</ul>`)
// }
// funLi( `використовувати цикл`)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let massif = [ 1.5, `!`, !0 ];
// let funAcceptsArray = mas =>{
//   console.log(mas);
//   for (const elementArray of mas){
//     console.log(elementArray);
//     document.write(elementArray);
//   }
// }
// funAcceptsArray(massif );

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let users = [{
//   id: 12345,
//   name: `Ira`,
//   age: 20,
// },
// {
//   id: 23456,
//   name: `Roma`,
//   age: 29,
// },
//   {
//     id: 34567,
//     name: `Oly`,
//     age: 25,
//   }
// ];
// function objectArray (array){
//   for ( let mass =0; mass<array.length; mass++){
//     console.log(array)
//     document.write(`<div><p>id:${array[mass].id}, nane:${array[mass].name}, age:${array[mass].age}</p></div>`);
//
//   }
//
// }
// objectArray(users);

// - створити функцію яка повертає найменьше число з масиву

// let smallNumber = (array) => {
// let small = array [0];
//   for ( const n of array ){
//     if (small > n) small = n;
//   }
//   return small;
// }
// let n = smallNumber([2,3,4,5,6,7,8,9,10,]);
//  console.log(n);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function arrayFunPlus([a,b,c]) {
//  return a+b+c;
// }
// let n = arrayFunPlus ([1,2,10]);
// console.log(n);

//---------------------------------------------------------

// let funPlusMass = ([a,b,c]) => {
//   return  a+b+c;
// }
//   let sumMass = funPlusMass([1,2,10])
// console.log(sumMass)
//---------------------------------------------------------

// let funPlus = (array) => {
//     let i = 0;
//     for (const arrayNum of array) {
//         i += arrayNum;
//     }
//     return i;
// };
//
// let sume = funPlus ([1,2,10])
// console.log(sume);

