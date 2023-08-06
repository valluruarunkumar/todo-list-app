let textArea=document.getElementById("text"); 
let saveButton=document.getElementById("save");
saveButton.onclick=function(){
    let data=textArea.value;
    localStorage.setItem("text",data);
}

let text=localStorage.getItem("text");
console.log(text);
if (text ===null){
    textArea.value="";
}
else{
    textArea.value=text;
}




















// let todoItemsContainer1=document.getElementById("todoItemsContainer1");
// let addButton=document.getElementById("add");
// let inputValue=document.getElementById("field");
// let saveButton=document.getElementById("saveButton");


// //here retriving the data from the local storage
// function getDataFromLocalStorage(){
//     let retriveData=localStorage.getItem("data");
//     let data=JSON.parse(retriveData);
//     if (data === null){
//         return[]
//     }
//     else{
//         return data;
//     }
// }

// let todoList=getDataFromLocalStorage()

// // let todoList=[
// //     // {
// //     //     task:"Learn HTML",
// //     //     unique:1

// //     // },
// //     // {
// //     //     task:"learn CSS",
// //     //     unique:2
// //     // },
// //     // {
// //     //     task:"learn JS",
// //     //     unique:3
// //     // }
// // ]



// //this is for add todo items dynamically by the user
// number=todoList.length;
// function onAddTodo(){
//     number++;
//     let data = document.getElementById("field").value;
//     if (data === ""){
//         alert("Enter valid text");
//         return;
//     }
//     else {
//         addNew =[{
//         task: data,
//         unique:number
//         }]
//         todoList.push(addNew);
//         createAndAppendTodo(addNew);
//     }
// }

// add.onclick=function(){
//     onAddTodo();
// }


// //addding data to the local storage
// function store(){
//     localStorage.setItem("data",JSON.stringify(todoList));
// }



// // function for changing check box status i.e if it is clicked then that task should be strike out
// function todoStatusChange(checkboxId,labelId)
// {
//     let inputElement=document.getElementById(checkboxId);
//     let labelElement=document.getElementById(labelId);
//     if (inputElement.checked === true){
//         labelElement.classList.add("checked");
//     }
//     else{
//         labelElement.classList.remove("checked");
//     }
// }



// // function for delete the  todo element if delete button clicked
// function deleteTodo(todoId){
//     let todoElement=document.getElementById(todoId);
//     todoItemsContainer1.removeChild(todoElement);
// }


// //the main function for creating whole label todo items

// function createAndAppendTodo(todo){

//     let checkboxId="checkbox"+todo.unique;
//     let labelId="label"+todo.unique;
//     let todoId="todo"+todo.unique;
   

//     let todoItem=document.createElement("li");
//     todoItem.classList.add("todo-item-container");
//     todoItem.id=todoId;
//     todoItemsContainer1.appendChild(todoItem);
    
//     let inputElement=document.createElement("input");
//     inputElement.classList.add("check-box");
//     inputElement.type="checkbox";
//     inputElement.id=checkboxId;
//     inputElement.onclick=function(){
//         todoStatusChange(checkboxId,labelId);
//     }
//     todoItem.appendChild(inputElement);
    
//     let labelContainer=document.createElement("div");
//     labelContainer.classList.add("container1");
//     todoItem.appendChild(labelContainer);
    
//     let labelElement=document.createElement("label");
//     labelElement.classList.add("data");
//     labelElement.setAttribute("for",checkboxId);
//     labelElement.textContent=todo.task;
//     labelElement.id=labelId;
//     labelContainer.appendChild(labelElement);
    
//     let deleteIconContainer=document.createElement("div");
//     deleteIconContainer.classList.add("delete-icon-container");
//     labelContainer.appendChild(deleteIconContainer);
    
//     let deleteIcon=document.createElement("i");
//     deleteIcon.classList.add("fa-solid", "fa-trash-can");
//     deleteIcon.id="trash";
//     deleteIcon.onclick=function(){
//         deleteTodo(todoId);
//     }
//     deleteIconContainer.appendChild(deleteIcon);
// }

// for (let eachTodo of todoList){
//     createAndAppendTodo(eachTodo);
// }