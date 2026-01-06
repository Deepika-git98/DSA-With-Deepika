invertedLeftHalfPyramid(8);
function invertedLeftHalfPyramid(n: number): void {
  for (let i = n; i >= 1; i--) {
    let row = "";
    for (let s = 0; s < n - i; s++) {
      row += " ";
    }
    for (let j = 1; j <= i; j++) {
      row += "*";
    }
    console.log(row);
  }
}
