const fibonacci = function(index) {
    if (index < 0) {
        return "OOPS";
    }
    
    let goldRatio = 1.618034;
    return +((Math.pow(goldRatio, index) - Math.pow((1 - goldRatio), index)) / Math.sqrt(5)).toFixed(0);
};

// Do not edit below this line
module.exports = fibonacci;
