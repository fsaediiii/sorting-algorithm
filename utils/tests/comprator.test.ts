import Comparator from "../comparator.util";

describe("Comparator<number> - basic comparison methods", () => {
  const comparator = new Comparator<number>();

  test("defaultCompare returns 0 when numbers are equal", () => {
    expect(comparator.defaultCompare(5, 5)).toBe(0);
  });

  test("defaultCompare returns -1 when first number is less than second", () => {
    expect(comparator.defaultCompare(2, 5)).toBe(-1);
  });

  test("defaultCompare returns 1 when first number is greater than second", () => {
    expect(comparator.defaultCompare(7, 3)).toBe(1);
  });

  test("equal() returns true when numbers are equal", () => {
    expect(comparator.equal(5, 5)).toBe(true);
  });

  test("equal() returns false when numbers are not equal", () => {
    expect(comparator.equal(5, 3)).toBe(false);
  });

  test("lessThan() returns true when first < second", () => {
    expect(comparator.lessThan(2, 5)).toBe(true);
  });

  test("lessThan() returns false when first > second", () => {
    expect(comparator.lessThan(5, 2)).toBe(false);
  });

  test("lessThan() returns false when numbers are equal", () => {
    expect(comparator.lessThan(5, 5)).toBe(false);
  });

  test("greaterThan() returns true when first > second", () => {
    expect(comparator.greaterThan(5, 2)).toBe(true);
  });

  test("greaterThan() returns false when first < second", () => {
    expect(comparator.greaterThan(2, 5)).toBe(false);
  });

  test("greaterThan() returns false when numbers are equal", () => {
    expect(comparator.greaterThan(5, 5)).toBe(false);
  });

  test("lessThanOrEqual() returns true when first < second", () => {
    expect(comparator.lessThanOrEqual(2, 5)).toBe(true);
  });

  test("lessThanOrEqual() returns true when numbers are equal", () => {
    expect(comparator.lessThanOrEqual(5, 5)).toBe(true);
  });

  test("lessThanOrEqual() returns false when first > second", () => {
    expect(comparator.lessThanOrEqual(5, 2)).toBe(false);
  });

  test("greaterThanOrEqual() returns true when first > second", () => {
    expect(comparator.greaterThanOrEqual(5, 2)).toBe(true);
  });

  test("greaterThanOrEqual() returns true when numbers are equal", () => {
    expect(comparator.greaterThanOrEqual(5, 5)).toBe(true);
  });

  test("greaterThanOrEqual() returns false when first < second", () => {
    expect(comparator.greaterThanOrEqual(2, 5)).toBe(false);
  });
});

// -------------------------------
// reverse() tests
// -------------------------------

/**
 * Unit tests for reverse() method of Comparator<number>
 *
 * Verifies that comparison results are inverted after calling reverse().
 */
describe("Comparator<number> - reverse()", () => {
  let comparator: Comparator<number>;

  beforeEach(() => {
    comparator = new Comparator<number>();
  });

  test("lessThan before reverse works correctly", () => {
    expect(comparator.lessThan(1, 5)).toBe(true);
    expect(comparator.lessThan(5, 1)).toBe(false);
  });

  test("greaterThan before reverse works correctly", () => {
    expect(comparator.greaterThan(1, 5)).toBe(false);
    expect(comparator.greaterThan(5, 1)).toBe(true);
  });

  test("comparison results are reversed after reverse()", () => {
    comparator.reverse();

    // lessThan is now inverted
    expect(comparator.lessThan(1, 5)).toBe(false);
    expect(comparator.lessThan(5, 1)).toBe(true);

    // greaterThan is now inverted
    expect(comparator.greaterThan(1, 5)).toBe(true);
    expect(comparator.greaterThan(5, 1)).toBe(false);

    // equal() should remain unchanged
    expect(comparator.equal(3, 3)).toBe(true);

    // lessThanOrEqual and greaterThanOrEqual also inverted
    expect(comparator.lessThanOrEqual(1, 5)).toBe(false);
    expect(comparator.greaterThanOrEqual(1, 5)).toBe(true);
  });
});

// -------------------------------
// constructor() tests
// -------------------------------

/**
 * Unit tests for Comparator constructor
 *
 * Verifies that:
 * - defaultCompare is used when no compare function is provided
 * - custom compare function is used when provided
 */
describe("Comparator<number> - constructor", () => {
  test("uses defaultCompare when no compare function is provided", () => {
    const comparator = new Comparator<number>();

    // defaultCompare behavior
    expect(comparator.equal(5, 5)).toBe(true);
    expect(comparator.lessThan(2, 5)).toBe(true);
    expect(comparator.greaterThan(7, 3)).toBe(true);
  });

  test("uses custom compare function when provided", () => {
    // custom compare function: reverse order
    const reverseCompare = (a: number, b: number) => {
      if (a === b) return 0;
      return a < b ? 1 : -1;
    };

    const comparator = new Comparator<number>(reverseCompare);

    // behavior should follow custom compare function
    expect(comparator.lessThan(2, 5)).toBe(false);
    expect(comparator.greaterThan(2, 5)).toBe(true);
    expect(comparator.equal(3, 3)).toBe(true);
  });
});
