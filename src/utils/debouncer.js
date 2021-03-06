/**
 * Debouncer
 *
 * @param {Function} callback - The callback function
 * @param {Number} delay - The delay number value
 *
 * @return {Function} function - The callback function wrapped in `setTimeout` function
 */
export default (callback, delay) => {
  let inDebounce;
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => callback.apply(context, args), delay);
  };
};
