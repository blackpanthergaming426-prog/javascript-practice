/* //primitive data type
let name="waqar"
let age=18

//Non-primitive data type
let user=["waqar","18",]
let people= { name:"waqar", age:"22"}
console.log(name,age ,typeof name,typeof age,typeof user,typeof people); */
/* console.log("Above output will be cleared now...");
console.clear(); */
/* let username = prompt("enter your name");
let userage = prompt("enter your age");
let isstudent = prompt("Are you a student? (true/false)");
let convertisstudent = Boolean(isstudent)
let favNumber = prompt("Enter your favorite number");
let convertedfavNumber = number(favNumber)
let nickName = prompt("Enter your nickname");
console.log(
  username, typeof username,
  userage, typeof userage,
  isstudent, typeof isstudent,
  favNumber, typeof favNumber,
  nickName, typeof nickName
); */
let username = prompt("Enter your name");

let userage = Number(prompt("Enter your age")); // direct number conversion

let isstudent = prompt("Are you a student? (true/false)").toLowerCase() === "true"; // direct boolean conversion

let favNumber = Number(prompt("Enter your favorite number")); // direct number conversion

let nickName = prompt("Enter your nickname");

console.log(
  username, typeof username,
  userage, typeof userage,
  isstudent, typeof isstudent,
  favNumber, typeof favNumber,
  nickName, typeof nickName
);

