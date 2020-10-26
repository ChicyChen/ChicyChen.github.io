---
typora-copy-images-to: upload
---



@Chen Siyi

October 26, 2020

# Note5 Complex Analysis II

[TOC]

## More About Holomorphic Functions

### Holomorphic Functions are Analytic

Suppose $f$ is a ***holomorphic*** function in an open set $Ω$. If $D$ is an open disc centered at $z_0$ and whose closure is contained in $Ω$, then f has a power series expansion at $z_0$
$$
f(z)=\sum_{n=0}^{\infty} a_{n}\left(z-z_{0}\right)^{n}
$$
for all $z ∈ D$ and the coefficients are given by
$$
a_{n}=\frac{f^{(n)}\left(z_{0}\right)}{n !}, \quad n \in \mathbb{N}
$$

### Uniqueness of Holomorphic Functions

Let $Ω ⊂ \mathbb{C}$ be a region and $f,g : Ω → \mathbb{C}$ two holomorphic functions. Suppose that $S ⊂ Ω$ has an accumulation point that is contained in $Ω$ and that
$$
f(z)=g(z) \quad \quad \text { for all } z \in S
$$
Then $f(z)=g(z)$ for all $z ∈Ω$.



## Analytic Continuation

Let $M ⊂ \mathbb{C}$ be a any set and $f : M → \mathbb{C}$ any function. Let $Ω$ be a region with $M ⊂ Ω$ and $g : Ω → \mathbb{C}$ a ***holomorphic*** function such that $g(z) = f (z)$ for $z ∈ M$. Then g is called an ***analytic continuation*** of $f$ to $Ω$.



## Singularities and Poles

### Singularities

Let $Ω ⊂ \mathbb{C}$ be open, $z_0 ∈ Ω$ and $f : Ω $ \ $ {z_0} → \mathbb{C}$ be holomorphic (i.e., $f$ has an ***isolated singularity*** at $z_0$).

- The singularity is said to be ***removable*** if there exists an analytic 􏲅􏲅continuation $\tilde{f} : Ω → \mathbb{C}$.
- The singularity is said to be a ***pole*** if $g = 1/f$ is holomorphic on $Ω$ \ {$z_0$} and has a removable singularity at $z_0$ such that the analytic continuation g􏲅 of g satisfies $g􏲅(z_0) = 0$.
- The singularity is said to be ***essential*** if it is neither removable nor a pole.

### Multiplicity of Poles

If $f:Ω→\mathbb{C}$ has a pole at $z_0 ∈Ω$, then in a neighborhood $U$ of that point there exist a non-vanishing ***holomorphic function*** $h$ and a unique positive integer $n$ such that
$$
f(z)=\left(z-z_{0}\right)^{-n} h(z) \quad \text { for all } z \in U
$$
The integer $n$ is called the ***multiplicity*** or ***order*** of the pole of $f$. If $n=1$, we say that the pole is ***simple***.

------

#### How do you judge singularities?

- $a$ is a ***removable singularity*** of $f(z)$ if and only if $\lim _{z \rightarrow a} f(z) = c_0$, $c_0 \neq \infin$.

  > ###### Question1
  >
  > ###### Let $f(z) = \frac{cosz - 1}{z^2}$, $z_0 = 0$. What kind of singularity is $z_0$?

  ------

  > ###### Answer1









- $z_0$ is a ***pole with order n*** of $f(z)$ if and only if $z_0$ is a zero of $g = \frac{1}{f}$ with order $n$ , $c_0 \neq \infin$.

  > ###### Question2
  >
  > ###### Let $f(z) = \frac{1}{cosz - 1}$, find all singularities of $f$. What kind of singularity are them?

  ------

  > ###### Answer2









------

### Representation Near Poles

If $f:Ω→\mathbb{C}$ has a pole of order $n$ at $z_0 ∈Ω$, then there ***exists a neighborhood*** $U ⊂ Ω$ of $z_0$, numbers $a_{−n}$, ... , $a_{−1}$ $∈ \mathbb{C}$ and a ***holomorphic*** function $G : U → \mathbb{C}$ such that
$$
f(z)=\frac{a_{-n}}{\left(z-z_{0}\right)^{n}}+\frac{a_{-n+1}}{\left(z-z_{0}\right)^{n-1}}+\cdots+\frac{a_{-1}}{z-z_{0}}+G(z)
$$
for all $z ∈ U$.

