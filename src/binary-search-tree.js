const { NotImplementedError } = require('../extensions/index.js');



class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}


class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addElem(this.rootNode, data);

    function addElem(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data > node.data) {
        node.right = addElem(node.right, data);
      } else if (data < node.data) {
        node.left = addElem(node.left, data);
      }
      return node;
    }
  }

  has(data) {
    function searchElem(node, data) {
      if (!node) {
        return false;
      }

      if (data > node.data) {
        return searchElem(node.right, data);
      } else if (data < node.data){
        return searchElem(node.left, data);
      } else {
        return true;
      }
    }

    return searchElem(this.rootNode, data);
  }

  find(data) {
    function findElem(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        return findElem(node.right, data);
      } else if (data < node.data){
        return findElem(node.left, data);
      } else {
        return node;
      }
    }

    return findElem(this.rootNode, data);
  }

  remove(data) {
    function removeElem(node, data) {
      if (!node || (!node.left && !node.right)) {
        return null;
      }

      if (data > node.data) {
        node.right = removeElem(node.right, data);
        return node;
      } else if (data < node.data) {
        node.left = removeElem(node.left, data);
        return node;
      } else if (!node.left) {
        return node = node.right;
      } else if (!node.right) {
          return node = node.left;
      } else {

        let min = node.right;

        while (min.left) {
          min = min.left;
        }

        node.data = min.data;
        node.right = removeElem(node.right, min.data);

        return node;
      }
    }

    this.rootNode = removeElem(this.rootNode, data);
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let min = this.rootNode;

    while(min.left) {
      min = min.left;
    }

    return min.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let max = this.rootNode;
    while(max.right) {
      max = max.right;
    }

    return max.data;
  }
}

module.exports = {
  BinarySearchTree
};