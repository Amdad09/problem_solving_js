# Problem 06 — Once Function

## 📌 Problem

Implement a `once(fn)` function.

The returned function should execute the original function **only once**.

After the first execution, every subsequent call should return the **same result** without executing the original function again.

---

## 🎯 Goal

Ensure a function can only run once while preserving its first returned value.

---

## 🧠 How It Works

* First call:

  * Execute the original function.
  * Store the returned result.
  * Mark the function as executed.
* Future calls:

  * Skip execution.
  * Return the previously stored result.

---

## 📊 Example

```js
function greet(name) {
    console.log("Executing...");
    return `Hello ${name}`;
}

const greetOnce = once(greet);

console.log(greetOnce("Amdad"));
console.log(greetOnce("Rahim"));
console.log(greetOnce("Karim"));
```

### Output

```text
Executing...
Hello Amdad
Hello Amdad
Hello Amdad
```

Notice that:

* `greet()` executes only once.
* The first returned result is reused.
* Later arguments are ignored.

---

## 🪜 Algorithm

1. Create a variable to track whether the function has already executed.
2. Create another variable to store the first returned result.
3. Return a new function.
4. When the returned function is called:

   * If the function has **not** executed:

     * Execute the original function.
     * Save the returned result.
     * Mark it as executed.
   * Otherwise:

     * Return the stored result.

---

## 💡 Core Idea

Store two pieces of state inside the closure:

```text
isCalled
result
```

Example:

```text
isCalled = false
result = undefined
```

First call:

```text
isCalled = false

↓

Execute fn()

↓

Store result

↓

isCalled = true

↓

Return result
```

Next calls:

```text
isCalled = true

↓

Skip fn()

↓

Return stored result
```

---

## 🔄 State Flow

```text
Start
 │
 ▼
isCalled = false
result = undefined
 │
 ▼
Function Called
 │
 ▼
isCalled ?
 │
 ├── No
 │     │
 │     ▼
 │ Execute fn()
 │     │
 │     ▼
 │ Save result
 │     │
 │     ▼
 │ isCalled = true
 │     │
 │     ▼
 │ Return result
 │
 └── Yes
       │
       ▼
 Return stored result
```

---

## 🧠 Why Closure?

The inner function must remember:

* Whether the function has already been executed.
* What the first returned value was.

Closure keeps these values alive even after the outer function finishes execution.

---

## 🆚 Without Once

```text
Call 1 → Execute
Call 2 → Execute
Call 3 → Execute
```

---

## ✅ With Once

```text
Call 1 → Execute & Store Result
Call 2 → Return Stored Result
Call 3 → Return Stored Result
```

---

## ⏱️ Complexity

### First Call

* **Time Complexity:** `O(1)` + execution time of `fn`
* **Space Complexity:** `O(1)`

### Later Calls

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

---

## 📚 Concepts Practiced

* Higher Order Function (HOF)
* Closure
* Lexical Environment
* State Management
* Function Wrapper
* Function Reusability
* Performance Optimization
