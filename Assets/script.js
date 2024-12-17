const recipeInput = document.querySelector('#recipe-text');
const recipeForm = document.querySelector('#recipe-form');
const recipeList = document.querySelector('#recipe-list');

let recipes = [];

function renderRecipes() {
    recipeList.innerHTML = '';

    for (let i = 0; i < recipes.length; i++) {
        const recipe = recipes[i];

        const li = document.createElement('li');
        li.textContent = recipe;
        li.setAttribute('data-index', i);

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

    const recipeText = recipeInput.value.trim();

    if (recipeText === '') {
        return;
    }


    recipes.push(recipeText);
    recipeInput.value = '';

    storeRecipes();
    renderRecipes();
});

recipeList.addEventListener('click', function (event) {
    const element = event.target;

    if (element.matches('button') === true) {

        const index = element.parentElement.getAttribute('data-index');
        recipes.splice(index, 1);

        storeRecipes();
        renderRecipes();
    }
});

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
