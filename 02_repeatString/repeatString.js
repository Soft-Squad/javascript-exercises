const repeatString = function(text, numRepeats) {
    if (numRepeats < 0) {
        return 'ERROR';
    }
    
    let result = "";
    for (let i = 0; i < numRepeats; i++) {
        result = result.concat("", text)
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
