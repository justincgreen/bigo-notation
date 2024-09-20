// Quadratic Time Complexity
// Time complexity is O(n^2) for a square nested loop 
const nums = [1,2];

for(let i = 0; i < nums.length; i++) { //O(n)
  for(let j = 0; j < nums.length; j++) { // O(n)
    console.log(j); // O(1) operation
  }
}