// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let tenelenent =[1.2, 12, 123, `banana`, `peach`, `apple`, `cherry`, `pear`, `mango`, `0.5`]
  console.log(tenelenent[0]);
  console.log(tenelenent[1]);
  console.log(tenelenent[2]);
  console.log(tenelenent[3]);
  console.log(tenelenent[4]);
  console.log(tenelenent[5]);
  console.log(tenelenent[6]);
  console.log(tenelenent[7]);
  console.log(tenelenent[8]);
  console.log(tenelenent[9]);

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1={
  title:`The Hobbit`,
  pageCount: 384,
  genre: `fantasy`,
}
console.log(book1)
let book2={
  title:`The silent patient`,
  pageCount: 200,
  genre: `detective`,
}
console.log(book2)
let book3={
  title:`Jane Eyre`,
  pageCount: 190,
  genre: `novel`,
}
console.log(book3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - масив. Кожен автор має поля name,age
let bookcopi1  = {
  title:`The Hobbit`,
  pageCount: 384,
  genre: `fantasy`,
  authors:[`John Tolkien`, 81]
}
console.log(bookcopi1.authors)


let bookcopi2={
  title:`The silent patient`,
  pageCount: 200,
  genre: `detective`,
  authors:[ `Alex Hichaelides`,21]
}
console.log(bookcopi2.authors)
let bookcopi3={
  title:`Jane Eyre`,
  pageCount: 190,
  genre: `novel`,
  authors:[{name:[`Chorlotte Bronte`], age:[47],}]
}
console.log(bookcopi3.authors[0].age)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
 let array = [
   { name:`Dima`, username:`ddddd`,password: [`d1d11d1`]},
   {name:`Disha`, username:`hhhh`,password: [`h1h1h1h1`]},
   { name:`Liza`, username:`lllll`,password:[`lll111ll`]},
   {name:`lena`, username:`nnnnn`,password:[`n2n2n2n`]},
   {name:`Anna`, username:`aaaaa`,password:[`3a3aa3a`]},
   {name:`Kolya`, username:`kkkk`,password:[`k5k5k5k`]},
   {name:`Danya`, username:`yyyy`,password:[`y6yyy6y`]},
   {name:`Ira`, username:`iiiiiii`,password:[`i8i8i8`]},
   {name:`Jna`, username:`jjjjj`,password:[`j4jj5j4`]},
   {name:`Rita`, username:`rrrrr`,password:[`r8r8r6rr`]},
]
console.log(array[0].password)
console.log(array[1].password)
console.log(array[2].password)
console.log(array[3].password)
console.log(array[4].password)
console.log(array[5].password)
console.log(array[6].password)
console.log(array[7].password)
console.log(array[8].password)
console.log(array[9].password)
