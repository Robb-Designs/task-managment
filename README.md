# Taskly – Task Manager App

Taskly is a simple and responsive task management application that allows users to create, organize, and track tasks based on status and category. It features a clean UI built with Tailwind CSS and DaisyUI, along with dynamic task rendering using vanilla JavaScript.

---

## Features

- Add new tasks with:
  - Name
  - Category (Personal, Design, Engineering)
  - Status (To-do, In-progress, Completed)
  - Deadline
  - Optional description

- Task organization by status:
  - To-do
  - In-progress
  - Completed
  - Overdue (automatically detected)

-Filter tasks by category

- Delete individual tasks

- Clear all tasks

- Automatic overdue detection based on deadline

---


## How to Use

### Adding a Task

1. Click the **"Add Task"** button  
2. Fill out the form:
   - Task Name
   - Category
   - Status
   - Deadline
   - Description (optional)
3. Click **"Add Task"** to save  

---

### Viewing Tasks

Tasks are automatically sorted into columns based on their status:

- **To-do**
- **In-progress**
- **Completed**
- **Overdue** (if deadline has passed and task is not completed)

---

### Filtering Tasks

Use the dropdown in the navigation bar to filter tasks by category:

- Personal  
- In-progress *(currently tied to category filter logic)*  
- All  

---

### Deleting a Task

- Click the **"Delete"** button on any task card  

---

### Clearing All Tasks

- Click the **"Clear All"** button to remove all



## Reflection

### Challenges 
One of the main challenges was managing dynamic DOM elements, especially when adding event listeners to elements created during runtime (like task cards and status dropdowns).


---

### Improvements
With more time, I would ifile structure, my js file needs some cleaning it feels messy.