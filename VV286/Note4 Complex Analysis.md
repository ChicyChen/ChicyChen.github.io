---
typora-copy-images-to: upload
---

@Chen Siyi

October 19, 2020

# Note4 Complex Analysis

[TOC]



## Points in the Complex Plane

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1ttypzfj316o0u0abx.jpg" alt="Screen Shot 2020-10-19 at 11.21.20" style="zoom:25%;" />

- For a given $z ∈ \mathbb{C}$ and $ε > 0$, the set 

  $B_ε(z)=${$w ∈ \mathbb{C}$ | $|w − z| < ε$},

   is called an $ε- \text{neighborhood}$ of $z$;

  $B_ε(z)=${$w ∈ \mathbb{C}$ | $ 0 < |w − z| < ε$},

   is called an $ε- \text{deleted neighborhood}$ of $z$.

- A point $z_0$ is an ***interior point*** of set $S ⊂ \mathbb{C}$ if there is some $ε$ neighborhood of $z_0$ which is a subset of $S$.

- A point $z_0$ is an ***exterior point*** of a set $S ⊂ \mathbb{C}$ if there is some $ε$ neighborhood of $z_0$ containing no points of $S$ (i.e., disjoint from $S$).

-  A point $z_0$ is a ***boundary point*** of set $S ⊂ \mathbb{C}$ if it is neither an interior point nor an exterior point of $S$.

- A point $z_0$ is an ***accumulation point*** of set S ⊂ C if *each* deleted neighborhood of $z_0$ contains at least one point of $S$.

> ###### Question1
>
> ###### Find the set of interior points, boundary points, accumulation points, and isolated points for:

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1tubkloj30uu0im757.jpg" alt="Screen Shot 2020-10-19 at 10.11.50" style="zoom:40%;" />

------

> ###### Answer1









## Sets of Points in the Complex Plane

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

> **Question2**
>
> Give a set which is open and closed.
>
> Give a set which is closed and unbounded. 

------

> **Answer2**







> **Question3**
>
> Is the set  $U = \{ Z\in \mathbb{C}:2<|z|\leq 3\}$ open or closed?

------

> **Answer3**









## Functions in the Complex Plane


$$
f: \mathbb{C} \rightarrow \mathbb{C}, \quad f(x+i y)=u(x, y)+i v(x, y)
$$


- Differentiable / holomorphic
- Analytic



## Complex Differentiability

### Definition of Holomorphic

We say that a function $f : \mathbb{C} → \mathbb{C}$ is ***complex differentiable***, or ***holomorphic***, at $z ∈ \mathbb{C}$ if
$$
f^{\prime}(z):=\lim _{h \rightarrow 0 \atop h \in \mathbb{C}} \frac{f(z+h)-f(z)}{h}
$$
A function is holomorphic on an open set $Ω ⊂ \mathbb{C}$ if it is holomorphic at every $z ∈ Ω$. A function that is holomorphic on $\mathbb{C}$ is called ***entire***.

### Decide Holomorphic

#### The Cauchy-Riemann Differential Equations

If $f$ is ***holomorphic***, then 
$$
\frac{\partial u}{\partial x}=\frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x}
$$
And suppose that *the partial derivatives of u and v exist*, are *continuous* and *satisfy the Cauchy-Riemann equations*. Then *f* is ***holomorphic***.

<!--This is obtained base on f'(z) should be the same viewed from any directions-->

#### A Second look

Define two operators:
$$
\frac{\partial}{\partial z}:=\frac{1}{2}\left(\frac{\partial}{\partial x}+\frac{1}{i} \frac{\partial}{\partial y}\right), \quad \frac{\partial}{\partial \bar{z}}:=\frac{1}{2}\left(\frac{\partial}{\partial x}-\frac{1}{i} \frac{\partial}{\partial y}\right)
$$
<!--Though to calculate, you don't always need to split in this way.-->

<!--For example: think about f(Z)=Z.-->

If $f$ is ***holomorphic***, then
$$
f^{\prime}(z)=\frac{\partial f}{\partial z}=\frac{\partial u}{\partial z}+i\frac{\partial v}{\partial z}=2 \frac{\partial u}{\partial z} \quad \text { and } \quad \frac{\partial f}{\partial \bar{z}}=0
$$

> ###### Question4
>
> ###### Decide whether the complex variable function f is differentiable:

$$
f(x, y)=\frac{x-1-i y}{(x-1)^{2}+y^{2}}
$$

------

> ###### Answer4
>
> ###### Hint: In addition to the obvious way, can you prove by the substitutions $x=\frac{z+\bar{z}}{2} \quad$ and $\quad y=\frac{z-\bar{z}}{2 i}$ ?









#### A Third Look

Define $u(x, y)$ to be a ***harmonic function*** if:
$$
\Delta u=u_{xx}+u_{yy}=\frac{\partial^{2} u}{\partial x^{2}}+\frac{\partial^{2} u}{\partial y^{2}}=0
$$
Define $u(x, y)$ and $v(x, y)$ to be a ***harmonic conjugate*** if:
$$
f = u + iv
$$
is differentiable.

