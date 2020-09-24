// import "jquery/dist/jquery.min.js";
// import "popper.js/dist/popper.min.js";
// import "bootstrap/dist/js/bootstrap.min.js";
// import "regenerator-runtime";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../src/styles/style.css";
import 'bootstrap';
import "regenerator-runtime";
import "./scss/style.scss";

import main from './script/view/main.js';

// component
import "./script/component/header-jumbotron.js";
import "./script/view/search-main.js";
import "./script/component/meal-item.js";
import "./script/component/about-component.js";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

document.addEventListener("DOMContentLoaded", main);