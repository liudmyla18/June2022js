// // - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // створити пустий масив, наповнити його 10 об'єктами new User(....)
//
// function User(id,name,surname,email,phone){
//   this.id =id;
//   this.name =name;
//   this.surname =surname;
//   this.email =email;
//   this.phone =phone;
//   // console.log(this);
// }
// let arrUser = []
// // new User(1,`Lisa`,`Stark`,`l.stark@mail.com`,`065 956 33 56`);
// // new User(2,`Roma`,`Alfa`,`l.alf@mail.com`,`098 768 56 67`);
// // new User(3,`Lera`,`Bate`,`l.betk@mail.com`,`098 564 34 23`);
// // new User(4,`Dima`,`Pokemon`,`l.pok@mail.com`,`096 456 76 98`);
// // new User(5,`Ira`,`Key`,`l.key@mail.com`,`099 67 453 34`);
// // new User(6,`Vlad`,`Sv`,`l.sv@mail.com`,`098 567 45 45`);
// // new User(7,`Olja`,`Foc`,`l.foc@mail.com`,`098 765 34 12`);
// // new User(8,`Rita`,`Copy`,`l.copik@mail.com`,`097 456 34 45`);
// // new User(9,`Ruslan`,`American`,`l.americk@mail.com`,`098 456 34 98`);
// // new User(10,`Dasha`,`Grey`,`l.greyk@mail.com`,`098 456 23 44`);
// arrUser.push(new User(1,`Lisa`,`Stark`,`l.stark@mail.com`,`065 956 33 56`))
// arrUser.push(new User(2,`Roma`,`Alfa`,`l.alf@mail.com`,`098 768 56 67`))
// arrUser.push(new User(3,`Lera`,`Bate`,`l.betk@mail.com`,`098 564 34 23`))
// arrUser.push(new User(4,`Dima`,`Pokemon`,`l.pok@mail.com`,`096 456 76 98`))
// arrUser.push(new User(5,`Ira`,`Key`,`l.key@mail.com`,`099 67 453 34`))
// arrUser.push(new User(6,`Vlad`,`Sv`,`l.sv@mail.com`,`098 567 45 45`))
// arrUser.push(new User(7,`Olja`,`Foc`,`l.foc@mail.com`,`098 765 34 12`))
// arrUser.push(new User(8,`Rita`,`Copy`,`l.copik@mail.com`,`097 456 34 45`))
// arrUser.push(new User(8,`Rita`,`Copy`,`l.copik@mail.com`,`097 456 34 45`))
// arrUser.push(new User(9,`Ruslan`,`American`,`l.americk@mail.com`,`098 456 34 98`))
// arrUser.push(new User(10,`Dasha`,`Grey`,`l.greyk@mail.com`,`098 456 23 44`))
// console.log(arrUser)
//
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
// let u = arrUser.filter(value => value.id % 2 === 0)
// console.log(u)
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// let sortUser = arrUser.sort((a,b)=> {
//   return b.id - a.id
// })
// console.log(sortUser)
// // - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// // створити пустий масив, наповнити його 10 об'єктами Client
// class Client {
//   constructor(id, name, surname , email, phone, order) {
//     this.id=id
//     this.name=name
//     this.surname=surname
//     this.email=email
//     this.phone=phone
//     this.order=order
//     // console.log(this)
//   }
// }
//
//
// let arrClient =[]
// arrClient.push(new Client(1,`Lisa`,`Stark`,`l.stark@mail.com`,`065 956 33 56`,[`products1`,`products2`]))
// arrClient.push(new Client(2,`Roma`,`Alfa`,`l.alf@mail.com`,`098 768 56 67`,[`products1`,`products2,`,]))
// arrClient.push(new Client(3,`Lera`,`Bate`,`l.betk@mail.com`,`098 564 34 23`,[`products1`,`products2`,`products3`,`products4`]))
// arrClient.push(new Client(4,`Dima`,`Pokemon`,`l.pok@mail.com`,`096 456 76 98`,[`products1`,`products2`,`products3`]))
// arrClient.push(new Client(5,`Ira`,`Key`,`l.key@mail.com`,`099 67 453 34`,[`products1`,`products2`,`products3`,`products4`]))
// arrClient.push(new Client(6,`Vlad`,`Sv`,`l.sv@mail.com`,`098 567 45 45`,[`products1`,`products2`,`products3`,`products4`,`products5`]))
// arrClient.push(new Client(7,`Olja`,`Foc`,`l.foc@mail.com`,`098 765 34 12`,[`products1`,`products2`,`products3`,`products4`]))
// arrClient.push(new Client(8,`Rita`,`Copy`,`l.copik@mail.com`,`097 456 34 45`,[`products1`,`products2`,`products3`,`products4`,`products5`,`products6`]))
// arrClient.push(new Client(8,`Rita`,`Copy`,`l.copik@mail.com`,`097 456 34 45`,[`products1`,`products2`,`products3`,`products4`]))
// arrClient.push(new Client(9,`Ruslan`,`American`,`l.americk@mail.com`,`098 456 34 98`,[`products1`,`products2`]))
// arrClient.push(new Client(10,`Dasha`,`Grey`,`l.greyk@mail.com`,`098 456 23 44`,[`products`]))
//
// console.log(arrClient)
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sotrArrayClient =arrClient.sort((a,b)=>{
// if (a.order>b.order){
//   return 1
// }
//   if (a.order<b.order){
//     return -1
//   }
//   if (a.order===b.order){
//     return 0
//   }
// })
// console.log(sotrArrayClient)

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model,manufacturer,chanYear,maxSpeed,engineVolume){
  this.model=model
  this.manufacturer=manufacturer
  this.chanYear=chanYear
  this.maxSpeed=maxSpeed
  this.engineVolume=engineVolume
  this.drive = function (){
    console.log((`Їдемо із швидкістю ${this.maxSpeed} на годину`))
  }
  this.info =function (){
    console.log(
    `model: ${this.model}
    manufacturer: ${this.manufacturer}
    chanYear: ${this.chanYear}
    maxSpeed: ${this.maxSpeed}
    engineVolume: ${this.engineVolume}
   `)
  }
  this.increaseMaxSpeed = function (newSpeed){
    this.maxSpeed +=newSpeed
  }
  this.changeYear = function (newValue){
    this.chanYear = newValue
  }

  this.addDriver = function (driver){
    this.driver = driver

  }

  console.log(this)

}
let car = new Car(`e-tron GT`,`Audi`,2022,184,`electrick`)
 driver ={
  name: `Sasha`
}

car.drive([`Їдемо із швидкістю ${this.maxSpeed} на годину`])
car.info()
car.increaseMaxSpeed(200)
car.changeYear(1111);
car.addDriver(`Vlad`)
car.info()

// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//   За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//   Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
