
/*
  * @algorithm: 
  * for each item (from 2nd item) (NB: keep track of 'current' index), swap it to the one on the left until it is smaller or the index of the item is 0
  * @notes: stable, in-place (mutation of unsorted list)
  * @time-complexity: O(n * (n-1) / 2) (arithmetic sequence) ~ O(n^2), where n is the number of elts of the unsorted list
*/
export function insertionSort(list: any[]) {
  list.forEach(function swapWithLeftEltUntilLeftIsSmaller(elt, eltOriginalIdx) {
    for (let currentEltIdx = eltOriginalIdx; currentEltIdx > 0; currentEltIdx--) {
      let eltAtIdxMinusOne = list[currentEltIdx - 1]
      if (eltAtIdxMinusOne > elt) {
        //swap elt with the one before it
        // unsortedList[currentEltIdx - 1] = elt
        // unsortedList[currentEltIdx] = eltAtIdxMinusOne
        //NB: swapping shorthand
        [list[currentEltIdx - 1], list[currentEltIdx]] = [list[currentEltIdx], list[currentEltIdx - 1]]
      } else {
        //stop the loop
        break;
      }
    }
  })

  return list
}


/*
  * @algorithm: 
  * initialize startIdxUnsorted to 0 (start of unsorted pile)
  * find the smallest elt (use a minEltIdx var)
  * swap it elt at minEltIdx with the one at startIdxUnsorted
  * add 1 to startIdxUnsorted (we have sorted one more elt, so the unsorted pile shrinks by 1) 
  * continue until startIdxUnsorted > last index of unsortedList
  *
  * @notes: NOT stable (elt at startIdxUnsorted can be swapped with an elt from any idx from the unsorted pile), 
  * in-place (mutation of unsorted list)
  *
  * @time-complexity: O(n * (n+1) / 2) (arithmetic sequence) ~ O(n^2), where n is the number of elts of the unsorted list
*/
export function selectionSort(list: any[]) {
  //for firstIdxUnsortedPile from beginning of list to end
  list.forEach(function SwapMinEltWithFirstEltOfUnsortedPile(_, firstIdxUnsortedPile) {
    // initialize currentIdxOfMin to first index of unsorted pile
    let currentIdxOfMin = firstIdxUnsortedPile
    // for currentIdx from firstIdxUnsortedPile + 1 to end of list
    for (let currentIdx = firstIdxUnsortedPile + 1; currentIdx < list.length; currentIdx++) {
      //   if elt at currentIdx < elt at currentIdxOfMin, replace currentIdxOfMin by currentIdx  
      if (list[currentIdx] < list[currentIdxOfMin]) {
        currentIdxOfMin = currentIdx
      }
    }
    // exchange elts at currentIdxOfMin and firstIdxUnsortedPile 
    [list[firstIdxUnsortedPile], list[currentIdxOfMin]] = [list[currentIdxOfMin], list[firstIdxUnsortedPile]]
  })
  //return list  
  return list
}

/*
  * @algorithm: 
  * initialize swapped to false
  * initialize lastIdx to last idx of list 
  * do
    * for pointer going from 0 to lastIdx - 1:
      * if the elt at pointer is < to the elt at pointer + 1:
        * swap them, and assign `swapped` to true 
  * while swapped is true 
  * return list
  *
  * @notes: stable, in-place
  * @time-complexity: O(n * (n - 1) / 2) (arithmetic sequence) ~ O(n^2), where n is the nb of elts in the list
*/
export function bubbleSort(list: any[]) {
  //at each pass, we decrement lastIdx by 1 because the last elt will be sorted
  for (let lastIdx = list.length - 1; lastIdx >= 1; lastIdx--) {
    let swapped = false
    //at each pass, we compare elts with the next one, so idx stops at lastIdx - 1
    for (let idx = 0; idx < lastIdx; idx++) {
      if (list[idx] > list[idx + 1]) {
        //NB: we use a semicolon because the following line starts with [, 
        //    and so JS doesn't add a semicolon automatically
        swapped = true;
        [list[idx], list[idx + 1]] = [list[idx + 1], list[idx]]
      }
    }
    //is swapped is false, the list is sorted
    if (swapped === false) {return list}
  }
  return list
}
