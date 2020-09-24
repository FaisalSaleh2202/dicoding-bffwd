import DataSource from "../data/data-source.js";
const listMealsElement = document.querySelector('meal-item');
const loaderElement = document.querySelector("#loader-text");
const detailPageEelement = document.querySelector('about-component');

const main = () => {

    const about = document.querySelector('.about');
    about.addEventListener('click', function () {
        $('main').hide();
        $('.details').hide();
        $('about-component').show();
        detailPageEelement.innerHTML;
    })

    const dropdown = document.querySelectorAll('.catagories-item');
    dropdown.forEach(meals => {
        meals.addEventListener("click", function () {
            const strArea = this.innerHTML;
            const strCatagory = this.innerHTML;
            area(strArea);
            catagory(strCatagory);
        })
    })

    const area = async (keyword) => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.areaMeal(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const catagory = async (keyword) => {
        loaderElement.style.display = 'block';

        try {
            const result = await DataSource.catagoryMeal(keyword);
            renderResult(result);
        } catch (message) {
            fallbackResult(message)
        }
    }

    const renderResult = results => {
        loaderElement.style.display = 'none';
        listMealsElement.mealList = results;
    };

    const fallbackResult = message => {
        loaderElement.style.display = 'none';
        listMealsElement.renderError(message);
    };

};

export default main;