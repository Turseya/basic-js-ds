const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.base = null
  }
  root() {
    if (!this.base) return null
    return this.base
  }

  add( data) {
    const newNode = new Node(data);

    if(this.base === null)
      this.base = newNode;
    else {
      this.insertNode(this.base, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
         this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
     } else {
        this.insertNode(node.right,newNode);
      }
    }
  }

  has(data) {
    if (!this.find(data)) {
      return false
    }

    return true
  }

  find(data) {
    if (!this.base) return undefined;
    let current = this.base,
        found = false;

    while (current && !found) {
      if (data < current.data) current = current.left;
      else if (data > current.data) current = current.right;
      else found = true;
    }

    if (!found) return null;
    return current;
  }

  remove(data) {
    this.base = this.removeNode(this.base, data)
  }
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if(node.right === null) {
        node = node.left;
        return node;
      }
      let newNode = this.minNode(node.right);
      node.data = newNode.data;
      node.right = this.removeNode(node.right, newNode.data);
      return node;
    }
  }
  minNode(node) {
    if (node.left === null)
      return node;
    else
      return this.minNode(node.left);
  }
  min() {
    if (this.base === null) {
      return undefined
    }
    let currNode = this.base;

    while (currNode.left !== null) {
      currNode = currNode.left;
    }
    return currNode.data;
  }

  max() {
    if (this.base === null) {
      return undefined
    }
    let currNode = this.base;

    while (currNode.right !== null) {
      currNode = currNode.right;
    }
    return currNode.data;

  }

}