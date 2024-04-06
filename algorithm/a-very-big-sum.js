function aVeryBigSum(ar) {
  // Time complexity - O(|ar|)
  return ar.reduce((acc, val) => acc + val, 0);
}
