const button = document.querySelector(".button");

button.addEventListener('click', (event)=>{

    event.preventDefault(); // permet de ne pas rafraichir

    let confPassword = document.querySelector("#conf-password");

    let username = document.querySelector("#username");

    if(username.value.length < 5){
        errorR(username);
        username.nextElementSibling.textContent = "Must be at least 5 characters";
    }else if(username.value.length > 10){
        errorR(username);
        username.nextElementSibling.textContent = "Must be at most 10 characters";
    }else if(username.value ==! username.value.toLowercase()){
        errorR(username);
        username.nextElementSibling.innerText = "Must be in lowercase";
    }else{
        Success(username);
    }

    let email = document.querySelector("#email");

    if(email.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')){
        Success(email);
        email.nextElementSibling.textContent = "Great, your mail is Good";

    }else{
        errorR(email);
        email.nextElementSibling.innerText = "The form of the mail is not Good"
    }

    let password = document.querySelector("#password");

})

function errorR(element){
    element.parentElement.classList.add("error");
    element.nextElementSibling.classList.remove("msg");
}

function Success(element){
    element.parentElement.classList.add("success");
    element.nextElementSibling.classList.remove("msg");
}
