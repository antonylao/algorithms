import {describe, it, expect} from "@jest/globals"
import {LinkedListTest, LinkedListNodeTest} from "./linkedListTest"

describe("reverse", () => {
  it("reverses the linked list", () => {
    //setup
    const headNode = new LinkedListNodeTest(4, null)
    headNode.next = new LinkedListNodeTest(
      3,
      new LinkedListNodeTest(
        2,
        new LinkedListNodeTest(
          1, null)
      )
    )

    const linkedListFromClass = new LinkedListTest()
    linkedListFromClass.head = headNode
    //apply
    linkedListFromClass.reverse()
    const expected = new LinkedListTest()
    expected.head =
      new LinkedListNodeTest(1, new LinkedListNodeTest(2, new LinkedListNodeTest(3, new LinkedListNodeTest(4, null))))
    //test
    expect(linkedListFromClass).toStrictEqual(expected)
  })
})
