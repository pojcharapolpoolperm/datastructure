// FIND THE INDEXES IN WHICH IF SORTED WILL MAKE THE ARRAY SORTED
/* 
    1. Find all unsorted numbers
    2. Find min and max of the unsorted numbers
    3. Find start and end indexes
        Compare min with from the beginning of the array
            - if min is >=  value at index, move index up until min < value
        Compare max from the end of array
            - if max <= value at index, move index down until max > value
*/

function subarraySort(array) {
  let minOutOfOrder = Infinity;
  let maxOutOfOrder = -Infinity;

  // Finding min and max value
  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    // If out of order find new min and max
    if (isOutOfOrder(i, num, array)) {
      minOutOfOrder = Math.min(minOutOfOrder, num);
      maxOutOfOrder = Math.max(maxOutOfOrder, num);
    }
  }

  // ARRAY IS SORTED
  if (minOutOfOrder === Infinity) {
    return [-1, -1];
  }

  let subarrayLeftIndex = 0;
  while (minOutOfOrder >= array[subarrayLeftIndex]) {
    subarrayLeftIndex++;
  }
  let subarrayRightIndex = array.length - 1;
  while (maxOutOfOrder <= array[subarrayRightIndex]) {
    subarrayRightIndex--;
  }
  return [subarrayLeftIndex, subarrayRightIndex];
}

function isOutOfOrder(i, num, array) {
  if (i === 0) return num > array[i + 1];
  if (i === array.length - 1) return num < array[i - 1];
  return num > array[i + 1] || num < array[i - 1];
}
