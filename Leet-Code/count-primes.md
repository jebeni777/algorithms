### 204. Count Primes

Count the number of prime numbers less than a non-negative number, n.  

Example:  
```
Input: 10
Output: 4
Explanation: There are 4 prime numbers less than 10, they are 2, 3, 5, 7.
```

## my solution
```
var countPrimes = function(n) {
    let arr = [],
        count = 0;
   for (let i = 2; i < n; i++) {
        if (arr[i] === undefined) {
            arr[i] = 1;
            count++;
            let j = 2;
            while (i * j < n) {
                arr[i * j] = 0;
                j++
            }
        } 
   }
    return count;
};
```

**This one was really hard for me and I had to get more help after working on it for 2 days. I got it several different ways that came close by getting the evens or odds counts correct or a full solution that wouldn't stay within the time constraint in number 100,000 or higher. Then I just looked for answer to try to learn what I was missing and why I couldn't get it. Several times I feel I was coming close, but could never put all the pieces together.**