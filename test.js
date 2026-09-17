const assert = require('assert');
const { add } = require('./math.js');

console.log('Running tests...');

// Test 1: Check if 2 + 3 equals 5
assert.strictEqual(add(2, 3), 5);
console.log('✅ Test 1 passed!');

// Test 2: Check if -1 + 1 equals 0
assert.strictEqual(add(-1, 1), 0);
console.log('✅ Test 2 passed!');

console.log('All tests passed successfully! 🎉');
