printNumbers1(5);
function printNumbers1(n: number) {
  for (let i = 1; i <= n; i++) {
    let number = 1;
    if (i % 2 === 0) {
      number = 0;
    }
    for (let j = 1; j <= i; j++) {
      process.stdout.write(number + " ");
      number = 1 - number;
    }
    console.log();
  }
}

printNumbers2(5);
function printNumbers2(n: number) {
  let space = 2 * (n - 1);
  for (let i = 1; i <= n; i++) {
    //number
    for (let j = 1; j <= i; j++) {
      process.stdout.write(j + " ");
    }
    //space
    for (let s = 1; s <=space; s++) {
      process.stdout.write("  ");
    }
    //number
    for (let j = i; j >= 1; j--) {
      process.stdout.write(j + " ");
    }
    space -= 2;
    console.log();
  }
}
printNumbers3(5);
function printNumbers3(n: number) {
    let count = 1;
    for(let i =1;i<=n;i++) {
        for(let j =1; j<=i;j++) {
            process.stdout.write(count + " ");
            count++;
        }
       console.log();
    }
}
