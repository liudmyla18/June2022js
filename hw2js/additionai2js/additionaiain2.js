// // --створити масив з:
// //   - з 5 числових значень
// let arrNum =[ 1,2,3,4,5];
// // - з 5 стічкових значень
// let arrStr =[`hello`, `string`,`name`,`massif`,`ega`];
// // - з 5 значень стрічкового, числового та булевого типу
// let arr = [`hello`, `string`,true,false,123];
// // - та вивести його в консоль
// console.log(arrNum,arrStr,arr);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
// let array = [];
// array [0] =`hello`
// array [1] = 123
// array [2] =true
// array [3] = `!!!`
// array [4] = false
// console.log(array[1]);
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// for (let i=0;i<1;i++){
//   document.write(`<div>${`За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині`}</div>`);
// }
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// for (let i =0; i<10;i++){
//   document.write(`<div>${` За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині`}</div>`);
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// let i = 0;
// while (i < 20){
//   document.write(`<h1> bloc </h1>`);
//   i++;
// }
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
// let i = 0;
// while (i < 20){
//   document.write(`<h1> bloc ${i}</h1>`);
//   i++;
// }
// // - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayNum=[1,1.14,34,546,67,87,56,0.7,33,100];
// for (let i=0;i<1;i++){
//   console.log(arrayNum)
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let arrayStr = ["Serhii", "Oleh", "qwerawe", "677u4g", "823hwue", "Serhii", "Oleh", "qwerawe", "677u4g", "823hwue"];
// for (let i = 0;i < 1;i++){
//   console.log(arrayStr)
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let arr = [`hell`,12,5,true,`element`,false,33.9000,`string`,`stitch`, 12.66,true];
// for (let i =0; i<1;i++){
//   console.log(arr)
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// let arrBool = [`hell`,12,5,true,`element`,false,33.9000,`string`,`stitch`, 12.66,true];
// for (let i= 0; i<arrBool.length;i++){
//   if(typeof arrBool[i] ===`boolean`){
//     console.log(arrBool[i])
//   }
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// let arrNum = [`hell`,12,5,true,`element`,false,33.9000,`string`,`stitch`, 12.66,true];
// for (let i=0; i<arrNum.length;i++){
//   if(typeof arrNum[i]==="number"){
//     console.log(arrNum[i])
//   }
// }
//
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// let arrStr = [`hell`,12,5,true,`element`,false,33.9000,`string`,`stitch`, 12.66,true];
// for (let i= 0; i<arrStr.length;i++){
//   if(typeof arrStr[i]===`string`){
//     console.log(arrStr[i]);
//   }
// }
// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let array = [];
// array[0] = 134.00
// array[1] = `hello`
// array[2] = true
// array[3] = 189.00
// array[4] = `okten`
// array[5] = false
// array[6] = 145.00
// array[7] = `boolean`
// array[8] = false
// array[9] = 1111.00
// for (let i = 0;i < 10;i++){
//   console.log(array[i])
// }
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<10;i++){
//   console.log(`step:`, i)
//   document.write(`step:`, i)
// }

// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// for (let i=0;i<=100;i++){
//   console.log(`step:`, i)
//   document.write(`<li> step: ${i} </li>`)
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// let step = 0
// for (let i=0;i<=100;i++){
//   console.log(`step:`, step )
//   document.write(`<li> step: ${step} </li>`)
//   step+=2
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// for( let i = 0; i<100;i++){
//   if (i%2===0){
//     console.log(`step:`, i )
//   document.write(`<li> step: ${i} </li>`)
//   }
// }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// for( let i = 0; i<100;i++){
//   if (i%2===1){
//     console.log(`step:`, i )
//     document.write(`<li> step: ${i} </li>`)
//   }
// }

// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// let count =59;
// let minutes =0;
// let seconds =0;
// for (let i = 0; i <= count;i++) {
//   console.log(`minute:`, minutes++);
//   for (let i = 0; i <= count;i++) {
//     console.log(`seconds`, seconds++)
//   }
//     seconds=0;
//     if (minutes === 2){
//       break;
//     }
// }


// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//
// for (let  i =1;i <= 2; i++){
//   if(i <= 2) {
//     console.log(`hours:`, i);
//   }
//   for (let  i =0;i <=59; i++ ){
//     if (i <= i) {
//
//     } console.log(`minutes:`, i)
//
//     for (let  i =0;i <= 59; i++){
//       if (i%1 === 0){
//         // console.log(`seconds`, i)
//       }
//     }
//   }
// }
//
// let COUNT = 59;
// let hour = 0;
// let hvylyna = 0;
// let sec = 0;
// for (let i = 1; i <= 23 && hour !== 2 && hvylyna !== 20; i++){
//   hour=i;
//   for (let i = 0; i <= COUNT; i++){
//     hvylyna=i;
//     if (hour === 2 && hvylyna === 20){
//       console.log(`test`);
//       console.log(`${hour} : ${hvylyna} : ${sec}`);
//       break;
//     }
//     for (let i = 0; i <= COUNT; i++){
//       sec=i;
//       console.log(`${hour} : ${hvylyna} : ${sec}`);
//     }
//   }
// }

// ______________________________________________________________________________________________________________________________________________________
// РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________
//
//
// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.
// let array =['a', 'b', 'c'];
// let arrNum= [ 1,2,3]
// for (let i= 0;i < 1;i++){
//   arrNum=array+arrNum;
// }
// console.log(arrNum)

// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].
// let arr = [1, 2, 3];
// console.log(arr);
// let newArr = arr.reverse()
//  console.log(newArr)

// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.push(4,5,6)
// console.log(arr)
// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
// let arr = [1, 2, 3];
// arr.unshift(4,5,6,)
// console.log(arr)
// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
// let array=['js', 'css', 'jq'];
// let elem = array.shift()
// console.log(elem)

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
// let array=['js', 'css', 'jq'];
// let elem = array.pop()
// console.log(elem)
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [4, 5].
// let arr =[1, 2, 3, 4, 5];
// console.log(arr.splice(3))
// - Дан масив [1, 2, 3, 4, 5]. Перетворіть масив в [1,2].
// let arr =[1, 2, 3, 4, 5];
// console.log(arr.splice(0,2))
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].
// let arr =[1, 2, 3, 4, 5];
// arr.splice(3,0,'a', 'b', 'c')
// console.log(arr)
//   Підказка. Необхідно стерти елементи, зберегти їх кудись. Дописати букви і після букв повернути стерті цифри
// - Дан масив [1, 2, 3, 4, 5]. Зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].
//   Підказка. Працюйте по принципу задачі вище.
// let arr =[1, 2, 3, 4, 5];
// arr.splice(1,0,'a', 'b',)
// arr.splice(6,0,`c`,)
// arr.splice(8,0,`e`,)
// console.log(arr)
// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// let arrNUMS =[111,298,393,44,555,60,73,843,96,10];
// for (let i=0;i<arrNUMS.length;i++){
//   if (arrNUMS[i]%2===0){
//     console.log(arrNUMS[i])
//   }
// }
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
// let arr1 =[111,298,393,44,555,60,73,843,96,10];
// // console.log(arr1)
// let arr2 =[];
// for (let i=0;i<arr1.length;i++){
//   arr2.push(arr1[i])
// }
// console.log(arr2)
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// let arr1 =[111,298,393,44,555,60,73,843,96,10];
// console.log(arr1)
// let arr2 =[];
// for (let i=0;i<arr1.length;i++){
//   arr2 = arr1
// }
// console.log(arr2)
// ============
//
// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// let arr =[2,17,13,6,22,31,45,66,100,-18];
// //   1. перебрати його циклом while
// let i = 0
// while (i < arr.length){
//   console.log(arr[i])
//   i++
// }
// //   2. перебрати його циклом for
// for (let i=0;i<arr.length;i++){
//   console.log(arr[i])
// }
//   3. перебрати циклом while та вивести  числа тільки з непарним індексом
// i=0
// while (i < arr.length){
//   if (i%2 ){
//     console.log(arr[i])
//   }i++
// }
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
// for (let i=0;i<arr.length;i++){
//   if (i%2 !==0){
//     console.log(arr[i])
//   }
// }
// 5. перебрати циклом while та вивести  числа тільки парні  значення
// i=0
// while (i < arr.length){
//   if (i%2 === 0){
//     console.log(arr[i])
//   }i++
// }
// 6. перебрати циклом for та вивести  числа тільки парні  значення
// for (let i=0;i<arr.length;i++){
//   if (i%2 ===0){
//     console.log(arr[i])
//   }
// }
// 7. замінити кожне число кратне 3 на слово "okten"
// for (let i=0;i<arr.length;i++){
//   if (i%3 === 0){
//      arr[i] = "okten"
//   }
//   console.log(arr[i])
// }
// // 8. вивести масив в зворотньому порядку.
// for (let i = arr.length;i > 0; i--){
//   console.log(arr[i])
// }
// // 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
//
// for (let i = arr.length;i > 0; i--){
//   if (i%3 === 0){
//      arr[i] = "okten"
//   }
//   console.log(arr[i])
// }
// створити пустий масив та :
// let array = [];
// let array1 = [];
//   - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.
//for (let i=0;i<50;i++){
//   i%2 === 0 ? array[i] = i  : array1[i] = i;
// }
// console.log(array);
// console.log(array1);
//
// 1. Створити пустий масив та :
// let array=[]
//   a. заповнити його 50 парними числами за допомоги циклу.
//   b. заповнити його 50 непарними числами за допомоги циклу.


