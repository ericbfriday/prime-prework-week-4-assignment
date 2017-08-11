// Copy items from the array called arr to a new array called reversedArray,
// reversing the order of elements
// The last element on arr should become the first in reversedArray
// Do not use Array.reverse()!


//Write the code here
function arrayReverser(arr) {
  var reversedArray = [];
  while (arr.length) {
    reversedArray.push(arr.pop());
  }
  // return our reversed array
  return reversedArray;
}

// call arrayReverser and console log the return
console.log(arrayReverser(['Blue',3,'Red']));
/** Testing strings below are removed for running the testing
console.log(arrayReverser([42.4, 3, 'red', 'magenta']));
console.log(arrayReverser([NaN, 5, 88.8878, true, undefined, 'string']));
*/

/** First Attempt at the assignment is below. This will return arrays
// successfully in the console, but failed the test repeatedly regardless
// of what arrays are called through the following:
// console.log(arrayReverser([VARIOUS ARRAYS CALLED HERE]));

// Write the code here
var reversedArray = [];
function arrayReverser(arr) {
  for (i = 0; i < arr.length; i++) {
    reversedArray.unshift(arr[i]);
  }
  // return our reversed array
  return reversedArray;
}

// call arrayReverser and console log the return
console.log(arrayReverser(['blue', 3, 'red']));

// Additional testing
// console.log(arrayReverser([42.4, 3, 'red', 'magenta']));
// console.log(arrayReverser([NaN, 5, 88.8878, true, undefined, 'string']));
End first attempt */
