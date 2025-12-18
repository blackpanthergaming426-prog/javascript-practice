const main = document.createElement("main")
main.style.height = "100vh";
main.style.backgroundColor = "red";
main.style.display = "flex";
main.style.justifyContent = "center";
main.style.alignItems = "center";
document.body.appendChild(main);

const box = document.createElement("div")
box.style.height = "400px"
box.style.width = "400px"
box.style.backgroundColor = "white"
box.style.position = "relative"
box.style.borderRadius = "10px"
main.appendChild(box);

const inputbox = document.createElement("div")
inputbox.style.padding = "20px"

const input = document.createElement("input")
input.setAttribute("placeholder", "Enter your task")

const addbutton = document.createElement("button")
addbutton.textContent = "button"

inputbox.appendChild(input)
inputbox.appendChild(addbutton)
box.appendChild(inputbox)

const list = document.createElement("ul")
box.appendChild(list)

let edittingitem = null;

const addTask = () => {
  const value = input.value.trim();
  if (value === "") return;

  // ===== EDIT / SAVE MODE =====
  if (edittingitem) {
    edittingitem.querySelector("span").textContent = value;
    edittingitem = null;
    input.value = "";
    return;
  }

  // ===== ADD MODE =====
  const item = document.createElement("li")
  item.style.position = "relative"

  const text = document.createElement("span")
  text.textContent = value;

  // EDIT BUTTON
  const editbtn = document.createElement("button")
  editbtn.textContent = "edit";
  editbtn.style.position="absolute"
  editbtn.style.right="10px"
  editbtn.style.paddingRight="10px"
  editbtn.style.paddingLeft="15px"
  editbtn.addEventListener("click", () => {
    input.value = text.textContent
    edittingitem = item
  })

  // DELETE BUTTON
  const deltebtn = document.createElement("button")
  deltebtn.textContent = "delete";
  deltebtn.style.position = "absolute"
  deltebtn.style.right = "50px"

  deltebtn.addEventListener("click", () => {
    list.removeChild(item)
    if (edittingitem === item) {
      edittingitem = null;
      input.value = "";
    }
  })

  item.appendChild(editbtn)
  item.appendChild(text)
  item.appendChild(deltebtn)
  list.appendChild(item)

  input.value = "";
}

input.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    addTask()
  }
})

addbutton.addEventListener("click", function () {
  addTask();
});
