const addTaskBtn = document.getElementById("add-btn");
const modal = document.getElementById("task-modal");
//modal caching
const addBtnModal = document.getElementById("add-btn-modal");
const cancelBtnModal = document.getElementById("cancel-btn-modal");



//click to have modal visible for input
addTaskBtn.addEventListener("click", ()=>{
    //removes hidden class on the modddal's ID when clicke
    modal.classList.remove("hidden");
})

//cancel button to close the modal
cancelBtnModal.addEventListener("click", ()=>{
    modal.classList.add("hidden")
})



