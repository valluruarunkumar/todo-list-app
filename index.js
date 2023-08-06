let todoItemsContainer1=document.getElementById("todoItemsContainer1");
let addButton=document.getElementById("add");
let inputValue=document.getElementById("field");
let saveButton=document.getElementById("saveButton");


// here retriving the data from the local storage
function getDataFromLocalStorage(){
    let retriveData=localStorage.getItem("data");
    let data=JSON.parse(retriveData);
    if (data === null){
        return[]
    }
    else{
        return data;
    }
}
let todoList=getDataFromLocalStorage()

// let todoList=[
//     {
//         task:"Learn HTML",
//         unique:1

//     },
//     {
//         task:"learn CSS",
//         unique:2
//     },
//     {
//         task:"learn JS",
//         unique:3
//     }
// ]



//this is for add todo items dynamically by the user
number=todoList.length;
function onAddTodo(){
    number++;
    let data = document.getElementById("field").value;
    if (data === "") {
        alert("Enter valid text");
        return;
    }
    else {
        addNew ={
        task: data,
        unique:number,
        isChecked:false

        }
        todoList.push(addNew);
        createAndAppendTodo(addNew);
        store();
    }
}

add.onclick=function(){
    onAddTodo();
}


// addding data to the local storage
function store(){
    localStorage.setItem("data",JSON.stringify(todoList));
}



// function for changing check box status i.e if it is clicked then that task should be strike out
function todoStatusChange(checkboxId,labelId,todoId)
{
    let inputElement=document.getElementById(checkboxId);
    let labelElement=document.getElementById(labelId);
    if (inputElement.checked === true){
        labelElement.classList.add("checked");
    }
    else{
        labelElement.classList.remove("checked");
    }
    let todoObjectIndex=todoList.findIndex(function(eachTodo){
        let eachTodoId="todo"+eachTodo.unique;
        if (eachTodoId === todoId){
            return true;
        }else{
            return false;
        }
    });

    let todoObject=todoList[todoObjectIndex];
    if (todoObject.isChecked===true){
        todoObject.isChecked=false;
    }
    else{
        todoObject.isChecked=true;
    }

}



// function for delete the  todo element if delete button clicked
// function deleteTodo(todoId){
//     let todoElement=document.getElementById(todoId);
//     todoItemsContainer1.removeChild(todoElement);
//     // console.log(todoId);
//     let deleteIndex=todoList.findIndex(function(eachTodo){
//         let eachTodoId="todo"+eachTodo.unique;
//         // console.log(eachTodoId);
//         if (eachTodoId === todoId){
//             return true;
//         }else{
//             return false;
//         }
//     });
//     todoList.splice(deleteIndex,1);
//     localStorage.removeItem(todoId);
// }
function deleteTodo(todoId){
    let todoElement=document.getElementById(todoId);
    todoItemsContainer1.removeChild(todoElement);

    let deleteIndex=todoList.findIndex(function(eachTodo){
        let eachTodoId="todo"+eachTodo.unique;
        if (eachTodoId === todoId){
            return true;
        }else{
            return false;
        }
    });

    todoList.splice(deleteIndex,1);
    function store(){
        localStorage.setItem("data", JSON.stringify(todoList));
    }
   
}




//the main function for creating whole label todo items

function createAndAppendTodo(todo){

    let checkboxId="checkbox"+todo.unique;
    let labelId="label"+todo.unique;
    let todoId="todo"+todo.unique;
   

    let todoItem=document.createElement("li");
    todoItem.classList.add("todo-item-container");
    todoItem.id=todoId;
    todoItemsContainer1.appendChild(todoItem);
    
    let inputElement=document.createElement("input");
    inputElement.classList.add("check-box");
    inputElement.type="checkbox";
    inputElement.id=checkboxId;
    inputElement.checked=todo.isChecked;
    inputElement.onclick=function(){
        todoStatusChange(checkboxId,labelId,todoId);
    }
    todoItem.appendChild(inputElement);
    
    let labelContainer=document.createElement("div");
    labelContainer.classList.add("container1");
    todoItem.appendChild(labelContainer);
    
    let labelElement=document.createElement("label");
    labelElement.classList.add("data");
    labelElement.setAttribute("for",checkboxId);
    labelElement.textContent=todo.task;
    labelElement.id=labelId;
    if (todo.isChecked===true){
        labelElement.classList.add("checked");
    }
    labelContainer.appendChild(labelElement);
    
    let deleteIconContainer=document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);
    
    let deleteIcon=document.createElement("i");
    deleteIcon.classList.add("fa-solid", "fa-trash-can");
    deleteIcon.id="trash";
    deleteIcon.onclick=function(){
        deleteTodo(todoId);
    }
    deleteIconContainer.appendChild(deleteIcon);
}

for (let eachTodo of todoList){
    createAndAppendTodo(eachTodo);
}
