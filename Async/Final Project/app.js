// Fonction pour afficher les résultats de la recherche
function displayResults(meals) {
    const mealsGrid = document.getElementById('results');
    mealsGrid.innerHTML = ''; // Clear previous results
    if (meals) {
      meals.forEach(meal => {
        const mealDiv = createMealElement(meal);
        mealsGrid.appendChild(mealDiv);
      });
    } else {
      document.getElementById('resultText').innerText = 'No results found.';
    }
  }
  
  // Fonction pour créer un élément de repas à afficher
  function createMealElement(meal) {
    const mealDiv = document.createElement('div');
    mealDiv.classList.add('meal');
    mealDiv.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}" />
      <h3>${meal.strMeal}</h3>
    `;
    mealDiv.addEventListener('click', function() {
      displayModal(meal);
    });
    return mealDiv;
  }
  
  // Fonction pour afficher la modale avec les détails du repas
  function displayModal(meal) {
    document.getElementById('modal-img').src = meal.strMealThumb;
    document.getElementById('titre-modal').innerText = meal.strMeal;
    document.getElementById('ingrédient').innerText = getIngredients(meal);
    document.getElementById('cuisiner').innerText = meal.strInstructions;
    document.querySelector('.bcg').style.display = 'flex';
  }
  
  // Fonction pour obtenir la liste des ingrédients formatée
  function getIngredients(meal) {
    let ingredients = '';
    for (let i = 1; i <= 20; i++) {
      if (meal[`strIngredient${i}`]) {
        ingredients += `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}\n`;
      } else {
        break;
      }
    }
    return ingredients;
  }
  
  // Fonction de recherche de repas
  function searchMeal() {
    const input = document.getElementById('search-input').value;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${input}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        displayResults(data.meals);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  // Événement lorsque l'utilisateur clique sur le bouton de recherche
  document.getElementById('search-button').addEventListener('click', searchMeal);
  
  // Événement lorsque l'utilisateur appuie sur Entrée dans le champ de recherche
  document.getElementById('search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      searchMeal();
    }
  });
  
  // Événement pour fermer la modale
  document.getElementById('close-button').addEventListener('click', function() {
    document.querySelector('.bcg').style.display = 'none';
  });
  
  // Événement pour ouvrir la modale
document.getElementById('open-modal-button').addEventListener('click', function() {
    document.querySelector('.bcg').style.display = 'block';
    document.querySelector('.modal').style.display = 'block';
  });
  
  // Événement pour fermer la modale
  document.getElementById('close-button').addEventListener('click', function() {
    document.querySelector('.bcg').style.display = 'none';
  });
  