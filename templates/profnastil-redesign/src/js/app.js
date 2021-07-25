import "../scss/main.scss";
import Vue from "vue";
import { Tab } from "bootstrap";
import FixedHeader from "./fixed-header/fixed-header";
import stopPropagationOnElements from "./utils/stopPropagationOnElements";
import StickySidebar from "sticky-sidebar";

window.Vue = Vue;
document.addEventListener(`DOMContentLoaded`, () => {
  // Fixing the header
  // new FixedHeader().init();

  // Stop propagation on specified elements
  stopPropagationOnElements(`.js-stop-propagation-click`, `click`);

  // Sticky filter
  new StickySidebar('.js-sidebar', {
    topSpacing: 14,
    bottomSpacing: 14,
    containerSelector: '.js-main-content',
    innerWrapperSelector: '.js-sidebar-inner'
  });
});
