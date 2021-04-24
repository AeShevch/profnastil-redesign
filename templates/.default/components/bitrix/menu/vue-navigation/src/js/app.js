import CatalogDropdown from "../../../../../../../profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown";
import MobileMenusSync from "../../../../../../../profnastil-redesign/src/js/catalog-dropdown/mobile-menus-sync";
import Menu from "./components/App";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const { Vue } = window;

document.addEventListener(`DOMContentLoaded`, () => {
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

    catalogDropdown.init();
    menuVueInstance.$mount(`#vue-navigation`);

});
