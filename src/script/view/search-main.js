import '../component/search-bar.js'
import DataSource from '../data/data-source.js'

const listMealsElement = document.querySelector("meal-item");
const searchElement = document.querySelector("search-bar");
const loaderElement = document.querySelector("#loader-text");


const onButtonSearchElementClicked = () => {
    searchMeal(searchElement.value);
}

const searchMeal = async (keyword) => {
    loaderElement.style.display = 'block';

    try {
        const result = await DataSource.searchMeal(keyword);
        renderResult(result);
    } catch (message) {
        fallbackResult(message)
    }
};

const renderResult = results => {
    loaderElement.style.display = 'none';
    listMealsElement.mealSerach = results;
};

// default menu
searchMeal('beef');

const allmenu = document.querySelector('.all-menu');
allmenu.addEventListener("click", function () {
    searchMeal('beef');
})

const fallbackResult = message => {
    loaderElement.style.display = 'none';
    listMealsElement.renderError(message);
};


searchElement.clickEvent = onButtonSearchElementClicked;