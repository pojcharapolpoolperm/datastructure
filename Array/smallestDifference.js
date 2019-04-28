// Find numbers (one from first array, one from second array) with smallest difference ** Find 2 closest numbers from two arrays

/*
    1. Sort both arrays
    2. if x₃ = y₅ return because distance equals 0
    3. if x₃ < y₅ number before x₃ && after y₅ will make the gap wider --> increment x₃ or decrement y₅
    

    steps: 
        1. Have pointers at the beginning of both arrays
        2. Compare the numbers on each index
            - if index1 < index2 --> index1++
            - else index1 > index2 --> index2++
            - else  if index1 = index2 --> return [index1,index2]
            -  check if current difference is smaller than previous smallest
                - if smaller, set smallest to current

    Time Complexity -- depends on sorting alogorithm
                    -- go through each array once O(N) + O(M)
                    -- sort array1 + sort array2 
                    -- O(nlogn) + O(mlogm)
                    -- Total = O(nlogn) + O(mlogm) + O̶(̶N̶)̶ +̶ O̶(̶M̶)̶
                
*/

done;

function smallestDifference(array1, array2) {
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);
  let index1 = 0;
  let index2 = 0;
  let smallest = Infinity;
  let current = Infinity;

  let smallestPair = [];

  while (index1 < array1.length && index2 < array2.length) {
    let firstnum = array1[index1];
    let secondnum = array2[index2];
    if (firstnum < secondnum) {
      current = secondnum - firstnum;
      index1++;
    } else if (firstnum > secondnum) {
      current = firstnum - secondnum;
      index2++;
    } else {
      return [firstnum, secondnum];
    }

    if (current < smallest) {
      smallest = current;
      smallestPair = [firstnum, secondnum];
    }
  }

  return smallestPair;
}

function test(array1, array2) {
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  let index1 = 0;
  let index2 = 0;

  let current = Infinity;
  let smallest = Infinity;

  const smallestPair = [];

  while (index1 < array1.length && index2 < array2.length) {
    let num1 = array1[index1];
    let num2 = array2[index2];

    if (num1 < num2) {
      current = num2 - num1;
      index1++;
    } else if (num1 > num2) {
      current = num1 - num2;
      index2++;
    } else {
      return [num1, num2];
    }

    if (current < smallest) {
      smallest = current;
      smallestPair = [num1, num2];
    }
  }

  return smallestPair;
}