> **Notice** 
>
> G(z) is a holomorphic function in a ***neiborhood*** of $z_0$, while $f(z)(z-z_0)^n$ is a holomorphic function in a ***neiborhood*** of $z_0$. 
>
> But you ***cannot contain other poles*** inside such neiborhood, for G to be a analytic function.

### The Principle Part

$$
P(z)=\frac{a_{-n}}{\left(z-z_{0}\right)^{n}}+\frac{a_{-n+1}}{\left(z-z_{0}\right)^{n-1}}+\cdots+\frac{a_{-1}}{z-z_{0}}
$$

is called the principal part of $f$ at the pole $z_0$.

### The Residue

The coefficient $a_{−1}$ of $1$ / $(z − z_0)$ is called the residue of f at the pole $z_0$, written
$$
\operatorname{res}_{z_{0}} f=a_{-1}
$$

> **Notice**
>
> One pole has exactly one residue. 
>
> So if a contour contains  $x$ poles, it can find $x$ residues accordingly.

------

#### How do you find the residue?

- By direct expansion

- By apply the theorem:

  For a ***simple pole***,
  $$
  \operatorname{res}_{z_{0}} f=\lim _{z \rightarrow z_{0}}\left(z-z_{0}\right) f(z)
  $$
  

  For a ***pole of order $n$***,
  $$
  \operatorname{res}_{z_{0}} f=\frac{1}{(n-1) !} \lim _{z \rightarrow z_{0}} \frac{d^{n-1}}{d z^{n-1}}\left(\left(z-z_{0}\right)^{n} f(z)\right)
  $$
  

  In particular, for $n = 2$, 
  $$
  \operatorname{res}_{z_{0}} f=\lim _{z \rightarrow z_{0}}[\left(z-z_{0}\right)^2 f(z)] \prime
  $$

> **Why does the theorem work?**

> ###### Question
>
> ###### Find the residue of 
>
> $$
> f(z)=\frac{1}{z\left(z^{2}+1\right)(z-2)^{2}}
> $$

------

> ###### Answer









#### An Important Property of the Residue

Recall from slide 312, all $z^n$ has a primitive except for the case where $n = -1$.
$$
\oint_{S^{1}} \frac{d z}{z}=\int_{0}^{2 \pi} \frac{i e^{i t}}{e^{i t}} d t=2 \pi i \neq 0
$$

$$
\begin{aligned}
\oint_{S^{1}} \frac{d z}{z^{n}} &=\int_{0}^{2 \pi} \frac{i e^{i t}}{e^{n i t}} d t=i \int_{0}^{2 \pi} e^{(1-n) i t} d t \\
&=i \int_{0}^{2 \pi}(\cos ((n-1) t)-i \sin ((n-1) t)) d t=0
\end{aligned}
$$

> **A Tricky Question**
>
> Previously, we discuss about several theorems related to "whether a holomorphic function has primitives". And the most general one, ***Cauchy's Integral Theorem**** says: 
>
> Let $U$ be an open subset of $\mathbb {C}$  which is ***simply connected***, let $f:U\to \mathbb {C} $ be a ***holomorphic*** function, for any closed curve $\mathcal{C}$ in $U$, the integral vanishes to 0.
>
> For $z^n$, $n < 0$,... is there a contradiction to this theorem?

$\frac{1}{z - z_0}$ is a special case, and now we see:

For any ***contour*** $\mathcal{C}$ whose interior contains ***only the pole*** at $z_0$, by Cauthy's integral formula:
$$
\frac{1}{2 \pi i} \int_{\mathcal{C}} f(z) d z=0+\frac{1}{2 \pi i} \int_{\mathcal{C}} \frac{a_{-1}}{z-z_{0}} d z=a_{-1}
$$

> **A Tricky Reminder**
>
> Again, why should the contour only contain ***only*** the pole $z_0$? What if you want to integrate along a contour containning several poles?



