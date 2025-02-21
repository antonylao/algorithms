/*
  * @input: list sorted ascendently
  * @output: nb of elements of list without duplicates 
  *        (end idx of list without duplicates would be output - 1
  * @requirements:
  * - assumes the list is sorted ascendently
  * - in-place 
  * @time-complexity: O(n)
  * @space-complexity: 0(1)
*/
export function removeDuplicates(sortedListAsc) {
}


/*
  * @input: list<integers> 
  * @output: same list 
  *        
  * @requirements:
  * - moves 0s to the end of the list
  * - stable for non-0s elts
  * - in-place 
  * @notes
  * - either the slowPtr and fastPtr are incremented by 1 together,
  *   or only the fastPtr is incremented, 
  *   meaning that when the swap occurs, the next elt is either pointed by
  *   fastPtr if it is non-0, or it is 0, so the slowPtr is always at the 
  *   right position when incremented by 1 after a swap
  * @time-complexity: O(n)
  * @space-complexity: 0(1)
*/
export function moveZerosToTheEnd(arr) {
  let slowPtr = 0
  arr.forEach(function TODO(elt, fastPtr) {
    if (arr[fastPtr] !== 0) {
      [arr[slowPtr], arr[fastPtr]] = [arr[fastPtr], arr[slowPtr]]
      slowPtr++
    }
  })
  return arr
}


