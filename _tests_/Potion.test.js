const { expect } = require('@jest/globals');
const Potion = require('../lib/Potion.js');

test('creates a health potion obj', () => {
    const potion = new Potion('health')

    expect(potion.label).toBe('health');
    expect(potion.value).toEqual(expect.any(Number));
});

test('creates a random potion object', () => {
    const potion  = new Potion();

    expect(potion.label).toEqual(expect.any(String));
    expect(potion.label.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});