If $f$ is ***holomorphic***,  then $u, v$ are ***harmonic***.

#### A Special Case-Power Series

The power series 
$$
f(z)=\sum_{n=0}^{\infty} a_{n} z^{n}
$$
defines a holomorphic function in its disc of convergence. The (complex) derivative of f is also a power series having the same radius of convergence as f, that is,
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

### Analytic and Holomorephic

A holomorphic function is automatically analytic.



## Complex Integrals

### Definition

- A ***parametrized curve*** is a set $\mathcal{C} ⊂ \mathbb{C}$ such that there exists a parametrization
  $$
  \gamma: I \rightarrow \mathcal{C}
  $$
  for some interval I → C, where γ is locally injective. We will say that C is smooth if there exists a parametrization γ that is differentiable with $γ′(t) \neq 0$ for all $t ∈ I$.

  Positively and negatively ***oriented***: parametrized in a counter-clockwise and clockwise fashion, respectively.

- Let $Ω ⊂ \mathbb{C}$ be an open set, $f$ holomorphic on $Ω$ and $\mathcal{C^∗} ⊂ Ω$ an oriented smooth curve. We then define the ***integral*** of $f$ along $\mathcal{C^∗}$ by

$$
\int_{\mathcal{C}^{*}} f(z) d z:=\int_{I} f(\gamma(t)) \cdot \gamma^{\prime}(t) d t=\int_{I} [u(\gamma(t))+i v(\gamma(t))] \cdot \gamma^{\prime}(t) d t
$$

> Though the most basic definition should be in the below form, sometimes useful for calculation.
> $$
> \int_{C} f(z) d z=\int_{C}(u+\mathrm{i} v)(d x+\mathrm{i} d y)=\int_{C}(u d x-v d y)+\mathrm{i} \int_{C}(v d x+u d y)
> $$

- Define the ***curve length*** as
  $$
  \ell(\mathcal{C}):=\left|\int_{\mathcal{C}} d z\right|
  $$

### Basic Property

- $$
  \int_{-\mathcal{C}^{*}} f(z) d z=-\int_{\mathcal{C}^{*}} f(z) d z
  $$

- $$
  \left|\int_{\mathcal{C}^{*}} f(z) d z\right| \leq \ell(\mathcal{C}) \cdot \sup _{z \in \mathcal{C}}|f(z)|
  $$



> **Question5**
>
> Evaluate the integral, where $C$ the line segment with initial point −1 and final point i; or the arc of the unit circle $Im z ≥ 0$ with initial point −1 and final point i. 

$$
\int_{C} |z|^2 d z
$$

------

> **Answer5**









### Independence of Path

If a continuous function f has a ***primitive*** $F$ in $Ω$, and $\mathcal{C^∗}$ is a curve in $Ω$ that begins at $w_1$ and ends at $w_2$, then
$$
\int_{\mathcal{C}^{*}} f(z) d z=F\left(w_{2}\right)-F\left(w_{1}\right)
$$
This is equivalent to
$$
\oint_{\mathcal{C}} f(z) d z=0
$$

> A reminder: Does a horlomorephic function $f$ always have a primitive? Recall $f(z) = 1/z$.
>
> Of course not. A horlomorephic function $f$ defined on an open subset of $\mathbb{C}$ which is also simply connected will have a primitive $F$.

#### Judgement - Basic

- Goursat’s Theorem:

  Let $Ω ⊂ \mathbb{C}$ be open and $f$ ***holomorphic*** on $Ω$. Let $T ⊂ Ω$ be a triangle whose ***interior*** is also contained in $Ω$. Then
  $$
  \oint_{T} f(z) d z=0
  $$

- Corollary:

  If $f$ is ***holomorphic*** in an open set Ω that contains a rectangle R and its ***interior***, then
  $$
  \oint_{R} f(z) d z=0
  $$

- Theorem:

  A ***holomorphic*** function in an ***open disc*** has a ***primitive*** in that disc.

- Cauchy’s Theorem:

  If $f$ is ***holomorphic*** in a ***disc***, then for any closed curve $\mathcal{C}$ in that disc.
  $$
  \oint_{\mathcal{C}} f(z) d z=0
  $$

- **Cauchy's Integral Theorem*:**

  Let $U$ be an open subset of $\mathbb {C}$  which is ***simply connected***, let $f:U\to \mathbb {C} $ be a ***holomorphic*** function, for any closed curve $\mathcal{C}$ in $U$
  $$
  \oint_{\mathcal{C}} f(z) d z=0
  $$

- Corollary:

  Suppose $f$ is ***holomorphic*** in an open set $Ω ⊂ \mathbb{C}$ containing a circle $\mathcal{C_0}$ and its ***interior***. Then
  $$
  \oint_{C_0} f(z) d z=0
  $$

