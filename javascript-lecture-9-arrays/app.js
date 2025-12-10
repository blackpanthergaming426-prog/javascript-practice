                  /* class practice */
/* let countries = ["pakistan","iran","turkey","sudan","bangaldash",]
countries.push("saudiaarabia")
countries.pop() */
/* console.log(countries); */
/* console.log(countries.includes("turkey")); */
/* let arr =[]
for (let index = 1; index <= 50; index++) {
    arr.push(index)
}
for (let index = 0; index < arr.length; index++) {
    if(arr[index]  % 2===0){
        console.log(arr[index]);
        
    }
} */


    //bigggest number
    //let arre = prompt("enter your number in coomas")
   /*   let arre = [20,40,60,80,100,120,140,160,200] */ 
   /* arre=arre.split(",") */
/*       let biggest = arre[0]; *//* 
      for (let index = 0; index < arre.length; index++) {
        arre[index] = Number(arre[index]);
      } */



      /* for (let index = 1; index < arre.length; index++) {
        if ( arre[index] > biggest ) {
            biggest=arre[index]
        }
      }
      alert("biggest number is " + biggest);
       */

    let tasks = []
    function addtask(taskname) {
        tasks.push(taskname)
        alert("task added")
    }
    function removetask(taskname) {
        let index = tasks.indexOf(taskname)
        if(index!==-1){ 
            tasks.splice( index,1)
              alert("task removed")
        }else{
            alert("task not found")
        }
    }
function showtask() {
    if (tasks.length===0) {
        console.log("no task to show");
        
    }
    else{
        console.log("task show");
        for (let index = 0; index < tasks.length; index++) {
            console.log((index + 1)  + ". "   + tasks  [index]);
            
        }
    }
} 
addtask("study")
addtask("exercise")
addtask("play games")
addtask("clean room")
addtask("coding")
removetask("clean room")
/* showtask() */
let find = tasks.indexOf("play games");
if (find !== -1) {                     
    tasks.splice(find, 1);             
    alert("Task removed");
} else {
    alert("Task not found");           

}
showtask()
