function plusMinus(arr) {
  // Time complexity - O(|arr|)

  console.log(
    arr
      .reduce((freq, v) => (freq[(Math.sign(v) + 2) % 3]++, freq), [0, 0, 0])
      .map((v) => (v / arr.length).toFixed(6))
      .join("\n")
  );
}
