# stack

In this Kata you will create a stack.

## Running unit tests

- Run once: `npx nx test stack`
- Watch mode: `npx nx test-watch stack`

Execute the unit tests via [Vitest](https://vitest.dev).

## The Three Rules of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Which means the workflow is:

1. Write a failing test. Stop writing the test as soon as it fails.
2. Write the minimal production code required for the test to pass. Stop writing any code once the test passes.
3. Refactor the test code and the production code without altering the functionality. All tests should pass.

## Before you start:
* Try not to read ahead. 
* Do one task at a time. The trick is to learn to work incrementally.
* All tests should always pass, regardless of environment conditions.

## The Kata
Your task is to reate a stack class.
The stack should do:

- instantiate an empty stack
- Interface:
    - isEmpty
    - push
    - pop



