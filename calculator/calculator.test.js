const calculator = require('./calculator');

test('Calculator Object that contains basic operations', () => {
    expect(calculator.add(1,2)).toBe(3)
    expect(calculator.subtract(1,2)).toBe(-1)
    expect(calculator.divide(1,2)).toBe(0.5)
    expect(calculator.multiply(1,2)).toBe(2)
});

