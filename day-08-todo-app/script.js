const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const filters = document.querySelectorAll(".filter");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let currentFilter = "all";

renderTasks();

addBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        addTask();
    }
});

function addTask(){
    const text = taskInput.value.trim();

    if(text === "") return;

    tasks.push({
        id: Date.now(),
        text,
        completed:false
    });

    saveTasks();
    renderTasks();
    taskInput.value="";
}

function saveTasks(){
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks(){

    taskList.innerHTML="";

    let filtered = tasks;

    if(currentFilter === "active"){
        filtered = tasks.filter(task => !task.completed);
    }

    if(currentFilter === "completed"){
        filtered = tasks.filter(task => task.completed);
    }

    filtered.forEach(task => {

        const li = document.createElement("li");
        li.className = task.completed
            ? "task completed"
            : "task";

        li.draggable = true;
        li.dataset.id = task.id;

        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox"
                    ${task.completed ? "checked" : ""}
                >
                <span>${task.text}</span>
            </div>

            <div class="actions">
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        const checkbox = li.querySelector("input");

        checkbox.addEventListener("change", () => {
            task.completed = checkbox.checked;
            saveTasks();
            renderTasks();
        });

        li.querySelector(".delete-btn")
        .addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            renderTasks();
        });

        li.querySelector(".edit-btn")
        .addEventListener("click", () => {

            const updated = prompt(
                "Edit Task",
                task.text
            );

            if(updated !== null && updated.trim() !== ""){
                task.text = updated;
                saveTasks();
                renderTasks();
            }
        });

        addDragEvents(li);

        taskList.appendChild(li);
    });
}

filters.forEach(btn => {

    btn.addEventListener("click", () => {

        filters.forEach(b =>
            b.classList.remove("active")
        );

        btn.classList.add("active");

        currentFilter =
            btn.dataset.filter;

        renderTasks();
    });
});

function addDragEvents(item){

    item.addEventListener("dragstart", () => {
        item.classList.add("dragging");
    });

    item.addEventListener("dragend", () => {

        item.classList.remove("dragging");

        const reordered = [];

        document.querySelectorAll(".task")
        .forEach(taskEl => {

            const id = Number(
                taskEl.dataset.id
            );

            const task = tasks.find(
                t => t.id === id
            );

            reordered.push(task);
        });

        tasks = reordered;

        saveTasks();
    });
}

taskList.addEventListener("dragover", e => {

    e.preventDefault();

    const afterElement =
        getDragAfterElement(
            taskList,
            e.clientY
        );

    const dragging =
        document.querySelector(".dragging");

    if(afterElement == null){
        taskList.appendChild(dragging);
    } else {
        taskList.insertBefore(
            dragging,
            afterElement
        );
    }
});

function getDragAfterElement(container, y){

    const draggableElements =
        [...container.querySelectorAll(
            ".task:not(.dragging)"
        )];

    return draggableElements.reduce(
        (closest, child) => {

        const box =
            child.getBoundingClientRect();

        const offset =
            y - box.top - box.height/2;

        if(
            offset < 0 &&
            offset > closest.offset
        ){
            return {
                offset,
                element: child
            };
        }

        return closest;

    }, {
        offset: Number.NEGATIVE_INFINITY
    }).element;
}