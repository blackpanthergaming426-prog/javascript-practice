

let usercount = 0;
let compcount = 0;

let userscorepara=document.querySelector(".para1")
let compscorepara=document.querySelector(".para2")

let msgpara = document.querySelector(".btn2")

let choices = document.querySelectorAll(".rock");

const showwinner=(userwin)=>{
 if(userwin){
    usercount++;
    userscorepara.innerText=usercount
    console.log("you win");
    msgpara.innerText="You Win!"
      msgpara.style.backgroundColor="green"
    msgpara.style.color="black"
    
 }
 else{
    compcount++;
    compscorepara.innerText= compcount
     
    msgpara.innerText="You Lose!"
    msgpara.style.backgroundColor="red"
    msgpara.style.color="black"
    
    
 }

}

const playgame = (userchoice) => {
    const genchoice = compchoice();
    let drawgame = () => {
    msgpara.innerText="Game was draw try again"
      msgpara.style.backgroundColor="yellow"
    msgpara.style.color="black"
    

    }
    if (userchoice === genchoice) {
        drawgame();
    }
    else {
        let userwin = true;
        if(userchoice==="rock")
            //paper scissor
       userwin= genchoice==="paper" ? false: true;
       else if(userchoice=== "paper"){
        // scissors rock
        userwin= genchoice==="scissors" ? false:true
       }
       else{
// rock paper
        genchoice==="rock" ? false : true 
       }
       showwinner(userwin);
}



}
//genrate comp choice
const compchoice = () => {
    let value = ["rock", "paper", "scissors"]
    let option = Math.floor(Math.random() * 3);
    return value[option];


}



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userchoice = choice.getAttribute("id")
        playgame(userchoice)


    })
})
// let choices = document.querySelectorAll(".rock");

// choices.forEach((choice) => {
//     choice.addEventListener("click", () => {
//         console.log("hello");
//     });
// });
