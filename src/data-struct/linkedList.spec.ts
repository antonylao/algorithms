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
})
