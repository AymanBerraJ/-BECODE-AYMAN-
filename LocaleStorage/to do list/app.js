const toDoList = document.getElementById("toDoList");
const newItemInput = document.getElementById("newItemInput");
const btn = document.getElementById("addButton");

const tab = localStorage.getItem("item")
    ? JSON.parse(localStorage.getItem("item"))
    : [];

function createTaskItem(content) {
    const newListItem = document.createElement("li");
    newListItem.textContent = content;
    
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "1rem";
    newListItem.appendChild(deleteButton);

    deleteButton.addEventListener("click", () => {
        toDoList.removeChild(newListItem);
        const index = tab.indexOf(content);
        if (index > -1) {
            tab.splice(index, 1);
        }
        localStorage.setItem("item", JSON.stringify(tab));
    });

    return newListItem;
}

function saveLocale(content) {
    tab.push(content);
    localStorage.setItem("item", JSON.stringify(tab));
}

function loadTasks() {
    tab.forEach(task => {
        toDoList.appendChild(createTaskItem(task));
    });
}

loadTasks();

btn.addEventListener("click", () => {
    const newItemText = newItemInput.value;
    if (newItemText) {
        toDoList.appendChild(createTaskItem(newItemText));
        newItemInput.value = ""; // Clear the input field
        saveLocale(newItemText);
    }
});