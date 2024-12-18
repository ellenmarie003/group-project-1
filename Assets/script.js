// ELEMENTS
const saveRecipeBtn = document.getElementById('save-recipe-btn');
const modal = document.getElementById('modal');
const confirmBtn = document.getElementById('confirm-btn');
const cancelBtn = document.getElementById('cancel-btn');
const form = document.getElementById('recipe-form');

const recipeList = document.querySelector('#recipe-list');

let recipeName = document.querySelector('#recipe-name');
// let recipeIngredients = document.querySelector('#recipe-ingredients');
let recipeInstructions = document.querySelector('#recipe-instructions');
// let recipeCategory = document.querySelector('#recipe-category');
// let recipeServings = document.querySelector('#recipe-servings');

let recipes = [];
// LOCAL STORAGE
function init() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));
    if (storedRecipes) recipes = storedRecipes;
    renderRecipes();
}
// SAVE TO LOCAL
function storeRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}
// HTML RENDERING
function renderRecipes() {
    recipeList.innerHTML = '';
    recipes.forEach((recipe, i) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <h2>${recipe.recipeName}</h2>

            <h4>${recipe.recipeInstructions}</h4>
            <button onclick="removeRecipe(${i})">Delete Recipe</button>
        `;
        recipeList.appendChild(li);
    });
}
function removeRecipe(index) {
    recipes.splice(index, 1);
    storeRecipes();
    renderRecipes();
}
// MODAL VISIBLE
saveRecipeBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
});
// SAVE/CLEAR ON CONFIRM
confirmBtn.addEventListener('click', () => {
    const recipeNameValue = recipeName.value.trim();
    const recipeInstructionsValue = recipeInstructions.value.trim();
    if (recipeNameValue && recipeInstructionsValue) {
        // Add recipe data to the array
        recipes.push({
            recipeName: recipeNameValue,
            recipeInstructions: recipeInstructionsValue
        });
        storeRecipes();
        renderRecipes();
        form.reset();
        modal.style.display = 'none';
        alert('Recipe saved!');
    } else {
        alert('Please fill in all required fields.');
    }
});
cancelBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});
form.addEventListener('submit', (event) => {
    event.preventDefault();
});
// STAR RATING
const stars = document.querySelectorAll('.fa-star');
stars.forEach((star) => {
    star.addEventListener('click', function () {
        stars.forEach(s => s.classList.remove('checked'));
        this.classList.add('checked');
        let previousStar = this.previousElementSibling;
        while (previousStar) {
            previousStar.classList.add('checked');
            previousStar = previousStar.previousElementSibling;
        }
    });
});
init();

// OLD CODE BELOW FOR POTENTIAL FUTURE DEV
// const recipeForm = document.querySelector('#recipe-form');
// const recipeList = document.querySelector('#recipe-list');

// let recipeName = document.querySelector('recipe-name');
// let recipeInstructions = document.querySelector('#recipe-instructions');
// let recipeIngredients = document.querySelector('#recipe-ingredients');
// let recipeCategory = document.getElementById('#category-dropdown');
// let recipeServings = document.querySelector('recipe-servings');
// let recipes = [];

// function renderRecipes() {
//     recipeList.innerHTML = '';

//     for (let i = 0; i < recipes.length; i++) {
//         const recipe = recipes[i];

//         const li = document.createElement('li');
//         li.textContent = recipe;
//         li.setAttribute('data-index', i);

//         const button = document.createElement('button');
//         button.textContent = 'Delete Recipe';
//         button.addEventListener('click', function () {
//             removeRecipe(i);
//         });

//         li.appendChild(button);
//         recipeList.appendChild(li);
//     }
// }

// function init()