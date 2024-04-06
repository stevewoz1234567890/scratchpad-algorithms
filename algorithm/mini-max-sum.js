function miniMaxSum(arr) {
  // Time complexity - O(|arr|)
  const sum = arr.reduce((a, b) => a + b);
  const minSum = sum - Math.max(...arr);
  const maxSum = sum - Math.min(...arr);
  console.log(minSum, maxSum);
}
