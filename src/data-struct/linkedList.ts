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
  head: LinkedListNodeClass;

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

  reverse() {
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
}


// using types and literal object
export type LinkedListNode = {
  val: any;
  next: LinkedListNode | null;
}

export function reverse(linkedList: LinkedListNode) {
  //while the current node is not null
  //save the next to a temp var
  //replace the next with the one from the previous node
  //  at 1st iteration, replace the next node with null
  //go to the next node
  let currentNode = linkedList
  let previousNode = null
  let currentNext: LinkedListNode;
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

export const linkedListFromClass = new LinkedListClass()
linkedListFromClass.head = headNode


//data from type
export const linkedListLiteral: LinkedListNode = {
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
