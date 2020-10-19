import { Stack } from '@tdd-kata/stack';

describe(`stack`, function() {
  it(`should exist`, function() {
    expect(new Stack()).toBeDefined();
  });

  it(`should be empty`, function() {
    const myStack = new Stack();
    expect(myStack.isEmpty()).toEqual(true);
  });

  it(`should not be empty after push`, function() {
    const myStack = new Stack();
    myStack.push(1);
    expect(myStack.isEmpty()).toEqual(false);
  });
});
