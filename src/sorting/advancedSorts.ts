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
  * @space-complexity: O(n), where n is the nb of elts in the list
  *   - at each stack depth, we divide the array into subarrays, and their combined size is  proportional to the size of the array
  *   - not O(n * log(n)) because the code doesn't execute in parallel
  *   - details here: https://stackoverflow.com/questions/10342890/merge-sort-time-and-space-complexity
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

/*
  * @algorithm: 
  * (uses startIdx and endIdx)
  * - if the startIdx and endIdx makes the sorting of 1 elt or less, return the list (base case of recursion)
  * - choose a pivot (for us, last elt of list)
  * - initialize 2 pointers, pointing before the first element and after the last (for us, the idx of the pivot) 
  * - until both pointers point at the same elt:  
    * - move left pointer to the right while the elt pointed is below the pivot
    * - move right pointer to the left while the elt pointed is above or equal the pivot
    * - swap elts at left and right pointers
  * - swap pivot and elt pointed by both pointers    
  * - sort both the left side, and the right side of pivot (recursion)
  * - return the list 
  *
  * @notes: not stable, in-place (but uses additional space due to recursion)
  * @time-complexity: O(n * log(n)) in general, O(n^2) worst case,  where n is the nb of elts in the list
  *   - on average, the list is divided somewhere near the center each time
  *   - complexity is {stack depth} * {nb of operations at each depth} => log n * n
  * @space-complexity: O(log(n)): at least log(n) recursions, taking a constant space each
*/
export function quickSort(list: any[], startIdx = 0, endIdx = list.length - 1, log = false) {
  if (log) {
    console.log("list currently under sort is:")
    console.log(list.slice(startIdx, endIdx + 1))
  }
  // - if the startIdx and endIdx makes the sorting of 1 elt or less, return the list (base case of recursion)
  if (endIdx - startIdx + 1 <= 1) {return list}

  // - choose a pivot (for us, last elt of list)
  const pivotIdx = endIdx

  // - initialize 2 pointers, pointing before the first element and after the last (for us, the idx of the pivot) 
  let leftPtr = startIdx - 1;
  let rightPtr = pivotIdx
  if (log) {
    console.log(String.fromCodePoint(0x1F919) + " advancedSorts.ts ~ leftPtr: ")
    console.log(leftPtr)
    console.log(String.fromCodePoint(0x1F919) + " advancedSorts.ts ~ rightPtr: ")
    console.log(rightPtr)

    console.log(String.fromCodePoint(0x1F919) + / advancedSorts.ts ~ list[leftPtr]: /.source)
    console.log(list[leftPtr])
    console.log(String.fromCodePoint(0x1F919) + / advancedSorts.ts ~ list[pivotIdx]: /.source)
    console.log(list[pivotIdx])
    console.log(String.fromCodePoint(0x1F919) + / advancedSorts.ts ~ list[rightPtr]: /.source)
    console.log(list[rightPtr])
    console.log()
  }
  // - move left pointer to the right while the elt pointed is below the pivot
  while (leftPtr !== rightPtr) {
    while (leftPtr === startIdx - 1 || list[leftPtr] < list[pivotIdx]) {
      if (leftPtr === rightPtr) {break}
      leftPtr++
      if (log) {
        console.log(String.fromCodePoint(0x1F919) + / advancedSorts.ts ~ list[leftPtr]: /.source)
        console.log(list[leftPtr])
        console.log(String.fromCodePoint(0x1F919) + / advancedSorts.ts ~ list[pivotIdx]: /.source)
        console.log(list[pivotIdx])
        console.log()
      }
    }
    // - move right pointer to the left while the elt pointed is above or equal the pivot
    while (list[rightPtr] >= list[pivotIdx]) {
      if (leftPtr === rightPtr) {break}
      rightPtr--
      if (log) {
        console.log(String.fromCodePoint(0x1F919) + / advancedSorts.ts ~ list[rightPtr]: /.source)
        console.log(list[rightPtr])
        console.log(String.fromCodePoint(0x1F919) + / advancedSorts.ts ~ list[pivotIdx]: /.source)
        console.log(list[pivotIdx])
        console.log()
      }
    }
    // - swap elts at left and right pointers
    if (leftPtr !== rightPtr) {
      const temp = list[leftPtr]
      list[leftPtr] = list[rightPtr]
      list[rightPtr] = temp
      //why this doesn't work??
      //[list[leftPtr], list[rightPtr]] = [list[rightPtr], list[leftPtr]]
      if (log === true) {
        console.log("exchange left and right ptr")
        console.log(String.fromCodePoint(0x1F919) + " advancedSorts.ts ~ list: ")
        console.log(list)
      }
    }
  }
  //swap pivot elt and elt pointed by both pointers
  const temp = list[leftPtr]
  list[leftPtr] = list[pivotIdx]
  list[pivotIdx] = temp
  //why this doesn't work??
  //[list[leftPtr], list[pivotIdx]] = [list[pivotIdx], list[leftPtr]]
  if (log) {
    console.log("exchange pivot")
    console.log(String.fromCodePoint(0x1F919) + " advancedSorts.ts ~ list: ")
    console.log(list)
  }
  //sort left and right side of pivot
  quickSort(list, startIdx, leftPtr - 1, log)
  quickSort(list, leftPtr + 1, endIdx, log)
  //return the list
  return list
}
