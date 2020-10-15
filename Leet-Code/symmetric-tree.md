### 101. Symmetric Tree

Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

```
    1
   / \
  2   2
 / \ / \
3  4 4  3
```

But the following [1,2,2,null,3,null,3] is not:

```
    1
   / \
  2   2
   \   \
   3    3
```

## my solution

```
var isSymmetric = function(root) {
    var isSymSubtree = function(l, r) {
        if (!l || !r) {
            return (!l && !r);
        }
        if (l.val !== r.val){
            return false;
        }
        return (isSymSubtree(l.left, r.right)
                && isSymSubtree(l.right, r.left));
    }
    if (!root) {
        return true;
    }
    return isSymSubtree(root.left, root.right);
};
```
