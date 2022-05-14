const toDoLists=document.querySelector("#todo-list");
const toDoForm=document.querySelector("#todo-form");
const toDoInput=document.querySelector("#todo-form input");
const savedToDoList = localStorage.getItem("toDoList-KEY");
let toDos=[];
TODOS_KEY="toDos";


function saveToDos(){
  localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}


function paintToDo(newToDo){
  const paintLi=document.createElement("li");
  paintLi.id=newToDo.id;
  const paintSpan=document.createElement("span");
  paintSpan.innerText=newToDo.text;
  paintLi.append(paintSpan);
  toDoLists.append(paintLi);
  const paintButton=document.createElement("Button");
  paintButton.innerText="❌";
  paintLi.append(paintButton);
  paintButton.addEventListener("click",removeToDo);
}

function handleToDoSubmit(e){
  e.preventDefault();
  const newToDo=toDoInput.value;
  toDoInput.value="";
  const newTodoObj={
    text:newToDo,
    id: Date.now(),
  };
  paintToDo(newTodoObj);
  toDos.push(newTodoObj);
  saveToDos();
}



function removeToDo(e){
  const paintLi= event.target.parentElement;
  paintLi.remove();
  toDos=toDos.filter((toDo)=> toDo.id!==parseInt(paintLi.id));
  saveToDos();
}

toDoForm.addEventListener("submit",handleToDoSubmit);

const savedToDos=localStorage.getItem(TODOS_KEY);

if(savedToDos){
  const parseToDos=JSON.parse(savedToDos);
  toDos = parseToDos;
  parseToDos.forEach(paintToDo);
}



