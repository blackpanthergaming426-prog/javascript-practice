const heading =document.getElementById("header")
console.log(heading);
const classe=document.getElementsByClassName("Noone")
/* console.log(classe); */
 console.log(classe[0]); 
const para = document.querySelector(".nodeffeat");
console.log(para);
const noreturns=document.querySelectorAll("nidonga")
console.log(noreturns);
heading.textContent="niiiiiiiiiho"
para.innerHTML="<h1> nhdcc</h1>"
heading.style.color="blue"
heading.style.backgroundColor="green"
heading.style.fontSize="67px"

const crete=document.createElement("p")
document.body.appendChild(crete)
crete.textContent="helloo"
let newh1 = document.createElement("h1")
document.body.prepend(newh1)
newh1.textContent="bilkul shi"
newh1.remove();
let fname = document.createElement("p")
let fname2 = document.createElement("p")
document.body.append(fname,fname2)
let img = document.getElementsByTagName("img")
let firstimage= img[0];
firstimage.setAttribute("src","./img/dog-image.jpeg")

console.log(firstimage.getAttribute("src"))
let tag=document.createElement("ul")
ap