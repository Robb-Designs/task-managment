//where all the task objects will be held
const userTasks = [];

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

// made a map obj...if the user selects a status, then the div gets appended to the corresponding container map property
// better to map like this insteadd of using a for loop andd condditionals, this will scale easier
const containerMap = {
    "to-do": document.getElementById("to-do-content"),
    "in-progress": document.getElementById("in-progress-content"),
    "completed": document.getElementById("completed-content"),
    "overdue": document.getElementById("overdue-content")
};





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
        status: statusInput.value
    };
    return inputToObj;
}


//
addBtnModal.addEventListener("click", () => {
    const task = createTaskObj();

    if (!containerMap[task.status]) {
        console.error("Invalid status:", task.status);
        return;
    }

    userTasks.push(task);   // only data
    renderTask();           // render everything

    //clears the modal form
    taskNameInput.value = "";
    categoryInput.value = "";
    deadlineInput.value = "";
    descriptionInput.value = "";
    statusInput.value = "to-do"; // or default


    modal.classList.add("hidden"); //toggle the class to hidden



    console.log(`Task Status: ${task.status}`);
    console.log(userTasks);

})

//rendering task from the global array into cards
const renderTask = () => {
    //clears so ddoesnt make dduplicates
    Object.values(containerMap).forEach(container => {
        container.innerHTML = "";
    });
    //loop through the global array of tasks and render a card

    for (let i = 0; i < userTasks.length; i++) {
        const task = userTasks[i]; // get the object from global array
        const taskCard = document.createElement("div"); //creates DOM div element

        taskCard.innerHTML = `
            <h3>${task.name}</h3>
            <p>Deadline: ${task.deadline}</p>
            <p>${task.description}</p>
        `;

        const targetContainer = containerMap[task.status];

        if (targetContainer) {
            targetContainer.appendChild(taskCard);
        }

    }

}
