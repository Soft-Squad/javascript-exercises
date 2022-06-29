const removeFromArray = function(numArray, ...args) {
    for (let i = 0; i < args.length; i++) {
        for (let j = 0; j < numArray.length; j++) {
            if (numArray[j] === args[i]) {
                numArray.splice(j, 1);
            }
        }
    }
    return numArray;
};

// Do not edit below this line
module.exports = removeFromArray;
