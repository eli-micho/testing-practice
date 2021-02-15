const arrayAnalysis = require('./arrayAnalysis');

test('Funtion that takes an array and returns avg, min, max and length.', () => {
    expect(arrayAnalysis([1,2,3,4])).toStrictEqual({
        average: 2.5,
        min: 1,
        max: 4,
        length: 4
    })
});