import {mergeSort, quickSort} from "./advancedSorts"
import {bubbleSort, selectionSort} from "./basicSorts"

export function sortToTest(unsortedList: any[]) {
  return quickSort(unsortedList)
}

//O(n^2) (arithmetic sum), stable, in-place
export function insertionSortTest(list) {
  list.forEach(function swapWithPrecedingIfLessThan(_, originalIdx) {
    for (let currentIdx = originalIdx; currentIdx >= 0; currentIdx--) {
      if (list[currentIdx - 1] > list[currentIdx]) {
        [list[currentIdx - 1], list[currentIdx]] = [list[currentIdx], list[currentIdx - 1]]
      } else {
        break
      }
    }
  })
  return list
}
