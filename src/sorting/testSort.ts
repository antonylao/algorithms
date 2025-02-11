import {mergeSort, quickSort} from "./advancedSorts"
import {bubbleSort, selectionSort} from "./basicSorts"

export function sortToTest(unsortedList: any[]) {
  return (
    //undefined
    quickSort(unsortedList, 0, unsortedList.length - 1, true)
  )
}
