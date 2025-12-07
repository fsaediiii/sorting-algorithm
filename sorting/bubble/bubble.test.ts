import BubbleSort from "./bubble";

describe("BubbleSort", () => {
  let sorter: BubbleSort;

  beforeEach(() => {
    sorter = new BubbleSort();
  });

  test("sorts an array of numbers in ascending order", () => {
    const input = [4, 5, 2, 1, 6, 3, 7];
    const expected = [1, 2, 3, 4, 5, 6, 7];
    expect(sorter.sort(input)).toEqual(expected);
  });

  test("works with repeated numbers", () => {
    const input = [3, 1, 2, 3, 1];
    const expected = [1, 1, 2, 3, 3];
    expect(sorter.sort(input)).toEqual(expected);
  });

  test("returns an empty array when input is empty", () => {
    expect(sorter.sort([])).toEqual([]);
  });

  test("returns a single element array as is", () => {
    expect(sorter.sort([42])).toEqual([42]);
  });
});
