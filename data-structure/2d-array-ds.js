function hourglassSum(arr) {
  let maxSum = -Infinity;

  for (let i = 1; i < arr.length - 1; i++) {
    for (let j = 1; j < arr[i].length - 1; j++) {
      const currentSum =
        arr[i - 1][j - 1] +
        arr[i - 1][j] +
        arr[i - 1][j + 1] +
        arr[i][j] +
        arr[i + 1][j - 1] +
        arr[i + 1][j] +
        arr[i + 1][j + 1];

      if (currentSum > maxSum) {
        maxSum = currentSum;
      }
    }
  }

  return maxSum;
}
