### 169. Majority Element

Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

```
Input: [3,2,3]
Output: 3
```

Example 2:

```
Input: [2,2,1,1,1,2,2]
Output: 2
```

## my solution

```
var majorityElement = function(nums) {
    // new Map with key and value
    // value counts how many of each key
    // nums.length / 2 compared to element count
    // key: 3 value: 2
    // key: 2 value: 1

    const dict = new Map();
    for (let i = 0; i < nums.length; i++) {
        if (!dict.has(nums[i])) {
            dict.set(nums[i], 1);
        } else {
            dict.set(nums[i], dict.get(nums[i]) + 1);
        }
        if (nums.length / 2 <= dict.get(nums[i])) {
            return nums[i];
        }
    }
};
```

## another solution

```
var majorityElement = function(nums) {
    nums.sort();
    return nums[Math.floor(nums.length / 2)]
};
```