> All of the above theorems has one same key point: the existence of primitive in some region, requires there's no "holes" in the region.



> ###### Question6
>
> ###### $C$ is the unit circle centered at the origin. Explain, relating to the above theorems, why the below integral does not vanishes to 0. You can draw.

$$
\int_{C} \frac{1}{z} d z
$$

------

> ###### Answer6











#### Judgement - Toy Contours

- Cauchy’s theorem can be applied to various contours. Below are some toy contours.

  <img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1tux68uj30zg0u0jtt.jpg" alt="Screen Shot 2020-10-19 at 15.45.32" style="zoom:35%;" />

  Simply means: If $f$ is ***holomorphic*** in a ***contour***, then for any closed curve $\mathcal{C}$ in that contour (usually we simply choose the boundary of the contour):
  $$
  \oint_{c} f(z) d z=0
  $$

> This is acually still a special case for the general Cauchy's Integral Theorem*.
>
> A very useful technieque to eveluate integrations and so on.



#### Jordan’s Lemma

Assume that for some $R_0 > 0$ the function $g: \mathbb{C} \backslash \overline{B_{R_{0}}(0)}→\mathbb{C}$ isholomorphic. Let
$$
f(z)=e^{i a z} g(z), \quad \text { for some } a>0
$$
Let
$$
C_{R}=\left\{z \in \mathbb{C}: z=R \cdot e^{i \theta}, 0 \leq \theta \leq \pi\right\}
$$
be a semi-circle segment in the upper half-plane and assume that
$$
\sup _{0 \leq \theta \leq \pi}\left|g\left(R e^{i \theta}\right)\right| \stackrel{R \rightarrow \infty}{\longrightarrow} 0
$$
Then
$$
\lim _{R \rightarrow \infty} \int_{C_{R}} f(z) d z=0
$$




### Cauchy Integral Formulas

Suppose $f$ is a holomorphic function in an open set $Ω ⊂ \mathbb{C}$. If $D$ is an open disc whose boundary is contained in $Ω$, then
$$
f(z)=\frac{1}{2 \pi i} \oint_{C} \frac{f(\zeta)}{\zeta-z} d \zeta \quad \text { for all } z \in D
$$
where $ C = ∂D$ is the (***positively oriented***) boundary circle of D.

> Tricky question: does it matters whether z is in the disk or not? Draw graphs and analysis.

- The values of a holomorphic function within a disc are fixed by the values of the function on the boundary

> Tricky reminder: does this means all the values of f(z) in a chosen disk are the same?

- Cauchy’s integral formula is also valid for all of our toy contours



Corollary:

If $f$ is a holomorphic function in an open set $Ω ⊂ \mathbb{C}$, then $f$ has infinitely many complex derivatives in $Ω$. Moreover, if $D$ is an open disc whose boundary is contained in $Ω$,
$$
f^{(n)}(z)=\frac{n !}{2 \pi i} \oint_{C} \frac{f(\zeta)}{(\zeta-z)^{n+1}} d \zeta \quad \text { for all } z \in D
$$
where $C = ∂D$ is the (***positively oriented***) boundary circle of $D$.



> ###### Question7
>
> ###### Compute $\int_{c} \frac{\mathrm{e}^{z^{2}}}{z-2} d z$ , where C is the curve shown below

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1tvv7n6j30uq0fugmf.jpg" alt="Screen Shot 2020-10-19 at 16.20.56" style="zoom:33%;" />

------

> ###### Answer7









> ###### Question8
>
> ###### Compute $\int_{c} \frac{\mathrm{e}^{z^{2}}}{z-2} d z$ , where C is the curve shown below

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1tveur4j30jc09waac.jpg" alt="Screen Shot 2020-10-19 at 16.21.57" style="zoom: 50%;" />

------

> ###### Answer8









> ###### Question9
>
> ###### Compute $\int_{c} \frac{\mathrm{e}^{z^{2}}}{z-2} d z$ , where C is the curve shown below

<img src="https://tva1.sinaimg.cn/large/007S8ZIlgy1gjv1tt93mwj30ia0bg74r.jpg" alt="Screen Shot 2020-10-19 at 16.23.12" style="zoom:50%;" />

------

> ###### Answer9









> ###### Question10
>
> ###### Compute $\int_{c} \frac{1}{(z-2)(z-5)} d z$ , where C is the circle with radius 3 and centered at the origin.

------

> ###### Answer10















## Holomorphic Functions are Analytic

Suppose $f$ is a holomorphic function in an open set $Ω$. If $D$ is an open disc centered at $z_0$ and whose closure is contained in $Ω$, then f has a power series expansion at $z_0$
$$
f(z)=\sum_{n=0}^{\infty} a_{n}\left(z-z_{0}\right)^{n}
$$
for all $z ∈ D$ and the coefficients are given by
$$
a_{n}=\frac{f^{(n)}\left(z_{0}\right)}{n !}, \quad n \in \mathbb{N}
$$






