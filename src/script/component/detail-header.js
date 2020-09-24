import IconClock from "../../../src/assets/images/clock-solid.svg";
import IconHatChef from "../../../src/assets/images/hat-chef-solid.svg";
import IconUtensils from "../../../src/assets/images/utensils-solid.svg";

class DetailHeader extends HTMLElement {

  set update(value) {
    this.setAttribute('strMeal', value.strMeal);
    this.setAttribute('strCategory', value.strCategory);
    this.setAttribute('strArea', value.strArea);
    this.render();
  }

  render() {
    this.strMeal = this.getAttribute("strMeal") || null;
    this.strCategory = this.getAttribute("strCategory") || null;
    this.strArea = this.getAttribute("strArea") || null;

    this.innerHTML = `
        <style>
            .breadcrumb {
                font-size: 0.7rem;
                background-color: transparent;
                padding: 0;
            }
            .breadcrumb .breadcrumb-item a {
                color: #6c757d;
            }
            .breadcrumb .breadcrumb-item.active {
                color: #000000;
            }
        </style>

        <h5>${this.strMeal}</h5>
        <div class="row recipe-details">
          <div class="col-12 col-md-4">
            <img src="${IconHatChef}" class="icon-detail-svg">
            <span>CATEGORY : ${this.strCategory}</span>
          </div>
          <div class="col-12 col-md-4">
            <img src="${IconUtensils}" class="icon-detail-svg">
            <span>COUNTRY : ${this.strArea}</span>
          </div>
        </div>`;
  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("detail-header", DetailHeader);