import { mergeSort, quickSort } from "./advancedSorts"
import { bubbleSort, insertionSort, selectionSort } from "./basicSorts"

export function sortToTest(unsortedList: any[]) {
  return (
    //    insertionSort(unsortedList)
    selectionSortP(unsortedList)
  )
}

//time O(n^2) because arithmetic sequence, space 0(1)
function selectionSortP(list) {
  for (let i = 0; i < list.length - 1; i++) {
    console.log("iteration at idx", i)
    console.log("list", list)
    let min = list[i]
    let minIdx = i
    for (let j = i + 1; j < list.length; j++) {
      if (list[j] < min) {
        min = list[j]
        minIdx = j
      }
    }
    console.log(`at iteration from idx ${i}, min found is ${min} at idx ${minIdx}`);
    [list[i], list[minIdx]] = [list[minIdx], list[i]]
  }
  return list
}
