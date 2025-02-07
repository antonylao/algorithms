import {describe, expect, it, } from "@jest/globals";
import {sortToTest} from "./testSort";

describe("sortToTest()", () => {
  it("sorts the list", () => {
    //setup
    const unsortedList1 = [2, 5, 3, 1, 4]
    const unsortedList2 = [1, 2, 4, 5, 8, 9, 7, 3, 6]
    //apply
    const sortedList1 = sortToTest(unsortedList1)
    const expectedSortedList1 = [1, 2, 3, 4, 5]
    const sortedList2 = sortToTest(unsortedList2)
    const expectedSortedList2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    //test
    expect(sortedList1).toStrictEqual(expectedSortedList1)
    expect(sortedList2).toStrictEqual(expectedSortedList2)
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
