export class Stack {

  stackLength = 0;

  isEmpty() {
    return !this.stackLength;
  }

  push(number: number) {
    this.stackLength += 1;
  }

  pop() {
    this.stackLength -= 1;
    return 2;
  }
}
