## Complexity Analysis

### Master Theorem

$$
T(n)=aT(\frac{n}{b})+f(n)
$$

$$
T(1)=c_0 \text{  or  } T(0) = c_0
$$

Then:
$$
T(n) = \Theta(n^{log_ba}) \quad \text{ if } a > b^c
$$

$$
T(n) = \Theta(n^{c}logn) \quad \text{ if } a = b^c
$$

$$
T(n) = \Theta(n^{c}) \quad \text{ if } a < b^c
$$

If:
$$
f(n) \in \Theta(n^{log_ba}log^kn) \text{ for some } k \geq 0
$$
Then:
$$
f(n) \in \Theta(n^{log_ba}log^{k+1}n)
$$
