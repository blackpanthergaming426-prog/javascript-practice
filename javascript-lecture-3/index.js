/* let name=('waqar')
let age=18;
let isonline=true
let landcruiser;
let car=null;
let bignumber=12345679101112134151617;
let id1=Symbol('id')
console.log( typeof name,typeof age,typeof isonline,typeof landcruiser,typeof car,typeof bignumber,typeof id1); */
let name = 'waqar';  //string
let age = 18;        //number
let isonline = true; //boolean
let landcruiser;     //undefined
let car = null;      //object
let bignumber = 12345679101112134151617n; // bigint
let id1 = Symbol('id');  //symbol

//Copy Test
 let num1 = 10
let num2=num1
num2 = 20
//javaScript me agar ek number ko dusre variable me copy kiya jaye, to wo value ki copy hoti hai, isliye dusre variable ko change karne se asli number par koi asar nahi padta.

console.log(
  `name: ${name}  (${typeof name}), ` +
  `age: ${age} (${typeof age}), ` +
  `isonline: ${isonline} (${typeof isonline}) ` +
  `landcruiser: ${landcruiser} (${typeof landcruiser}), ` +
  `car: ${car} (${typeof car}), ` +
  `bignumber: ${bignumber} (${typeof bignumber}), ` +
  `id1: ${id1.toString()} (${typeof id1}), ` +
  `num1: ${num1},num2: ${num2}`
 );


