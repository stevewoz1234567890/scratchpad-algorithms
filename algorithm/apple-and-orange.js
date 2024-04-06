function countApplesAndOranges(s, t, a, b, apples, oranges) {
  // Time complexity - O(|apples| + |oranges|)
  console.log(apples.filter((dist) => a + dist >= s && a + dist <= t).length);
  console.log(oranges.filter((dist) => b + dist >= s && b + dist <= t).length);
}
