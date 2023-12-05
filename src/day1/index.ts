import { Day } from "../day";

// Extend the Day class to create a specific solution for Day 1
class Day1 extends Day {
  constructor() {
    super(1);
  }

  // Determine which games would have been possible if the bag had been loaded
  // with only 12 red cubes, 13 green cubes, and 14 blue cubes.
  // What is the sum of the IDs of those games?
  solveForPartOne(input: string): string {
    let sum: number = 0;
    let bag = [
      { count: 12, colour: "red" },
      { count: 14, colour: "blue" },
      { count: 13, colour: "green" },
    ];

    input.split(/\r?\n/).map((line) => {
      // Split each line into the game ID and sets
      // e.g. ['Game 100', ' 6 green, 15 red, 12 blue; 9 red; 16 red; 17 red, 3 blue, 7 green']
      const [gameID, sets] = line.split(":");
      // Split sets into individual set identifiers
      // e.g ['6 green, 15 red, 12 blue', ' 9 red', ' 16 red', ' 17 red, 3 blue, 7 green']
      const setIdentifiers = sets.trim().split(";");
      // Map over each set identifier to parse colors and counts
      const parsedSets = setIdentifiers.map((set) => {
        // Split the set into individual colors
        const colors = set
          .trim()
          .split(",")
          .map((color) => {
            // Split each color into count andcolour
            const [count, colour] = color.trim().split(" ");
            // Return an object representing count andcolour
            return { count: parseInt(count), colour };
          });

        // Return the array of colors for this set
        return colors;
      });

      // console.log("------------------------------------------");
      // console.log(gameID);
      // console.log("Parsed", parsedSets);

      if (
        parsedSets.every((set) =>
          set.every(
            (setItem) =>
              setItem.count <=
              (bag.find((bagItem) => bagItem.colour === setItem.colour)
                ?.count || 0)
          )
        )
      ) {
        sum += parseInt(gameID.split(" ")[1]);
      }
    });

    return sum.toString();
  }

  // Solve Part Two: Convert words to numbers and find the sum of the first and last digits
  solveForPartTwo(input: string): string {
    let sum: number = 0;
    let bag = [
      { count: 12, colour: "red" },
      { count: 14, colour: "blue" },
      { count: 13, colour: "green" },
    ];

    input.split(/\r?\n/).map((line) => {
      // Split each line into the game ID and sets
      // e.g. ['Game 100', ' 6 green, 15 red, 12 blue; 9 red; 16 red; 17 red, 3 blue, 7 green']
      const [gameID, sets] = line.split(":");
      // Split sets into individual set identifiers
      // e.g ['6 green, 15 red, 12 blue', ' 9 red', ' 16 red', ' 17 red, 3 blue, 7 green']
      const setIdentifiers = sets.trim().split(";");
      // Map over each set identifier to parse colors and counts
      const parsedSets = setIdentifiers.map((set) => {
        // Split the set into individual colors
        const colors = set
          .trim()
          .split(",")
          .map((color) => {
            // Split each color into count andcolour
            const [count, colour] = color.trim().split(" ");
            // Return an object representing count andcolour
            return { count: parseInt(count), colour };
          });

        // Return the array of colors for this set
        return colors;
      });

      console.log("------------------------------------------");
      console.log(gameID);
      console.log("Parsed", parsedSets);

      // Need to get the lowest colour count of all sets of each game

      const minCounts: Record<string, number> = {};

      parsedSets.forEach((set) => {
        set.forEach((item, i) => {
          console.log(item.count);
          if (!minCounts[item.colour]) {
            minCounts[item.colour] = item.count;
          } else if (item.count > minCounts[item.colour]) {
            minCounts[item.colour] = item.count;
          } else {
            return minCounts[item.colour];
          }
        });
      });

      console.log("Min", minCounts);

      const setPower = Object.values(minCounts).reduce(
        (acc, colourCount) => acc * colourCount,
        1
      );

      console.log("Set Power", setPower);
      sum += setPower;
      console.log("Running Sum", sum);
    });

    return sum.toString();
  }
}

// Export an instance of the Day1 class
export default new Day1();
