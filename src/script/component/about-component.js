class About extends HTMLElement {

  switchPage() {

  }

  render() {

    this.innerHTML = `

        <style>
        .card-about-link {
          a {
            font-family: "Roboto", sans-serif;
            font-size: 23rem;
          }
        }
        </style>
        
        <div class="container about-meal">
        <div>
        <a class="navbar-brand mb-5" href="#"><span class="good">Good</span><br><span
        class="txt-food">Food</span></a>   
        <button id="backToLanding" class="btn btn-outline-danger rounded-pill float-right mt-4"><i class="fa fa-arrow-left"></i> Back</button>
        </div>
          <div class="row justify-content-center">
            <div class="col-12 col-sm-3 text-center mb-3">
              <div class="card card-about-link card p-3">
                <a href="https://idcamp.indosatooredoo.com/">Indosat Ooredoo Digital Camp
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-3 text-center mb-3">
              <div class="card card-about-link card p-3">
                <a href="https://dribbble.com/shots/11045318-The-best-healthy-food-delivery-services/attachments/2640759?mode=media">Design Inspired Dribble by The best healthy food delivery services Anton Mikhaltsov
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-3 text-center mb-3">
              <div class="card card-about-link card p-3">
                <a href="#">Dicoding Submission © Bandung 23 May 2020, Faisal Saleh
                </a>
              </div>
            </div>
            <div class="col-12 col-sm-3 text-center mb-3">
              <div class="card card-about-link card p-3">
                <a href="https://www.themealdb.com/">Web ini menggunakan API TheMealDb
                </a>
              </div>
            </div>
          </div>
          <p class="mt-5">Note : <br>
          Web ini adalah hasil Revisi setelah melakukan Submission Dicoding
          </p>
        </div>
        
        `;

    this.querySelector('#backToLanding').addEventListener('click', function () {
      $('main').show();
      $('.details').hide();
      $('about-component').hide();
    })

  }

  connectedCallback() {
    this.render();
  }
}

customElements.define("about-component", About);