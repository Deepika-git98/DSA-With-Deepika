fullPyramid(5);
function fullPyramid(n: number): void {
  for (let i = 1; i <= n; i++) {
    for (let s = 1; s <= n - i; s++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
