// const exemple = document.getElementById("main-heading")
// exemple.style.color = "red";
// exemple.innerText = "bonjour"
// console.log(exemple);

const myList = document.querySelector("ul");
const myItem = document.createElement("li");
myList.appendChild(myItem)

const firstInner = document.querySelector("li.list-item").innerText
const newLi = document.createElement("li");
myList.appendChild(newLi).innerText = firstInner
myList.style.color = "purple";
newLi.style.color = "gold";
const listage = document.querySelectorAll("li");
listage[3].innerHTML = "Annie <span style='color:red'> Hall</span>";
