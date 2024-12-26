const fibonacci = function(seriesNumber) {
    if(+seriesNumber == 0) {
        return 0;
    } else if(+seriesNumber < 0) {
        return "OOPS";
    }

    let fibonacciSeries = [1,1];
    for (let i=2; i<+seriesNumber; i++) {
        fibonacciSeries.push(fibonacciSeries[i-2]+fibonacciSeries[i-1]);
    }
    return fibonacciSeries[+seriesNumber-1];
};

// Do not edit below this line
module.exports = fibonacci;
