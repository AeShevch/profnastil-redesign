import Splide from "@splidejs/splide";

export default class ThumbnailSlider {
  constructor(mainSliderSelector, secondarySliderSelector) {
    this._mainSliderInstance = new Splide(mainSliderSelector, {
      pagination: false,
      arrows: false,
      keyboard: `focused`,
    });
    this._secondarySliderInstance = new Splide(secondarySliderSelector, {
      gap: 4,
      isNavigation: true,
      perPage: 3,
      perMove: 1,
      direction: `ttb`,
      height: `14em`,
      pagination: false,
      keyboard: `focused`,
    });
  }

  init() {
    this._secondarySliderInstance.mount();
    this._mainSliderInstance.sync(this._secondarySliderInstance).mount();
  }
}
