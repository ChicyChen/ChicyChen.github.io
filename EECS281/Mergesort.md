## Mergesort

### Top-down

```c++
void merge_sort(Item a[], size_t left, size_t right) {
	if (right < left + 2) // base case: < 2 items
		return;
	size_t mid = left + (right - left) / 2;
	merge_sort(a, left, mid); // [left, mid)
  // non-tail, O(logn) extra memory for stack
	merge_sort(a, mid, right); // [mid, right)
  // non-tail, O(logn) extra memory for stack
	merge(a, left, mid, right);
  // O(n) extra memory
  // totally O(logn) + O(n) = O(n)
} // merge_sort()
```

```c++
void merge(Item a[], size_t left, size_t mid, size_t right){ 
  size_t n = right - left;
	vector<Item> c(n);
  // not in place, O(n) extra memory
  
	for (size_t i = left, j = mid, k = 0; k < n; ++k) { 
    if (i == mid)
      c[k] = a[j++];
    else if (j == right)
      c[k] = a[i++];
    else
      c[k] = (a[i] <= a[j]) ? a[i++] : a[j++];
  }  // for
  
  copy(c.begin(), c.end(), &a[left]); 
} // merge()
// O(n) time complexity for best, worst, average cases
```

### Analysis

Running time

- Worst case: $O(n logn)$ comparisons & copies
- Average case: $O(n logn)$ comparisons & copies
- **Best case: $O(n logn)$ comparisons & copies**
- *Insensitive to input*

Memory

- *not in place* 
- $O(n)$

Stable

Good for linked list!

### Bottom-up

```c++
void merge_sortBU(Item a[], size_t left, size_t right) { 
  // totally O(logn) outer for loop
  for (size_t size = 1; size <= right - left; size *= 2)
    // number of inner for loop differ with
    // different value of size, but generally 
    // moves O(n) items in total
		for (size_t i = left; i <= right - size; i += 2 * size)
      merge(a, i, i + size, min(i + 2 * size, right));
} // merge_sortBU()
// total time complexity still O(nlogn) in three cases
// total etra memory needed still O(n), but saves O(logn)
// memory usage for recursive call stack
```

