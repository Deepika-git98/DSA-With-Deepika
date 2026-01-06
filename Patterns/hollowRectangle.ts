hollowRectangle(4, 5);
function hollowRectangle(rows: number, cols: number) {
  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= cols; j++) {
      //print star for first and last row
      if (i === 1 || j === 1 || i === rows || j === cols) {
        process.stdout.write("*");
      } else {
        process.stdout.write(" ");
      }
    }
    console.log();
  }
}
