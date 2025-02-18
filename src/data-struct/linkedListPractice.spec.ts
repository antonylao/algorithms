import {describe, it, expect} from "@jest/globals"
import {LinkedListToTest, LinkedListNodeToTest} from "./linkedListPractice"

describe("reverse", () => {
  it("reverses the linked list", () => {
    //setup
    const headNode = new LinkedListNodeToTest(4, null)
    headNode.next = new LinkedListNodeToTest(
      3,
      new LinkedListNodeToTest(
        2,
        new LinkedListNodeToTest(
          1, null)
      )
    )

    const linkedListFromClass = new LinkedListToTest()
    linkedListFromClass.head = headNode
    //apply
    linkedListFromClass.reverse()
    const expected = new LinkedListToTest()
    expected.head =
      new LinkedListNodeToTest(1, new LinkedListNodeToTest(2, new LinkedListNodeToTest(3, new LinkedListNodeToTest(4, null))))
    //test
    expect(linkedListFromClass).toStrictEqual(expected)
  })
  it("if the linkedList has no elts, returns an empty linked list (ideally the same, not tested)", () => {
    //setup
    const emptyLinkedListFromClass = new LinkedListToTest()
    //apply
    emptyLinkedListFromClass.reverse()
    const expected = new LinkedListToTest()
    //test
    expect(emptyLinkedListFromClass).toStrictEqual(expected)

  })
})

describe("middleNode", () => {
  it("returns the middle node; if the nb of elements is even, returns the right middle node", () => {
    //setup: evenNbrdLkdList
    const evenNbrdLkdList = new LinkedListToTest()
    const evenNbrdLkdListHead =
      new LinkedListNodeToTest(1,
        new LinkedListNodeToTest(2,
          new LinkedListNodeToTest(3,
            new LinkedListNodeToTest(4, null))))
    evenNbrdLkdList.head = evenNbrdLkdListHead
    //setup: oddNbrdLkdList
    const oddNbrdLkdList = new LinkedListToTest()
    const oddNbrdLkdListHead = new LinkedListNodeToTest(0, evenNbrdLkdListHead)
    oddNbrdLkdList.head = oddNbrdLkdListHead
    //apply
    const evenListMiddle = evenNbrdLkdList.middleNode()
    const expectedEvenListMiddle =
      new LinkedListNodeToTest(3,
        new LinkedListNodeToTest(4, null))
    const oddListMiddle = oddNbrdLkdList.middleNode()
    const expectedOddListMiddle =
      new LinkedListNodeToTest(2,
        new LinkedListNodeToTest(3,
          new LinkedListNodeToTest(4, null)))
    //test
    expect(evenListMiddle).toStrictEqual(expectedEvenListMiddle)
    expect(oddListMiddle).toStrictEqual(expectedOddListMiddle)
  })
  it("if the linked list is empty, returns null", () => {
    //setup
    const emptyLinkedList = new LinkedListToTest()
    //apply
    const middle = emptyLinkedList.middleNode()
    //test
    expect(middle).toBeNull()
  })

})

describe("isCycle", () => {
  it("checks if it contains a cycle", () => {
    //setup
    const listWithoutCycle = new LinkedListToTest()
    const listWithoutCycleHead = new LinkedListNodeToTest(1, new LinkedListNodeToTest(2, null))
    listWithoutCycle.head = listWithoutCycleHead
    const listWithCycle = new LinkedListToTest()

    const listWithCycleHead = new LinkedListNodeToTest(1, new LinkedListNodeToTest(2, null))
    listWithCycleHead.next.next = listWithCycleHead
    listWithCycle.head = listWithCycleHead
    //apply
    const resultWithoutCycle = listWithoutCycle.isCycle()
    const resultWithCycle = listWithCycle.isCycle()
    //test
    expect(resultWithoutCycle).toBe(false)
    expect(resultWithCycle).toBe(true)


  })
  it("if the linked list is empty, returns false", () => {
    //setup
    const emptyLinkedList = new LinkedListToTest()
    //apply
    const result = emptyLinkedList.isCycle()
    //test
    expect(result).toBe(false)
  })
})
