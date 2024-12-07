/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (!this.root) return 0;

    function minDepthHelper(node) {
      if (!node) return Infinity;
      if (!node.left && !node.right) return 1;
      return 1 + Math.min(minDepthHelper(node.left), minDepthHelper(node.right));
    }

    return minDepthHelper(this.root);
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if (!this.root) return 0;

    function maxDepthHelper(node) {
      if (!node) return 0;
      if (!node.left && !node.right) return 1;
      return 1 + Math.max(maxDepthHelper(node.left), maxDepthHelper(node.right));
    }

    return maxDepthHelper(this.root);

  }

  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */

  maxSum() {
    let maxSum = -Infinity; //-Infinity to start with a number smaller than any valid sums

    function maxSumHelper(node) {
      if (!node) return 0;

      const leftMax = Math.max(maxSumHelper(node.left), 0); // (... , 0) to igrnre any negative sums
      const rightMax = Math.max(maxSumHelper(node.right), 0);

      maxSum = Math.max(maxSum, leftMax + rightMax + node.val);

      return node.val + Math.max(leftMax, rightMax);
    }

    maxSumHelper(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let result = null;
    const stack = [this.root];

    while (stack.length) {
      const node = stack.pop();
      if (node.val > lowerBound && (result === null || node.val < result)) {
        result = node.val;
      }

      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }

    return result;
  }

  /** Further study!
   * areCousins(node1, node2): determine whether two nodes are cousins
   * (i.e. are at the same level but have different parents. ) */

  areCousins(node1, node2) {

  }

  /** Further study!
   * serialize(tree): serialize the BinaryTree object tree into a string. */

  static serialize() {

  }

  /** Further study!
   * deserialize(stringTree): deserialize stringTree into a BinaryTree object. */

  static deserialize() {

  }

  /** Further study!
   * lowestCommonAncestor(node1, node2): find the lowest common ancestor
   * of two nodes in a binary tree. */

  lowestCommonAncestor(node1, node2) {
    
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