## Residue Calculus

### The Residue Theorem

Suppose that $f$ is ***holomorphic*** in an open set containing a (positively oriented) toy contour $\mathcal{C}$ and its interior, ***except for poles*** at the points $z_1$, ... , $z_N$ inside $\mathcal{C}$. Then
$$
\int_{\mathcal{C}} f(z) d z=2 \pi i \sum_{k=1}^{N} \operatorname{res}_{z_{k}} f
$$

> **Question4**
>
> How do we generalize the residue theorem from the simple case where only one pole is contained?
>
> <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gk2oov8vblj31460jadif.jpg" alt="Screen Shot 2020-10-26 at 13.44.31" style="zoom: 33%;" />

------

> **Answer4**











> **How can we apply this theorem?**
>
> ***Calculate certain integral*** along certain contour in the complex plane; sometimes we use the result to help find the integration of some integrals in $\mathbb{R}$.

> **A Tricky Question**
>
> How do you compare the residue theorem with Cauchy Integral Formulas, which we can also use to find integrals?
>
> $f(z)=\frac{1}{2 \pi i} \oint_{C} \frac{f(\zeta)}{\zeta-z} d \zeta \quad \text { for all } z \in D$



> ###### Question5
>
> ###### Redo the integration of the below function using the Residue Theorem.
>
> **Where C is the circle with radius 3 and centered at the origin.**
> $$
> \int_{c} \frac{1}{(z-2)(z-5)} d z
> $$

------

> ###### Answer5











### The Complex Logarithm, Power, and Root

#### Complex Logarithm

> The idea to define the complex logarithm can be traced back to the Cauthy's Integral Theorem...

The ***principal branch*** of the logarithm:
$$
\Omega=\mathbb{C} \backslash\{x \in \mathbb{R}: x \leq 0\}
$$
in which case
$$
\ln \left(r e^{i \varphi}\right)=\ln r+\varphi i \quad(r>0,-\pi<\varphi<\pi)
$$
For brevity, we set:
$$
\mathbb{R}_{-}^{0}:=\{x \in \mathbb{R}: x \leq 0\}, \quad \mathbb{R}_{+}^{0}:=\{x \in \mathbb{R}: x \geq 0\}
$$
We can also define other branches of the logarithm. Often, a convenient choice (especially for residue calculus) is
$$
\ln : \mathbb{C} \backslash \mathbb{R}_{+}^{0} \rightarrow \mathbb{C}, \quad \quad \ln z=\ln r+\varphi i
$$
where $r > 0$ and $0 < φ < 2π$.

In general, for the principal branch of the logarithm, $\ln \left(z_{1} z_{2}\right) \neq \ln z_{1}+\ln z_{2}$.

#### Complex Powers

$$
z^{\alpha}:=e^{\alpha \ln z}, \quad \alpha \in \mathbb{C}, z \in \mathbb{C} \backslash \mathbb{R}_{-}^{0}
$$

#### Complex Roots

$$
\sqrt[n]{z}:=z^{1 / n}
$$

### Residue Calculus 

#### Overview: Evaluation of Real Integrals

- Extend the real domain to complex domain
  - If only containing x, always directly extend to z
  - If containning sinx, cosx, always extend to $e^{iz}$
- Find poles for the function$ f(z)$
- Decide the countour and the branch if needed
- Calculate the residue for poles in the countour
- Apply residue theorem (or Cauchy’s theorem)
- Except for the integral part we need, solve or vanish other parts one by one
  - You may need to use **Jordan’s Lemma** or do similar operation

#### Review: Jordan’s Lemma

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

#### Semicircle and Indented Semicircle

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gk2q06zlabj319k0ds7a1.jpg" alt="Screen Shot 2020-10-26 at 14.30.03" style="zoom:33%;" />

Can be used to solve (hw6):
$$
\int_{0}^{\infty} \frac{\sin x}{x} d x,
\int_{-\infty}^{\infty} \frac{x \sin x}{x^{2}+a^{2}} d x, 
\int_{0}^{\infty} \frac{x \sin x}{\left(x^{2}+4\right)^{2}} d x, 
$$

