// FIND THREE NUMBER SUM

/* 
    ** O(n^2) | O(n)
    1. Sort
    2. Iterate through array once (i) => array.length - 2
    3. Use left (number after nth iteration) && right pointer
    4. i + L + R 
        if = sum add to array
        if > sum right--
        if < sum left++ 
*/

function threeNumberSum(array, target) {
  array.sort((a, b) => a - b);
  const triplets = [];
  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;
    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum === target) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }
  return triplets;
}

console.log("test : ");
console.log(test([12, 3, 1, 2, -6, 5, -8, 6], 0));

function test(array, target) {
  array.sort((a, b) => a - b);

  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      let sum = array[i] + array[left] + array[right];
      if (sum === target) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
        right--;
      } else if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }

  return triplets;
}
