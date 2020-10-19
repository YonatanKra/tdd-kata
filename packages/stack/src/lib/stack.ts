export class Stack {

  stackLength = 0;
  values = [];

  isEmpty() {
    return !this.stackLength;
  }

  push(number: number) {
    this.values[this.stackLength] = number;
    this.stackLength += 1;
  }

  pop() {
    this.stackLength -= 1;
    return this.values[this.stackLength]
  }
}
