/* function thisname(subject) {
    console.log("hello you are learning "   +  subject  +   " js");
    
}
thisname("urdu") */
/* 
function greet(name) {
    console.log("your name is " + name );
    
}
greet("waqar"); */
/* function greetboy(a,b) {
    return  a+b;
}
let result= greetboy(5,8)
console.log(result); */

/* function multiply(x) {
  return x * 2;
}

let x = multiply(5);
console.log(x);
 */





//max nunber

/* 
function maxnumber(a,b,c){
    if (a >= b && a >= c){
        return a ;
    }
    else if (b >=a && b >= c){
        return b;}
    else {
        return c ;
    }
}
let largest=maxnumber(5,9,3)
console.log(largest);
 */

/* function calculatebill(price,quantity){
    return price * quantity ;

}
let profit = calculatebill(300,5);
console.log(profit);

 */


//lucky number


/* function luckynumber(name){
      let number = Math.floor(Math.random() * 10) + 1;
      return (name + " your lucky number is " + number);
}
let username = luckynumber() */


/* function luckynumber(){
    let name =prompt("enter your name")
    let num = Math.floor(Math.random()*10)+1
    alert( name + " your luckynumber is " + num)
}
luckynumber();
 */





/* function choicedrink(choice="tea"){
    if(choice==="tea"){
        return "your " + choice + " is ready"
    }
    else if (choice==="coffee"){
        return "your " + choice + " is ready"

    }
    else{ return"invaild choce";}
}
let choce = choicedrink("coffee")
console.log(choce);
 */

/* 
function userpassword(){
    let password=prompt("enter your password");
   if(password.length <= 6){
    console.log("weak");
    return;
    
   }
   let hasletters=/[a-zA-Z]/.test(password);
   let hasnumber=/[0-9]/.test(password);
  let hasspecial= /[!@#$%^&*()_+]/.test(password)

   if(password.length >=8 && hasletters && hasnumber&&hasspecial){
    console.log("strong");
    return;
   }
   if(password.length>=7 && hasletters && hasnumber){
    console.log("medium");
    return;
   }
   //otherwise weak
   console.log("weak");
   
    
}
userpassword()
 */



//converter celsius to fehranite
function converter() {
    // User se Celsius value number me lo
    let celsius = +prompt("Enter temperature in Celsius:");

    // Check karo agar user ne number diya hai
    if (isNaN(celsius)) {
        alert("Invalid input! Please enter a number.");
        return;
    }

    // Formula lagao Celsius → Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
alert(celsius + "°C is equal to " + fahrenheit + "°F");


}

// Function call
converter();


