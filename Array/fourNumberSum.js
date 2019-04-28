// FIND ALL THE SETS OF FOUR NUMBERS THAT SUM UP TO TARGET

/*
    Iterate 4 For Loops 
        -- Bad - O(n⁴)
    Hashtable:
        1. Go through all the number after index, sum the pair to check if the difference (target - sum) is in hashtable
            -- if exist --> go through all pair, and join each pair with the current pair and push to output array (quadruplet)
            -- if not continue
        2. Go through all the number before index, sum the pair and add to hashtable with the pair (nested array).
            -- if sum does not exist add sum to hashtable with corresponding pair as value
            -- if sum already exist, push to current pair to the sum field
        
        ** Add pair of sum to hashtable after
            -- prevent duplicates
            -- Only add sums of pairs to the hashtable in the for loops that iterates thorugh all the numbers behind current number
            
    Time Complexity:
        
        Average - O(2n²) = O(n²) 
                    Iterate through all the number 
                        then iterate through all the number after current O(n²)
                        then iterate through all the number before current O(n²)
        Worst - O(n³) 
                    Iterate through each sum pair in hashtable 
             
*/

function fourNumberSum(array, target) {
  const allPairSums = {};
  const quadruplets = [];

  for (let i = 0; i < array.length - 1; i++) {
    // O(n²)
    for (let j = i + 1; j < array.length; j++) {
      const currentSum = array[i] + array[j];
      const difference = target - currentSum;
      if (difference in allPairSums) {
        for (const pair of allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }
    // O(n²)
    for (let k = 0; k < i; k++) {
      const currentSum = array[i] + array[k];
      if (!(currentSum in allPairSums)) {
        allPairSums[currentSum] = [[array[k], array[i]]];
      } else {
        allPairSums[currentSum].push([array[k], array[i]]);
      }
    }
  }
  return quadruplets;
}

function test(array, target) {
  let quadruplets = [];
  let allPairSums = {};

  for (let i = 0; i < array.length - 1; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let currentSum = array[i] + array[j];
      let difference = target - currentSum;

      if (difference in allPairSums) {
        for (const pair in allPairSums[difference]) {
          quadruplets.push(pair.concat([array[i], array[j]]));
        }
      }
    }

    for (let k = 0; k < i; k++) {
      const sum = array[i] + array[k];
      if (!allPairSums[sum]) {
        allPairSums[sum] = [[array[k], array[i]]];
      } else {
        allPairSums[sum].push([array[k], array[i]]);
      }
    }
  }

  return quadruplets;
}
