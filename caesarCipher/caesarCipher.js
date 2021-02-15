const cipher = (string, shift) => {
    const stringArr = string.split('');
    
    const newArr = stringArr.map(letter => {
      const l = letter.charCodeAt()
      if (l >= 32 && l <= 39){
        return l
      }else{
        return l + shift
      }
    }).map(l => String.fromCharCode(l))

    return newArr.join('')
};

cipher('defend the east wall of the castle', 1)
module.exports = cipher;