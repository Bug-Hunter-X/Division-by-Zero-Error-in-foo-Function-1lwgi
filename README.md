# JavaScript Division by Zero Bug

This repository demonstrates a common JavaScript error: division by zero. The `foo` function attempts to divide two numbers but doesn't handle the case where the divisor is zero. This results in an error, halting program execution.

## Bug Description

The `foo` function is designed to divide two numbers (`a` and `b`). However, it does not include a check to prevent division by zero when `b` is equal to 0.  When `b` is 0, the function throws a `TypeError` or `ZeroDivisionError` (depending on the JavaScript environment).

## Bug Solution

The solution involves adding a check to see if `b` is zero before performing the division. If `b` is zero, an appropriate action should be taken, such as returning a default value (e.g., `Infinity`, `NaN`, or throwing a custom error), or handling the error gracefully.

## How to reproduce

1. Clone this repository.
2. Open `bug.js` and run it using a JavaScript interpreter (e.g., Node.js).
3. Observe the error.
4. Compare it with the solution in `bugSolution.js`