$$
\int_{0}^{\infty} \frac{1-\cos x}{x^{2}} d x,
\int_{-\infty}^{\infty} \frac{\cos x}{x^{2}+a^{2}} d x,
$$

$$
\int_{-\infty}^{\infty} \frac{d x}{1+x^{4}}, 
\int_{-\infty}^{\infty} \frac{d x}{\left(1+x^{2}\right)^{n+1}} d x, \dots
$$

> ###### Question6
>
> Show that
> $$
> \int_{-\infty}^{\infty} \frac{d x}{1+x^{2}}=\pi
> $$

------

> ###### Answer6











#### Circle with Keyholes

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gk2tu0qtncj316c0k4abj.jpg" alt="Screen Shot 2020-10-26 at 14.58.21" style="zoom: 40%;" />

Can be used to solve integrals containing $\sqrt{x}$, $lnx$, where we often choose the branch $\ln : \mathbb{C} \backslash \mathbb{R}_{+}^{0} \rightarrow \mathbb{C}, \quad \quad \ln z=\ln r+\varphi i$

Such as (hw6):
$$
\int_{0}^{\infty} \frac{\sqrt{x}}{x^{2}+a^{2}} d x, \int_{0}^{\infty} \frac{\ln x}{x^{2}+a^{2}} d x
$$


#### Multiple Kehole

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gk2qi89dkyj30ro0lidgi.jpg" alt="Screen Shot 2020-10-26 at 14.46.46" style="zoom: 25%;" />

> ###### Question7
>
> Compute
> $$
> \int_{1}^{\infty} \frac{d x}{x \sqrt{x^{2}-1}}
> $$

------

> ###### Answer7
>
> <img src="https://tva1.sinaimg.cn/large/0081Kckwly1gk2rbd2ssmj30ou0j6ac1.jpg" alt="Screen Shot 2020-10-26 at 15.11.04" style="zoom:33%;" />















#### Square

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gk2raxa7mvj30x20fw750.jpg" alt="Screen Shot 2020-10-26 at 15.14.29" style="zoom:33%;" />

> ###### Question8
>
> Show that
> $$
> \int_{-\infty}^{\infty} \frac{e^{a x}}{1+e^{x}} d x=\frac{\pi}{\sin \pi a}, \quad 0<a<1
> $$

------

> ###### Answer8













### Residue Calculus for Functions with Branch points

Let $P$ and $Q$ be polynomials of degree $m$ and $n$, respectively, where $n ≥ m + 2$. If $Q(x) \neq 0$ for $x > 0$, if $Q$ has a zero of order at most 1 at the origin and if
$$
f(z)=\frac{z^{\alpha} P(z)}{Q(z)}, \quad 0<\alpha<1
$$
then
$$
\text { p.v. } \int_{0}^{\infty} \frac{x^{\alpha} P(x)}{Q(x)} d x=\frac{2 \pi i}{1-e^{2 \pi \alpha i}} \sum_{j=1}^{k} \operatorname{res}_{z_{j}} f
$$
where $z_1, \dots , z_k$ are the nonzero poles of $P/Q$.





## The Heaviside Operator Method

### The Heaviside Function

