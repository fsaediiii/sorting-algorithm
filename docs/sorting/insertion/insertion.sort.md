# InsertionSort Class

The `InsertionSort` class provides an implementation of the **Insertion Sort** algorithm in TypeScript, using a `Comparator` to handle element comparisons. It allows sorting an array of numbers in ascending order.

## Overview

Insertion Sort is a simple sorting algorithm that builds the final sorted array one element at a time. It is efficient for small data sets and mostly sorted arrays.

The algorithm works by taking one element at a time and inserting it into its correct position in the already sorted portion of the array.

## How it works

1. Start from the second element (index 1) of the array, considering the first element as already sorted.
2. Compare the current element with elements in the sorted portion (to its left).
3. Shift all elements that are greater than the current element one position to the right.
4. Insert the current element into the correct position.
5. Repeat the process for all elements until the entire array is sorted.

### Key Points

- The algorithm maintains two portions in the array: sorted (left) and unsorted (right).
- Each step ensures that the sorted portion remains sorted.
- It is a **stable sorting algorithm**, meaning the relative order of equal elements is preserved.
- Best case: O(n) when the array is already sorted.
- Worst and average case: O(n²).

## Class Structure

- **Constructor**: Initializes a `Comparator` instance to handle element comparisons.
- **sort(array: number[])**: Sorts the given array using insertion sort logic and returns a new sorted array without modifying the original.

## Benefits

- Simple and intuitive algorithm.
- Works well on small arrays or nearly sorted arrays.
- Can be extended with a custom comparator for different sorting criteria.
