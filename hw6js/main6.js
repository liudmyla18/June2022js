// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
// let str = 'hello world'
// console.log(str.length);
// //
//  let str1 = 'lorem ipsum'
// console.log(str1.length);
// //
// let str2 = 'javascript is cool'
// console.log(str2.length);
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let str = 'hello world'
// console.log(str.toLocaleUpperCase());
//
// let str1 = 'lorem ipsum'
// console.log(str1.toLocaleUpperCase());
//
// let str2 = 'javascript is cool'
// console.log(str2.toLocaleUpperCase());

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
// let str ='HELLO WORLD'
// console.log(str.toLowerCase());
//
// let str1 ='LOREM IPSUM'
// console.log(str1.toLowerCase());
//
// let str2 ='JAVASCRIPT IS COOL'
// console.log(str2.toLowerCase());

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty string   '
// console.log(str.replaceAll(`   `,``));
//
//  let s = str.trim();
// console.log(s);

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
//   let str = 'Ревуть воли як ясла повні';
// console.log(str.split(` `));
//
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.
// let numbers = [10,8,-7,55,987,-1011,0,1050,0];
// console.log(numbers.map(number => ` ` + number));

// // - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//   let nums = [11,21,3];
// // sortNums(nums,'ascending') // [3,11,21]
// // sortNums(nums,'descending') // [21,11,3]
// let sortNums=((direction,arr)=>{
//   if (direction ==='ascending'){
// arr.sort((a , b)=> a-b);
//   }
//   else if (direction === 'descending'){
//   arr.sort((a , b)=> b - a );}
//   return arr
// });
//
// console.log(sortNums( 'ascending', nums));
// console.log(sortNums( 'descending',nums));


// - є масив
// let coursesAndDurationArray = [
//   {title: 'JavaScript Complex', monthDuration: 5},
//   {title: 'Java Complex', monthDuration: 6},
//   {title: 'Python Complex', monthDuration: 6},
//   {title: 'QA Complex', monthDuration: 4},
//   {title: 'FullStack', monthDuration: 7},
//   {title: 'Frontend', monthDuration: 4}
// ];
// -- відсортувати його за спаданням за monthDuration

// console.log(coursesAndDurationArray.sort(function (a, b){
//   if (a.monthDuration>b.monthDuration){
//     return 1
//   }
//   if (a.monthDuration<b.monthDuration){
//     return -1
//   }
//   if (a.monthDuration===b.monthDuration){
//     return 0
//   }
// }));

// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// console.log(coursesAndDurationArray.filter(value=>value.monthDuration>=5));

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//
//
// {
//   cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//   color:'', // 'red','black'
// }
let cards =[
  {cardSuit:'spade',value:'6',color:'black'},
  {cardSuit:'diamond',value:'ace',color:'red'},
  {cardSuit:'heart',value:'jack',color:'black'},
  {cardSuit:'clubs',value:'queen',color:'red'},
  {cardSuit:'spade',value:'6',color:'black'},
  {cardSuit:'diamond',value:'king',color:'red'},
  {cardSuit:'heart',value:'joker',color:'black'},
  {cardSuit:'clubs',value:'queen',color:'red'},
  {cardSuit:'spade',value:'9',color:'black'},
  {cardSuit:'diamond',value:'ace',color:'red'},
  {cardSuit:'heart',value:'7',color:'black'},
  {cardSuit:'clubs',value:'queen',color:'red'},
  {cardSuit:'spade',value:'8',color:'black'},
  {cardSuit:'diamond',value:'jack',color:'red'},
  {cardSuit:'heart',value:'jack',color:'black'},
  {cardSuit:'clubs',value:'queen',color:'red'},

];
// console.log(cards)
// - знайти піковий туз
console.log(cards.find(value => value.cardSuit ==='diamond'))
// - всі шістки
// console.log(cards.filter(value=>value.value===`6`));
// //- всі червоні карти
// console.log(cards.filter(value=>value.color==='red'));
// //- всі буби
// console.log(cards.filter(value=>value.cardSuit==='diamond'));
// // - всі трефи від 9 та більше
// console.log(cards.filter(value=>value.cardSuit==='clubs' && value.value >`9`));

// Додатково по reduce
// Взяти описану колоду карт, та за допомоги редюсу попакувати всі карти по "мастях" в об'єкт
let reduce = cards.reduce((accumulator, card)=>{
  if (card.cardSuit ===`spade`){
    accumulator.spades.push(card);
  }
  if (card.cardSuit===`diamond`){
    accumulator.diamonds.push(card);
  }
  if (card.cardSuit === `heart`){
    accumulator.hearts.push(card);
  }
 if (card.cardSuit === `clubs`){
   accumulator.clubs.push(card);
 }
return accumulator;
},{
  spades:[],
  diamonds:[],
  hearts:[],
  clubs:[],
 });
console.log(reduce);

// {

//   spades:[],
//     diamonds:[],
//   hearts:[],
//   clubs:[]
// }





