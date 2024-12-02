const repeatString = function(word, nRepeat) {
    if(nRepeat<0) {
        return 'ERROR'
    }
    let repeatedWord = '';
    for(let i=0; i<nRepeat; i++) repeatedWord += word;
    return repeatedWord
};

// Do not edit below this line
module.exports = repeatString;
