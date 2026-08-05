# Problem 02 — Flatten Nested Array

## 🎯 Scenario

You are building a web application where data is received from an API in a deeply nested array format.

Your UI component, search engine, or analytics module expects a single flat array. Your task is to implement a custom `flatten()` utility **without using built-in methods like `Array.prototype.flat()`**.

---

## 📌 Example

### Input

```js
const data = [1, 2, [3, 4], [5, [6, 7]]];
```

### Output

```js
[1, 2, 3, 4, 5, 6, 7]
```

---

## 🚫 Restrictions

* Do **not** use:

  * `Array.prototype.flat()`
  * `flatMap()`
* Build the solution manually.
* Use recursion to support arrays of any depth.

---

## 🧠 Concepts Covered

* Recursion
* Call Stack
* Return Flow
* Execution Context
* Array Traversal
* Nested Data Structures
* Spread Operator
* Function Responsibility

---

## 💡 Algorithm

1. Check whether the input is an array.
2. Create an empty result array.
3. Traverse every element.
4. If the current element is an array:

   * Recursively flatten it.
   * Merge the returned elements into the result array.
5. Otherwise:

   * Push the current element into the result array.
6. Return the final flattened array.

---

## 🌍 Real Project Use Cases

* API Response Processing
* Category Tree Rendering
* File Explorer
* Nested Comments
* Menu Systems
* JSON Processing
* Search Index Generation

---

## 🎤 Common Interview Questions

1. What is recursion?
2. Why can't a normal loop flatten arrays of unknown depth?
3. Why do we need the recursive return value?
4. Why do we merge the returned array instead of pushing it directly?
5. What is the time complexity?
6. What is the space complexity?
7. Can this be solved iteratively using a stack?
8. What is the difference between `flat()` and a custom recursive solution?

---

## 📚 Learning Outcome

After solving this problem, you should be able to:

* Understand recursive thinking.
* Visualize function calls using the call stack.
* Understand how return values travel back to previous function calls.
* Solve nested data traversal problems confidently.
* Build recursive utilities for real-world projects.
