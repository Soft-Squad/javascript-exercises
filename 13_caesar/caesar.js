const caesar = function(text, shift) {
    let charCodes = [];

    for (let i = 0; i < text.length; i++) {
        charCodes[i] = text.codePointAt(i);
    }

    return shiftCode(charCodes, shift);
};

function shiftCode(charCodeArr, shift) {
    let result = [];
    for (let i = 0; i < charCodeArr.length; i++) {
        if (charCodeArr[i] != 33 && charCodeArr[i] != 44 && charCodeArr[i] != 32) {
            if ((charCodeArr[i] + shift) > 90 && (charCodeArr[i] - shift) < 90) {
                charCodeArr[i] = ((charCodeArr[i] + shift) - 90) + 64;  // Wraps to front of capital unicode values
            } else if ((charCodeArr[i] + shift) < 65 && (charCodeArr[i] - shift) > 65) {
                charCodeArr[i] = ((charCodeArr[i] + shift) - 64) + 90;  // Wraps to end of capital unicode values
            } else {
                charCodeArr[i] += shift;
            }
        }
        result[i] = charCodeArr[i];
        result[i] = String.fromCharCode(result[i]);
    }
    
    return result.join("");
}

function isCapitalUnicode(value) {
    if (value > 64 && value < 91) {
        return true;
    }
    return false;
}

function isLowerUnicode(value) {
    if (value > 96 && value < 123) {
        return true;
    }
    return false;
}

function shiftCapital() {

}


function shiftLower() {
    
}
// Do not edit below this line
module.exports = caesar;
