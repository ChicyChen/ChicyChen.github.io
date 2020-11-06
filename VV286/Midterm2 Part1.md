---
typora-copy-images-to: upload
---

@Chen Siyi

November 6, 2020

# Midterm2 Part1

[TOC]

## Conponents in the Complex Plane

### Points in the Complex Plane

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1ttypzfj316o0u0abx.jpg" alt="Screen Shot 2020-10-19 at 11.21.20" style="zoom:25%;" />

- For a given $z ∈ \mathbb{C}$ and $ε > 0$, the set 

  $B_ε(z)=${$w ∈ \mathbb{C}$ | $|w − z| < ε$},

   is called an $ε- \text{neighborhood}$ of $z$;

  $B_ε(z)=${$w ∈ \mathbb{C}$ | $ 0 < |w − z| < ε$},

   is called an $ε- \text{deleted neighborhood}$ of $z$.

- A point $z_0$ is an ***interior point*** of set $S ⊂ \mathbb{C}$ if there is some $ε$ neighborhood of $z_0$ which is a subset of $S$.

- A point $z_0$ is an ***exterior point*** of a set $S ⊂ \mathbb{C}$ if there is some $ε$ neighborhood of $z_0$ containing no points of $S$ (i.e., disjoint from $S$).

- A point $z_0$ is a ***boundary point*** of set $S ⊂ \mathbb{C}$ if it is neither an interior point nor an exterior point of $S$.

- A point $z_0$ is an ***accumulation point*** of set S ⊂ C if *each* deleted neighborhood of $z_0$ contains at least one point of $S$.

### Sets of Points in the Complex Plane

- A set $Ω⊂\mathbb{C}$ is called ***open*** if for every $z∈Ω$ there exists an $ε>0$ such that $B_ε(z)=${$w ∈ \mathbb{C}$ | $|w − z| < ε$} $⊂ Ω$. A set is called ***closed*** if its complement is open.

- A set $Ω⊂\mathbb{C}$ is called ***bounded*** if $Ω⊂B_R(0)$ for some $R>0$.

- A set $K ⊂ \mathbb{C}$ is called ***compact*** if every sequence in $K$ has a subsequence that converges in $K$ . A set $K ⊂ \mathbb{C}$ is compact if and only if it is *closed* and *bounded*.

- An open (closed) set $Ω ⊂ \mathbb{C}$ is called ***disconnected*** if there exist two open (closed) sets $Ω_1$, $Ω_2 ⊂ \mathbb{C}$ such that $Ω_1 ∩ Ω_2 = ∅$ and $Ω = Ω_1 ∪ Ω_2$. 

- If $Ω$ is not disconnected, $Ω$ is called ***connected***. A set $Ω ⊂ \mathbb{C}$ is connected if and only if for any two points in $Ω$ there exists a curve joining them.

- An *open* and *connected* set is called a ***domain***, or ***region***.

- Define the ***diameter*** of a set  $Ω ⊂ \mathbb{C}$ by
  $$
  \operatorname{diam}(\Omega):=\sup _{z, w \in \Omega}|z-w|
  $$

### Functions in the Complex Plane


$$
f: \mathbb{C} \rightarrow \mathbb{C}, \quad f(x+i y)=u(x, y)+i v(x, y)
$$



## Holomorphic Functions

### Definition of Holomorphic

We say that a function $f : \mathbb{C} → \mathbb{C}$ is ***complex differentiable***, or ***holomorphic***, at $z ∈ \mathbb{C}$ if
$$
f^{\prime}(z):=\lim _{h \rightarrow 0 \atop h \in \mathbb{C}} \frac{f(z+h)-f(z)}{h}
$$
A function is holomorphic on an open set $Ω ⊂ \mathbb{C}$ if it is holomorphic at every $z ∈ Ω$. A function that is holomorphic on $\mathbb{C}$ is called ***entire***.

### The Cauchy-Riemann Differential Equations

1. If $f$ is ***holomorphic***, then the Cauchy-Riemann equations is satisfied:

$$
\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}
$$

2. And suppose that ***the partial derivatives of u and v exist***, are ***continuous*** and ***satisfy the Cauchy-Riemann equations***. Then *f* is ***holomorphic***.

------

3. Define two operators:

$$
\frac{\partial}{\partial z}:=\frac{1}{2}\left(\frac{\partial}{\partial x}+\frac{1}{i} \frac{\partial}{\partial y}\right), \quad \frac{\partial}{\partial \bar{z}}:=\frac{1}{2}\left(\frac{\partial}{\partial x}-\frac{1}{i} \frac{\partial}{\partial y}\right)
$$

