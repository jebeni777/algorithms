### 383. Ransom Note

Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

Each letter in the magazine string can only be used once in your ransom note.

Example 1:

```
Input: ransomNote = "a", magazine = "b"
Output: false
```

Example 2:

```
Input: ransomNote = "aa", magazine = "ab"
Output: false
```

Example 3:

```
Input: ransomNote = "aa", magazine = "aab"
Output: true
```

Constraints:

You may assume that both strings contain only lowercase letters.

## my solution

```
var canConstruct = function(ransomNote, magazine) {
    // ransomNote letter count
    const dict = new Map();
    ransomNote.split('').forEach(letter => {
        // check to see if letter has been seen yet
        if (dict.has(letter)) {
            // if letter seen increment value
            let count = dict.get(letter);
            count = count + 1;
            dict.set(letter, count);
            } else {
                // letter not seen yet so add to dict
                dict.set(letter, 1);
            }
    })
    // compare to avail letters in magazine
    const mag = new Map();
    magazine.split('').forEach(letter => {
        // check to see if letter has been seen yet
        if (mag.has(letter)) {
            // if letter seen increment value
            let count = mag.get(letter);
            count = count + 1;
            mag.set(letter, count);
            } else {
                // letter not seen yet so add to mag
                mag.set(letter, 1);
            }
    })
    let isFalse = false;
    // return true or false
    // iterate over dict & compare to mag
    // does mag have key and value equal to or
    // greater then dict key, value
     dict.forEach((value, letter) =>  {
         if (!mag.has(letter)) {
             isFalse = true;
             } else {
              if (dict.get(letter) > mag.get(letter)) {
                isFalse = true;
             }
         }
     })
    if (isFalse) {
        return false;
    } else {
        return true;
    }

};
```
