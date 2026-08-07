# Problem 07 — Curry Function

## 📌 Problem

Implement a `curry(fn)` function.

Currying transforms a function that takes multiple arguments into a sequence of functions, each taking a single argument.

Instead of:

```js
add(2, 3);
```

We can write:

```js
add(2)(3);
```

Both produce the same result.

---

## 🎯 Goal

Collect arguments one by one while using **Closure** to remember previous arguments.

---

## 🧠 How It Works

* First function receives the first argument.
* It stores that argument using Closure.
* It returns another function.
* The second function receives the next argument.
* Finally, the original function executes with all required arguments.

---

## 📊 Example

```js
const multiply = (a, b) => a * b;

const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(5));
```

### Output

```text
10
```

---

## 🪜 Algorithm

1. Receive the original function.
2. Return a new function that accepts the first argument.
3. Store the first argument using Closure.
4. Return another function.
5. Receive the second argument.
6. Execute the original function using both arguments.
7. Return the final result.

---

## 💡 Core Idea

The first function remembers the first argument.

```text
a = 2
```

Later, when the second function executes,

```text
b = 3
```

Both values become available.

```text
a = 2
b = 3
```

Finally,

```text
fn(a, b)
```

is executed.

---

## 🔄 Execution Flow

```text
curriedMultiply(2)(5)

        │
        ▼
First Function
Receives: a = 2
Stores using Closure
        │
        ▼
Returns Second Function
        │
        ▼
Second Function
Receives: b = 5
        │
        ▼
Calls
multiply(2, 5)
        │
        ▼
Returns
10
```

---

## 🧠 Why Closure?

Closure keeps the first argument alive.

Without Closure:

```text
a would be lost after the first function finishes.
```

With Closure:

```text
a remains available for the second function.
```

---

## 🌍 Real-World Use Cases

### Partial Application

```js
const withVAT = curry(calculatePrice)(0.15);

withVAT(100);
withVAT(250);
withVAT(500);
```

The tax rate is fixed once, while different prices can be passed later.

---

### Reusable Functions

```js
const greaterThan10 = curry(greaterThan)(10);

numbers.filter(greaterThan10);
```

Create specialized functions by fixing one argument.

---

### Functional Programming

Currying is commonly used in:

* Functional Programming
* Utility Libraries (Ramda, Lodash FP)
* React Patterns
* Function Composition
* Partial Application

---

## 🆚 Normal Function

```js
multiply(2, 5);
```

Both arguments are provided at once.

---

## ✅ Curried Function

```js
curriedMultiply(2)(5);
```

Arguments are collected one by one.

---

## ⏱️ Complexity

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

(The Closure stores only the required arguments.)

---

## 📚 Concepts Practiced

* Higher Order Function (HOF)
* Closure
* Lexical Environment
* Function Returning Function
* Partial Application
* Function Composition
* Functional Programming
