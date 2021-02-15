const reverseString = require('./reverseString');

test('Returns a string but reversed', () => {
    expect(reverseString('horse')).toBe('esroh');
});

