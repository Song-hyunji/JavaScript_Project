const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

function deleteToDo(){
    console.log("lala");
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = newTodo;
    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); 
    li.appendChild(button);
    
    toDoList.appendChild(li);

}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = toDoInput.value;
    console.log(newToDo);
    toDoInput.value = "";
    paintToDo(newToDo);
}
toDoForm.addEventListener("submit", handleToDoSubmit);