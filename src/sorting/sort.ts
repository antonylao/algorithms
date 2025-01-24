export function sortToTest(unsortedList: any[]) {
  return insertionSort(unsortedList)
}

/*
  * @algorithm: 
  * for each item (from 2nd item) (NB: keep track of 'current' index), swap it to the one on the left until it is smaller or the index of the item is 0
  * @notes: stable, in-place (mutation of unsorted list)
  * @complexity: O(n * (n-1) / 2) (arithmetic sequence) ~ O(n^2), where n is the number of elts of the unsorted list
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


