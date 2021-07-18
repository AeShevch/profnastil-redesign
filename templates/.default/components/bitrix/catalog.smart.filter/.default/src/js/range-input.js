import noUiSlider from "nouislider";

export default class RangeInput {
  constructor(sliderSelector) {
    this._containerElement = document.querySelector(sliderSelector);
    this._inputMinElement = this._containerElement.querySelector(
      `.js-range-min`
    );
    this._inputMaxElement = this._containerElement.querySelector(
      `.js-range-max`
    );
    this._sliderElement = this._containerElement.querySelector(
      `.js-range-slider`
    );

    this._minValue = +this._sliderElement.dataset.min;
    this._maxValue = +this._sliderElement.dataset.max;
    this._step = +this._sliderElement.dataset.step;

    this._onSliderChange = this._onSliderChange.bind(this);
    this._onMinChange = this._onMinChange.bind(this);
    this._onMaxChange = this._onMaxChange.bind(this);
  }

  _onSliderChange(values) {
    const [min, max] = values;
    this._inputMinElement.value = Math.trunc(min);
    this._inputMaxElement.value = Math.trunc(max);
  }

  _onMinChange(evt) {
    const { value } = evt.target;
    this._sliderElement.noUiSlider.set([Math.round(value), null]);
  }

  _onMaxChange(evt) {
    const { value } = evt.target;
    this._sliderElement.noUiSlider.set([null, Math.round(value)]);
  }

  _setHandlers() {
    this._sliderElement.noUiSlider.on(`update`, this._onSliderChange);
    this._inputMinElement.addEventListener(`change`, this._onMinChange);
    this._inputMaxElement.addEventListener(`change`, this._onMaxChange);
  }

  init() {
    noUiSlider.create(this._sliderElement, {
      start: [this._minValue, this._maxValue],
      connect: true,
      range: {
        min: this._minValue,
        max: this._maxValue,
      },
      step: this._step,
      tooltips: true,
      format: {
        to: (value) => Math.trunc(value),
        from: (value) => Math.trunc(value),
      },
    });

    this._setHandlers();
  }
}
