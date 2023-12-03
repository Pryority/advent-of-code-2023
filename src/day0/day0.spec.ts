import day0 from "./index";
import fs from "fs";
const ip1 = fs.readFileSync("inputs/day0/part1.txt", "utf-8");

describe("On Day 0", () => {
  it(`part1 is identity function`, () => {
    expect(day0.solveForPartOne(ip1)).toBe("55477");
  });
});
