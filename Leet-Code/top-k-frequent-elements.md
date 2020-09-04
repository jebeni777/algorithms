### Leet Code
### 347. Top K Frequent Elements

Given a non-empty array of integers, return the k most frequent elements.  

Example 1:  
```
Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
```
Example 2:  
```
Input: nums = [1], k = 1
Output: [1]
```
Note:

You may assume k is always valid, 1 ≤ k ≤ number of unique elements.  
Your algorithm's time complexity must be better than O(n log n), where n is the array's size.  
It's guaranteed that the answer is unique, in other words the set of the top k frequent elements is unique.  
You can return the answer in any order.  

### my first solution
```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    // use dictionary to keep elements
    // then tally how many of each element
    // then return most frequent k elements
    var dict = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!dict.has(nums[i])){
          dict.set(nums[i], 1);  
        } else {
            dict.set(nums[i], dict.get(nums[i]) + 1); 
        }
    }
    var arr = [];
    const addElements = (value, key, map) => {
        arr.push(value);
    }
    dict.forEach(addElements);
    arr.sort((a,b) => b - a);
    arr = arr.slice(0, k);
    var result = [];
    const elements = (value, key, map) => {
        if (arr.includes(value)) {
            result.push(key);
        }
    }
    dict.forEach(elements);
    return result;
};
```
