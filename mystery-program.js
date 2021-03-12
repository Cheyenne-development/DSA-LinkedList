const { LinkedList, _Node } = require("./linkedList");
const nodes = new LinkedList();
const testCase = [1,4,3,5,2,1,3,5,9]
testCase.forEach((item) => nodes.insertLast(item))


// Analyze the following function (without running it in an IDE) to determine what
// problem it is trying to solve. What is the time complexity of this algorithm?
function ListNode(value) {
  this.value = value;
  this.next = null;
}

function WhatDoesThisProgramDo(lst) {
let  count = {}
    // start at the begining
    let current = lst.head;
    // iterate over linkedList
    while (current !== null) {
      // create a new variable at current item
      let newNode = current;
      // iterate to from current to the end
     if(!(newNode.value in count)){
       count[newNode.value] = 1
     } else {
       count[newNode.value]++

        }
        current = current.next;
      }
      newCount = new ListNode()
      Object.keys(count).forEach((item) => {
      if newCount.value === null {
        newCount.next = item
      } else {
        newCount.next = item
      }
      })
    
    // return count
 return newCount
}
    
  
  
  // This program removes duplicate/double values from a linked list
  // It doesn't return anything but I guess it could be used to the solve the problem of skipping or removing doubled values?
  // I would have a time complexity of O(n * log(n))
  
  // The inner loop is indeed O(log n).  Here is an article with more details about O(log n): https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly#:~:text=A%20common%20algorithm%20with%20O,constant%20amount%20of%20additional%20work.
  // Putting the inner and out loops together gives you an algorithm with O(n * log n) complexity.

  console.log(WhatDoesThisProgramDo(nodes))