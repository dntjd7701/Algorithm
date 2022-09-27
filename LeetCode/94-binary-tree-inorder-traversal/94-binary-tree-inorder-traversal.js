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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
      let array = [];
  dfs(root);

  function dfs(root) {
    if (root != null) {
      dfs(root.left);
      array.push(root.val);
      dfs(root.right);
    }
  }
  return array;
};