import "../component/breadcrumb-detail.js";
import "./detail-header.js";

import DataSource from '../data/data-source.js';

class MealItem extends HTMLElement {

    set mealList(items) {
        this._items = items;
        this.render();
    }

    set mealSerach(items) {
        this._items = items;
        this.renderSearch();
    }

    switchPage() {
        $('main').hide();
        $('.details').show();
    }

    detailPage() {
        // PreLoader Element
        const loaderElement = document.querySelector("#loader-text");

        const detaillMeal = async (id) => {
            loaderElement.style.display = 'block';

            try {
                const result = await DataSource.detaillMeal(id);
                renderResult(result);
            } catch (message) {
                fallbackResult(message)
            }
        }

        const renderResult = results => {

            results.forEach(item => {
                console.log(`${item.idMeal}`)
                loaderElement.style.display = 'none';

                this.switchPage();

                const breadcrumbElement = document.querySelector("breadcrumb-detail");
                breadcrumbElement.currentPage = item.strMeal;

                //image
                $('#detailImage').attr("src", item.strMealThumb);

                const detailHeaderElement = document.querySelector("detail-header");
                const dataHeader = {
                    'strMeal': (item.strMeal ? item.strMeal : 'NaN'),
                    'strCategory': (item.strCategory ? item.strCategory : ''),
                    'strArea': (item.strArea ? item.strArea : 'kosong')
                }

                detailHeaderElement.update = dataHeader;

                // Ingredients
                results.forEach(item => {
                    $('.ingredients').append(
                        `<li>${item.strIngredient1}</li>
                            <li>${item.strIngredient2}</li>
                            <li>${item.strIngredient3}</li>
                            <li>${item.strIngredient4}</li>
                            <li>${item.strIngredient5}</li>
                            <li>${item.strIngredient6}</li>
                            <li>${item.strIngredient7}</li>
                            <li>${item.strIngredient8}</li>
                            <li>${item.strIngredient9}</li>
                            <li>${item.strIngredient10}</li>
                            <li>${item.strIngredient11}</li>
                            <li>${item.strIngredient12}</li>
                            <li>${item.strIngredient13}</li>
                            <li>${item.strIngredient14}</li>
                            <li>${item.strIngredient15}</li>
                            <li>${item.strIngredient16}</li
                            <li>${item.strIngredient17}</li>
                            <li>${item.strIngredient18}</li>
                            <li>${item.strIngredient19}</li>
                            <li>${item.strIngredient20}</li>`
                    );
                })

                // Method
                results.forEach(item => {
                    $('.methods').append(`<li>${item.strInstructions}</li>`);
                })

                $(window).scrollTop(0);
            })
        }

        // Callback Failed
        const fallbackResult = message => {
            loaderElement.style.display = 'none';
            alert(message);
        };

        const cardRecipe = this.querySelectorAll('.idDetails');
        cardRecipe.forEach(details => {
            details.addEventListener("click", function () {
                const idReceipe = this.getAttribute("data-id");
                detaillMeal(idReceipe);
            })
        });
    }

    renderSearch() {
        this.innerHTML = "";
        this._items.forEach(item => {

            this.innerHTML += `

            <style>
            .card-img-top:hover {
                opacity: 0.7;
                cursor: pointer;
            }
            p {
                font-family: "Open Sans", sans-serif;
                font-size: 12px;
            }
            </style>
            
            <div class="p-3 col-12 col-sm-4 mt-2" >
            <div class="idDetails" data-id="${item.idMeal}" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
            <div class="d-flex">
                <div class="col-lg-8"  style="width: 18rem;">
                    <img class="card-img-top" src="${item.strMealThumb}" alt="Card image cap">
                </div>
                <div class="col-lg-4 ml-n2">
                    <h5 class="title">${item.strMeal}</h5>
                    <img class="mt-3" width="72px" src="../src/assets/icons/star.png" alt="fork_ic">
                <p class="text mt-3">${item.strArea}</p>
                </div>
            </div>
            </div>
            </div>

            `;

            this.detailPage();

            let delay = 0;
            $('[data-aos]').each(function () {
                if ($(this).is(":visible") == true) {
                    delay = delay + 400;
                    $(this).attr('data-aos-delay', delay);
                }
            });
        })
    }

    render() {
        this.innerHTML = "";
        this._items.forEach(item => {

            this.innerHTML += `

            <style>
            .card-img-top:hover {
                opacity: 0.7;
                cursor: pointer;
            }
            </style>
            
            <div class="p-3 col-12 col-sm-4 mt-2">
            <div class="idDetails" data-id="${item.idMeal}" data-aos="fade-up" data-aos-duration="1000" data-aos-anchor=".jumbotron">
            <div class="d-flex">
                <div class="col-lg-8" style="width: 18rem;">
                    <img class="card-img-top" src="${item.strMealThumb}" alt="Card image cap">
                </div>
                <div class="col-lg-4 ml-n2">
                    <h5 class="title">${item.strMeal}</h5>
                    <img class="mt-3" width="72px" src="../src/assets/icons/star.png" alt="fork_ic">
                </div>
            </div>
            </div>
            </div>

     `;
            this.detailPage();

            let delay = 0;
            $('[data-aos]').each(function () {
                if ($(this).is(":visible") == true) {
                    delay = delay + 400;
                    $(this).attr('data-aos-delay', delay);
                }
            });

        })

    }

    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `
        
        <h2 class="placeholder"> ${message} </h2>  

        `
    }

}

customElements.define("meal-item", MealItem);