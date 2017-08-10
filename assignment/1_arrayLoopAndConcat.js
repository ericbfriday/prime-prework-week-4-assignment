function concatArrayToString(array) {
  var conString = '';
    for (i = 0; i < (array.length); i ++) {
      conString += array[i];
    }
  // Write code here: Concatentate all of the values in array together using a loop
  // For example: if the array given is [1, 2, 3, 4] the conString should be '1234'

  // return concatentated values
  return conString;
}

// call concatArrayToString and console log the return
console.log(concatArrayToString([1,2,3,4]));
