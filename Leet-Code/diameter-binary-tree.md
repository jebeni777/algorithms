### 543. Diameter of Binary Tree

Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.

Example:  
Given a binary tree

```
          1
         / \
        2   3
       / \
      4   5
```

Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].

Note: The length of path between two nodes is represented by the number of edges between them.

## my solution

```
const countEdges = root => {
        if (!root) {
            return 0;
        }
        return 1 + Math.max(countEdges(root.left),
                countEdges(root.right));
};
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function(root) {
    if (!root) {
        return 0;
    }
    const center = countEdges(root.left) +
        countEdges(root.right);
    const left = diameterOfBinaryTree(root.left);
    const right = diameterOfBinaryTree(root.right);

    return Math.max(center, left, right);
};
```

Having to put helper function outside the original diameterOfBinaryTree function was the hardest thing to figure out.