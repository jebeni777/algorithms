### Leet Code
### 226. Invert Binary Tree

Invert a binary tree.  

Example:  

Input: 
```
     4
   /   \
  2     7
 / \   / \
1   3 6   9
```
Output:  
```
     4
   /   \
  7     2
 / \   / \
9   6 3   1
```
### my solution:
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    // check if root null
    var temp;
    if (root === null) {
        return null;
    }
    // swap root.left with root.right
        temp = root.left;
        root.left = root.right;
        root.right = temp;
    // invoke recursion by calling invertTree function
    // on root.left and root.right
        invertTree(root.left);
        invertTree(root.right);
        
    return root 
};
```

### 617. Merge Two Binary Trees

Given two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.  

You need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.  

Example 1:  
```
Input: 
	Tree 1                     Tree 2                  
          1                         2                             
         / \                       / \                            
        3   2                     1   3                        
       /                           \   \                      
      5                             4   7 

Output: 
Merged tree:
	     3
	    / \
	   4   5
	  / \   \ 
	 5   4   7
```
Note: The merging process must start from the root nodes of both trees.  

### my solution:
```
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
    if (t1 === null && t2 === null) {
        return null;
    }
    if (t1 === null) {
        return t2;
    }
    if (t2 === null) {
        return t1;
    } else {
      var t3Val = t1.val + t2.val;
    }
    var t3Left = mergeTrees(t1.left, t2.left);
    var t3Right = mergeTrees(t1.right, t2.right);
    return new TreeNode(t3Val, t3Left, t3Right);
};
```




###########

```
const LR = (value) => value <= 100 ? 'L' : 'R';
const part = (value) => LR(value) + ("0" + (Math.abs(value-100) % 100)).slice(-2);
const formatCombination = (combination) => (
  part(combination[0]) + '-' + part(combination[1]) + '-' + part(combination[2])
);
var crack = function(safe) {
  const combination = [1, 1, 1];
  let foundPart = '';
  let current = 0;
  for(let i = 1; i <= 200; i++) {
      combination[current] = i;
      const formatted = formatCombination(combination);
      const result = safe.unlock(formatted);
      if (result.length > foundPart.length) {
        current = Math.floor(result.length / 5);
        if (current === 3) {
          break;
        }
        foundPart = result;
        i = 0;
      }
  }
  return safe.open();
};
```
