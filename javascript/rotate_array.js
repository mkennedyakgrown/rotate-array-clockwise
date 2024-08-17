function rotateArray(arr, k) {
  if (k === arr.length) {
    return arr;
  }
  if (arr.length === 0) {
    return arr;
  }

  const rotatedArr = arr;
  for (let i = k; i > 0; --i) {
    rotatedArr.unshift(rotatedArr.pop());
  }

  return rotatedArr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [4, 1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3, 4], 1));

  console.log("");

  console.log("Expecting: [2, 3, 1]");
  console.log("=>", rotateArray([1, 2, 3], 2));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", rotateArray([1, 2, 3], 3));
}

module.exports = rotateArray;

// Please add your pseudocode to this file
// And a written explanation of your solution
