import Splide from "@splidejs/splide";
import {BREAKPOINTS} from "../../../../../../../profnastil-redesign/src/js/utils/breakpoints"

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
  }
}

export default class ProductsCarousel {
  constructor(sliderSelector) {
    this._containerElements = document.querySelectorAll(sliderSelector);

    this._instances = [];

    this._slideLeft = this._slideLeft.bind(this);
    this._slideRight = this._slideRight.bind(this);
    this._onTabClick = this._onTabClick.bind(this);
  }

  _slideLeft(instance) {
    instance.go(`<`);
  }

  _slideRight(instance) {
    instance.go(`>`);
  }

  _setHandlers(containerElement, instance) {
    containerElement.parentElement
      .querySelector(`.js-slide-left`)
      .addEventListener(`click`, () => this._slideLeft(instance));
    containerElement.parentElement
      .querySelector(`.js-slide-right`)
      .addEventListener(`click`, () => this._slideRight(instance));
  }

  _filterSlides(filterTarget, tabItemElements, instance) {
    tabItemElements.forEach((tabItemElement) => {
      if (
        tabItemElement.dataset.filter === filterTarget ||
        filterTarget === `all`
      ) {
        tabItemElement.removeAttribute(`hidden`);
      } else {
        tabItemElement.setAttribute(`hidden`, true);
      }
    });

    instance.refresh();
  }

  _toggleSelectedState(element) {
    element.parentElement
      .querySelectorAll(`[aria-selected="true"]`)
      .forEach((button) => button.setAttribute(`aria-selected`, `false`));

    element.setAttribute(`aria-selected`, `true`);
  }

  _onTabClick(target, instance, containerElement) {
    const filterTarget = target.dataset.filterTarget;
    const tabItemElements = containerElement.querySelectorAll(`[data-filter]`);

    this._toggleSelectedState(target);
    this._filterSlides(filterTarget, tabItemElements, instance);
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
      const instance = new Splide(containerElement, {
        perPage: containerElement.dataset.perPage,
        gap: `1.5rem`,
        arrows: false,
        ...DEFAULT_OPTIONS,
      });

      console.log(instance);

      instance.mount();

      this._instances.push(instance);

      this._setHandlers(containerElement, instance);
      this._initFilter(containerElement, instance);
    });
  }
}