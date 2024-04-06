function dynamicArray(n, queries) {
  // Time complexity - O(n)
  const sequences = new Array(n).fill().map(() => []);
  let lastAnswer = 0;
  const answers = [];

  for (const [type, x, y] of queries) {
    const seq = sequences[(x ^ lastAnswer) % n];

    if (type === 1) {
      seq.push(y);
    } else if (type === 2) {
      lastAnswer = seq[y % seq.length];
      answers.push(lastAnswer);
    }
  }

  return answers;
}
