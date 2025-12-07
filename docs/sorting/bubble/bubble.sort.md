# BubbleSort Class

The `BubbleSort` class provides an implementation of the **Bubble Sort** algorithm in TypeScript, using a `Comparator` to handle element comparisons. It allows sorting an array of numbers in ascending order.

## How It Works (Theory)

Bubble Sort is a simple comparison-based sorting algorithm. It repeatedly steps through the array, compares adjacent elements, and swaps them if they are in the wrong order. The key points of its execution are:

1. **Multiple Passes**  
   The algorithm makes multiple passes through the array. In each pass, it compares adjacent elements from the beginning to the end of the unsorted portion of the array.

2. **Adjacent Comparisons**  
   During each pass, each element is compared with its immediate neighbor. If the elements are in the wrong order, they are swapped to move the larger element towards the end.

3. **"Bubbling" Effect**  
   With every pass, the largest unsorted element moves to its correct position at the end of the array. This gives the algorithm its name "Bubble Sort".

4. **Progressive Reduction**  
   After each pass, the sorted portion at the end of the array grows, reducing the number of comparisons needed in subsequent passes.

5. **Optional Early Termination**  
   If a pass completes without any swaps, the algorithm can terminate early because the array is already sorted.

6. **Final Result**  
   After all necessary passes, the array becomes fully sorted in ascending order.

This algorithm is simple to implement and understand, but it is less efficient on large datasets compared to more advanced sorting algorithms due to its O(n²) time complexity in the average and worst cases.
