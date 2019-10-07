// @flow

import macro from '../macro';
import index, { loader } from '../index';

describe('index', () => {
  it('refers to macro correctly', () => {
    expect(index).toBe(macro);
  });

  it('exports mock loader', () => {
    expect(loader('')).toEqual([]);
  });
});
