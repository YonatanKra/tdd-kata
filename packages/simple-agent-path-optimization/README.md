# simple agent-path-optimization

In this task, you'll need to help an agent optimize his path so as to do less steps while getting to its destintaion.

## The Three Rules of TDD

1. You are not allowed to write any production code unless it is to make a failing unit test pass.
2. You are not allowed to write any more of a unit test than is sufficient to fail; and compilation failures are failures.
3. You are not allowed to write any more production code than is sufficient to pass the one failing unit test.

Which means the workflow is:

1. Write a failing test. Stop writing the test as soon as it fails.
2. Write the minimal production code required for the test to pass. Stop writing any code once the test passes.
3. Refactor the test code and the production code without altering the functionality. All tests should pass.

## Running unit tests

Run `nx test simple-agent-path-optimization -- watch` to execute the unit tests via [Jest](https://jestjs.io).

## Before you start:
* Try not to read ahead. 
* Do one task at a time. The trick is to learn to work incrementally.
* All tests should always pass, regardless of environment conditions.

## The Kata

An agent you are responsible for is being used by an unknown system. This agent can move "UP", "DOWN", "LEFT", "RIGHT".

Your boss comes to you one day and says the other system - your customer - claims the agents wastes a lot of energy for simple paths.

Checking the logs, you see the other system inputs your agent in ridiculously inefficient commands.

Instead of giving the agent the following command: 
```
["UP", "UP", "LEFT", "UP"]
``` 
it receives the following: 
```
["UP", "DOWN", "UP", "UP", "LEFT", "RIGHT", "LEFT", "UP"]
```
Hence, it is taking 8 steps instead of 4 to get to the same position.

You boss tells you this customer is very important, and you have to make up for the client's system inefficiency.

### Phase 1
Write a method to your agent that receives an array of instructions and makes sure there are no inefficient commands as described above. The agent should not move more than the needed amount of steps.


#### Example input
Input:
```
["UP", "UP", "UP", "DOWN", "LEFT"]
```
Expected output
```
["UP", "UP", "LEFT"]
```
Input
```
["UP", "UP", "RIGHT", "DOWN", "LEFT", "RIGHT", "UP"]
```
Expected output
```
["UP", "UP", "RIGHT"]
```

### Phase 2
Your agent has advanced to version 2.0 and can now support the "DROP" and "PICK" commands

Your agent can start its path either "FULL" or "EMPTY".

Your job is to write an algorithm that makes sure the path is both optimized as above as well as feasible.

Feasible = `Your agent doesn't get to PICK in a FULL state or to DROP when it is EMPTY`;

If a path is not feasible, there's no need to calculate optimization.

Improve your algorithm from phase 1 so it will cope with the upgrade.

Your input will be `(packState: 'FULL' | 'EMPTY', directions: DIRECTION_STRINGS[])`

Examples:

#### feasible and optimized input
Input:
```
"EMPTY"
["UP", "UP", "LEFT", "PICK", "UP", "RIGHT", "DOWN"]
``` 
Expected Output:
```
["UP", "UP", "LEFT", "PICK", "UP", "RIGHT", "DOWN"]
``` 
#### not feasible
Input:
```
"FULL"
["UP", "UP", "LEFT", "PICK", "UP", "RIGHT", "DOWN"]
``` 
Expected Output:
```
"Not Feasible"
```
#### feasible but not optimized
Input:
```
"FULL"
["UP", "UP", "DROP", "LEFT", "UP", "RIGHT", "DOWN"]
``` 
Expected Output:
```
["UP", "UP", "DROP"]
```

