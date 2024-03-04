// Helper function to check if a number is even
function isEven(number) {
    if (typeof number !== 'number') {
      throw new Error("Input must be a number");
    }
  
    return number % 2 === 0;
  }
  
  // Helper function to calculate the sum of an array of numbers
  function calculateSum(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0 || !numbers.every(num => typeof num === 'number')) {
      throw new Error("Input must be a non-empty array of numbers");
    }
  
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  // Demo using the helper functions
  try {
    const sampleNumber = 15;
    const isEvenResult = isEven(sampleNumber);
    console.log(`${sampleNumber} is even:`, isEvenResult);
  
    const numberArray = [2, 5, 8, 3, 1];
    const sumResult = calculateSum(numberArray);
    console.log("Sum of the numbers:", sumResult);
  } catch (error) {
    console.error("Error:", error.message);
  }
  