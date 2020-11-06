---
typora-copy-images-to: upload
---

@Chen Siyi

November 2, 2020

# Note6 Laplace Transform

[TOC]

## The (Unilateral) Laplace Transform

### Definition of (Unilateral) Laplace Transform

Let $f : [0, ∞) → \mathbb{R}$ be a continuous function such that
$$
\sup _{t \in[0, \infty)} e^{-p t}|f(t)|<\infty \quad \text { for some } p \geq 0
$$
Then the function $F : (β, ∞) → \mathbb{R}$,
$$
F(p):=(\mathscr{L} f)(p):=\int_{0}^{\infty} e^{-p t} f(t) d t
$$
is called the ***(Unilateral) Laplace transform*** of $f$ .

> **A Reminder**
>
> Why should the "sup" condition be satisfied for the (Unilateral) Laplace transform?
>
> For any $f$, will there always exist a region of $p$ where $F(p)$ is defined?

And the ***ROC(radius of convergence)*** is the region for $p$, where $F(p)$ converges. So the (Unilateral) Laplace Transform $ (\mathscr{L} f)(p)$ is defined for such $p$.

> **A Tricky Question**
>
> Can the ROC of the (Unilateral) Laplace Transform of a function $f$ be in the form $(-∞, \beta)$?



### Definition of (Bilateral) Laplace Transform

The bilateral Laplace transform is defined as
$$
(\widetilde{\mathscr{L}} f)(p):=\int_{-\infty}^{\infty} f(t) e^{-p t} d t
$$
Of course, we have
$$
\mathscr{L} f=\widetilde{\mathscr{L}}(H f)
$$
The following questions may help you understand better the relationship between these two types of Laplace Transform.

> **A Tricky Question**
>
> What should the value of $p$ satisfy for the (Bilateral) Laplace Transform of $f$ to exist?

> **A Tricky Question**
>
> If for a funstion $f$, the Unilateral Laplace Transform of $f$ is defined in some region of $p$, will there always be a Bilateral Laplace Transform for certain region of $p$?

> **A Tricky Question**
>
> Can the ROC of the (Bilateral) Laplace Transform of a function $f$ be in the form $(-∞, \beta)$, $(\alpha, \beta)$?

\*Our main focus here (VV286) is the <u>**(Unilateral) Laplace Transform**</u>.



> ###### Question
>
> Find the Laplace transform of a function of the form $t^a$ with $a > −1$.
>
> Hint:
>
> - We focus on the **Unilateral** Laplace transform witout stating out.
> - Considering the gamma function, what's its definition?

------

> ###### Answer









### Properties of (Unilateral) Laplace Transform

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkavvxjb4mj31660maacp.jpg" alt="Screen Shot 2020-11-02 at 15.57.46" style="zoom:40%;" />

- $\mathscr{L}(f * g)=(\mathscr{L} f) \cdot(\mathscr{L} g)$
- $\mathscr{L}(\int_0^t f(\tau) d\tau) = \frac{1}{p}\mathscr{L}(f(t))$



## The Inverse of the Laplace Transform

The laplace transform can be extended to the ***complex plane***, by using the ***analytic continuation*** where we set $F(z)$ by replacing $p$ with $z$ in $F(p)$ for $Rez > \beta$. (Why?)

For $z = p + iq$, where $p > \beta$ we have
$$
\begin{aligned}
|F(z)| & \leq \int_{0}^{\infty}\left|f(t) e^{-z t}\right| d t=\int_{0}^{\infty}|f(t)| e^{-p t} d t \\
& \leq M \int_{0}^{\infty} e^{-(p-\beta) t} d t=\frac{M}{p-\beta}
\end{aligned}
$$

1. $F(z)$ exists.
2. $F(z)$ is holomorphic. Since the integral converges absolutely, and the function $g(z) = e^{zt}$ is complex differentiable for any $t ∈ [0, ∞)$. (Recall what is $F$).

### The Bromwich Integral

#### Definition

Let $Ω ⊂ \mathbb{C}$ be an open set, $β ∈ \mathbb{R}$ and $F : Ω → \mathbb{C}$ analytic for all $z ∈ \mathbb{C}$ with $Re z ≥ β$. Then the ***Bromwich integral*** of $F$ is defined as
$$
(\mathscr{M} F)(t)=\frac{1}{2 \pi i} \int_{\mathcal{C}^{*}} e^{p t} F(p) d p
$$
where $\mathcal{C} = {z ∈ C: Rez = β}$ is the ***Bromwich contour***, oriented ***positively*** if the contour is closed on the left (i.e., the line is traversed in the direction of positive imaginary part.)

Often, the integral is written
$$
(\mathscr{M} F)(t)=\frac{1}{2 \pi i} \int_{\beta-i \infty}^{\beta+i \infty} e^{p t} F(p) d p
$$
An example for the ***Bromwich integral*** of a function $F$ is given below. 

> **A Tricky Question**
>
> Does it matter which $\beta$ you choose?
>
> --*Yes and no*.



