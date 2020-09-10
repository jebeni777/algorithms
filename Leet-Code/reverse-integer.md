### 7. Reverse Integer

Given a 32-bit signed integer, reverse digits of an integer.  

Example 1:  
```
Input: 123
Output: 321
```
Example 2:  
```
Input: -123
Output: -321
```
Example 3:  
```
Input: 120
Output: 21
```
Note:  
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.  

## my solution
```
var reverse = function(x) {
    if (parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x) > 2147483647 || 
        parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x) < -2147483647) {
        return 0;
    } else {
        return parseFloat(x.toString().split('').reverse().join('')) * Math.sign(x)
    }
};
```

**I wasn't familiar with parseFloat or the Math.sign for this one. I looked them up and studied them to get a better understanding. On first try, I was inclined to turn toString, split, reverse and join but didn't have the rest of the tools for that to work. Then it was just a matter of putting the limits for the 32-bit signed integer in reverse positive and negative.**