import Comparator from "../../utils/comparator.util";

export default class BubbleSort {
  private compare: Comparator<number>;

  constructor() {
    this.compare = new Comparator();
  }

  sort(array: number[]): number[] {
    let result = [...array];

    for (let i = 0; i < result.length - 1; i++) {
      for (let j = 0; j < result.length - i - 1; j++) {
        if (this.compare.greaterThan(result[j], result[j + 1])) {
          [result[j], result[j + 1]] = [result[j + 1], result[j]];
        }
      }
    }

    return result;
  }
}
