### 234. Palindrome Linked List

Given a singly linked list, determine if it is a palindrome.  

Example 1:  
```
Input: 1->2
Output: false
```
Example 2:  
```
Input: 1->2->2->1
Output: true
```

## my solution
```
var isPalindrome = function(head) {
    var newArr = [];
    var compare = [];
    while (head !== null) {
        if (head.val !== undefined) {
            newArr.push(head.val);
        }
        head = head.next;
    }
   compare = newArr.slice().reverse().join();
   if (newArr.join() === compare) {
      return true
   }
   return false
    
};
```

