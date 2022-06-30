const palindromes = function (text) {
    let processedString = text.toLowerCase().replace(/[^a-z]/g, "");
    
    return (processedString.split("").reverse().join("") == processedString);
};

// Do not edit below this line
module.exports = palindromes;
