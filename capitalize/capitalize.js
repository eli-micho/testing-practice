const capitalize = (string) => {
    const firstLetter = string.split('')[0].toUpperCase();
    const newString = firstLetter + string.slice(1)
    return newString
}

capitalize('horse');

module.exports = capitalize;
