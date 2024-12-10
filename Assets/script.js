const recipeInput = document.querySelector('#recipe-text');
const recipeForm = document.querySelector('#recipe-form');
const recipeList = document.querySelector('#recipeList');

const recipes = [];

function renderRecipes() {
    recipeList.innerHTML = '';

    for (let i=0; i < recipes.length; i++) {
        const recipe = recipes[i];

        const li = document.createElement('li');
        li.textContent = recipe;
        li.setAttribute('data-index', i);

        li.appendChild(button);
        recipeList.appendChild(li);
    }
}