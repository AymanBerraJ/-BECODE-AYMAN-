// const toDoList = document.getElementById("toDoList");
// const newItemInput = document.getElementById("newItemInput");
// const btn = document.getElementById("addButton");

// const tab = localStorage.getItem("newItemInput")
//   ? JSON.parse(localStorage.getItem("newItemInput"))
//   : [];
  


// btn.addEventListener("click", () => {
//   const newItemText = newItemInput.value;
//   const newListItem = document.createElement("li"); // crée une nouvelle liste
//   const content = newListItem.textContent;

//   if (newItemText) {
//     newListItem.textContent = newItemText;
//     const content = newListItem.textContent;
//     toDoList.appendChild(newListItem); // crée un nouvel element de la liste
//     newItemInput.value = ""; // permet de remettre le input vide
//     saveLocale(content);
//   }

//   const btn2 = document.createElement("button");
//   newListItem.appendChild(btn2); // création du bouton delete
//   btn2.textContent = "Delete";
//   btn2.style.marginLeft = "1rem";

//   btn2.addEventListener("click", () => {
//     toDoList.removeChild(newListItem); // permet au bouton de supprimer
//     tab.splice(content, 1);
//     localStorage.setItem("item", JSON.stringify(tab));
//   });
// });

// function saveLocale(content) {
//   tab.push(content);
//   localStorage.setItem("item", JSON.stringify(tab));
// }

// function loadTasks() {
//     const storedTasks = localStorage.getItem('todoList');
//     if (storedTasks) {
//         const tasks = JSON.parse(storedTasks);
//         tasks.forEach(task => toDoList.appendChild(createTaskItem(task)));
//     }
// }

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