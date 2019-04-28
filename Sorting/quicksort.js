// QUICK SORT
/*
    1. pick 1 number as pivot (1st number)
    2. iterate through rest of array
    3. sort every number with respect to pivot
        -  every number smaller move to left
        - ever number greater move to right
    4. repeat with each side subarry

    [8,5,2,9,5,6,3]   -->   [8,5,2,9,5,6,3]  -->    [8,5,2,9,5,6,3]  -->
     P L         R           P   L       R           P     L     R

    [8,5,2,3,5,6,9]
     P       L R

--> while right pointer > left pointer
      if leftnum > pivot && rightnum < pivot
        swap two numbers (left, right)

        if left <= pivot increase left index
        if right >= pivot decrease right index
                                

 */

function quickSort(array) {
  quickSortHelper(array, 0, array.length - 1);
  return array;
}

function quickSortHelper(array, start, end) {
  if (start >= end) return;
  const pivot = start;
  let left = start + 1;
  let right = end;
  while (right >= left) {
    if (array[left] > array[pivot] && array[right] < array[pivot]) {
      swap(left, right, array);
    }
    if (array[left] <= array[pivot]) left++;
    if (array[right] >= array[pivot]) right--;
  }
  swap(pivot, right, array);
  const leftSmaller = right - 1 - start < end - (right + 1);
  if (leftSmaller) {
    quickSortHelper(array, start, right - 1);
    quickSortHelper(array, right + 1, end);
  } else {
    quickSortHelper(array, right + 1, end);
    quickSortHelper(array, start, right - 1);
  }
}

function swap(i, j, array) {
  let temp = array[j];
  array[j] = array[i];
  array[i] = temp;
}
