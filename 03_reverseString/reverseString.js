const reverseString = function(text) {
    const word = text.split("");
    const result = [];

    for (let i = 0; i < text.length; i++) {
        result[i] = word.pop();
    }

    return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
