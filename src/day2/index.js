'use strict';

/**
 * Parse dimension to numeric lengths
 * @param {String} dimensions - dimensions in form of '2x2x2'
 * @return {Number[]} - lengths as numbers
 */
function parseDimensions(dimensions) {
  return dimensions.split('x').map(n => parseInt(n, 10));
}

/**
 * Calculate amount of gift wrap
 * @param {String[]} dimensions - package dimensions like '2x2x2'
 * @return {Number} - sq. ft of gift wrap with slack
 */
export function amountOfGiftWrap(dimensions) {
  return dimensions.reduce((total, dimension) => {
    const [l, w, h] = parseDimensions(dimension);

    return total +
      2 * l * w +
      2 * l * h +
      2 * w * h +
      Math.min(l * w, l * h, w * h);
  }, 0);
}

/**
 * Calculate the amount of ribbon
 * @param {String[]} dimensions - package dimensions like '2x2x2'
 * @return {Number} - amount of ribbon needed
 */
export function amountOfRibbon(dimensions) {
  return dimensions.reduce((total, dimension) => {
    const [l, w, h] = parseDimensions(dimension);

    return total +
      2 * Math.min(l + w, l + h, w + h) +
      l * w * h;
  }, 0);
}
