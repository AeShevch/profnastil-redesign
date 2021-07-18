import Splide from "@splidejs/splide";
import { BREAKPOINTS } from "../../../../../../../profnastil-redesign/src/js/utils/breakpoints";

const DEFAULT_OPTIONS = {
  breakpoints: {
    [BREAKPOINTS.xl]: {
      perPage: 4,
    },
    [BREAKPOINTS.lg]: {
      perPage: 3,
    },
    [BREAKPOINTS.md]: {
      perPage: 2,
    },
    [BREAKPOINTS.sm]: {
      perPage: 1,
    },
  },
};

export default class ProductsCarousel {
  constructor(sliderSelector) {
    this._containerElements = document.querySelectorAll(sliderSelector);

    this._instances = [];

    this._slideLeft = this._slideLeft.bind(this);
    this._slideRight = this._slideRight.bind(this);
    this._onTabClick = this._onTabClick.bind(this);
  }

  _slideLeft(instance) {
    if (instance.length > instance.options.perPage) {
      instance.go(`<`);
    }
  }

  _slideRight(instance) {
    if (instance.length > instance.options.perPage) {
      instance.go(`>`);
    }
  }

  _setHandlers(containerElement, instance) {
    containerElement.parentElement
      .querySelector(`.js-slide-left`)
      .addEventListener(`click`, () => this._slideLeft(instance));
    containerElement.parentElement
      .querySelector(`.js-slide-right`)
      .addEventListener(`click`, () => this._slideRight(instance));
  }

  _filterSlides(filterTarget, instance, containerElement) {
    instance.destroy();

    const filteredSlidesFragment = document.createDocumentFragment();
    [...instance.slides].forEach((slideElement) => {
      if (
        slideElement.dataset.filter === filterTarget ||
        filterTarget === `all`
      ) {
        filteredSlidesFragment.append(slideElement);
      }
    });

    const slidesContainerElement = containerElement.querySelector(
      `.js-products-carousel-slides-list`
    );

    slidesContainerElement.innerHTML = ``;
    slidesContainerElement.appendChild(filteredSlidesFragment);

    instance.mount();
  }

  _toggleSelectedState(element) {
    element.parentElement
      .querySelectorAll(`[aria-selected="true"]`)
      .forEach((button) => button.setAttribute(`aria-selected`, `false`));

    element.setAttribute(`aria-selected`, `true`);
  }

  _onTabClick(target, instance, containerElement) {
    const filterTarget = target.dataset.filterTarget;

    this._toggleSelectedState(target);
    this._filterSlides(filterTarget, instance, containerElement);
  }

  _initFilter(containerElement, instance) {
    const tabElements = containerElement.parentElement.querySelectorAll(
      `[role="tab"]`
    );
    tabElements.forEach((tabElement) =>
      tabElement.addEventListener(`click`, ({ target }) =>
        this._onTabClick(target, instance, containerElement)
      )
    );
  }

  init() {
    this._containerElements.forEach((containerElement) => {
      const slides = containerElement.querySelectorAll(
        `.js-products-carousel-slide`
      );

      const instance = new Splide(containerElement, {
        perPage: containerElement.dataset.perPage,
        gap: `1.5rem`,
        arrows: false,
        ...DEFAULT_OPTIONS,
      });

      instance.mount();
      instance.slides = slides;

      this._instances.push(instance);

      this._setHandlers(containerElement, instance);
      this._initFilter(containerElement, instance);
    });
  }
}
