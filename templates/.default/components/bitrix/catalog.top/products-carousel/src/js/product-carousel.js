import Splide from "@splidejs/splide";

export default class ProductsCarousel {
    constructor(sliderSelector) {
        this._containerElement = document.querySelector(sliderSelector);

        this._options = {
            perPage: 4,
            gap: `1.5rem`
        }
        this._instance = new Splide(this._containerElement, this._options);
    }

    init() {
        this._instance.mount()
    }
}