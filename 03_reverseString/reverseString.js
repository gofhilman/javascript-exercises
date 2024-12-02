const reverseString = function(oriString) {
    let reversedString = '';
    for(let i=oriString.length-1; i>=0; i--) reversedString += oriString[i];
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
