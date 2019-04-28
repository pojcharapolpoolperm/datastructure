function log(arg) {
  console.log(arg);
}

// FIND ALL PAIRS WITH SUM / Single Pair

// 2 Loops - O(n²)
function twoNumberSumIterative(array, target) {
  let pairs = [];
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        pairs.push([array[i], array[j]].sort((a, b) => a - b));
      }
    }
  }

  return pairs;
}

log("twoNumberSumIterative: ");
log(twoNumberSumIterative([2, 3, 4, 5, 11, -1, -2, 6], 9));

/*
  Hash Table 
      - As we pass through each element in the array, we check to see if target minus the current element exists in the hash table
      - only need to loop through the array once, resulting in a running time of O(n) since each lookup and insertion in a hash table is O(1).
*/

function twoNumberSumHash(array, target) {
  let pairs = [];
  let hashtable = {};

  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i];

    if (hashtable[difference.toString()] !== undefined) {
      pairs.push([array[i], difference].sort((a, b) => a - b));
    }

    hashtable[array[i].toString()] = array[i];
  }
  return pairs;
}

log("twoNumberSumHash: ");
log(twoNumberSumHash([2, 3, 4, 5, -6, 10, -2, 6], 6));

// Single Pair - O(nlog(n)) | O(1) space
function twoNumberSumLeftRight(array, target) {
  array.sort((a, b) => a - b);
  let left = 0;
  let right = array.length - 1;
  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      return [array[left], array[right]];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
  return [];
}

function test(array, target) {
  let pairs = [];
  let hash = {};

  for (let i = 0; i < array.length; i++) {
    let difference = target - array[i];
    if (hash[difference.toString()] !== undefined) {
      pairs.push([difference, array[i]]);
    }

    hash[array[i].toString()] = array[i];
  }

  return pairs;
}

log("test: ");
log(test([2, 3, 4, 2, -6, 10, -2, 6], 6));
