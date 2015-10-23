var expect = require('chai').expect;
var BinarySearch = require('../lib/binary_search').binarysearch;
var Tree = require('../lib/binary_search').tree;

describe('Binary Search Tree', function(){
  beforeEach(function(){
    searchTree = new BinarySearch();
    searchTree.insert(3);
    searchTree.insert(99);
  });

  it('should insert value', function(){
    searchTree.insert(1);
    expect(searchTree.contains(1)).to.equal(true);
  });

  it('should not insert existing value', function(){
    expect(searchTree.insert(3)).to.equal(false);
  });

  it('should return true or false if value exists or not', function(){
    expect(searchTree.contains(100)).to.equal(false);
    expect(searchTree.contains(3)).to.equal(true);
  });

  it('should return size of the tree', function(){
    expect(searchTree.size()).to.equal(2);
  });

  it('should return total number of levels in the tree', function(){
    expect(searchTree.depth()).to.equal(2);
  });

  it('should return balance of tree', function(){
    expect(searchTree.balance()).to.equal(-1);
  });

});
