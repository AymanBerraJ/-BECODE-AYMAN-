document.addEventListener("DOMContentLoaded", () => {
  const contactButton = document.querySelector(".contact");
  const modal = document.querySelector(".modal1");
  const overlay = document.querySelector(".modal-overlay");

  contactButton.addEventListener("click", () => {
    overlay.style.display = "block";
    modal.style.display = "block";

    const firstInput = modal.querySelector("input");
    if (firstInput) {
      firstInput.focus();
    }
  });

  overlay.addEventListener("click", () => {
    overlay.style.display = "none";
    modal.style.display = "none";

    const inputs = modal.querySelectorAll("input");
    inputs.forEach((input) => {
      input.value = "";
    });
  });

  const inputs = document.querySelectorAll(".modal1 input");

  inputs.forEach((input, index) => {
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === "Tab") {
        event.preventDefault();

        const value = input.value.trim();

        // Vérifier si c'est une adresse email valide pour l'input avec l'id 'email'
        if (input.id === "email") {
          if (value.match("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")) {
              console.log("Email address is not valid.");
              return; // Arrête la fonction si l'email n'est pas valide
          }
        }
        console.log(`${input.previousElementSibling.innerText}: ${value}`);

        // Determiner le prochain champ de saisi
        let nextIndex;
        if (event.key === "Enter") {
          nextIndex = index + 1;
        } else if (event.key === "Tab") {
          nextIndex = index + (event.shiftKey ? -1 : 1);
        }

        const nextInput = inputs[nextIndex];
        if (nextInput) {
          nextInput.focus();
        }
      }
    });
  });
});
