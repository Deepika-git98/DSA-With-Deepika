
PrintRightHalfPyramid(5)
function PrintRightHalfPyramid(n: number) {
    for(let i =1;i<=n;i++){
        for(let j=1;j<=i;j++) {
            process.stdout.write("*")
        }
        console.log() //new line
    }
}