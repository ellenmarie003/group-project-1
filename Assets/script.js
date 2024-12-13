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

        const button = document.createElement('button');
        button.textContent = 'Delete Recipe';
        button.addEventListener('click', function() {
            removeRecipe(i);
        });

        li.appendChild(button);
        recipeList.appendChild(li);
    }
}

function removeRecipe(index) {
    recipes.splice(index, 1);
    renderRecipes();
}

recipeForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const recipe = recipeInput.value.trim();
    if (recipe) {
        recipes.push(recipe);
        recipeInput.value = '';
        renderRecipes();
    }
});

