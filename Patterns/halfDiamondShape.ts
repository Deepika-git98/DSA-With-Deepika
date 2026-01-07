halfDiamondShape(5);
function halfDiamondShape(n: number) {
  for (let i = 1; i <=2 * n - 1; i++) {
    let stars = i;
    if (i > n) {
      stars = 2 * n - i;
    }
    for (let s = 1; s <= stars; s++) {
      process.stdout.write("*");
    }
    console.log();
  }
}
