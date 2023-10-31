// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]
  describe("fibonacciLength1",() => {
    it ("returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function", () => {
      expect(fibonnaci(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    })
  })    
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]
const fibonacciLength2 = 10
// b) Create the function that makes the test pass.
describe("fibonacciLength2",() => {
  it ("returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function", () => {
    expect(fibonnaci(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  })
})
// i was able to get the test statements easily and the else if statements.

function fibonnaci(length) {
  if (length <= 0) {
    // if the length comes back as 0 return an empty array
    return []; //[] represent an empty array
  } else if (length === 1) { //if the length comes back as stricktly equal to 1 
    return [1]; // return an array with the first fib
  } else if (length === 2) { // if the length comes back as stricktly equal to 2
  return [1, 1]; // return the first two fib
}
// This is where i was completely stuck, i knew that we had to use to variables in order for us to achieve the next number but i just didnt know how to code it.



const sequenceOrder = [1, 1]; // Initialize with the first two
for (let i = 2; i < length; i++) { // This will help us generate the following fibonacci sequence; i had to use help for this as i was stuck for a few hours
  sequenceOrder.push(sequenceOrder[i - 1] + sequenceOrder[i - 2]);
}
  return sequenceOrder;
}
 

// Pseudo code:

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.
describe('sortObjectValues', () => {
  it('should sort the values of studyMinutesWeek1 in ascending order', () => {
const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
};
const result = sortObjectValues(studyMinutesWeek1);
// This correctly sorts the values of our object
const expected = [15, 15, 20, 30, 30, 60, 90];
// Expected array value that we want to be the outcome
expect(result).toEqual(expected);
});

// Expected output: [15, 15, 20, 30, 30, 60, 90]
it('should sort the values of studyMinutesWeek2 in ascending order', () => {

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
};

const result = sortObjectValues(studyMinutesWeek2);
// This correctly sorts the value for our week2
const expected = [10, 15 , 20 , 45, 60, 65 ,100];
// expected array value that we want to be the outcome
expect(result).toEqual(expected);
});
});  
  
// Expected output: [10, 15, 20, 45, 60, 65, 100]

// b) Create the function that makes the test pass.

function sortObjectValues(obj) {
  // The function take the object and extracts its values
  const values = Object.values(obj);
  //it returns those values in ascending order with the .sort method
  return values.sort((a, b) => a - b);
}

module.exports = { sortObjectValues };

