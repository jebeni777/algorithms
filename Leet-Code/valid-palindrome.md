### 125. Valid Palindrome

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.  

Note: For the purpose of this problem, we define empty string as valid palindrome.  

Example 1:  
```
Input: "A man, a plan, a canal: Panama"
Output: true
```
Example 2:  
```
Input: "race a car"
Output: false
```

## my solution
```
var isPalindrome = function(s) {
    // split string into individual strings
    // remove all spaces and remove punctuation
    // reverse alpha-numeric characters and test

    var newStr = s.replace(/[^a-zA-Z\d]/g, '');

    var compare = newStr.split('').reverse().join('');
    
    return newStr.toLowerCase() === compare.toLowerCase();
 
    
};
```

**Need to practice regex more, but this was a fun one. Learned a website for trying out regex at [https://regex101.com/]**