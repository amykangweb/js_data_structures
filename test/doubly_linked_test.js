var expect = require('chai').expect;
var List = require('../lib/doubly_linked').list;
var Node = require('../lib/doubly_linked').node;

describe('Doubly Linked List', function(){

  it('should create a new node with null values for previous and next', function(){
    var node = new Node(5);
    expect(node.previous).to.equal(null);
    expect(node.next).to.equal(null);
  });

  beforeEach(function(){
    list = new List(5);
  });

  it('should create a new List with a head node', function(){
    expect(list.head.value).to.equal(5);
  });

  it('should return a string of all node values', function(){
    expect(list.toString()).to.equal("5");
  });

  it('should insert node at top of list', function(){
    var one = new Node(1);
    list.insert(one);
    expect(list.toString()).to.equal("1, 5");
  });

  it('should remove node', function(){
    var one = new Node(1);
    list.insert(one);
    list.remove(1);
    expect(list.toString()).to.equal("5");
    list.remove(5);
    expect(list.toString()).to.equal("");
  });

  it('should return node when found', function(){
    var one = new Node(1);
    list.insert(one);
    expect(list.search(1).value).to.equal(1);
    expect(list.search(5).value).to.equal(5);
  });

  it('should return null when node not found', function(){
    expect(list.search(6)).to.equal(null);
  });
});

