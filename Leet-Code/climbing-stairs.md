### 70. Climbing Stairs

You are climbing a stair case. It takes n steps to reach to the top.  

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?  

Example 1: 
```
Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
```
Example 2:
```
Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```
Constraints:  
```
1 <= n <= 45
```

## my solution
```
var climbStairs = function(n) {
 
 // 1st step +1   // 1
 // 2nd step +2 or 1 + 1   // 2
 // 3rd step 1 + 2 & 2s + 1  // 3
 // 4th step 2s + 2 or 3s + 1  // 5
 // 5th step 3s + 2 & 4s + 1  // 8
 // 6th step 4s + 2 & 5s + 1  // 13
 // 7th step 5s + 2 & 6s + 1  // 21
 
    var result = 0;
    var step = 1;
    var steps = 2;
    
     if (n < 4) {
        return n;   
     }
    for (let i = 3; i <= n; i++) {
        result = step + steps;
        step = steps;
        steps = result;
    }
 return result;
};
```
