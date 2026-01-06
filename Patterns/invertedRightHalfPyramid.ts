/**
 * Inverted Right Half Pyramid Pattern (Star Pattern)
 *
 * Approach:
 * - Print stars using a loop from n to 1
 * - Use String.repeat for pattern generation
 *
 * Time Complexity:  O(n²)
 *   - The loop runs n times, and each print operation takes O(n) → total O(n * n)
 *
 * Space Complexity: O(1)
 *   - No extra data structures used, only loop counter and print buffer
 *
 * Input:  n = number of rows
 * Output: Inverted right half pyramid pattern
 */
invertedRightHalfPyramid(8);
function invertedRightHalfPyramid(n: number): void {
  for (let i = n; i >= 1; i--) {
    for(let j =1; j<=i; j++){
        process.stdout.write("*");
    }
    process.stdout.write("\n")
  }
}
