## Selection Sort

```c++
void selection(Item a[], size_t left, size_t right) { 
  for (size_t i = left; i < right - 1; ++i) {
		size_t minIndex = i;
		for (size_t j = i + 1; j < right; ++j)
       if (a[j] < a[minIndex])
       minIndex = j;
     if (minIndex != i) swap(a[i], a[minIndex]);
    // this if decides whether swap
    // the only difference between 
    // non-adaptive and adaptive
	} // for
} // selection()
```

### Analysis

Running time

- $(n^2 - n)/2 + (n - 1)$ comparisons
- $n - 1$ swaps worst case, 0 swaps best case if *adaptive*

Memory

- *in place*
- no extra memory needed

Unstable

- Because a smaller element found later might swap a previous one
- Can be stable by:
  - first find the position of the smallest element
  - then copy, shift, insert
  - then need O(n) extra memory