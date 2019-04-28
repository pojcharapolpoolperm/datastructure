// Permutation - unique ordering of integers

/*
    How many permutation are there?
        - !n permutations (n)(n-1)(n-2)...(1)
        - every permutation have n numbers
        - !n * n calls
    Time: O(!n * n * n) --> O(n²*!n)
        
*/

function getPermutation(array) {
  const permutations = [];
  permutationHelper(array, [], permutations);
  return permutations;
}

function permutationHelper(array, currentPerm, permutations) {
  if (array.length === 0 && currentPerm.length > 0) {
    // Will be hit !n time
    permutations.push(currentPerm);
  } else {
    for (let i = 0; i < array.length; i++) {
      // call n times
      const newArray = array.slice(0, i).concat(array.slice(1 + i));
      const newPerm = currentPerm.concat(array[i]);

      // call n times
      permutationHelper(newArray, newPerm, permutations);
    }
  }
}

console.log(getPermutation([1, 2, 3, 4, 5]));
