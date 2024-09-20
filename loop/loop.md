```javascript
const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < nums.length; i++) { // O(n)
  console.log(nums[i]);
}
```

### Explanation:

1. **Loop Through the Array**:
   - The `for` loop iterates over each element in the `nums` array.
   - `nums.length` returns the length of the array, which is 5 in this case.
   - The loop runs from `i = 0` to `i < nums.length`, so it will iterate `n` times, where `n` is the length of the array (`n = 5` in this case).

2. **Time Complexity (`O(n)`)**:
   - **O(n)** means that the time complexity of the loop is **linear**. This is because the loop executes once for each element in the array, making the total number of operations proportional to the number of elements in the array (`n`).
   - As the array gets larger, the number of iterations (and thus the time taken) increases proportionally.

### Conclusion:

The comment `// O(n)` is correct because the loop iterates over the array, visiting each element exactly once, resulting in a time complexity of **O(n)**.