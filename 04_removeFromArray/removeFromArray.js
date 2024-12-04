const removeFromArray = function(arr, ...removedElements) {
    let newArr = arr;
    for (let removedElement of removedElements) {
        for (let i=0; i<arr.length; i++) {
            if(arr[i]===removedElement) {
                newArr.splice(i,1);
                i--;
            }
        }
    }
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
