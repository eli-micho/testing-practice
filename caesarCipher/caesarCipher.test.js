const { TestScheduler } = require('jest');
const cipher = require('./caesarCipher');

test('Returns a string encoded with Caesar Cipher', () => {
    expect(cipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
});