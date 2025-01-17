function foo(a, b) {
  if (b === 0) {
    return Infinity; // Handle division by zero by returning Infinity
  }
  return a / b;
}
console.log(foo(10, 0)); // Returns Infinity
console.log(foo(10, 2)); // Returns 5