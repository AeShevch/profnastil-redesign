const OBSERVER_OPTIONS = {
  root: null,
  threshold: 0,
};

const FIX_MODIFICATOR_CLASSNAME = `header__main_sticky`;

export default class FixedHeader {
  constructor() {
    this._container = document.querySelector(`.js-header-element`);
    this._elementToFix = this._container.querySelector(`.js-fixed-header`);

    this._handleIntersect = this._handleIntersect.bind(this);
    this._onHeaderOutOfViewport = this._onHeaderOutOfViewport.bind(this);
    this._onHeaderInViewport = this._onHeaderInViewport.bind(this);
  }

  _onHeaderOutOfViewport() {
    this._elementToFix.classList.add(FIX_MODIFICATOR_CLASSNAME);
    document.body.style.paddingTop = `${this._elementToFix.offsetHeight}px`;
  }

  _onHeaderInViewport() {
    this._elementToFix.classList.remove(FIX_MODIFICATOR_CLASSNAME);
    document.body.style.paddingTop = `0`;
  }

  _handleIntersect(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        this._onHeaderInViewport();
      } else {
        this._onHeaderOutOfViewport();
      }
    });
  }

  init() {
    const observer = new IntersectionObserver(
      this._handleIntersect,
      OBSERVER_OPTIONS
    );

    observer.observe(this._container);
  }
}
