# Problem 03 — Debounce

## 📌 Scenario

A user is typing in a search input.

```text
H
He
Hel
Hell
Hello
```

If we call the API on every keystroke, it creates unnecessary requests and reduces performance.

**Goal:** Execute the function **only once** after the user stops typing.

---

# 💡 Solution

Use the **Debounce** pattern.

### Core Logic

1. Cancel the previous timer.
2. Create a new timer.
3. If the user types again before the delay ends, cancel the previous timer.
4. Execute the function only after the user stops typing for the specified delay.

---

# 🧠 Timer Visualization

### Without `clearTimeout()`

```text
User Input

H
He
Hel

↓

Timers Created

Timer #1 → search("H")
Timer #2 → search("He")
Timer #3 → search("Hel")

↓

Callback Queue

search("H")
search("He")
search("Hel")

↓

Output

H
He
Hel
```

---

### With `clearTimeout()`

```text
User Input

H

↓

Timer #1

↓

User types "He"

↓

clearTimeout(Timer #1)

↓

Timer #2

↓

User types "Hel"

↓

clearTimeout(Timer #2)

↓

Timer #3

↓

User stops typing

↓

Callback Queue

search("Hel")

↓

Output

Hel
```

---

# 🤔 Why Do We Need a Callback Function?

Debounce does **not** know what task to perform.

Its responsibility is only to control **when** a function should execute.

The actual function is passed as a callback.

```js
const betterSearch = debounce(search, 500);
```

This makes the debounce function reusable for any task.

Examples:

* Search API
* Auto Save
* Form Validation
* Window Resize
* Scroll Event
* Button Click Handling

---

# 📚 Concepts Covered

* Higher-Order Function
* Callback Function
* Closure
* Lexical Environment
* `setTimeout()`
* `clearTimeout()`
* Debounce Pattern

---

# ⏱ Time Complexity

* **Per Invocation:** `O(1)`

---

# 🎯 Key Takeaway

> **Debounce delays execution until the user stops triggering the event for a specified amount of time.**
