function reverseArray(a) {
  // Time complexity - O(|a|)
  return a.map((v, i) => a[a.length - i - 1]);
}