$$
H: \mathbb{R} \rightarrow \mathbb{R}, \quad H(t)=\left\{\begin{array}{ll}
1 & t>0 \\
0 & t \leq 0
\end{array}\right.
$$

### The Heaviside Operator Method(Basic)

> This method first comes up without solid proof of its correctness, but just with an idea that maybe you can perform "differentiation" by "multiplying a number".

#### The Heaviside Operator

Write the differential operator $d/dt$ as $D$.
$$
D f(t)=f^{\prime}(t), \quad \frac{1}{D} f(t)=\int_{0}^{t} f(s) d s+f(0)
$$
We are assuming that all functions we consider are ***zero for $t < 0$***, otherwise we multiply with $H(t)$. In particular, 
$$
\frac{1}{D} H(t)=t
$$

#### Apply to Solve the Initial Value Problem

> But this basic method might fail in some cases. For example the final solution you get does not converge. So we want to consider the idea behind the Heaviside Operator Method more intuitively.

- "Transform" the initial differential equations using operator $D$, $\frac{1}{D}$, and possibly the Heaviside Function $H(t)$.
- Solve out $y(t) = g(D)\cdot p(t)$.
- Rewrite $g(D)$ as functions only containing $D^a$ and $\frac{1}{D^b}$
- "Transform" $y(t)$ back by differentiating, integrating $p(t)$ and suming up.

### The Heaviside Operator Method(More General)

#### The General Idea

<img src="https://tva1.sinaimg.cn/large/0081Kckwly1gk2kdus7zvj30mg0f8dgh.jpg" alt="Screen Shot 2020-10-26 at 11.15.35" style="zoom: 33%;" />

> Understand the graph...
>
> **A Tricky Question**
>
> Is the $D$ here the same as the $D = \frac{d}{dt}$ which is defined previously?
>
> **A Tricky Question**
>
> What transformations, or operations do we still need to find explicitly in this graph?

We define a ***transformation*** $f \mapsto\{f\}$, together with an ***operation*** $D$, where we want {$f$} to satisfy:

- Linearily: $\{\alpha f+\beta g\}=\alpha\{f\}+\beta\{g\}$
- Operator: $D\{f\}(p)=\left\{f^{\prime}\right\}(p)+f(0)$

Then actually automatically the following properpies hold:

- $D\{\alpha f+\beta g\}=\alpha D\{f\}+\beta D\{g\}$
- $\{0\}=0$
- $D\{1\}=\{0\}+1=1$
- $D^{n}\left\{\frac{t^{n}}{n !}\right\}=\{1\}$

#### The Explicit Transformation

Let $f$ be an analytic function, so
$$
\{f\}=\left\{\sum_{n=0}^{\infty} f^{(n)}(0) \frac{t^{n}}{n !}\right\}=\sum_{n=0}^{\infty} f^{(n)}(0)\left\{\frac{t^{n}}{n !}\right\}
$$
With the property $p^{n+1}\left\{\frac{t^{n}}{n !}\right\}=1$(why?), further we have
$$
\{f\}=\frac{1}{p} \sum_{n=0}^{\infty} \frac{f^{(n)}(0)}{p^{n}}
$$
Recall the definition of the ***Euler gamma function***
$$
\Gamma(t)=\int_{0}^{\infty} z^{t-1} e^{-z} d z
$$
Which has the property that $\Gamma(n+1)=n !$. Then
$$
\begin{aligned}
\{f\}(p) &=\frac{1}{p} \sum_{n=0}^{\infty} \int_{0}^{\infty} z^{n} e^{-z} d z \frac{f^{(n)}(0)}{n ! p^{n}} \\
&=\frac{1}{p} \int_{0}^{\infty} \sum_{n=0}^{\infty}\left(\frac{z}{p}\right)^{n} \frac{f^{(n)}(0)}{n !} e^{-z} d z \\
&=\frac{1}{p} \int_{0}^{\infty} f(z / p) e^{-z} d z \\
&=\int_{0}^{\infty} f(z) e^{-p z} d z
\end{aligned}
$$
This is the conclusion. Which further gives us an interesting explicit formular for $D$. From
$$
\begin{aligned}
\left\{f^{\prime}\right\}(p) &=\int_{0}^{\infty} f^{\prime}(z) e^{-p z} d z=\left.f(z) e^{-p z}\right|_{0} ^{\infty}+p \int_{0}^{\infty} f(z) e^{-p z} d z \\
&=-f(0)+p \cdot\{f\}(p)
\end{aligned}
$$
And by definition $D\{f\}(p)=\left\{f^{\prime}\right\}(p)+f(0)$, we obtain
$$
D\{f\}(p)=p \cdot\{f\}(p)
$$

> Here, a new possible method for you to solve differential equations has come up.
>
> First transform $f(x)$ and the differential equation related to it, to another different function $\{f\}(p)$ and an easier equation about  $\{f\}(p)$,
>
> Second solve  $\{f\}(p)$,
>
> Finally transform  $\{f\}(p)$ back to $f(x)$.
>
> You will see more... （Laplace Transformation & Fourier Transformation）

