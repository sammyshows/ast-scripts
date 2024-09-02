// Function to check if a number is even
function isEven(number) {
  return number % 2 === 0;
}

// Function to process numbers in an array
function processNumbers(numbers) {
  numbers.forEach(num => {
      if (isEven(num)) {
          console.log(`${num} is even`);
      } else {
          console.log(`${num} is odd`);
      }
  });
}

// Main function that orchestrates the flow
function main() {
  const numbers = [1, 2, 3, 4, 5, 6];
  console.log("Processing numbers:");
  processNumbers(numbers);
  console.log("All numbers processed.");
}

// Call the main function to start the program
main();
