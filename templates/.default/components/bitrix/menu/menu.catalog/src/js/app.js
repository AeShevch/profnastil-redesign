import CatalogDropdown from "../../../../../../../profnastil-redesign/src/js/catalog-dropdown/catalog-dropdown";

document.addEventListener(`DOMContentLoaded`, () => {
  new CatalogDropdown(
    `.js-catalog-dropdown-wrapper`,
    `#dropdownMenuButton`
  ).init();
});
