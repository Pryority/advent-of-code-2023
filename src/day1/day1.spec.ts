import day1 from "./index";
import fs from "fs";
const ip1 = fs.readFileSync("inputs/day1/part1.txt", "utf-8");

describe("On Day 1", () => {
  it(`part1 is identity function`, () => {
    expect(day1.solveForPartOne(ip1)).toBe("2164");
  });
  it(`part2 is identity function`, () => {
    // 2918 is too LOW
    // 5836 is too LOW?
    expect(day1.solveForPartTwo(ip1)).toBe("54431");
  });
});
