const arrayAnalysis = (arr) => {
    const average = arr.reduce((sum,val) => sum + val) / arr.length
    const min = arr.reduce((a, b) => {
      if(a<b){
        return a
      }else{
        return b
      }
    });
    
    const max = arr.reduce((a,b) => {
      if(a<b){
        return b
      }else{
        return a
      }
    });
    
    const length = arr.length;
    
    return { average, min, max, length}
    
};

module.exports = arrayAnalysis;