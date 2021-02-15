const reverseString = (string) => {
    const reversed = string.split('').reverse().join('');
    return reversed
};

reverseString('horse');
module.exports = reverseString;
