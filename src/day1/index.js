'use strict';

/**
 * Determine the floor Santa arrives on
 * @param {String} steps - ( = up ) = down
 * @return {Number} - floor Santa arrived on
 */
export function destination(steps) {
  return steps
    .split('')
    .reduce((floor, step) => step === '(' ? ++floor : --floor, 0);
}
