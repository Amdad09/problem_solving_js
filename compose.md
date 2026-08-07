# Problem 08 — Compose Function

## 📌 Problem

Implement a `compose()` function.

The `compose()` function combines multiple functions into a single function. The output of one function becomes the input of the previous function.

Function execution happens **from right to left**.

---

## 🎯 Goal

Create a reusable function by chaining multiple functions together.

---

## 🧠 How It Works

Given two functions:

```js
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;
```

Compose them:

```js
const composed = compose(add2, multiply3);
```

Calling:

```js
composed(5);
```

Works like:

```js
add2(multiply3(5));
```

---

## 📊 Example

```js
const add2 = (x) => x + 2;
const multiply3 = (x) => x * 3;

const composed = compose(add2, multiply3);

console.log(composed(5));
```

### Output

```text
17
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
multiply3(5)
  │
  ▼
15
  │
  ▼
add2(15)
  │
  ▼
17
```

---

## 🪜 Algorithm

1. Receive multiple functions.
2. Return a new function.
3. When the returned function is called:

   * Pass the input to the last function.
   * Take its output.
   * Pass that output to the previous function.
   * Continue until every function has executed.
4. Return the final result.

---

## 💡 Core Idea

Compose works **Right → Left**.

```text
compose(f, g)

↓

f(g(x))
```

The last function executes first.

---

## 🆚 Compose vs Pipe

### Compose (Right → Left)

```text
compose(f, g)

↓

f(g(x))
```

---

### Pipe (Left → Right)

```text
pipe(f, g)

↓

g(f(x))
```

---

## 🌍 Real-World Use Cases

### Data Transformation

```text
Raw Data
   │
   ▼
Format Data
   │
   ▼
Validate Data
   │
   ▼
Display Data
```

---

### Functional Programming

Compose is commonly used in:

* Functional Programming
* Utility Libraries (Ramda, Lodash FP)
* Redux Middleware
* Data Processing Pipelines
* React Utility Functions

---

## 🧠 Why Use Compose?

Instead of writing nested function calls:

```js
const result = add2(multiply3(5));
```

You can create a reusable function:

```js
const composed = compose(add2, multiply3);

composed(5);
composed(10);
composed(20);
```

This improves readability and reusability.

---

## ⏱️ Complexity

For **n** composed functions:

* **Time Complexity:** `O(n)`
* **Space Complexity:** `O(1)` (excluding the function references)

---

## 📚 Concepts Practiced

* Higher Order Function (HOF)
* Closure
* Function Composition
* Function Chaining
* Functional Programming
* Right-to-Left Execution
* Reusable Functions
