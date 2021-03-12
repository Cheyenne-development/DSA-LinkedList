
function reverse(node) {
  // 1. The case case has two parts - either the node is null
  if (node === null) {
    return node;
  }
  // 2. or, we are at the end of the linked list
  if (node.next === null) {
    return node;
  } // 3. recursive case - We have not yet reached the end
  else {
    // create a temp variable to hold recursive output - call reverse on the next node
    let node1 = reverse(node.next);
    // reverse the direction of pointers
    node.next.next = node;
    // and making this node the end
    node.next = null;
    // 4. The output after all recursive calls
    return node1;
  }
};



let list = { ...SLL };
console.log("list before reversal");
console.log(LinkedListFuncs.display(list));


list.head = reverse(list.head);
console.log("list after reversal");
console.log(LinkedListFuncs.display(list));
console.log("SLL after list reversal");
console.log(LinkedListFuncs.display(SLL));

