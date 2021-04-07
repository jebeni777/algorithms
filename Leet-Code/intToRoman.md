### 12. Integer to Roman  

Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.  

```
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
```

For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.  

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:  

    I can be placed before V (5) and X (10) to make 4 and 9.   
    X can be placed before L (50) and C (100) to make 40 and 90.  
    C can be placed before D (500) and M (1000) to make 400 and 900.  

Given an integer, convert it to a roman numeral.  

Example 1:  
```
Input: num = 3
Output: "III"
```
Example 2:
```
Input: num = 4
Output: "IV"
```
Example 3:
```
Input: num = 9
Output: "IX"
```
Example 4:
```
Input: num = 58
Output: "LVIII"
Explanation: L = 50, V = 5, III = 3.
```
Example 5:
```
Input: num = 1994
Output: "MCMXCIV"
Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
```
 
Constraints:

    1 <= num <= 3999



## my solution

```
var intToRoman = function(num) {
    const I = 1
    const V = 5
    const X = 10
    const L = 50
    const C = 100
    const D = 500
    const M = 1000
    let result = ""
    
    while (num > 0){
        if (num >= 1000) {
            result = result + "M"
            num -= 1000
            continue
        }
        if (num >= 900) {
            result = result + "CM"
            num -= 900
            continue
        }
        if (num >= 500) {
            result = result + "D"
            num -= 500
            continue
        }
        if (num >= 400) {
            result = result + "CD"
            num -= 400
            continue
        } 
        if (num >= 100) {
            result = result + "C"
            num -= 100
            continue
        }
        if (num >= 90) {
            result = result + "XC"
            num -= 90
            continue
        }
        if (num >= 50) {
            result = result + "L"
            num -= 50
            continue
        }
        if (num >= 40) {
            result = result + "XL"
            num -= 40
            continue
        } 
        if (num >= 10) {
            result = result + "X"
            num -= 10
            continue
        }
        if (num >= 9) {
            result = result + "IX"
            num -= 9
            continue
        }
        if (num >= 5) {
            result = result + "V"
            num -= 5
            continue
        }
        if (num >= 4) {
            result = result + "IV"
            num -= 4
            continue
        } 
        
        if (num >= 1) {
          num -= 1
          result = result + "I"  
        }  
    }
    
    return result
};
```
