import { Stack } from '@tdd-kata/stack';

describe(`stack`, function() {
  let myStack: Stack;

  beforeEach(function() {
    myStack = new Stack();
  });

  it(`should exist`, function() {
    expect(new Stack()).toBeDefined();
  });

  it(`should be empty`, function() {
    expect(myStack.isEmpty()).toEqual(true);
  });

  it(`should not be empty after push`, function() {
    myStack.push(1);
    expect(myStack.isEmpty()).toEqual(false);
  });

  it(`should be empty after one push and one pop`, function() {
    myStack.push(1);
    myStack.pop();
    expect(myStack.isEmpty()).toEqual(true);
  });

  it(`should not be empty after two pushes and one pop`, function() {
    myStack.push(1);
    myStack.push(2);
    myStack.pop();
    expect(myStack.isEmpty()).toEqual(false);
  });

  it(`should pop the pushed value`, function() {
    myStack.push(2);
    expect(myStack.pop()).toEqual(2);
  });

  it(`should pop the last pushed value`, function() {
    myStack.push(2);
    myStack.push(22);
    expect(myStack.pop()).toEqual(22);
  });

  it(`should throw if popped an empty stack`, function() {
    expect(() => myStack.pop()).toThrow('Stack is empty');
  });
});
