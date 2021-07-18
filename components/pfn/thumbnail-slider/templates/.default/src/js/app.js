import ThumbnailSlider from "./thumbnail-slider";

document.addEventListener(`DOMContentLoaded`, () => {
  new ThumbnailSlider(
    `.js-thumbs-slider-main`,
    `.js-thumbs-slider-secondary`
  ).init();
});
