export function sortToTest(unsortedList: any[]) {
  return selectionSort(unsortedList)
}

/*
  * @algorithm: 
  * for each item (from 2nd item) (NB: keep track of 'current' index), swap it to the one on the left until it is smaller or the index of the item is 0
  * @notes: stable, in-place (mutation of unsorted list)
  * @time-complexity: O(n * (n-1) / 2) (arithmetic sequence) ~ O(n^2), where n is the number of elts of the unsorted list
*/
export function insertionSort(unsortedList: any[]) {
  unsortedList.forEach(function swapWithLeftEltUntilLeftIsSmaller(elt, eltOriginalIdx) {
    for (let currentEltIdx = eltOriginalIdx; currentEltIdx > 0; currentEltIdx--) {
      let eltAtIdxMinusOne = unsortedList[currentEltIdx - 1]
      if (eltAtIdxMinusOne > elt) {
        //swap elt with the one before it
        // unsortedList[currentEltIdx - 1] = elt
        // unsortedList[currentEltIdx] = eltAtIdxMinusOne
        //NB: swapping shorthand
        [unsortedList[currentEltIdx - 1], unsortedList[currentEltIdx]] = [unsortedList[currentEltIdx], unsortedList[currentEltIdx - 1]]
      } else {
        //stop the loop
        break;
      }
    }
  })

  return unsortedList
}


/*
  * @algorithm: 
  * initialize startIdxUnsorted to 0 (start of unsorted pile)
  * find the smallest elt (use a minEltIdx var)
  * swap it elt at minEltIdx with the one at startIdxUnsorted
  * add 1 to startIdxUnsorted (we have sorted one more elt, so the unsorted pile shrinks by 1) 
  * continue until startIdxUnsorted > last index of unsortedList
  *
  * @notes: NOT stable (elt at startIdxUnsorted can be swapped with an elt equal to it from the unsorted pile), 
  * in-place (mutation of unsorted list)
  *
  * @time-complexity: O(n * (n+1) / 2) (arithmetic sequence) ~ O(n^2), where n is the number of elts of the unsorted list
*/
export function selectionSort(unsortedList: any[]) {
  for (let startIdxUnsorted = 0; startIdxUnsorted < unsortedList.length; startIdxUnsorted++) {
    let minEltIdx = startIdxUnsorted
    for (let currentIdx = startIdxUnsorted; currentIdx < unsortedList.length; currentIdx++) {
      const currentMinElt = unsortedList[minEltIdx]
      const currentElt = unsortedList[currentIdx]
      if (currentElt < currentMinElt) {
        minEltIdx = currentIdx
      }
    }

    [unsortedList[startIdxUnsorted], unsortedList[minEltIdx]] = [unsortedList[minEltIdx], unsortedList[startIdxUnsorted]]
  }

  return unsortedList
}



/*
  * @algorithm: 
  * initialize a swapped var to false
  * initialize a pointerInitialPos to 0
  * initialize sortedPileIdx to last elt
  * for pointer going from pointerInitialPos to sortedPileIdx:
      * if the elt at pointer is < to the elt at pointer + 1:
        * swap them, and 
  *
  * @notes: stable ? in-place?
    
export function bubbleSort(unsortedList: any[]) {
}
*/
