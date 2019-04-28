// Fibonacci Sequence --> for n > 2
// Ex. fibo(10)

//

/*
    Recursive -- Time Complexity --> O(2ᴺ)
              -- Space Complexity -> O(n)
                    - at most on call stack

        if n==2 retrurn 1
        else n == 1 return 0
        else return fib(n-1) + fib(n-2)

    HashTable -- save fib result in hashtable then check
              -- Time: O(n) Space: O(n)

    Array -- store last 2 fib in an array then update array
          -- Time: O(n) Space: O(1) -- no call in stack   
*/

function nthFibRecursive(n) {
  if (n == 2) return 1;
  else if (n == 1) return 0;
  else return nthFibRecursive(n - 1) + nthFibRecursive(n - 2);
}

function nthFibHashTable(n, memorize = { 1: 0, 2: 1 }) {
  if (n in memorize) {
    return memorize[n];
  } else {
    memorize[n] =
      nthFibHashTable(n - 1, memorize) + nthFibHashTable(n - 2, memorize);
    return memorize[n];
  }
}

function nthFibArray(n) {
  const lastTwo = [0, 1];
  let counter = 3;
  while (counter <= n) {
    const nextFib = lastTwo[0] + lastTwo[1];
    lastTwo[0] = lastTwo[1];
    lastTwo[1] = nextFib;
    counter++;
  }
  return n > 1 ? lastTwo[1] : lastTwo[0];
}

// console.log(nthFibRecursive(45));
console.log(nthFibHashTable(300));
