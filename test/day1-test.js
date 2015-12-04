/* global describe, it */
'use strict';
import day1 from '../lib/day1/';
import {expect} from 'chai';

describe('Day 1', () => {
  it('should return 0 for empty string', () => {
    expect(day1('')).to.equal(0);
  });

  it('should return positive number for )s', () => {
    expect(day1(')')).to.equal(1);
    expect(day1('))')).to.equal(2);
  });

  it('should return negative number for (s', () => {
    expect(day1('(')).to.equal(-1);
    expect(day1('((')).to.equal(-2);
  });
});
