
const { LinkedList, _Node } = require("./linkedList");
// Test the functions
const { main } = require("./singly-linked-list");
const { LinkedListFuncs } = require("./supplemental-functions");

let SLL = main();
console.log(LinkedListFuncs.display(SLL));

const middleOfList = (linkedList) => {
  // setup a slow node to traverse one at a time
  let slowNode = linkedList.head;
  // setup a fast node to traverse two at a time
  let fastNode = linkedList.head;

  // While we still have two values to traverse
  while (fastNode.next !== null && fastNode.next.next !== null) {
    // increase fast node by 2 indexes
    fastNode = fastNode.next.next;
    // Increase slow node by 1 index;
    slowNode = slowNode.next;
  }
  // return the node that was traversing at half speed
  return slowNode;
};

console.log(middleOfList(SLL));