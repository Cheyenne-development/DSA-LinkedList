const { LinkedList, _Node } = require("./linkedList");
/**
 * Definition for singly-linked list.
 * function ListNode(value {
 *     this.value = value);
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 const nodes = new LinkedList()
 const testCase = [4,2,1,3]
 testCase.forEach((item) => nodes.insertLast(item))

var sortList = function(head) {
  if (!head || !head.next) {
    return head;
  }

  let [h1, h2] = divideListByTwo(head);

  let l1Sorted = sortList(h1);
  let l2Sorted = sortList(h2);

  let merged = mergeTwoLists(l1Sorted, l2Sorted);

  return merged;
};

var mergeTwoLists = function(l1, l2) {
  let res;

  if (!l1) {
    return l2;
  }
  if (!l2) {
    return l1;
  }

  let newNode;
  if (l1.value < l2.value) {
    newNode = new _Node(l1.value);
    newNode.next = mergeTwoLists(l1.next, l2);
  } else {
    newNode = new _Node(l2.value);
    newNode.next = mergeTwoLists(l1, l2.next);
  }

  return newNode;
};

function divideListByTwo(head) {
  if (head.next === null) {
    return head;
  }
  let slow = head;
  let fast = head;
  let slowPrev = head;
  let i = 0;
  while (fast !== null) {
    fast = fast.next;
    if (++i % 2 === 1) {
      slowPrev = slow;
      slow = slow.next;
    }
  }

  let h2 = slowPrev.next;

  slowPrev.next = null;

  let res = [head, h2];

  return res;
}

console.log(sortList(nodes.head))
