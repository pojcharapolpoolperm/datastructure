// FIND LARGEST RANGE OF NUMBER

/* 
    EX. [2,11,3,0,15,5,2,4,10,7,12,6] Ans. [0-7]

    First way : 
        Sort Array - O(nlogn)
            - the loop to find 
    Second way : 
        Hash Table - O(3n) -  O(n)
            1. Put all the number in hash table with boolean true (good to explore)
            2. start with first index of array then check with hashtable if exist
                - if exist and true, marked as false 
                    - expand left and check if exist in hash table
*/

function largestRange(array) {
  let bestRange = [];
  let longestLength = 0;
  const nums = {};

  //   O(n)
  for (const num of array) {
    nums[num] = true;
  }

  // O(n)
  for (const num of array) {
    if (!nums[num]) continue;
    nums[num] = false;

    let currentLength = 1;
    let right = num + 1;
    let left = num - 1;
    // Go through each value in hash table only once O(n)
    while (left in nums) {
      nums[left] = false;
      currentLength++;
      left--;
    }
    while (right in nums) {
      nums[right] = false;
      currentLength++;
      right++;
    }
    if (currentLength > longestLength) {
      longestLength = currentLength;
      bestRange = [left + 1, right - 1];
    }
  }

  return bestRange;
}
