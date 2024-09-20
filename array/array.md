```javascript
// Array 
const nums = [1, 2, 3, 4];

console.log(nums[0]); // O(1)
```

### Explanation:

1. **Accessing an Element in an Array**:
   - `nums[0]` accesses the first element of the array `nums`, which is `1`.
   - Array access by index in JavaScript is done in **constant time**, meaning it takes the same amount of time regardless of the array's size. This is why the time complexity is **O(1)**, also known as constant time.

2. **Time Complexity (`O(1)`)**:
   - **O(1)** indicates that the operation is done in constant time, meaning the time taken to perform this operation does not depend on the size of the array.
   - Accessing an element by index in an array is always **O(1)** because the memory location of any element can be computed directly from its index.

### Conclusion:

The comment `// O(1)` is correct because accessing an element by its index in an array is a constant-time operation in JavaScript.