import InsertionSort from "./insertion";

describe("InsertionSort", () => {
  let sorter: InsertionSort;

  beforeEach(() => {
    sorter = new InsertionSort();
  });

  test("should sort an unsorted array in ascending order", () => {
    const input = [5, 3, 2, 4, 1];
    const expected = [1, 2, 3, 4, 5];
    expect(sorter.sort(input)).toEqual(expected);
  });

  test("should handle an already sorted array", () => {
    const input = [1, 2, 3, 4, 5];
    const expected = [1, 2, 3, 4, 5];
    expect(sorter.sort(input)).toEqual(expected);
  });

  test("should handle an array with duplicate numbers", () => {
    const input = [3, 1, 2, 1, 3];
    const expected = [1, 1, 2, 3, 3];
    expect(sorter.sort(input)).toEqual(expected);
  });

  test("should handle an empty array", () => {
    const input: number[] = [];
    const expected: number[] = [];
    expect(sorter.sort(input)).toEqual(expected);
  });
});
