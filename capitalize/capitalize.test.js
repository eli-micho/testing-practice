const capitalize = require('./capitalize');

test('Returns a string with first letter capitalized', () => {
    expect(capitalize('horse')).toBe('Horse');
});

