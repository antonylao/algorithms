import {describe, it, expect} from "@jest/globals"
import {PMoveZerosToTheEnd, PRemoveDuplicates} from "./twoPointersPractice"

describe("PRemoveDuplicates", () => {
  it("remove duplicates by modifying elts in-place", () => {
    //setup
    const list1 = [0, 0, 1, 1, 1, 2, 2]
    const list2 = [1, 2, 3]
    const list3 = [1, 1, 1, 1, 1]
    //apply
    PRemoveDuplicates(list1)
    PRemoveDuplicates(list2)
    PRemoveDuplicates(list3)
    const expectedList1 = [0, 1, 2, 1, 1, 2, 2]
    const expectedList2 = [1, 2, 3]
    const expectedList3 = [1, 1, 1, 1, 1]
    //test
    expect(list1).toStrictEqual(expectedList1)
    expect(list2).toStrictEqual(expectedList2)
    expect(list3).toStrictEqual(expectedList3)
  })
  it("returns the length of the unduplicated list", () => {
    //setup
    const list1 = [0, 0, 1, 1, 1, 2, 2]
    const list2 = [1, 2, 3]
    const list3 = [1, 1, 1, 1, 1]
    //apply
    const returnValList1 = PRemoveDuplicates(list1)
    const returnValList2 = PRemoveDuplicates(list2)
    const returnValList3 = PRemoveDuplicates(list3)

    //test
    expect(returnValList1).toBe(3)
    expect(returnValList2).toBe(3)
    expect(returnValList3).toBe(1)

  })
})

describe("PMoveZerosToTheEnd", () => {
  it("moves 0s to the end of the list in-place", () => {
    //setup
    const list1 = [1, 0, 2, 0, 0, 7]
    const list2 = [3, 1, 0, 1, 3, 8, 9]
    const list3 = [0, 0, 9, 4, 0, 0, 3, 8, 0]
    //apply
    PMoveZerosToTheEnd(list1)
    PMoveZerosToTheEnd(list2)
    PMoveZerosToTheEnd(list3)
    const expectedList1 = [1, 2, 7, 0, 0, 0]
    const expectedList2 = [3, 1, 1, 3, 8, 9, 0]
    const expectedList3 = [9, 4, 3, 8, 0, 0, 0, 0, 0]
    //test
    expect(list1).toStrictEqual(expectedList1)
    expect(list2).toStrictEqual(expectedList2)
    expect(list3).toStrictEqual(expectedList3)
  })
})
