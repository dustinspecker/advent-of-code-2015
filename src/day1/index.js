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

/**
 * Determine which step Santa gets to the basement
 * @param {String} steps - ( = up ) = down
 * @return {Number} - which step Santa arrived at basement
 */
export function getsToBasementAt(steps) {
  let floor = 0
    , stepSantaArrivesAtBasement;

  steps
    .split('')
    .forEach((step, index) => {
      floor += step === '(' ? 1 : -1;

      if (!stepSantaArrivesAtBasement && floor === -1) {
        stepSantaArrivesAtBasement = index + 1;
      }
    });

  return stepSantaArrivesAtBasement;
}
