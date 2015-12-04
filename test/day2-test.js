/* global describe, it */
'use strict';
import {amountOfGiftWrap} from '../lib/day2/';
import {expect} from 'chai';

describe('day2', () => {
  describe('amountOfGiftWrap', () => {
    it('should calculate surface area and slack', () => {
      expect(amountOfGiftWrap(['1x1x10'])).to.equal(43);
      expect(amountOfGiftWrap(['2x2x2'])).to.equal(28);
      expect(amountOfGiftWrap(['2x3x4'])).to.equal(58);
      expect(amountOfGiftWrap(['1x1x10', '2x2x2', '2x3x4'])).to.equal(129);
    });
  });
});
