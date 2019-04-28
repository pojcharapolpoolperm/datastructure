class Node {
  constructor(value) {
    this.next = null;
    this.prev = null;
    this.value = value;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  // O(1)
  setHead() {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }
  // O(n)
  setTail() {
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertAfter(this.tail, node);
  }

  // O(position)
  insertAtPosition(position, nodeToInsert) {
    if (position === 1) {
      this.setHead(nodeToInsert);
      return;
    }

    let node = this.head;
    let currentPosition = 1;

    while (node !== null && currentPosition != position) {
      node = node.next;
      currentPosition++;
    }

    if (node !== null) {
      // Found Position and Node exist
      this.insertBefore(node, nodeToInsert);
    } else {
      // Reach Tail
      this.setTail(nodeToInsert);
    }
  }

  // O(1)
  insertBefore(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node.prev;
    nodeToInsert.next = node;
    if (node.prev === null) {
      this.head = nodeToInsert;
    } else {
      node.prev.next = nodeToInsert;
    }
    node.prev = nodeToInsert;
  }

  // O(1)
  insertAfter(node, nodeToInsert) {
    if (nodeToInsert === this.head && nodeToInsert === this.tail) return;
    this.remove(nodeToInsert);
    nodeToInsert.prev = node;
    nodeToInsert.next = node.next;
    if (node.next === null) {
      this.tail = nodeToInsert;
    } else {
      node.next.prev = nodeToInsert;
    }
    node.next = nodeToInsert;
  }

  // O(n)
  removeNodesWithValue(value) {
    let node = this.head;

    while (node !== null) {
      let nodeToRemove = node;
      node = node.next;
      if (nodeToRemove.value === value) {
        this.remove(nodeToRemove);
      }
    }
  }

  // O(1)
  remove(node) {
    if (node === this.head) this.head = this.head.next;
    if (node === this.tail) this.tail = this.tail.prev;

    this.removeNodeBinding(node);
  }

  // O(1)
  removeNodeBinding(node) {
    if (node.prev !== null) {
      node.prev.next = node.next;
    }

    if (node.next !== null) {
      node.next.prev = node.prev;
    }

    node.prev = null;
    node.next = null;
  }

  // O(n)
  containsNodeWithValue(value) {
    let node = this.head;
    while (node !== null && node.value !== value) {
      node = node.next;
    }
    return node !== null;
  }
}
