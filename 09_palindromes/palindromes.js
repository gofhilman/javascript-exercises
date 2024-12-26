const palindromes = function (str) {
    let filteredStr = str
                        .toLowerCase()
                        .split('')
                        .filter((letter) => /\w/.test(letter))
                        .join('');
    let reversedStr = filteredStr
                        .split('')
                        .reverse()
                        .join('');
    return filteredStr === reversedStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
