//window-global - globalThis

/* let myDivs = document.querySelectorAll('.my_div') ;
console.log(myDivs); */

/* let myId = document.getElementById('.my_id') ;

console.log(myId);
myId.style.background = 'red';  */

/* let myLovelyDiv = document.getElementsByClassName("my_div");

const div = myLovelyDiv[0];
div.innerHTML += "poka";
console.log(div); */

/* let myLovelyDiv = document.getElementsByClassName("my_div");

const div = myLovelyDiv[0];
div.outerHTML = "poka";
console.log(div);
 */
/* 
let newDiv = document.createElement("div");
new.className = 'test_div'; */

document.body.style.margin = 0;

let header = document.createElement("header");
header.className = "page-header";
header.innerHTML = "Заголовок";
header.style.background = "#00fffff";
header.style.height = "60px";
document.body.prepend(header);

let section = document.createElement("section");
section.className = "page-section";
header.after(section);

let list = document.createElement("ol");
list.className = "list";
section.prepend(list);

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.className = "list-element";
  li.innerHTML = `Элемент списка ${i}`;
  list.append(li);
}
let inputWrapper = document.createElement("div");
inputWrapper.className = "input-wrapper";
inputWrapper.style.display = "flex";
inputWrapper.style.flexDirection = "column";
inputWrapper.style.gap = "10px";
inputWrapper.style.width = "150px";
list.after(inputWrapper);

let input = document.createElement("input");
input.type = "text";
inputWrapper.prepend(input);

let button = document.createElement("button");
button.className = "btn";
button.innerHTML = "Добавить TODO";
button.onclick = function () {

}
input.after(button);

button.addEventListener('click', handleToDoAdd) ;

function handleToDoAdd() {
  const inputValue = input.value;
  const newTodo = `${inputValue}` ;
  inputValue && list.appendChild(newTodo) ;
}
input.value;