/* global describe, it */
'use strict';
import {destination, getsToBasementAt} from '../lib/day1/';
import {expect} from 'chai';

describe('Day 1', () => {
  describe('getsToBasementAt', () => {
    it('should return which step Santa arrives in basement', () => {
      expect(getsToBasementAt(')')).to.equal(1);
      expect(getsToBasementAt('(((()))))')).to.equal(9);
    });
  });

  describe('destination', () => {
    it('should return 0 for empty string', () => {
      expect(destination('')).to.equal(0);
    });

    it('should return positive number for (s', () => {
      expect(destination('(')).to.equal(1);
      expect(destination('((')).to.equal(2);
    });

    it('should return negative number for )s', () => {
      expect(destination(')')).to.equal(-1);
      expect(destination('))')).to.equal(-2);
    });

    it('should total correctly', () => {
      expect(destination('))(')).to.equal(-1);
    });
  });
});
