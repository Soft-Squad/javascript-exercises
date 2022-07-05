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
        if (isCapitalUnicode(charCodeArr[i])) {
            charCodeArr[i] = shiftCapital(charCodeArr[i], shift)
        } else if (isLowerUnicode(charCodeArr[i])) {
            charCodeArr[i] = shiftLower(charCodeArr[i], shift)
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

function shiftCapital(value, shift) {
    let temp = shift;
    while (temp > 25) {
        shift -= 26;    // Subtracts a full 'loop' of the available unicode characters
        temp -= shift;
    }
    if ((value + shift) > 90 && (value - shift) < 90) {
        value = ((value + shift) - 90) + 64;  // Wraps to front of capital unicode values
    } else if ((value + shift) < 65 && (value - shift) > 65) {
        value = ((value + shift) - 64) + 90;  // Wraps to end of capital unicode values
    } else {
        value += shift;
    }
    return value;
}


function shiftLower(value, shift) {
    let temp = shift;
    while (temp > 25) {
        shift -= 26;
        temp -= shift;
    }
    if ((value + shift) > 122 && (value - shift) < 122) {
        value = ((value + shift) - 122) + 96;
    } else if ((value + shift) < 97 && (value - shift) > 97) {
        value = ((value + shift) - 96) + 122;
    } else {
        value += shift;
    }
    return value;
}
// Do not edit below this line
module.exports = caesar;
