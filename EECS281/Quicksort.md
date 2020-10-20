## Quicksort

### Divide and Conquer

Initially:

```c++
void quicksort(Item a[], size_t left, size_t right) { 
  if (left + 1 >= right)
		return;
	size_t pivot = partition(a, left, right); 
  quicksort(a, left, pivot); 
  // non-tail recursion, need additional stack
	quicksort(a, pivot + 1, right); 
  // tail recursion
}
// quicksort()
```

Improve memory efficiency:

```c++
void quicksort(Item a[], size_t left, size_t right) { 
  if (left + 1 >= right)
		return;
	size_t pivot = partition(a, left, right); 
  if (pivot – left < right – pivot) {
		quicksort(a, left, pivot);
		quicksort(a, pivot + 1, right);
	else {
		quicksort(a, pivot + 1, right);
		quicksort(a, left, pivot);
  }
  // worst-memory requirement: O(logn)
  // since need to store a constant amount of 
  // information for each nested recursive call
}
// quicksort()
```



### Partition

Initially:

```c++
size_t partition(Item a[], size_t left, size_t right) { 
  size_t pivot = --right;
	while (true) {
    while (a[left] < a[pivot])
      ++left;
		while (left < right && a[right - 1] >= a[pivot]) 
    	--right;
		if (left >= right) 
    	break;
		swap(a[left], a[right - 1]); 
  } // while
	swap(a[left], a[pivot]); 
  return left;
}  // partition()
```

Choose pivot at other position, add:

```c++
size_t pivot = left + (right – left) / 2; 
// pivot is middle, also can choose others
swap(a[pivot], a[--right]);
pivot = right;
```

Improve time efficiency:

​	*Pick three elements, take their medians*



### Analysis

Running time

- Worst case: $O(n^2)$ comparisons & swaps
- Average case: $O(n logn)$ comparisons & swaps
- **Best case: $O(n logn)$ comparisons & swaps**
- *Sensitive to input*

Memory

- *in place* <!--though using additional stack memory-->
- $O(logn)$

Unstable



### Addition

1. If pivot selection takes O(n) time instead of O(1), the complexity stays the same, because partition still tikes O(n) time.
2. Can improve quicksort with O(n) median selection?
3. Other improvements include when size is divided to be small, stop and use insertion sort instead.