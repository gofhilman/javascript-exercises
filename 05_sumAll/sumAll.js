const sumAll = function(posIntOne, posIntTwo) {
    if(posIntOne<0 || posIntTwo<0 || !Number.isInteger(posIntOne) || !Number.isInteger(posIntTwo)) {
        return 'ERROR'
    }
    if(posIntOne>posIntTwo) {
        let largerPosInt = posIntOne;
        posIntOne = posIntTwo;
        posIntTwo = largerPosInt;
    }
    let sum = 0;
    for (; posIntOne<=posIntTwo; posIntOne++) sum += posIntOne;
    return sum
};

// Do not edit below this line
module.exports = sumAll;
