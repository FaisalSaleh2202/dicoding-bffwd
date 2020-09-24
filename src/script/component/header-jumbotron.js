class HeaderJumbotron extends HTMLElement {

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `

        <div title="FOOD & DRINK">
        <div class="container mt-3">
          <img height="310px" src="../src/assets/images/j1.png" class="img-fluid ml-sm-5" alt="Responsive image">
        </div>
       </div>
        
        `;
    }
}

customElements.define("header-jumbotron", HeaderJumbotron);