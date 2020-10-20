## Insertion Sort

![Screen Shot 2020-10-18 at 09.47.43](https://tva1.sinaimg.cn/large/007S8ZIlly1gjvw1oslbuj30xq0p440p.jpg)

### Non-Adaptive

```c++
void insertion(Item a[], size_t left, size_t right) { 
  for (size_t i = left + 1; i < right; ++i)
		for (size_t j = i; j > left; --j) 
      if (a[j] < a[j - 1])
				swap(a[j - 1], a[j]); 
} // insertion()
```

#### Analysis

Running time

- worst case: $n^2/2$ comparisons & swaps 
- average case: $n^2/4$ comparisons & swaps 
- Only slightly sensitive to input: always comparing, sometimes swapping

#### Improvement 1

- Change swap to copy
- Break as soon as the first copy can happen

#### Improvement 2

- Change the inner for loop to while

```c++
void insertion(Item a[], size_t left, size_t right) { 
  for (size_t i = left + 1; i < right; ++i)
    Item v = a[i]; size_t j = i;
		while ((j > left) && (v < a[j - 1])) {
      a[j] = a[j - 1];
      j--;
    }
  	a[j] = v;
	}
} // insertion()
```

#### Improvement 3

- Avoid too much checking of `j > left`



### Adaptive

```c++
void insertion(Item a[], size_t left, size_t right) {
	for (size_t i = right - 1; i > left; --i) 
    // find min item
		if (a[i] < a[i - 1]) 
      swap(a[i - 1], a[i]);
  
  for (size_t i = left + 2; i < right; ++i) {
		Item v = a[i]; size_t j = i; 
    while (v < a[j - 1]) {
			a[j] = a[j - 1]; --j;
		} // while
    a[j] = v;
  }  // for i
}  // insertion()
```

#### Analysis

Running time

- O($n^2$)
- Worst case: $n^2/2$ comparisons & copies
- Average case: $n^2/4$ comparisons & copies 
- Best case: n comparisons & no copies
- *Sensitive to input*

Memory

- *in place*
- O(1)

Stable

#### Addition

1. Binary Insertion search still has worst-case complexity O($n^2$) since still need "*copy*" or "*swap*" (for arrays)
2. No actual random access of elements needed, can be complemented using *doubly-linked list* without making the running time complexity worse.

