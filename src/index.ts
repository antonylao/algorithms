import {LinkedListClass, LinkedListNodeType, LinkedListNodeClass, reverseIterative, reverseRecursive, exampleLinkedListFromClass, exampleLinkedListLiteral, LinkedListFunction, LinkedListNodeFunction} from "./data-struct/linkedList";
import {LinkedListNodeToTest, LinkedListToTest} from "./data-struct/linkedListPractice";
import {sortToTest} from "./sorting/sortPractice";
import {removeDuplicates} from "./two-pointers/twoPointersSameDirection";


//SORT
//console.log(String.fromCodePoint(0x1F919) + / index.ts ~ sortToTest([1, 4, 2]): /.source)
//console.log(sortToTest([1, 4, 2]))

//console.log(String.fromCodePoint(0x1F919) + / index.ts ~ sortToTest([2, 5, 3, 1, 4]): /.source)
//console.log(sortToTest([2, 5, 3, 1, 4]))

//LINKED LIST
//const headNode = new LinkedListNodeTest(4, new LinkedListNodeTest(3, new LinkedListNodeTest(2, new LinkedListNodeTest(1, null))))
//const linkedListTest = new LinkedListTest()
//linkedListTest.head = headNode

//with class
/*
exampleLinkedListFromClass.reverseRecursive()
exampleLinkedListFromClass.print()
const firstNode = exampleLinkedListFromClass.head
const beforeNode = new LinkedListNodeClass(0, firstNode)
exampleLinkedListFromClass.head = beforeNode
exampleLinkedListFromClass.print()
const middleNode = exampleLinkedListFromClass.middleNode()
console.log(String.fromCodePoint(0x1F919) + " index.ts ~ middleNode: ")
console.log(middleNode)
console.log(exampleLinkedListFromClass.isCycle())
console.log("creating a cycle...")
middleNode.next = firstNode
console.log(String.fromCodePoint(0x1F919) + " index.ts ~ middleNode: ")
console.log(middleNode)
console.log(exampleLinkedListFromClass.isCycle())
console.log("with an empty linked list:")
const emptyLinkedListFromClass = new LinkedListClass()
console.log(String.fromCodePoint(0x1F919) + " index.ts ~ emptyLinkedListFromClass: ")
console.log(emptyLinkedListFromClass)
emptyLinkedListFromClass.reverseIterative()
console.log("reverseIterative applied")
console.log(String.fromCodePoint(0x1F919) + " index.ts ~ emptyLinkedListFromClass: ")
console.log(emptyLinkedListFromClass)
emptyLinkedListFromClass.reverseRecursive()
console.log("reverseRecursive applied")
console.log(String.fromCodePoint(0x1F919) + " index.ts ~ emptyLinkedListFromClass: ")
console.log(emptyLinkedListFromClass)
console.log(String.fromCodePoint(0x1F919) + / index.ts ~ emptyLinkedListFromClass.middleNode(): /.source)
console.log(emptyLinkedListFromClass.middleNode())
console.log(String.fromCodePoint(0x1F919) + / index.ts ~ emptyLinkedListFromClass.isCycle(): /.source)
console.log(emptyLinkedListFromClass.isCycle())
*/

//with literal
//console.log(JSON.stringify(exampleLinkedListLiteral))
//console.log(JSON.stringify(reverseRecursive(exampleLinkedListLiteral)))
//
//with function
//const linkedListFromFn = new LinkedListNodeFunction(3, null)
//const linkedListFromFn2 = new LinkedListNodeFunction(4, null)
//console.log(linkedListFromFn)
//const linkedList = new LinkedListFunction()
//linkedList.head = linkedListFromFn2
//linkedListFromFn2.next = linkedListFromFn
//linkedList.print()
//LinkedListFunction.linkFirstTwoElts(linkedListFromFn, linkedListFromFn2)
//console.log(LinkedListFunction.linkFirstTwoElts(linkedListFromFn, linkedListFromFn2))

//TWO-POINTERS
//const list = [0, 0, 1, 1, 1, 2, 2]
//console.log(String.fromCodePoint(0x1F919) + / index.ts ~ removeDuplicates([0, 0, 1, 1, 1, 2, 2]) (must be 3): /.source)
//console.log(removeDuplicates(list))
//console.log(String.fromCodePoint(0x1F919) + " index.ts ~ list: ")
//console.log(list)

