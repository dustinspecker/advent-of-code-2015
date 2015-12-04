/* global describe, it */
'use strict';
import {amountOfGiftWrap, amountOfRibbon} from '../lib/day2/';
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

  describe('amountOfRibbon', () => {
    it('should calculate smallest perimeter and volume', () => {
      expect(amountOfRibbon(['2x3x4'])).to.equal(34);
      expect(amountOfRibbon(['1x1x10'])).to.equal(14);
      expect(amountOfRibbon(['2x3x4', '1x1x10'])).to.equal(48);
    });
  });
});