> **A Reminder**
>
> Where $F(p)$ is a ***Unilateral Laplace Transform***, and the Bromwich contour must be located within the ROC. So it will always be holomorphic in the right part of the Bromwich integral.
>
> Such $f(t)$ is ***causal*** because there are no poles to the right of the Bromwich contour.

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkanq3gmm4j30ym0sgwi7.jpg" alt="Screen Shot 2020-11-02 at 11.15.41" style="zoom: 30%;" />

#### Evaluation

##### Summary

1. The ***region of $t$***, i.e. whether $t < 0$ or $t > 0$, decides which ***semi-circle*** you would like to use for integral.

> Why?

2. The ***positions of poles***, decide which ***theorem*** to use for integral.

> Which theorems? How do you decide?

##### Concrete Analysis

- $t > 0$
  $$
  \int_{\Gamma_{\beta, R}} e^{p t} F(p) d p = i e^{\beta t} \int_{C_{R}} e^{i t p} F(\beta+i p) d p
  $$

Jordan's lema shows the integral would ***vanish*** as $R → ∞$.

Use the ***Residue Theorem*** for this specific case.

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkarnicaxdj30sy0lwgof.jpg" alt="Screen Shot 2020-11-02 at 13.31.26" style="zoom:33%;" />



- $t < 0$
  $$
  \int_{\Gamma_{\beta, R}^{(2)}} e^{p t} F(p) d p = i e^{\beta t} \int_{C_{R}} e^{i|t| p} F(\beta-i p) d p
  $$
  Jordan's lema shows the integral would ***vanish*** as $R → ∞$.

  Use ***Cauthy's Integral Theorem*** for this specific case.

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gkarq8876oj30i60kewge.jpg" alt="Screen Shot 2020-11-02 at 13.34.09" style="zoom: 43%;" />

> **A Tricky Question**
>
> "Whether the integral along the two semi-circles vanishes", is it related to the poles of F?



### The Mellin Inversion Formula

If $f$ is continuous on $[0, ∞)$, continuously differentiable on $(0, ∞)$ and satisfies $\sup _{t \in[0, \infty)} e^{-\beta t}|f(t)|<\infty$ for some $\beta > 0$, then
$$
f(s)=\left[\begin{array}{cc}
\mathscr{M}(\mathscr{L} f)](s)  & \text { for all } s \in[0, \infty)
\end{array}\right.
$$
which is called the ***Mellin inversion formula*** for the Laplace transform.

> ###### Question
>
> ###### Let $F(p) = 1/p$ be the Laplace transform of a time signal $f(t)$ with the half-plane Re(s) > 0 as its ROC. Find $f(t)$ using the ***Mellin inversion formula***.
>
> Hint:
>
> - We focus on the Unilateral Laplace transform witout stating out.
>
> - The Bromwich contour must be located within the ROC
> - *What happens to the point $t = 0$ ?

------

> ###### Answer













## Solving Differential Equations with Laplace Transform

### Overall Idea

1. Apply the ***Laplace transform*** to both sides of the ODE/IVP.
2. ***Solve*** for the Laplace transform $Y$.
3. Find ***inverse Laplace transform***, which is the solution. You can try (in mixture of) several ways:
   1. Decomposite $Y(p)$ into partial fractions.
   2. Use the table of pairs, and also properties.
   3. Use the mellin inversion formula.

> ###### Question
>
> Solve the IVP:
> $$
> y^{\prime \prime}-10 y^{\prime}+9 y=5 t, \quad y(0)=-1 \quad y^{\prime}(0)=2
> $$

------

> ###### Answer











### Using Green's Function and Convolution

- A Convolution Product for the Laplace Transform:

$$
\mathscr{L}(f * g)=(\mathscr{L} f) \cdot(\mathscr{L} g)
$$

- A linear, second order, inhomogeneous ODE with constant coefficients:

$$
a y^{\prime \prime}+b y^{\prime}+c y=f(x), \quad y(0)=y_{0}, y^{\prime}(0)=y_{1}
$$

1. Apply the ***Laplace transform*** to both sides of the ODE/IVP.

2. ***Solve*** for the Laplace transform $Y$.
   $$
   Y=(\mathscr{L} f)(p) \cdot \frac{1}{a p^{2}+b p+c}+\frac{a y_{0} p+b y_{0}+a y_{1}}{a p^{2}+b p+c}
   $$

3. Find the ***Green's Function*** *g*(*x*) such that $(\mathscr{L} g)(p)=\frac{1}{a p^{2}+b p+c}$

4. Use transform table and apply convolution to find ***inverse Laplace transform***, which is the solution.

> ###### Question
>
> Solve the IVP:
> $$
> y^{\prime \prime}+y=\left\{\begin{array}{l}
> \cos t, 0 \leqslant t \leqslant \pi / 2 \\
> 0, \pi / 2 \leqslant t<\infty
> \end{array}=\cos t \cdot H\left(\frac{\pi}{2}-t\right), y(0)=3, y^{\prime}(0)=-1\right.
> $$

------

> ###### Answer









### Impulses and the Delta Function