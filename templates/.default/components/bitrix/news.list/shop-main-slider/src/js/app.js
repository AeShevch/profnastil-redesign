import Glide, {
  Controls,
  Autoplay,
  Swipe,
} from "@glidejs/glide/dist/glide.modular.esm";

const SLIDER_SELECTOR = `.js-main-slider`;
const SLIDER_CONFIG = {
  type: "carousel",
  perView: 1,
  autoplay: 5000,
};
const ACTIVE_BULLET_CLASS_NAME = `glide__bullet--active`;
const BULLETS_CONTAINER_SELECTOR = `.glide__bullets`;

// Hack to make glide bullets to switch instantly
const changeActiveBullet = (newIndex, containerElement) => {
  containerElement
    .querySelector(`.${ACTIVE_BULLET_CLASS_NAME}`)
    .classList.remove(ACTIVE_BULLET_CLASS_NAME);

  containerElement
    .querySelector(`[data-glide-dir="=${newIndex}"]`)
    .classList.add(ACTIVE_BULLET_CLASS_NAME);
};

document.addEventListener(`DOMContentLoaded`, function () {
  const sliderInstance = new Glide(SLIDER_SELECTOR, SLIDER_CONFIG).mount({
    Controls,
    Autoplay,
    Swipe,
  });

  const sliderElement = document.querySelector(SLIDER_SELECTOR);
  const bulletsContainerElement = sliderElement.querySelector(
    BULLETS_CONTAINER_SELECTOR
  );

  sliderInstance.on(`run.before`, (moveOptions) =>
    changeActiveBullet(moveOptions.steps, bulletsContainerElement)
  );
});
