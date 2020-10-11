# TddKata

This project holds several TDD Katas collected from multiple places

## How to use this repository?

1. Clone the repository
2. run `yarn` to install all dependencies

In the `packages` folder there are katas. In each kata's folder there's a readme file with instructions.
Follow the instructions step by step.

For each kata there's also a branch with a solution. Some of the solutions are step-by-step (via commits), for others it is just one commits with a full solution.

## Adding Katas

1. yarn nx g lib my-kata-name
2. This will create a ready-to-work-with kata folder in the packages folder.
3. Edit the ReadMe file with instructions in the package's folder (follow other kata's template)
4. Commit the kata's name to `main` branch
5. Checkout a branch with the kata's name
6. Add your solution in the kata's branch. Solution can be either a full solution (see the tennisGame branch) or step-by-step (see the greeter branch)
