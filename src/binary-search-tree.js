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