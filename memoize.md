# Problem 05 — Memoization

## 📌 Problem

Implement a `memoize(fn)` function.

The returned function should cache previously computed results and return the cached value when the same input is provided again, instead of recalculating it.

---

## 🎯 Goal

Avoid unnecessary calculations by storing previous results.

Memoization is a common optimization technique used to improve application performance.

---

## 🧠 How It Works

* First call → Calculate the result and store it in the cache.
* Next call with the same input → Return the cached result.
* New input → Calculate again and store the new result.

---

## 📊 Example

```js
function square(num) {
    console.log("Calculating...");
    return num * num;
}

const memoizedSquare = memoize(square);

console.log(memoizedSquare(5));
console.log(memoizedSquare(5));
console.log(memoizedSquare(10));
console.log(memoizedSquare(5));
```

### Output

```text
Calculating...
25

25

Calculating...
100

25
```

---

## 🪜 Algorithm

1. Create an empty cache object.
2. Return a new function.
3. When the returned function is called:

   * Check whether the input already exists in the cache.
   * If it exists, return the cached value.
   * Otherwise:

     * Execute the original function.
     * Store the result in the cache.
     * Return the result.

---

## 💡 Core Idea

Memoization stores an **Input → Output** mapping.

```text
5  → 25
10 → 100
20 → 400
```

Instead of recalculating the same input multiple times, the cached result is returned instantly.

---

## 🗂 Cache Example

```js
{
    5: 25,
    10: 100,
    20: 400
}
```

---

## 🧠 Why Use an Object?

Objects allow direct lookup using a key.

```js
cache[value]
```

Example:

```js
cache[5];   // 25
cache[10];  // 100
cache[20];  // undefined
```

No loops are required because object property lookup is efficient.

---

## 🆚 Without Memoization

```text
square(5)   → Calculate
square(5)   → Calculate Again
square(5)   → Calculate Again
```

---

## ✅ With Memoization

```text
square(5)   → Calculate & Cache
square(5)   → Return Cache
square(5)   → Return Cache
```

---

## ⏱️ Complexity

### First Call

* **Time Complexity:** `O(1)` + execution time of `fn`
* **Space Complexity:** `O(1)` (one cache entry)

### Cached Calls

* **Time Complexity:** `O(1)`
* **Space Complexity:** `O(1)`

Overall cache storage grows with the number of unique inputs.

* **Total Cache Space:** `O(n)` where `n` is the number of unique inputs.

---

## 📚 Concepts Practiced

* Higher Order Function (HOF)
* Closure
* Lexical Environment
* Cache
* Dynamic Object Property Access
* Input → Output Mapping
* Performance Optimization
* Object Lookup (`O(1)`)
