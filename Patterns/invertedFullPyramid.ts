invertedFullPyramid(5);
function invertedFullPyramid(n: number) {
  for (let i = n; i >= 1; i--) {
    for (let s = 1; s <= n - i; s++) {
      process.stdout.write(" ");
    }
    for (let j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write("*");
    }
    console.log();
  }
}