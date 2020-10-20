## Bubble Sort

### Non-adaptive

```c++
void bubble(Item a[], size_t left, size_t right) { 
  for (size_t i = left; i < right - 1; ++i)
		for (size_t j = right - 1; j > i; --j) 
      if (a[j] < a[j - 1])
				swap(a[j - 1], a[j]); 
} // bubble()
```



### Adaptive

make the *outer* for loop more tight.

```c++
void bubble(Item a[], size_t left, size_t right) { 
  for (size_t i = left; i < right - 1; ++i){
    bool swapped = false;
		for (size_t j = right - 1; j > i; --j) {
      if (a[j] < a[j - 1]) {
        swapped = true;
				swap(a[j - 1], a[j]); 
      }
    }
  	if (!swapped)
      break;
} // bubble()
```

#### Analysis

Running time

- O($n^2$)
- Worst case: $n^2/2$ comparisons & swaps
- Average case: $n^2/2$ comparisons & swaps 
- Best case: n comparisons & no swaps
- *Sensitive to input*

Memory

- *in place*
- no extra memory needed

Stable