### 783. Minimum Distance Between BST Nodes

Given a Binary Search Tree (BST) with the root node root, return the minimum difference between the values of any two different nodes in the tree.

Example :

```
Input: root = [4,2,6,1,3,null,null]
Output: 1
Explanation:
Note that root is a TreeNode object, not an array.

The given tree [4,2,6,1,3,null,null] is represented by the following diagram:

          4
        /   \
      2      6
     / \
    1   3

while the minimum difference in this tree is 1, it occurs between node 1 and node 2, also between node 3 and node 2.
```

Note:

The size of the BST will be between 2 and 100.  
The BST is always valid, each node's value is an integer, and each node's value is different.  
This question is the same as 530: https://leetcode.com/problems/minimum-absolute-difference-in-bst/

## my solution

```
var getHigh = (root) => {
    var currentVal = root.val;
    if (root.right !== null) {
        currentVal = getHigh(root.right);
    }
    return currentVal;
};
var getLow = (root) => {
    var currentVal = root.val;
    if (root.left !== null) {
        currentVal = getLow(root.left);
    }
    return currentVal
};
var tree = (root) => {
    if (!root) {
        return Number.MAX_VALUE;
    };
    var lowest = Number.MAX_VALUE;
    var current = root.val;
    if (root.left !== null) {
        var lChild = getHigh(root.left);
    }
    if (root.right !== null) {
    var rChild = getLow(root.right);
    }
    if ((current - lChild) < lowest) {
        lowest = (current - lChild);
    }
    if ((rChild - current) < lowest) {
        lowest = (rChild - current);
    }
    var lLow = tree(root.left);
    var rLow = tree(root.right);

    return Math.min(lLow, rLow, lowest);
}

var minDiffInBST = function(root) {
    return tree(root);
};
```
