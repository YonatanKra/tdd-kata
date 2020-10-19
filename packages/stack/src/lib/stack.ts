export class Stack {

  stackLength = 0;
  values = [];

  isEmpty() {
    return !this.stackLength;
  }

  push(number: number) {
    this.values[this.stackLength++] = number;
  }

  pop() {
    if (this.isEmpty()) throw('Stack is empty');
    return this.values[--this.stackLength];
  }
}