​       If $f$ is ***holomorphic***, then
$$
f^{\prime}(z)=\frac{\partial f}{\partial z}=\frac{\partial u}{\partial z}+i\frac{\partial v}{\partial z}=2 \frac{\partial u}{\partial z} \quad \text { and } \quad \frac{\partial f}{\partial \bar{z}}=0
$$

### Power Series

The power series 
$$
f(z)=\sum_{n=0}^{\infty} a_{n} z^{n}
$$
defines a ***holomorphic*** function in its ***disc of convergence***. The (complex) ***derivative*** of f is also a power series ***having the same radius of convergence*** as f, that is,
$$
f^{\prime}(z)=\sum_{n=1}^{\infty} n a_{n} z^{n-1}
$$
A ***power series*** is ***infinitely complex differentiable*** in its disc of convergence, and the higher derivatives are also power series obtained by termwise differentiation.



## Analytic Functions

### Definition of Analytic

A function $f$ defined on an open set $Ω ⊂ \mathbb{C}$ is said to be analytic (or have a power series expansion) at a point $z_0 ∈ Ω$ if there exists a power series *centered at $z_0$*, with *positive* radius of convergence, such that
$$
f(z)=\sum_{n=0}^{\infty} a_{n}\left(z-z_{0}\right)^{n}
$$
for all $z$ in a neighborhood of $z_0$. If f has a power series expansion at every point in $Ω$, we say that $f$ is analytic on $Ω$.

- **Useful Remark:** The exponential, sine and cosine functions are (by our definition) analytic at 0 and have an infinite radius of convergence. They are automatically defined for all complex numbers.

### Holomorphic Functions are Analytic

Suppose $f$ is a holomorphic function in an open set $Ω$. If $D$ is an open disc centered at $z_0$ and whose closure is contained in $Ω$, then f has a power series expansion at $z_0$
$$
f(z)=\sum_{n=0}^{\infty} a_{n}\left(z-z_{0}\right)^{n}
$$
for all $z ∈ D$ and the coefficients are given by
$$
a_{n}=\frac{f^{(n)}\left(z_{0}\right)}{n !}, \quad n \in \mathbb{N}
$$



## Complex Integrals

### Definition

- A ***parametrized curve*** is a set $\mathcal{C} ⊂ \mathbb{C}$ such that there exists a parametrization
  $$
  \gamma: I \rightarrow \mathcal{C}
  $$
  for some interval I → C, where γ is locally injective. We will say that C is smooth if there exists a parametrization γ that is differentiable with $γ′(t) \neq 0$ for all $t ∈ I$.

  Understand simply, $\gamma$ is parametrizing the "position":
  $$
  \gamma(t)=x(t)+i y(t)
  $$
  Positively and negatively ***oriented***: parametrized in a counter-clockwise and clockwise fashion, respectively.

- Let $Ω ⊂ \mathbb{C}$ be an open set, $f$ holomorphic on $Ω$ and $\mathcal{C^∗} ⊂ Ω$ an oriented smooth curve. We then define the ***integral*** of $f$ along $\mathcal{C^∗}$ by

$$
\int_{\mathcal{C}^{*}} f(z) d z:=\int_{I} f(\gamma(t)) \cdot \gamma^{\prime}(t) d t=\int_{I} [u(\gamma(t))+i v(\gamma(t))] \cdot \gamma^{\prime}(t) d t
$$

> Though the most basic definition should be in the below form, sometimes useful for calculation.
> $$
> \int_{C} f(z) d z=\int_{C}(u(x,y)+\mathrm{i} v(x,y))(d x+\mathrm{i} d y)=\int_{C}(u(x,y) d x-v(x,y) d y)+\mathrm{i} \int_{C}(v(x,y) d x+u(x,y) d y)
> $$

- Define the ***curve length*** as
  $$
  \ell(\mathcal{C}):=\left|\int_{\mathcal{C}} d z\right|
  $$

### Basic Property

- Oriented: 
  $$
  \int_{-\mathcal{C}^{*}} f(z) d z=-\int_{\mathcal{C}^{*}} f(z) d z
  $$

- Triangular inequality for integrals:
  $$
  \left|\int_{\mathcal{C}^{*}} f(z) d z\right| \leq \int_{\mathcal{C}^{*}} \left|f(z)\right| d z
  $$
  \* Triangular inequality:
  $$
  \left| z_1 \right| - \left| z_2 \right| \leq \left| z_1 + z_2 \right| \leq \left| z_1 \right| + \left| z_2 \right|
  $$

