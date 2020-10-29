### 14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

```
Input: strs = ["flower","flow","flight"]
Output: "fl"
```

Example 2:

```
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
```

## my solution

```
var longestCommonPrefix = function(strs) {
    let longestPrefix = '';
    let l = 0;  // l for letter
    let w = 0;  // w for word

    while (true) {
        if (strs.length === 0 || !strs[w][l]) {
            return longestPrefix;
        }
        let nextChar = strs[w][l];

        for (let i = 0; i < strs.length; i++) {
            if (strs[i][l] !== nextChar) {
                return longestPrefix;
            }
        }
        l++;
        longestPrefix = `${longestPrefix}${nextChar}`
    }
};
```

I got help with this one. I got hung up on the comparison portion and then returning the longest prefix.
