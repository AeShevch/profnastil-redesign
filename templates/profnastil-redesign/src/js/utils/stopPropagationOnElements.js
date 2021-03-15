/**
 * Stops propagation of the specified event on elements with the specified classnames
 *
 * @param {string} classList - List of classnames of those elements for which you want to stop propagation
 * @param {string} eventName - Event name
 */

const stopPropagationOnElements = (classList, eventName) => {
  const elements = document.querySelectorAll(classList);
  elements.forEach((element) => {
    element.addEventListener(eventName, (evt) => evt.stopPropagation());
  });
};

export default stopPropagationOnElements;
