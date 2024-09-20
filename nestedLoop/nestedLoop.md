The time complexity of a **nested loop** depends on the number of iterations in each loop. In general, if you have one loop nested inside another, the time complexity is the product of the complexities of the individual loops.

### Basic Form of Nested Loops

For example, consider the following nested loop:

```javascript
for (let i = 0; i < n; i++) {         // Outer loop runs n times
  for (let j = 0; j < m; j++) {       // Inner loop runs m times
    // Some constant time operation O(1)
  }
}
```

### Time Complexity Breakdown:

1. **Outer Loop** (`i` loop):
   - The outer loop runs `n` times. So, the time complexity of this loop is **O(n)**.

2. **Inner Loop** (`j` loop):
   - For each iteration of the outer loop, the inner loop runs `m` times. So, the time complexity of this loop is **O(m)**.

3. **Total Time Complexity**:
   - Since the inner loop runs `m` times for each iteration of the outer loop (which runs `n` times), the total time complexity is the product of these two: **O(n * m)**.
   - If `n` equals `m`, then the time complexity becomes **O(n²)**.

### Common Examples of Nested Loops:

1. **Square Nested Loop (O(n²))**:

   If the inner and outer loops both run `n` times, the total time complexity is **O(n²)**.

   ```javascript
   for (let i = 0; i < n; i++) {     // O(n)
     for (let j = 0; j < n; j++) {   // O(n)
       // O(1) operation
     }
   }
   ```

   - Here, the outer loop runs `n` times, and for each iteration of the outer loop, the inner loop also runs `n` times, resulting in **O(n * n) = O(n²)**.

2. **Different Loop Bounds (O(n * m))**:

   If the outer loop runs `n` times and the inner loop runs `m` times (where `n` and `m` can be different), the time complexity is **O(n * m)**.

   ```javascript
   for (let i = 0; i < n; i++) {     // O(n)
     for (let j = 0; j < m; j++) {   // O(m)
       // O(1) operation
     }
   }
   ```

   - The total time complexity here is **O(n * m)**.

3. **Triple Nested Loop (O(n³))**:

   If you have three nested loops, each running `n` times, the time complexity becomes **O(n³)**.

   ```javascript
   for (let i = 0; i < n; i++) {     // O(n)
     for (let j = 0; j < n; j++) {   // O(n)
       for (let k = 0; k < n; k++) { // O(n)
         // O(1) operation
       }
     }
   }
   ```

   - In this case, the total time complexity is **O(n * n * n) = O(n³)**.

### General Rule:
- **Two nested loops**: The time complexity is **O(n²)** if both loops run `n` times.
- **Three nested loops**: The time complexity is **O(n³)** if all three loops run `n` times.
- **Different loop bounds**: If the loops run different numbers of times, the total time complexity is the product of those times, e.g., **O(n * m)** for a two-loop structure.

### Summary:
The time complexity for a nested loop structure depends on how many times the inner and outer loops iterate. The total time complexity is the product of the complexities of the individual loops. For `n` iterations of both loops, the complexity is **O(n²)**, while for different loop bounds (`n` and `m`), the complexity is **O(n * m)**.