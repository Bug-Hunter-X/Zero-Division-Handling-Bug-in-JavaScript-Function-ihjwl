# JavaScript Zero Division Handling Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to division by zero. The `bug.js` file contains the buggy function, while `bugSolution.js` provides the corrected version.

## Bug Description
The `myFunction` function is designed to divide two numbers. However, it incorrectly handles cases where either input is zero. Instead of raising an error or returning `Infinity` (for positive/negative zero), it always returns 0, potentially leading to incorrect results and silent failures in larger applications.

## Solution
The `bugSolution.js` file presents a corrected version that robustly manages zero division scenarios.

## How to Run
1. Clone this repository.
2. Open `bug.js` and `bugSolution.js` in a JavaScript environment (e.g., browser's console, Node.js).
3. Execute the functions with various inputs to observe the difference in behavior.