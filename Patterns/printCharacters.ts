printCharacters1(5);
function printCharacters1(n: number) {
  for (let i = 1; i <= n; i++) {
    const startCode = "A".charCodeAt(0);
    for (let j = 0; j < i; j++) {
      const c = String.fromCharCode(startCode + j);
      process.stdout.write(c + " ");
    }
    console.log();
  }
}
printCharacters2(5);
function printCharacters2(n: number) {
  for (let i = n; i >= 1; i--) {
    const startCode = "A".charCodeAt(0);
    for (let j = 0; j < i; j++) {
      const c = String.fromCharCode(startCode + j);
      process.stdout.write(c + " ");
    }
    console.log();
  }
}
printCharacters3(5);
function printCharacters3(n: number) {
  for (let i = 1; i <= n; i++) {
    const startCode = "A".charCodeAt(0);
    for (let j = 0; j <= i; j++) {
      const c = String.fromCharCode(startCode + i);
      process.stdout.write(c + " ");
    }
    console.log();
  }
}

printCharacters4(5);
function printCharacters4(n: number) {
  //let currentCharCode = "A".charCodeAt(0);
  let startCode = "A".charCodeAt(0);
  for (let i = 0; i < n; i++) {
    //spaces
    for (let s = 0; s < n - i; s++) {
      process.stdout.write(" ");
    }
    //characters increasing
    let c = String.fromCharCode(startCode);
    let breakpoint = (2 * i + 1) / 2;
    for (let j = 1; j <= 2 * i + 1; j++) {
      process.stdout.write(c);
      if (j <= breakpoint) {
        c = String.fromCharCode(c.charCodeAt(0) + 1);
      } else {
        c = String.fromCharCode(c.charCodeAt(0) - 1);
      }
      // currentCharCode = c.charCodeAt(0);
    }
    // //characters decreasing
    // for (let k = 1; k < i; k++) {
    //   currentCharCode--;
    //   const c = String.fromCharCode(currentCharCode);
    //   process.stdout.write(c + " ");
    // }
    //spaces
    for (let s = 0; s < n - i; s++) {
      process.stdout.write(" ");
    }
    console.log();
  }
}
