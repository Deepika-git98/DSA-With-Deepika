diamondShape(5);
function diamondShape(size: number) {
  //Upper Pyramid
  for (let i = 1; i <= size; i++) {
    //space
    for (let s = 1; s <= size - i; s++) {
      process.stdout.write(" ");
    }
    //stars
    for (let j = 1; j <=2 * i - 1; j++) {
      process.stdout.write("*");
    }
     console.log();
  }

  //Lower Inverted Pyramid
  for (let i = size - 1; i >= 1; i--) {
    //space
    for (let s = 1; s <= size - i; s++) {
      process.stdout.write(" ");
    }
    //stars
    for (let j = 1; j <= 2 * i - 1; j++) {
      process.stdout.write("*");
    }
     console.log();
  }
}
