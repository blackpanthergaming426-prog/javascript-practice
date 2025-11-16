let balance =1000;
const correctpin=3458;
let userpin=Number(prompt('enter your pin'))
if (correctpin===userpin) {
    alert('congratulation your pin is correct')
    let choice = Number(prompt(
        'Welcome to js atm\n\n' +
        '1.check balance\n' +
        '2.withdraw\n' +
        '3.deposit\n'  +
        '4.exit\n' +
        'enter your choice(1-4)'
        
    ));
    //check balance
    if (choice===1) {
        alert('your balance is' + balance)
        
    }
    //withdrawl
    else if (choice===2) {
        let withdrawAmount=Number(prompt('enter your amount'))
        if (withdrawAmount<=balance){
            balance-= withdrawAmount ;
            alert('withdrawamount succesfull new balance' + balance)
            
        } else {alert('insufficient balance')
            
        }
    }
    else if (choice===3) {
        let depositAmount=Number(prompt('enter your deposit amount'));
        balance+=depositAmount;
         alert('depositt succesfull. new balance' + balance)
    }
    else if (choice===4) {
        alert('thank you for using js atm!')
        
    }else{
        alert('invaild choice')
    }
}
else {alert('wrong pin')}



