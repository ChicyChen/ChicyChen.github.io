## Heapsort

```c++
 void heapsort(Item heap[], int n) {
   heapify(heap, n);
   for (int i = n; i >= 2; --i) {
     swap(heap[i], heap[1]);
     fixDown(heap, i - 1, 1);
   }
 }
```

### Analysis

Running time

- Heapify O(n)
  - Bottom-up fixDown()
  - $\frac{n}{2} \cdot 0 + \frac{n}{4} \cdot 1 + \dots + 1 \cdot log n = O(n)$
- For loop O(nlogn)
  - "Top-down" fixDown(), always fix the root
  - $\frac{n}{2} \cdot logn + \frac{n}{4} \cdot (logn - 1) + \dots + 1 \cdot 0 = O(nlogn)$
- Total $O(nlogn)$ -- best, worst, average case
- *Insensitive to input*

Memory

- *in place*
- no extra memory needed

Unstable



## Heapify

1. Proceed from bottom to top, using fixDown()

   ```c++
   void heapify(Item heap[], int n) {
      for (int i = n / 2; i > 1; --i) {
        fixDown(heap, i, 1);
      }
    }// O(n)
   ```

2. Proceed from top to bottom, using fixUp()

   ```c++
   void heapify(Item heap[], int n) {
      for (int i = 1; i <= n; ++i) {
        fixUp(heap, i);
      }
    }// O(n)
   ```



## Heaps

Completeness

Heap-ordering

```c++
void fixUp(Item heap[], int k) {
  while (k > 1 && heap[k / 2] < heap[k]) {
    swap(heap[k], heap[k / 2]);
    k /= 2;  // move up to parent
  } // while
} // O(logn)
```

```c++
Void fixDown(Item heap[], int heapsize, int k) {
  while (2 * k <= heapsize) {
    int j = 2 * k; // start with left child
		if (j < heapsize && heap[j] < heap[j + 1]) ++j; 
    if (heap[k] >= heap[j]) break; // heap restored 
    swap(heap[k], heap[j]);
		k = j; // move down
  }// while
} // O(logn)
```



## Priority Queue by Heap

```c++
void push(Item newItem) {
	heap[++heapsize] = newItem;
	fixUp(heap, heapsize);
} // push()
```

```c++
void pop() {
	heap[1] = heap[heapsize--];
	fixDown(heap, heapsize, 1);
} // pop()
```

