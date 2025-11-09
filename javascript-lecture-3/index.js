/* let name=('waqar')
let age=18;
let isonline=true
let landcruiser;
let car=null;
let bignumber=12345679101112134151617;
let id1=Symbol('id')
console.log( typeof name,typeof age,typeof isonline,typeof landcruiser,typeof car,typeof bignumber,typeof id1); */
let name = 'waqar';
let age = 18;
let isonline = true;
let landcruiser;     
let car = null;
let bignumber = 12345679101112134151617n; // bigint ke liye 'n' zaroori hai
let id1 = Symbol('id');

console.log(
  `name: ${name}  (${typeof name}), ` +
  `age: ${age} (${typeof age}), ` +
  `isonline: ${isonline} (${typeof isonline}) ` +
  `landcruiser: ${landcruiser} (${typeof landcruiser}), ` +
   `car: ${car} (${typeof car}), `+
  `bignumber: ${bignumber} (${typeof bignumber}), ` +
  `id1: ${id1.toString()} (${typeof id1})` 
);


 
    