- Upper bound:
  $$
  \left|\int_{\mathcal{C}^{*}} f(z) d z\right| \leq \ell(\mathcal{C}) \cdot \sup _{z \in \mathcal{C}}|f(z)|
  $$





> **Question**
>
> Evaluate the integral along two different paths:
>
> 1. The line segment with initial point −1 and final point i; 
> 2. The arc of the unit circle $Im z ≥ 0$ with initial point −1 and final point i. 

$$
\int_{C} |z|^2 d z
$$

------

> **Answer**









## Cauchy's Integral Theorem

### Primitive / Independent of Path

If a continuous function f has a ***primitive*** $F$ in $Ω$, and $\mathcal{C^∗}$ is any curve in $Ω$ that begins at $w_1$ and ends at $w_2$, then
$$
\int_{\mathcal{C}^{*}} f(z) d z=F\left(w_{2}\right)-F\left(w_{1}\right)
$$
This is equivalent to
$$
\oint_{\mathcal{C}} f(z) d z=0
$$

> A holomorphic function $f$ defined in a region $\Omega$ may not always have a primitive. Recall $f(z) = 1/z$.
>
> One way to judge the existence of primitive $F$ is analyzing the region $\Omega$ where the function $f$ is defined.

### Cauchy's Integral Theorem

Let $U$ be an open subset of $\mathbb {C}$  which is ***simply connected***, let $f:U\to \mathbb {C} $ be a ***holomorphic*** function, for any closed curve $\mathcal{C}$ in $U$
$$
\oint_{\mathcal{C}} f(z) d z=0
$$

### Specific Cases of Cauchy's Integral Theorem

- Goursat’s Theorem:

  Let $Ω ⊂ \mathbb{C}$ be open and $f$ ***holomorphic*** on $Ω$. Let $T ⊂ Ω$ be a ***triangle*** whose ***interior*** is also contained in $Ω$. Then
  $$
  \oint_{T} f(z) d z=0
  $$

- Corollary:

  If $f$ is ***holomorphic*** in an open set Ω that contains a ***rectangle*** R and its ***interior***, then
  $$
  \oint_{R} f(z) d z=0
  $$

- Cauchy’s Theorem:

  If $f$ is ***holomorphic*** in a ***disc***, then for any closed curve $\mathcal{C}$ in that disc.
  $$
  \oint_{\mathcal{C}} f(z) d z=0
  $$


- Corollary:

  Suppose $f$ is ***holomorphic*** in an open set $Ω ⊂ \mathbb{C}$ containing a ***circle*** $\mathcal{C_0}$ and its ***interior***. Then

$$
\oint_{C_0} f(z) d z=0
$$

- <u>**Toy Contours:**</u>

  Suppose $f$ is ***holomorphic*** in an open set $Ω ⊂ \mathbb{C}$ containing a ***toy contour*** and its ***interior***. Then

  <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1tux68uj30zg0u0jtt.jpg" alt="Screen Shot 2020-10-19 at 15.45.32" style="zoom:35%;" />

  Simply means: If $f$ is ***holomorphic*** in a ***contour***, then for any closed curve $\mathcal{C}$ in that contour (usually we simply choose the boundary of the contour):
  $$
  \oint_{c} f(z) d z=0
  $$



> **Comment on a special case:**

------

***All $z^n$ has a primitive except for the case where $n = -1$.***
$$
\oint_{S^{1}} \frac{d z}{z}=\int_{0}^{2 \pi} \frac{i e^{i t}}{e^{i t}} d t=2 \pi i \neq 0
$$

$$
\begin{aligned}
\oint_{S^{1}} \frac{d z}{z^{n}} &=\int_{0}^{2 \pi} \frac{i e^{i t}}{e^{n i t}} d t=i \int_{0}^{2 \pi} e^{(1-n) i t} d t \\
&=i \int_{0}^{2 \pi}(\cos ((n-1) t)-i \sin ((n-1) t)) d t=0
\end{aligned}
$$



## Jordan’s Lemma

Assume that for some $R_0 > 0$ the function $g: \mathbb{C} \backslash \overline{B_{R_{0}}(0)}→\mathbb{C}$ is ***holomorphic***. Let
$$
f(z)=e^{i a z} g(z), \quad \text { for some } a>0
$$
Let
$$
C_{R}=\left\{z \in \mathbb{C}: z=R \cdot e^{i \theta}, 0 \leq \theta \leq \pi\right\}
$$
be a <u>***semi-circle***</u> segment <u>***centered at the origin***</u> in the ***<u>upper half-plane</u>*** and assume that
$$
\sup _{0 \leq \theta \leq \pi}\left|g\left(R e^{i \theta}\right)\right| \stackrel{R \rightarrow \infty}{\longrightarrow} 0
$$
Then
$$
\lim _{R \rightarrow \infty} \int_{C_{R}} f(z) d z=0
$$




