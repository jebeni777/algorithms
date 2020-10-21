### 938. Range Sum of BST

Given the root node of a binary search tree, return the sum of values of all nodes with value between L and R (inclusive).

The binary search tree is guaranteed to have unique values.

Example 1:

```
Input: root = [10,5,15,3,7,null,18], L = 7, R = 15
Output: 32
```

Example 2:

```
Input: root = [10,5,15,3,7,13,18,1,null,6], L = 6, R = 10
Output: 23
```

Note:

The number of nodes in the tree is at most 10000.  
The final answer is guaranteed to be less than 2^31.

## my first solution

```
var edges = (root, L, R) => {
    if (!root) {
        return 0;
    }
    var currentVal = 0;
    if (root.val >= L && root.val <= R) {
        currentVal = root.val
    }
    return currentVal + (edges(root.left, L, R)) +
                             (edges(root.right, L, R));
};

var rangeSumBST = function(root, L, R) {
    return edges(root, L, R);
};
```

## my second solution

```
var edges = (root, L, R) => {
    if (!root) {
        return 0;
    }
    var currentVal = 0;
    if (root.val >= L && root.val <= R) {
        currentVal = root.val
    }
    var lSum = 0;
    var rSum = 0;
    if (root.val >= L) {
        lSum = edges(root.left, L, R);
    }
    if (root.val <= R) {
        rSum = edges(root.right, L, R);
    }

    return currentVal + lSum + rSum;
}

var rangeSumBST = function(root, L, R) {
    return edges(root, L, R);
};
```
