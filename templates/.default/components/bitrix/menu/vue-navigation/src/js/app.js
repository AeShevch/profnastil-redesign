import CatalogDropdown from "../../../../../../../profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown";
import MobileMenusSync from "../../../../../../../profnastil-redesign/src/js/catalog-dropdown/mobile-menus-sync";
import Menu from "./components/App";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";

const { Vue } = window;
const menuVueInstance = new Vue({
  render: (h) => h(Menu),
});
const popUpElement = document.querySelector(`.m-catalog-dropdown`);

// Setting actions for opening / closing bootstrap dropdown
const catalogDropdown = new CatalogDropdown(
  `.js-catalog-mobile-dropdown-wrapper`,
  `#dropdownMobileMenuButton`,
  () => disableBodyScroll(popUpElement),
  () => enableBodyScroll(popUpElement)
);

document.addEventListener(`DOMContentLoaded`, () => {
  catalogDropdown.init();
  menuVueInstance.$mount(`#vue-navigation`);

  // Adds pop-up menu openings when you click on the catalog section on the home page
  new MobileMenusSync(
    catalogDropdown,
    menuVueInstance,
    `.js-mobile-menu-on-page`,
    `.js-catalog-mobile-dropdown-wrapper`,
  ).init();
});
