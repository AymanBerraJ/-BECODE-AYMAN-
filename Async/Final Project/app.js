const modal = document.querySelector(".modal");
const bcg = document.querySelector(".bcg");
const modalTitle = document.querySelector(".modal-title");
const modalImage = document.querySelector(".modal-image");
const modalIngredients = document.querySelector(".modal-ingredients");
const modalInstructions = document.querySelector(".modal-instructions");
const search = document.getElementById("search-input");

document.getElementById("search-button").addEventListener("click", () => {
  const input = search.value;
  if (input) {
    searchMeal(input);
  }
});

document
  .getElementById("search-input")
  .addEventListener("keypress", async (e) => {
    if (e.key === "Enter") {
      const input = search.value;
      if (input) {
        await searchMeal(input);
      }
    }
  });

async function searchMeal(input) {
  try {
    const response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`
    );
    const data = await response.json();

    if (data.meals) {
      displayResultsHeader(input);
      displayMeals(data.meals);
    } else {
      displayResultsHeader(input);
      displayNoResults();
    }
  } catch (error) {
    console.error("Error fetching data:", error);
    displayNoResults();
  }
}

function displayMeals(meals) {
  const resultsContainer = document.getElementById("results");

  meals.forEach((meal) => {
    const mealContainer = document.createElement("div");
    mealContainer.classList.add("meal-container");

    const mealName = document.createElement("h2");
    mealName.classList.add("meal-name");
    mealName.textContent = meal.strMeal;

    const mealImage = document.createElement("img");
    mealImage.classList.add("meal-image");
    mealImage.src = meal.strMealThumb;
    mealImage.alt = meal.strMeal;

    mealContainer.appendChild(mealName);
    mealContainer.appendChild(mealImage);

    mealContainer.addEventListener("click", () => {
      showModal(meal);
    });

    resultsContainer.appendChild(mealContainer);
  });
}

function displayResultsHeader(input) {
  const resultsContainer = document.getElementById("results");

  resultsContainer.innerHTML = "";

  const resultsHeader = document.createElement("h2");
  resultsHeader.classList.add("results-header");
  resultsHeader.textContent = `The result of ${input}`;

  resultsContainer.appendChild(resultsHeader);
}

function displayNoResults() {
  const resultsContainer = document.getElementById("results");

  const noResultsMessage = document.createElement("h2");
  noResultsMessage.classList.add("no-results");
  noResultsMessage.textContent = "No results found";

  resultsContainer.appendChild(noResultsMessage);
}

function showModal(meal) {
  modalTitle.textContent = meal.strMeal;
  modalImage.src = meal.strMealThumb;
  modalImage.alt = meal.strMeal;
  modalInstructions.textContent = meal.strInstructions;

  modalIngredients.innerHTML = "";

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient) {
      const listItem = document.createElement("li");
      listItem.textContent = `${measure} ${ingredient}`;
      modalIngredients.appendChild(listItem);
    }
  }

  modal.style.display = "block";
  bcg.style.display = "block";
}

document.getElementById("close-button").addEventListener("click", () => {
  modal.style.display = "none";
  bcg.style.display = "none";
});

bcg.addEventListener("click", () => {
  modal.style.display = "none";
  bcg.style.display = "none";
});
