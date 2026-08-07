# Problem 04 — Throttle

## 📌 Problem

Implement a `throttle(fn, delay)` function.

The returned function should execute `fn` **at most once** within the given `delay` interval, no matter how many times it is called.

---

## 🎯 Goal

Reduce unnecessary function executions for events that fire continuously.

Common use cases:

* Scroll Event
* Mouse Move
* Window Resize
* Drag Event

---

## 🧠 How It Works

Throttle executes the function **immediately** on the first call.

After that, any calls made within the specified `delay` are ignored.

Once the delay has passed, the next call is allowed to execute.

---

## 📊 Timeline

Delay = **500ms**

```text
0ms      Call A   ✅ Execute
200ms    Call B   ❌ Ignore
600ms    Call C   ✅ Execute
1200ms   Call D   ✅ Execute
```

Output:

```text
A
C
D
```

---

## 🪜 Algorithm

1. Store the last execution time.
2. Whenever the returned function is called:

   * Get the current timestamp.
   * Calculate the time difference.
3. If the difference is greater than or equal to the delay:

   * Execute the callback.
   * Update the last execution time.
4. Otherwise, ignore the call.

---

## 💡 Key Idea

Throttle **does not wait**.

It executes immediately (if allowed) and blocks further executions until the delay expires.

---

## 🆚 Debounce vs Throttle

| Debounce                                        | Throttle                                              |
| ----------------------------------------------- | ----------------------------------------------------- |
| Executes after the user stops triggering events | Executes immediately, then limits execution frequency |
| Uses `setTimeout()`                             | Compares timestamps                                   |
| Best for Search Input, Auto Save                | Best for Scroll, Resize, Mouse Move                   |

---

## ⏱️ Complexity

**Time Complexity:** `O(1)`

**Space Complexity:** `O(1)`

---

## ✅ Concepts Practiced

* Higher Order Function (HOF)
* Closures
* Lexical Environment
* Function Returning Function
* `Date.now()`
* Timestamp Comparison
* Performance Optimization
