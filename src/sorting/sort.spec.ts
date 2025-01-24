import {describe, expect, it, } from "@jest/globals";
import {sortToTest} from "./sort";

describe("sortToTest()", () => {
  it("sorts the list", () => {
    //setup
    const unsortedList = [2, 5, 3, 1, 4]
    //apply
    const sortedList = sortToTest(unsortedList)
    const expected = [1, 2, 3, 4, 5]
    //test
    expect(sortedList).toStrictEqual(expected)
  })
  it("when empty list, returns empty list", () => {
    //setup
    const emptyList = []
    //apply
    const sortedList = sortToTest(emptyList)
    //test
    expect(sortedList).toStrictEqual([])
  })
  //don't know how to test it 
  it.todo("stable? (i.e order maintained when 2 elts are equal)")
  it("no mutation? (i.e creating another data structure i.e NOT in-place)", () => {
    //setup 
    const unsortedList = [2, 5, 3, 1, 4]
    //apply
    const sortedList = sortToTest(unsortedList)
    const unsortedListCopy = [2, 5, 3, 1, 4]
    //test
    expect(unsortedList).toStrictEqual(unsortedListCopy)
  })
})