## Cauchy Integral Formulas

Suppose $f$ is a ***holomorphic*** function in an open set $Ω ⊂ \mathbb{C}$. If $D$ is an open ***disc*** whose boundary is contained in $Ω$, then
$$
f(z)=\frac{1}{2 \pi i} \oint_{C} \frac{f(\zeta)}{\zeta-z} d \zeta \quad \text { for all } z \in D
$$
where $ C = ∂D$ is the (***positively oriented***) boundary circle of D.

- The values of a holomorphic function within a disc are fixed by the values of the function on the boundary

- Cauchy’s integral formula is also valid for all of our toy contours.

  The reason is actually Cauchy Integral Formulas has a more general way to throw it:

  Suppose $\mathcal{C}$ is a ***simple closed*** curve and the function $f(z)$ is  ***holomorphic*** on a region ***containing*** $\mathcal{C}$ and its ***interior***. We assume $\mathcal{C}$ is oriented ***counterclockwise***. Then for any $z_0$ inside $\mathcal{C}$, the integral formula holds. (<u>How do you understand it?</u>)

  <img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkfhqexjihj30im0emaah.jpg" alt="Screen Shot 2020-11-06 at 15.35.49" style="zoom: 50%;" />

**Corollary:**

If $f$ is a ***holomorphic*** function in an open set $Ω ⊂ \mathbb{C}$, then $f$ has infinitely many complex derivatives in $Ω$. Moreover, if $D$ is an open disc whose boundary is contained in $Ω$,
$$
f^{(n)}(z)=\frac{n !}{2 \pi i} \oint_{C} \frac{f(\zeta)}{(\zeta-z)^{n+1}} d \zeta \quad \text { for all } z \in D
$$
where $C = ∂D$ is the (***positively oriented***) boundary circle of $D$.



> **Question**
>
> Compute $\int_{C} \frac{1}{\left(z^{2}+4\right)^{2}} d z$ over the contour shown (using Cauchy's integral formula):
>
> <img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkfhv7l3ayj30kc0me0tx.jpg" alt="Screen Shot 2020-11-06 at 15.40.51" style="zoom: 50%;" />

------

> **Answer**
>
> 







## Evaluate Real Integrations

- ***Extend*** the real domain to complex domain
  - If only containing x, always directly extend to z
  - If containning sinx, cosx, always extend to $e^{iz}$
- ***Find*** ***poles*** for the function$ f(z)$
- ***Decide the*** ***contour*** and the ***branch*** if needed
  - Semicircle and Indented Semicircle
  - Circle with Keyholes
  - Multiple Kehole
  - Square
- ***Obtain the complex integral*** along the whole contour using theorems or formula
  - <u>**Cauchy’s integral theorem**</u> (no poles contained)
  - Cauchy’s integral formula (one or two poles, not very complicatied)
  - <u>**The Residue Theorem**</u> (one pole or multiple poles)
- Except for the integral part we need, ***solve or vanish other parts*** one by one
  - May need to use ***Jordan’s Lemma*** to prove vanishing
  - May need to use ***triangular inequality*** and ***triangular inequality*** for integrals to prove vanishing

> **Question**
>
> Compute  the real integral 
> $$
> I=\int_{-\infty}^{\infty} \frac{1}{\left(x^{2}+1\right)^{2}} d x
> $$

------

> **Answer**
>
> <img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkfi9p01y5j30u80dowfh.jpg" alt="Screen Shot 2020-11-06 at 15.54.45" style="zoom:40%;" />









## Additional Exercise

> **\*Question**
>
> Compute $\int_{C} \frac{z}{\left(z^{2}+4\right)^{2}} d z$ over the contour shown (using cauchy's integral formula):
>
> <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkfi06jc07j30hs0go3zh.jpg" alt="Screen Shot 2020-11-06 at 15.45.36" style="zoom:50%;" />

------

> **Answer**
>
> Hint: 
>
> Apply piecewise integration.
>
> And you can use the residue theorem... (coming soon)
>
> <img src="https://tva1.sinaimg.cn/large/0081Kckwgy1gkfi184jdrj30n20kk402.jpg" alt="Screen Shot 2020-11-06 at 15.46.37" style="zoom:40%;" />