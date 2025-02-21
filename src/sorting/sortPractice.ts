import {mergeSort, quickSort} from "./advancedSorts"
import {bubbleSort, insertionSort, selectionSort} from "./basicSorts"

export function sortToTest(unsortedList: any[]) {
  return (
    insertionSort(unsortedList)
  )
}
