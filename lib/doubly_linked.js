function Node(value) {
  this.value = value;
  this.next = null;
  this.previous = null;
};

function List(value) {
  this.head = new Node(value);
};

List.prototype.insert = function(node) {
  node.next = this.head;
  this.head = node;
};

List.prototype.search = function(value) {
  var current = this.head;
  while(current != null) {
    if(current.value === value) {
      return current;
    }
    current = current.next;
  }
  return null;
};

List.prototype.remove = function(value) {
  if(value === this.head.value && this.head.next != null) {
    this.head.next.previous = null;
    this.head = this.head.next;
    return;
  } else if(value === this.head.value) {
    this.head = null;
    return;
  }

  var current = this.head;
  while(current != null) {
    current = current.next;
    if(current.value === value && current.next === null) {
      current.previous.next = null;
      return;
    } else if(current.value === value) {
      current.next.previous = current.previous;
      current.previous.next = current.next;
      return;
    }
  }
  return null;
};

List.prototype.toString = function() {
  var full = [];
  var current = this.head;
  while(current != null) {
    full.push(current.value);
    current = current.next;
  }
  var full_list = full.map(function(num) {
    return num.toString();
  }).join(", ");
  return full_list;
};

module.exports = { node: Node, list: List };
