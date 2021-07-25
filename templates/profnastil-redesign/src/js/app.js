import "../scss/main.scss";
import Vue from "vue";
import { Tab } from "bootstrap";
import FixedHeader from "./fixed-header/fixed-header";
import stopPropagationOnElements from "./utils/stopPropagationOnElements";

window.Vue = Vue;
document.addEventListener(`DOMContentLoaded`, () => {
  // Fixing the header
  // new FixedHeader().init();

  // Stop propagation on specified elements
  stopPropagationOnElements(`.js-stop-propagation-click`, `click`);
});
