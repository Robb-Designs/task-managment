const addTaskBtn = document.getElementById("add-btn");
const modal = document.getElementById("task-modal");
//modal button caching
const addBtnModal = document.getElementById("add-btn-modal");
const cancelBtnModal = document.getElementById("cancel-btn-modal");
//modal input caching
let taskNameInput = document.getElementById("task-name-input");
let categoryInput = document.getElementById("categories");
let statusInput = document.getElementById("status");
let deadlineInput = document.getElementById("deadline-date");
let descriptionInput = document.getElementById("form-description");





//click to have modal visible for input
addTaskBtn.addEventListener("click", () => {
    //removes hidden class on the modal's ID when clicke
    modal.classList.remove("hidden");
    modal.classList.add("fixed");
})


//cancel button to close the modal
cancelBtnModal.addEventListener("click", () => {
    modal.classList.add("hidden")
})


//function to grab values from the form modal and creates an obj
let createTaskObj = () => {

    let inputToObj = {
        name: taskNameInput.value,
        category: categoryInput.value,
        deadline: deadlineInput.value,
        description: descriptionInput.value,
        status: "to-do" //default
    };
    return inputToObj;
}


//
 addBtnModal.addEventListener("click", ()=>{
    const task = createTaskObj();
    modal.classList.add("hidden"); //toggle the class to hidden
    console.log(task);
    
 })



