/* let balance =1000;

const correctpin=3456;
let userpin= Number(prompt('enter your pin'))
if (correctpin===userpin){
    alert('congratulation your pin is correct')
  let choice = prompt(
  "Welcome to JS ATM\n\n" + 
  "1 Check Balance\n" +
  "2 Withdraw\n" +
  "3 Deposit\n" +
  "4 Exit\n\n" +
  "Enter your choice (1-4):"
);
choice=Number(choice);
}
if (choice===1){
    alert('your bank balance is 1000')
}
else{
    alert('wrong pin')
} */
let balance = 1000;
const correctpin = 3456;
let userpin = Number(prompt('Enter your PIN:'));

if (correctpin === userpin) {
    alert('Congratulations! Your PIN is correct.');

    let choice = Number(prompt(
        "Welcome to JS ATM\n\n" + 
        "1. Check Balance\n" +
        "2. Withdraw\n" +
        "3. Deposit\n" +
        "4. Exit\n\n" +
        "Enter your choice (1-4):"
    ));

    if (choice === 1) {
        alert('Your bank balance is ' + balance);
    } else if (choice === 2) {
        let withdrawAmount = Number(prompt('Enter amount to withdraw:'));
        if (withdrawAmount <= balance) {
            balance -= withdrawAmount;
            alert('Withdrawal successful. New balance: ' + balance);
        } else {
            alert('Insufficient balance!');
        }
    } else if (choice === 3) {
        let depositAmount = Number(prompt('Enter amount to deposit:'));
        balance += depositAmount;
        alert('Deposit successful. New balance: ' + balance);
    } else if (choice === 4) {
        alert('Thank you for using JS ATM!');
    } else {
        alert('Invalid choice!');
    }                           

} else {
    alert('Wrong PIN!');
}
