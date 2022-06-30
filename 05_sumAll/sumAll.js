const sumAll = function(startNum, finalNum) {
    let sum = 0;
    
    if (startNum < 0 || finalNum < 0 || typeof startNum != "number" || typeof finalNum != "number") return "ERROR";

    if (startNum > finalNum) {
        let temp = startNum;
        startNum = finalNum;
        finalNum = temp;
    }
    for (let i = startNum; i <= finalNum; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
