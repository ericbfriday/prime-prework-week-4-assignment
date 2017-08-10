// Copy items from the array called arr to a new array called reversedArray,
// reversing the order of elements
// The last element on arr should become the first in reversedArray
// Do not use Array.reverse()!

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
//console.log(arrayReverser([42.4, 3, 'red', 'magenta']));
