const ftoc = function(fTemp) {
  let cTemp = (fTemp - 32) * (5/9);
  if (cTemp === 0) {
    return 0;
  }
  return round(cTemp, 1);
};

const ctof = function(cTemp) {
  let fTemp = cTemp * (9/5) + 32;
  if (fTemp === 0) {
    return 0;
  }
  return round(fTemp, 1);
};

function round(value, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
