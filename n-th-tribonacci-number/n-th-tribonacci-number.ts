function tribonacci(n: number): number {
  if (n < 3) return n === 0 ? 0 : 1;

  let prev = 0;
  let curr = 1;
  let next = 1;

  for (let i = 3; i <= n; i++) {
    const temp = prev + curr + next;
    prev = curr;
    curr = next;
    next = temp;
  }

  return next;
}