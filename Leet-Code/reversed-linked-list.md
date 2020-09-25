### 206. Reverse Linked List

Reverse a singly linked list.  

Example:  
```
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
```

Follow up:

A linked list can be reversed either iteratively or recursively. Could you implement both?

## my solution - recursively
```
var reverseList = function(input) {
    const next = (head, prevNode) => {
       if (head !== null && head.val !== undefined) {
          prevNode = new ListNode(head.val, prevNode); 
          return next(head.next, prevNode)
       }
        return prevNode;
    }
    return next(input, null);
};
```

## my solution - iteratively
```
 var prevNode = null;
    while (head !== null) {
        if (head.val !== undefined) {
           prevNode = new ListNode(head.val, prevNode);
            head = head.next;
        }
    }
    return prevNode;
};
```

## my solution - in place
```
var reverseList = function(head) {
    var prevNode = null;
    var nextNode = null;
    
    while (head !== null) {
        if (head.val !== undefined) {
            nextNode = head.next;
            head.next = prevNode;
            prevNode = head;
            head = nextNode;
        }
    }
    return prevNode;
};
```
