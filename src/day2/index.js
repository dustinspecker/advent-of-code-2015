'use strict';

/**
 * Calculate amount of gift wrap
 * @param {String[]} dimensions - package dimensions like '2x2x2'
 * @return {Number} - sq. ft of gift wrap with slack
 */
export function amountOfGiftWrap(dimensions) {
  return dimensions.reduce((total, dimension) => {
    const [l, w, h] = dimension
      .split('x')
      .map(n => parseInt(n, 10));

    return total +
      2 * l * w +
      2 * l * h +
      2 * w * h +
      Math.min(l * w, l * h, w * h);
  }, 0);
}
