/**
 * Comparator class to compare two values of type T.
 *
 * Provides methods to check equality, less than, greater than, etc.
 *
 * @template T - Type of values to compare
 */

export default class Comparator<T extends string | number> {
  private compare: (a: T, b: T) => number;

  /**
   * Creates a new Comparator instance.
   *
   * @param {function(a: T, b: T): number} [compareFunction] - Optional custom compare function.
   * If not provided, a default compare function is used (works for numbers and strings).
   */
  constructor(compareFunction?: (a: T, b: T) => number) {
    this.compare = compareFunction || this.defaultCompare;
  }

  /**
   * Default compare function for numbers or strings.
   *
   * Compares two values and returns:
   *  - 0 if they are equal
   *  - -1 if the first value is less than the second
   *  - 1 if the first value is greater than the second
   *
   * @param {T} a - The first value to compare.
   * @param {T} b - The second value to compare.
   * @returns {number} 0 if equal, -1 if a < b, 1 if a > b.
   */
  defaultCompare(a: T, b: T): number {
    if (a === b) return 0;
    if (a < b) return -1;
    return 1;
  }

  /**
   * Checks whether two values are considered equal by the comparator.
   *
   * @param {T} a - The first value to compare.
   * @param {T} b - The second value to compare.
   * @returns {boolean} Returns `true` if comparator returns 0 (meaning equal).
   */
  equal(a: T, b: T): boolean {
    return this.compare(a, b) === 0;
  }

  /**
   * Checks if the first value is less than the second value.
   *
   * @param {T} a - The first value to compare.
   * @param {T} b - The second value to compare.
   * @returns {boolean} True if `a` is less than `b`, otherwise false.
   */
  lessThan(a: T, b: T): boolean {
    return this.compare(a, b) < 0;
  }

  /**
   * Checks if the first value is greater than the second value.
   *
   * @param {T} a - The first value to compare.
   * @param {T} b - The second value to compare.
   * @returns {boolean} True if `a` is greater than `b`, otherwise false.
   */
  greaterThan(a: T, b: T): boolean {
    return this.compare(a, b) > 0;
  }

  /**
   * Checks if the first value is less than or equal to the second value.
   *
   * @param {T} a - The first value to compare.
   * @param {T} b - The second value to compare.
   * @returns {boolean} True if `a` is less than or equal to `b`, otherwise false.
   */
  lessThanOrEqual(a: T, b: T): boolean {
    return this.compare(a, b) <= 0;
  }

  /**
   * Checks if the first value is greater than or equal to the second value.
   *
   * @param {T} a - The first value to compare.
   * @param {T} b - The second value to compare.
   * @returns {boolean} True if `a` is greater than or equal to `b`, otherwise false.
   */
  greaterThanOrEqual(a: T, b: T): boolean {
    return this.compare(a, b) >= 0;
  }

  /**
   * Reverses the comparison order of the comparator.
   * After calling this method, `lessThan` and `greaterThan` will swap behavior.
   */
  reverse(): void {
    const originalCompare = this.compare;
    this.compare = (a: T, b: T) => originalCompare(b, a);
  }
}
