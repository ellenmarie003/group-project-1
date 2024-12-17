// const recipeInput = document.querySelector('#recipe-text');
const recipeForm = document.querySelector('#recipe-form');
const recipeList = document.querySelector('#recipe-list');

let recipeName = document.querySelector('#recipe-name');
let recipeInstructions = document.querySelector('#recipe-instructions');
let recipeIngredients = document.querySelector('#recipe-ingredients');
let recipeCategory = document.getElementById('category-dropdown');
let recipeServings = document.querySelector('#recipe-servings');

let recipes = [];

function renderRecipes() {
    recipeList.innerHTML = '';

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        const li = document.createElement('li');
        li.setAttribute('data-index', i);

        const h2 = document.createElement('h2');
        h2.textContent = recipe.recipeName;

        const h3 = document.createElement('h3');
        h3.textContent = recipe.recipeInstructions;

        li.appendChild(h2)
        li.appendChild(h3)

        const button = document.createElement('button');
        button.textContent = 'Delete Recipe';
        button.addEventListener('click', function () {
            removeRecipe(i);
        });

        li.appendChild(button);
        recipeList.appendChild(li);
    }
}

function init() {
    const storedRecipes = JSON.parse(localStorage.getItem('recipes'));

    if (storedRecipes !== null) {
        recipes = storedRecipes;
    }
    renderRecipes();
}

function storeRecipes() {
    localStorage.setItem('recipes', JSON.stringify(recipes));
}

function removeRecipe(index) {
    recipes.splice(index, 1);
    storeRecipes();
    renderRecipes();
}

recipeForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const recipeNameValue = recipeName.value.trim();
    const recipeInstructionsValue = recipeInstructions.value.trim();


    const recipeData = {
        recipeName: recipeNameValue,
        recipeInstructions: recipeInstructionsValue
    };

    console.log(recipeData)



    // if (recipeText === '') {
    //     return;
    // }


    recipes.push(recipeData);
    // recipeInput.value = '';

    storeRecipes();
    renderRecipes();
});

// recipeList.addEventListener('click', function (event) {
//     const element = event.target;

//     if (element.matches('button') === true) {

//         const index = element.parentElement.getAttribute('data-index');
//         recipes.splice(index, 1);

//         storeRecipes();
//         renderRecipes();
//     }
// });

init();
