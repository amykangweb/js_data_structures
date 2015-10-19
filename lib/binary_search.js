//http://stackoverflow.com/questions/6486307/default-argument-values-in-javascript-functions
//https://www.nczonline.net/blog/2009/06/09/computer-science-in-javascript-binary-search-tree-part-1/
//https://gist.github.com/alexhawkins/f993569424789f3be5db
function Tree(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

function BinarySearch(){
  this.root = null;
  this.count = 0;
};

BinarySearch.prototype.insert = function(value){
  if(this.contains(value)){
    return false;
  };
  if(this.root === null){
    this.root = new Tree(value);
    this.count++;
    return;
  }
  current = this.root;
  while(current !== null){
    if(value < current.value && current.left === null){
      current.left = new Tree(value);
      this.count++;
    }else if(value > current.value && current.right === null){
      current.right = new Tree(value);
      this.count++;
    }else if(value < current.value){
      current = current.left;
    }else if(value > current.value){
      current = current.right;
    }else{
      return;
    };
  };
};

BinarySearch.prototype.contains = function(value){
  var found = false;
  var current = this.root;
  while(!found && current){
    if(value < current.value){
      current = current.left;
    }else if(value > current.value){
      current = current.right;
    }else{
      found = true;
    }
  }
  return found;
};

BinarySearch.prototype.size = function(){
  return this.count;
};

BinarySearch.prototype.depth = function(){
  var node = this.root;
  var maxDepth = 0;
  var traverse = function(node, depth) {
      if (!node) return null;
      if (node) {
          maxDepth = depth > maxDepth ? depth : maxDepth;
          traverse(node.left, depth + 1);
          traverse(node.right, depth + 1);
      }
  };
  traverse(node, 1);
  return maxDepth;
};

BinarySearch.prototype.balance = function(){
  current = this.root;
  var counter = [];
  var skew = function(current){
    if(current === null){
      return;
    };
    skew(current.left);
    counter.push(current.value);
    skew(current.right);
  };
  skew(current);
  var root = counter.indexOf(this.root.value);
  var left = counter.slice(0, root);
  var right = counter.slice(root + 1, counter.length);
  if(left.length > right.length){
    return left.length;
  }else if(right.length > left.length){
    return right.length * -1;
  }else{
    return 0;
  }
};

module.exports = { tree: Tree, binarysearch: BinarySearch };

binary = new BinarySearch();
binary.insert(10);
binary.insert(2);
binary.insert(3);
binary.insert(70);
binary.insert(100);
var result = binary.contains(6);
console.log(result);
var result2 = binary.contains(2);
console.log(result2);
var count = binary.size();
console.log(count);
var depth = binary.depth();
console.log(depth);
var balance = binary.balance();
console.log(balance);
