//where all the task objects will be held
let userTasks = [];

const addTaskBtn = document.getElementById("add-btn");
const modal = document.getElementById("task-modal");
const filter = document.getElementById("filter-category");
//modal button caching
const addBtnModal = document.getElementById("add-btn-modal");
const cancelBtnModal = document.getElementById("cancel-btn-modal");
const clearTaskBtn = document.getElementById("clear-btn");
//modal input caching
let taskNameInput = document.getElementById("task-name-input");
let categoryInput = document.getElementById("categories");
let statusInput = document.getElementById("status");
let deadlineInput = document.getElementById("deadline-date");
let descriptionInput = document.getElementById("form-description");

// made a map obj...if the user selects a status, then the div gets appended to the corresponding container map property
// better to map like this insteadd of using a for loop andd condditionals, this will scale easier
let containerMap = {
    "to-do": document.getElementById("to-do-content"),
    "in-progress": document.getElementById("in-progress-content"),
    completed: document.getElementById("completed-content"),
    overdue: document.getElementById("overdue-content"),
};

//click to have modal visible for input
addTaskBtn.addEventListener("click", () => {
    //removes hidden class on the modal's ID when clicke
    modal.classList.remove("hidden");
    modal.classList.add("fixed", "animate-fadeIn");
});

//cancel button to close the modal
cancelBtnModal.addEventListener("click", () => {
    modal.classList.add("hidden");
    modal.classList.remove("animate-fadeIn");

});

//function to grab values from the form modal and creates an obj
let createTaskObj = () => {
    let inputToObj = {
        id: Date.now(),
        name: taskNameInput.value,
        category: categoryInput.value,
        deadline: deadlineInput.value,
        description: descriptionInput.value,
        status: statusInput.value,
    };
    return inputToObj;
};

//
addBtnModal.addEventListener("click", () => {
    const task = createTaskObj();

    if (!containerMap[task.status]) {
        console.error("Invalid status:", task.status);
        return;
    }

    userTasks.push(task); // only data
    renderTask(); // render everything

    //clears the modal form
    taskNameInput.value = "";
    categoryInput.value = "";
    deadlineInput.value = "";
    descriptionInput.value = "";
    statusInput.value = "to-do"; // places default

    modal.classList.add("hidden"); //toggle the class to hidden

    console.log(`Task Status: ${task.status}`);
    console.log(userTasks);
});

//rendering task from the global array into cards
const renderTask = (tasks = userTasks) => {
    Object.values(containerMap).forEach((container) => {
        container.innerHTML = "";
    });

    tasks.forEach((task) => {
        let displayStatus = task.status;

        if (
            task.status !== "completed" &&
            task.deadline &&
            isOverdue(task.deadline)
        ) {
            displayStatus = "overdue";
        }

        const taskCard = document.createElement("div");
        // added animation
        taskCard.classList.add(
            "task-card",
            "transition",
            "duration-200",
            "animate-in"
        );

        taskCard.innerHTML = `
        <div class="card bg-base-100 shadow-md transition">
            <div class="card-body p-4">
                <h3 class="font-semibold text-md">${task.name}</h3>
                <p class="text-sm opacity-70">Deadline: ${task.deadline || "No deadline"}</p>
                <p class="text-sm">${task.description || ""}</p>

                <div class="card-actions justify-end mt-2">
                    <button class="btn btn-xs btn-error delete-btn" data-id="${task.id}">Delete</button>
                </div>
            </div>
        </div>
        `;

        const deleteBtn = taskCard.querySelector(".delete-btn");

        deleteBtn.addEventListener("click", () => {
            deleteBtn.disabled = true; //prevents double clicks
            taskCard.classList.add("animate-out");

            setTimeout(() => {
                deleteTask(task.id);
            }, 200);
        });

        const targetContainer = containerMap[displayStatus];

        if (targetContainer) {
            targetContainer.appendChild(taskCard);
        }
    });
};

//delete single task
const deleteTask = (id) => {
    userTasks = userTasks.filter((task) => task.id !== id);
    renderTask();
};

//clear task function
const removeAllTask = () => {
    userTasks.length = 0;
    renderTask();
};

// remove all task
clearTaskBtn.addEventListener("click", removeAllTask);

//filter by status
const filterByStatus = (status) => {
    renderTask(userTasks.filter((task) => task.status === status));
};

//filter function by category
const filterByCategory = (category) => {
    const filteredTasks = userTasks.filter((task) => task.category === category);
    renderTask(filteredTasks);
};

//filter function hookeed to the UI
const filterSelect = document.getElementById("filter-category");

filterSelect.addEventListener("change", (e) => {
    const value = e.target.value;

    if (value === "all") {
        renderTask(); // show everything
    } else {
        filterByCategory(value);
    }
});

//overdue helper function
const isOverdue = (deadline) => {
    const today = new Date();
    const taskDate = new Date(deadline);

    // remove time portion for comparison
    today.setHours(0, 0, 0, 0);

    return taskDate < today;
};
