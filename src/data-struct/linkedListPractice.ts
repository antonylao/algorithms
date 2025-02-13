export class LinkedListNodeToTest {
  val: any;
  next: LinkedListNodeToTest | null

  constructor(val, next = null) {
    this.val = val
    this.next = next
  }
}

export class LinkedListToTest {
  head: LinkedListNodeToTest | null;

  constructor() {
    this.head = null
  }

  reverse() {
    //TODO
  }
}

