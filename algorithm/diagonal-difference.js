function diagonalDifference(arr) {
  //  Time complexity - O(|arr|)

  const n = arr.length;

  let difference = 0;

  for (let i = 0; i < n; i++) {
    difference += arr[i][i] - arr[i][n - i - 1];
  }

  return Math.abs(difference);
}
