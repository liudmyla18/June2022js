// - Є змінна х, якій ви надаєте довільне числове значення.
//   Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3


let x = 3;

if (x) {
    x = 3
  console.log('Вірно')
   }
else {
  x = 0
  console.log('Невірно')
}
// console.log(x)




// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

//
let time=16;

if ( time >= 0 && time <= 14) {
  console.log('1');
}
if (time >= 15 && time <= 30) {
  console.log('2');
}
if (time >= 31 && time <= 45) {
  console.log('3');
}
if (time >= 46 && time <= 59) {
  console.log('4');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).


let day = 5;

if ( day >= 1 && day <= 10) {
  console.log('1');
}
if (day >= 11 && day <= 20) {
  console.log('2');
}
if (day >= 21 && day <= 30) {
  console.log('3');
}



// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

// let week = prompt('Enter the serial number of the day of the week');

switch (1) {
  case 1:
  case (`monday`):
    console.log(`monday`);
    break;
  case `2`:
    console.log(`tuesday`);
    break;
  case `3`:
    console.log(`wednesday`);
    break;
  case `4`:
    console.log(`thursday`);
    break;
  case `5`:
    console.log(`friday`);
    break;
  case `6`:
    console.log(`saturday`);
    break;
  case `7`:
    console.log(`sunday`);

}



//   - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let namber1 = 4;
let namber2 = 8;

if (namber1 < namber2){
  console.log(namber2)
}else if (namber1 > namber2){
  console.log(namber1)
}else if (namber1 === namber2)
  console.log(namber2)

//   - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let xx = prompt(`?`);
let isRoadClear = prompt('?');
if ( xx === `default`|| isRoadClear === `falsy` ) {

}
console.log(`default`);
