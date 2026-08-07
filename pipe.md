# Problem 09 — Pipe Function

## 📌 Problem

Implement a `pipe()` function.

The `pipe()` function combines multiple functions into a single function.

Unlike **Compose**, functions are executed **from left to right**.

---

## 🎯 Goal

Execute multiple functions sequentially where the output of one function becomes the input of the next function.

---

## 🧠 How It Works

Given:

```js
const add2 = (x) => x + 2;
const multiply2 = (x) => x * 2;
const square = (x) => x * x;
```

Create:

```js
const piped = pipe(add2, multiply2, square);
```

Calling:

```js
piped(3);
```

Works like:

```js
square(multiply2(add2(3)));
```

---

## 📊 Example

```js
const add2 = (x) => x + 2;
const multiply2 = (x) => x * 2;

const piped = pipe(add2, multiply2);

console.log(piped(5));
```

### Output

```text
14
```

Explanation:

```text
5
↓

add2(5)

↓

7
↓

multiply2(7)

↓

14
```

---

## 🪜 Algorithm

1. Accept any number of functions using Rest Parameters.
2. Return a new function.
3. Receive the initial input.
4. Pass the input to the first function.
5. Take its output.
6. Pass that output to the next function.
7. Continue until all functions have executed.
8. Return the final result.

---

## 💡 Core Idea

Pipe works **Left → Right**.

```text
pipe(f, g, h)

↓

h(g(f(x)))
```

Execution order:

```text
Input

↓

Function 1

↓

Function 2

↓

Function 3

↓

Final Result
```

---

## 🔄 Execution Flow

```text
Input
 │
 ▼
5
 │
 ▼
add2
 │
 ▼
7
 │
 ▼
multiply2
 │
 ▼
14
```

---

## 🌍 Why Rest Parameters?

Instead of limiting ourselves to two functions:

```js
pipe(fn1, fn2);
```

We can support any number of functions:

```js
pipe(fn1, fn2, fn3, fn4, fn5);
```

Rest Parameters collect them into an array:

```js
[
  fn1,
  fn2,
  fn3,
  fn4,
  fn5
]
```

---

## 🧠 Why Reduce?

Each function's output becomes the next function's input.

```text
acc
 │
 ▼
Function 1

↓

New acc

↓

Function 2

↓

New acc

↓

Function 3

↓

Final Result
```

The accumulator always stores the latest transformed value.

Conceptually:

```js
acc = fn(acc);
```

This is exactly how `reduce()` works.

---

## 🆚 Compose vs Pipe

### Compose

```text
Right → Left

compose(f, g)

↓

f(g(x))
```

---

### Pipe

```text
Left → Right

pipe(f, g)

↓

g(f(x))
```

---

## 🌍 Real-World Use Cases

* Data Transformation
* Form Validation
* Utility Function Chaining
* Functional Programming
* Middleware Pipelines
* Data Processing

---

## ⏱️ Complexity

If there are **n** functions:

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)` (excluding stored function references)

---

## 📚 Concepts Practiced

* Higher Order Function (HOF)
* Closure
* Rest Parameters
* Array.reduce()
* Function Chaining
* Function Composition
* Functional Programming
* Left-to-Right Execution
