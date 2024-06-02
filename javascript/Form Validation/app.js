const button = document.querySelector(".button");

button.addEventListener('click', (event)=>{

    event.preventDefault(); // permet de ne pas rafraichir

    let username = document.querySelector("#username");

    if(username.value.length < 5){
        errorR(username);
        username.nextElementSibling.textContent = "Must be at least 5 characters";
    }else if(username.value.length > 10){
        errorR(username);
        username.nextElementSibling.textContent = "Must be at most 10 characters";
    }else if(username.value.toLowerCase() !== username.value){
        errorR(username);
        username.nextElementSibling.innerText = "Must be in lowercase";
    }else{
        successV(username);
    }

    let email = document.querySelector("#email");

    if(email.value.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')){
        successV(email);
    }else{
        errorR(email);
        email.nextElementSibling.innerText = "The form of the mail is not Good"
    }

    let password = document.querySelector("#password");

   if(password.value.length < 8){
    errorR(password);
    password.nextElementSibling.innerText = "Must be at least 8 characters";
   } else if(password.value.length > 15){
    errorR(password);
    password.nextElementSibling.innerText = "Must be at most 15 characters";
   }else{
    successV(password);
   }

   let confPassword = document.querySelector("#confirmation");
   
   if(password.value === confPassword.value){
    successV(confPassword);
   }else{
    errorR(confPassword);
   }

   let console1 = username.value;
   let console2 = email.value;
   let console3 = password.value;
   let console4 = confPassword.value;

   console.log(`\n${console1} \n${console2} \n${console3} \n${console4}`);
})

function errorR(element){
    element.parentElement.classList.add("error");
    element.nextElementSibling.classList.remove("msg");
}

function successV(element){
    element.parentElement.classList.add("success");
    element.nextElementSibling.classList.remove("msg");
}
