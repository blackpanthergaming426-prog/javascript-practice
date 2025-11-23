/* let row =("how many times to count");

while (row<=10) {
    console.log(row);
    row++;
} */
/* let odd= +prompt('enter start odd number 1-15');
while (odd<=15) {
alert(odd);
odd+=2; 
} */

/* let num = 1
while (num<=10 ) {
    console.log(5*num);
    num++;
    
} */


/* let password = +prompt("enter your password")
while (password !== 1234) {
    password = +prompt("wrong password try again")
}
alert("acces granted"); */

/* let number = +prompt('type the correct number')
let num=7;
while (num!==number) {
    number=+prompt('wrong number try again')

}
alert('your number is correct'); */
/* alert("wake up");
let click=prompt("Type stop to turn off the alarm")
let client ="stop"
while (click!==client) {
    click=prompt("please stop the alarm")
}
alert("you woke up"); */


//do while loop

/* let number=1;
do {
    console.log(number);
    number++;
} while (number<=5);
 */

/* let num = +prompt("how mant times to count")
do {
    alert("Hello");
    num++
} while (num <= 20); */

/* let answer;
let menu = "1. Pizza \n\
2. Burger \n\
3. Drinks "
do {
alert(menu);
answer=prompt("do you want to see menu again?  yes/no");
} while (answer==="yes"); */


/* let answer;
let candy="you ate a candy"
do {
    alert(candy);
    answer=prompt("do you want eat candy? yes/more/no")
} while (answer.toLowerCase()==="yes"|| answer.toLowerCase()==="more");

 */
 
let word;
let random="khulja sim sim";
do {
     word = prompt("say the magic word");
   if ( word!==random ) {
    alert("wrong word please try again")
   }
   
} while (word!==random);
alert("the door is open");