const { LinkedList, _Node } = require("./linkedList");

//  // Definition for singly-linked list.
//   function ListNode(val, next) {
//       this.val = (val===undefined ? 0 : val)
//       this.next = (next===undefined ? null : next)
//   }
 

//   @param {ListNode} head
//   @return {ListNode}

const nodes = new LinkedList();
const testCase = [1,4,3,5,2,1,3,5,9]
testCase.forEach((item) => nodes.insertLast(item))


const sortList = function(head) {
  // Check that we have at least 2 values
  if(!head || !head.next) {
    return head;
}
//split  list
  let left = head
  let right = half(head)

//Sort
left = sortList(left);
right = sortList(right);

//merge list
return merge(left, right)
}
function half(head) {
  // Setup baseline variables
  let slow = head;
  let fast = head;
  let prev = null;

  // While our double iteration has at least another value
  while (fast && fast.next) {
    // Push fast x 2
    fast = fast.next.next;

    prev = slow;
    // Set our slow iteration x 1
    slow = slow.next;
  }

  // Close off the first half of the list
  prev.next = null;

  return slow;
}
  
  

// Merging the lists and doing the merge sort
function merge(left, right) {
  // Set up a new head
  const head = new _Node();

  // Establish our current node;
  let current = head;

  while (left !== null  && right !== null) {
    // If list 1's value is smaller than list 2's value...
    if (left.value < right.value) {
      // Set our next value to list 1's next value
      current.next = left;
      // Move forward with list 1
      left = left.next;
    } else if (left.value === right.value) {
      // Set our next value to list 2's next value
      current.next = right;
      // Move forward with list 2
      right = right.next;
      left = left.next;
    }  else {
      current.next = right;
      right = right.next
    } 
    
    // Set our current to either list 1 or 2
    current = current.next;
  }

  // Place the last value into the end
  current.next = left === null ? right : left;
console.log(head.next)
  return head.next;
};
console.log(sortList(nodes.head))