// //   c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i=0;i<20;i++){
// array[i] = Math.floor(Math.random() * (20-1)+1);
// }
// console.log(array)
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
// // for (let i=0;i<20;i++){
// //   array[i] = Math.floor(Math.random() * (732-8)+8);
// // }
// // console.log(array)
// // 2. Вивести за допомогою console.log кожен третій елемен
// // for ( let i = 0 ; i < array.length; i +=3){
// //   console.log(array[i]);
// // }
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// // for ( let i = 1 ; i < array.length; i +=3){
// //   if (array[i]%2=== 0){
// //     console.log(array[i]);
// //   }
// // }
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// let arrayNew =[]
// for ( let i = 1 ; i < array.length; i +=3){
//   if (array[i]%2=== 0){
//     arrayNew.push(array[i]);
//   }
// }
// console.log(arrayNew);
// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// let arr =[ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0;i<arr.length;i++){
//   if (arr[i+1] % 2===0 ){
//     console.log(arr[i])
//   }
// }
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// let array = [100,250,50,168,120,345,188];
// let mathe =0;
// for (let i =0; i<array.length;i++){
// mathe=mathe+array[i]
// }
// // console.log(mathe)
// mathe=+mathe/array.length
// console.log(mathe)
//
// // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// arrayR = [100,250,50,168,120,345,188];
// console.log(arrayR)
// let mathe = [];
// for ( let i = 0; i < arrayR.length; i++){
//   mathe.push(arrayR[i] *5);
// }
// console.log(mathe);
// // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// //
// array = [`100`,`250`,false,168,120,`!!!!`,188];
// console.log(array);
// let newArr = [];
// for ( let i = 0; i < array.length; i++){
//   if(typeof array[i] === `number`)
//   newArr.push(array[i]);
// }
// console.log(newArr);
//
//
//   ______________________________________________________________________________________________________________________________________________________
// Додатково
// ______________________________________________________________________________________________________________________________________________________
// //
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// let arrLetter = [ 'a', 'b', 'c'];
// let arr =[];
// for (let i=0;i<arrLetter.length;i++){
//   arr=arr+arrLetter[i];
// }
// console.log(arr);
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// let arrLetterWhile= [ 'a', 'b', 'c'];
// let str = ``;
// let i = 0;
// while (i <arrLetter.length){
//   str=str+arrLetterWhile [i];
//   i++
// }
// console.log(str)
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
// mas = [ 'a', 'b', 'c'];
// strForof = ``;
// for (const string of mas){
//   strForof=strForof+string;
// }
// console.log(strForof)
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

