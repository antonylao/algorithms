/*
  * @algorithm: 
  * if the list has 1 or less elt, return list
  * separate the list in 2 of equal or almost equal length (if impair nb of elts, one has more: for simplicity the later)
  * sort each of them
  * initialize 2 pointers at the beginning idx of the 2 list
  * until one of the pointer arrives at the end of its list
  *   compare the elt at the idx of each pointer: add the min to the sorted list, and increment its pointer by 1
  * if the 1st pointer arrives at the end: add all the elts of the 2nd list starting from the 2nd pointer to the sorted list
  * if the 2nd pointer arrives at the end: add all the elts of the 1st list starting from the 1st pointer to the sorted list
  * return the sorted list
  * @notes: stable, not in-place
  * @time-complexity: O(n * log(n)),  where n is the nb of elts in the list
  *   - we have a stack of depth log(n) (nb of times we can divide n by 2 until we reach 1)
  *   - for each depth, we have n/{nb of elts in sublists * 2} merges, each with {nb of elts in sublists * 2} operations
  *     - ex: for sublists of size 1, we have n/2 merges, each with 2 operations
  *           for sublists of size 2, we have n/4 merges, each with 4 operations
  *     => we have for each depth, a total of n operations
  *   - complexity is {stack depth} * {nb of operations at each depth} => log n * n
*/
export function mergeSort(list: any[]) {
  const listLength = list.length
  //base case for recursion
  if (listLength <= 1) {return list}

  //to separate the list in 2, we use listLength / 2; 
  //if we used the lastIdx, we would have to add 1 in the case lastIdx is odd
  //ex: if the list length is 4, lastIdx is 3 => 3/2 = 1 => leftList would be slice(0, 1): only one elt
  const startIdxSecondList = Math.floor(listLength / 2)
  let leftList = list.slice(0, startIdxSecondList)
  let rightList = list.slice(startIdxSecondList)

  //sort both lists using recursion
  leftList = mergeSort(leftList)
  rightList = mergeSort(rightList)

  let leftListCurrentIdx = 0
  let rightListCurrentIdx = 0
  const leftListLastIdx = leftList.length - 1
  const rightListLastIdx = rightList.length - 1

  //initialize a new list which will be returned
  let sortedList = []

  //while neither pointer are at the end of the list, push the min elt from either one pointer, and increment thus pointer by 1
  while (leftListCurrentIdx <= leftListLastIdx && rightListCurrentIdx <= rightListLastIdx) {
    if (leftList[leftListCurrentIdx] < rightList[rightListCurrentIdx]) {
      sortedList.push(leftList[leftListCurrentIdx]);
      leftListCurrentIdx++
    } else {
      sortedList.push(rightList[rightListCurrentIdx])
      rightListCurrentIdx++
    }
  }

  //if one pointer is above the last idx of its list, add the remaining elts for the other list
  if (leftListCurrentIdx > leftListLastIdx) {
    sortedList.push(...rightList.slice(rightListCurrentIdx))
  } else {
    sortedList.push(...leftList.slice(leftListCurrentIdx))
  }

  return sortedList
}


