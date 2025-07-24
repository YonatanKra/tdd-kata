#!/bin/bash

echo "Testing all packages with Vitest..."

cd packages/calc-stats
echo "Testing calc-stats..."
npx vitest run
cd ../..

cd packages/greeter 
echo "Testing greeter..."
npx vitest run
cd ../..

cd packages/tennis-game
echo "Testing tennis-game..."
npx vitest run
cd ../..

cd packages/simple-agent-path-optimization
echo "Testing simple-agent-path-optimization..."
npx vitest run
cd ../..

cd packages/stack
echo "Testing stack..."
npx vitest run
cd ../..

echo "All tests completed!"
