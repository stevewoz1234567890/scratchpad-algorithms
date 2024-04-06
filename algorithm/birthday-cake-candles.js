function birthdayCakeCandles(candles) {
  // Time complexity - O(|candles|)

  let maxHeight = candles[0];
  let maxHeightCount = 1;
  for (let i = 1; i < candles.length; i++) {
    if (candles[i] > maxHeight) {
      maxHeight = candles[i];
      maxHeightCount = 1;
    } else if (candles[i] === maxHeight) {
      maxHeightCount++;
    }
  }
  return maxHeightCount;
}
