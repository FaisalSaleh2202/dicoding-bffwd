import css from "bootstrap/dist/css/bootstrap.min.css";

class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() {
        this.innerHTML = `

        <style>
            ${css}
            .search-container {
                margin-right : -30px;
            }
            
            
        </style>
        
        <div class="search-container form-group d-flex mr-3">
        <input placeholder="Search . . ." class="form-control mr-sm-2 mr-3" id="searchElement"
          type="search">
        <button class="btn btn-light" id="searchButtonElement" type="button"><span
            class="placeholder-icon"><img src="../src/assets/icons/search.png" width="14" alt="icon_search"></span>
        </button>
        </div>

        `;

        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);

    }
}

customElements.define("search-bar", SearchBar);