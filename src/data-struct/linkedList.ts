//using classes
export class LinkedListNodeClass {
  val: any;
  next: LinkedListNodeClass | null;

  constructor(val: any, next: LinkedListNodeClass | null) {
    this.val = val
    this.next = next
  }
}

//useful to create a separate class to change the head node: if we only used
//the node class, we could reverse it but we could not reassign the node to another one
export class LinkedListClass {
  head: LinkedListNodeClass | null;

  constructor() {
    this.head = null
  }

  print() {
    let currentNode = this.head
    let nodeIdx = 1
    while (currentNode) {
      console.log(`${nodeIdx}: ${currentNode.val}`)
      currentNode = currentNode.next
      nodeIdx++
    }
    console.log()
  }

  reverseIterative() {
    let currentNode: LinkedListNodeClass | null = this.head
    let previousNode = null
    let currentNext: LinkedListNodeClass;
    while (currentNode !== null) {
      //save the current next to a var
      currentNext = currentNode.next
      //change the next property of current node
      currentNode.next = previousNode
      //save the current node to previousNode var for next iteration (couldn't do it before because we saved the previousNode 
      //to replace the next of currentNode)
      previousNode = currentNode
      //go to the next node: if it is null, the next iteration won't happen
      currentNode = currentNext
    }
    //replace the head with the last reversed node to finish the reversing of the list
    this.head = previousNode
  }

  reverseRecursive(currentNode = this.head) {
    //this condition should happen only if the head is null)
    if (currentNode === null) {
      return
    }

    //exit condition: if no next, move the head to the current node
    if (currentNode.next === null) {
      this.head = currentNode
      return
    }

    //recursive call to next node
    this.reverseRecursive(currentNode.next)

    //this will be applied from the last node having a next, down to first node
    //link the next node 'next' to current node
    const nextNode = currentNode.next
    nextNode.next = currentNode
    //link the current node 'next' to null
    currentNode.next = null
  }
}

//using function: not good for typing
//use example: const linkedListNode = new LinkedListNodeFunction(3, null)
export function LinkedListNodeFunction(val, next) {
  this.val = val
  this.next = next
}

export function LinkedListFunction() {
  this.head = null
}

LinkedListFunction.prototype.print = function () {
  let currentNode = this.head
  let nodeIdx = 1
  while (currentNode) {
    console.log(`${nodeIdx}: ${currentNode.val}`)
    currentNode = currentNode.next
    nodeIdx++
  }
  console.log()
}

LinkedListFunction.linkFirstTwoElts = function (list1: {val: any, next: any}, list2: {val: any, next: any}) {
  list1.next = list2
  return list1
}


// using types and literal object
// warning: reverse function are performed in-place, 
//          so that the original linkedList will have 1 elt, and next: null.
//          the function returns the reversed linkedList
export type LinkedListNodeType = {
  val: any;
  next: LinkedListNodeType | null;
}

export function reverseIterative(linkedList: LinkedListNodeType) {
  //while the current node is not null
  //save the next to a temp var
  //replace the next with the one from the previous node
  //  at 1st iteration, replace the next node with null
  //go to the next node
  let currentNode = linkedList
  let previousNode = null
  let currentNext: LinkedListNodeType;
  while (currentNode !== null) {
    //save the current next to a var
    currentNext = currentNode.next
    //change the next property of current node
    currentNode.next = previousNode
    //save the current node to previousNode var for next iteration (couldn't do it before because we saved the previousNode 
    //to replace the next of currentNode)
    previousNode = currentNode
    //go to the next node: if it is null, the next iteration won't happen
    currentNode = currentNext
  }
  //at the end, currentNode is null, and previousNode is the head of the linked list 
  //because it is the last node which has been reversed
  return previousNode
}

export function reverseRecursive(linkedListNode: LinkedListNodeType) {
  //exit condition of recursion
  if (linkedListNode.next === null) {
    let originalLastNode = linkedListNode
    return originalLastNode
  }

  //if there is a next, recursion
  const originalLastNode = reverseRecursive(linkedListNode.next)

  //this is applied from last node having a next, to first node
  const nextNode = linkedListNode.next
  nextNode.next = linkedListNode
  linkedListNode.next = null
  return originalLastNode
}

//DATA
// instanciated data from the class
const headNode = new LinkedListNodeClass(4, null)
headNode.next = new LinkedListNodeClass(
  3,
  new LinkedListNodeClass(
    2,
    new LinkedListNodeClass(
      1, null)
  )
)

export const exampleLinkedListFromClass = new LinkedListClass()
exampleLinkedListFromClass.head = headNode


//data from type
export const exampleLinkedListLiteral: LinkedListNodeType = {
  val: 3,
  next: {
    val: 2,
    next: {
      val: 1,
      next: {
        val: 0,
        next: null
      }
    }
  }
}
//END DATA
