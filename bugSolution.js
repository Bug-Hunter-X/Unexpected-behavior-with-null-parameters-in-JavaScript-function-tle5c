function foo(a, b) {
  if (a === null || b === null || typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Invalid parameters: Both parameters must be numbers.');
  }
  return a + b;
}

console.log(foo(1, 2)); // 3

try {
  console.log(foo(null, 2)); // Throws an error
} catch (error) {
  console.error(error.message); // Invalid parameters: Both parameters must be numbers.
}

try {
  console.log(foo(1, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Invalid parameters: Both parameters must be numbers.
}

try {
  console.log(foo(null, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Invalid parameters: Both parameters must be numbers.
}

console.log(foo(1, 2)); // 3