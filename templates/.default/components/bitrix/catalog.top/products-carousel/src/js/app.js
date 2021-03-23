import ProductsCarousel from "./product-carousel";

document.addEventListener(`DOMContentLoaded`, () => {
   new ProductsCarousel(`.js-products-carousel`).init();
});