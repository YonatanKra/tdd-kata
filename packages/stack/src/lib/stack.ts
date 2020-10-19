export class Stack {

  stackEmpty = true;

  isEmpty() {
    return this.stackEmpty;
  }

  push(number: number) {
    this.stackEmpty = false;
  }
}
