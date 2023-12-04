import { Day } from "../day";

// Define an array of strings representing numbers in word form
const numbers = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

// Define an interface for the word-to-number mapping
interface WordToNum {
  [key: string]: number;
}

// Use the reduce function to create a mapping from word to number
const wordToNum: WordToNum = numbers.reduce(
  // The reduce function takes an accumulator (acc) and the current word (word)
  (acc, word, i) => ({ ...acc, [word]: i + 1 }),
  {} // The initial accumulator is an empty object
);

// Define a function to convert a string (number or word) to an integer
const convertNumStringToInt = (num: string): number => {
  // If the string is a word, use the word-to-number mapping, else parse it as an integer
  if (numbers.includes(num)) {
    return wordToNum[num];
  }
  return Number.parseInt(num);
};

// Extend the Day class to create a specific solution for Day 0
class Day0 extends Day {
  constructor() {
    super(0);
  }

  // Solve Part One: Extract the first and last digits from each line and sum them
  solveForPartOne(input: string): string {
    let sum: number = 0;

    // Split the input into lines and process each line
    input.split(/\r?\n/).map((line) => {
      // Remove non-numeric characters and extract the first and last digits
      const lineArr = line.replace(/[^0-9]/g, "");
      sum += parseInt(
        lineArr.split("")[0] + lineArr.split("")[lineArr.length - 1]
      );
    });

    return sum.toString();
  }

  // Solve Part Two: Convert words to numbers and find the sum of the first and last digits
  solveForPartTwo(input: string): string {
    let sum: number = 0;

    // Split the input into lines and process each line
    input.split(/\r?\n/).forEach((line) => {
      // Store the original line for logging purposes
      let og = line;
      console.log(`Original Line: ${og}`);

      // Define a regular expression to match numbers or words
      const regex = /(?=(\d|one|two|three|four|five|six|seven|eight|nine))/g;

      // Use matchAll to find all matches in the line
      const matches = [...line.matchAll(regex)];
      console.log("Matches:", matches);

      // Define a function to calculate the calibration value for a given pattern and line
      const getCalibrationValue = (pattern: RegExp, line: string): number => {
        // Use matchAll to find all matches in the line
        const matches = [...line.matchAll(pattern)];
        console.log("Matches inside function:", matches);

        if (matches.length > 0) {
          // Convert the first and last matches to integers using the word-to-number mapping
          const first = convertNumStringToInt(matches[0][1]);
          const last = convertNumStringToInt(matches[matches.length - 1][1]);
          console.log(`${first} ${last}`);
          // If both first and last are valid, calculate the calibration value
          if (first && last) {
            return first * 10 + last;
          }
        }
        return 0;
      };

      // Get the calibration value for the current line and add it to the sum
      const v = getCalibrationValue(regex, line);
      sum += v;
    });

    console.log("FINAL SUM", sum);
    return sum.toString();
  }
}

// Export an instance of the Day0 class
export default new Day0();
