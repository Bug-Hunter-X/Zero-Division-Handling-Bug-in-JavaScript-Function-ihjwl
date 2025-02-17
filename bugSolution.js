function myFunction(a, b) {
  if (b === 0) {
    if (a === 0) {
      return NaN; //Return NaN if both are zero
    } else if (a > 0) {
      return Infinity; //Return Infinity for positive numerator and zero denominator
    } else {
      return -Infinity; //Return -Infinity for negative numerator and zero denominator
    }
  } else if (a === 0) {
    return 0;
  }
  return a / b; 
} 