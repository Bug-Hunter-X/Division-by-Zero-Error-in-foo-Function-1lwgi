function foo(a, b) {
  if (a === 0 || b === 0) {
    return 0; //Incorrect return statement. Should handle division by zero
  }
  return a / b;
}

console.log(foo(10, 0)); // Throws an error. This will throw a division by zero error. 