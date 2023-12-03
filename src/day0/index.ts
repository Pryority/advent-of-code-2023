import { Day } from "../day";

class Day0 extends Day {
  constructor() {
    super(0);
  }

  solveForPartOne(input: string): string {
    let sum: number = 0;

    input.split(/\r?\n/).map((line) => {
      const lineArr = line.replace(/[^0-9]/g, "");
      sum =
        sum +
        parseInt(lineArr.split("")[0] + lineArr.split("")[lineArr.length - 1]);
    });

    return sum.toString();
  }

  solveForPartTwo(input: string): string {
    return input;
  }
}

export default new Day0();
