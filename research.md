[Home](index.md)

# Research

------

## Understanding 3D Object Articulation in Internet Videos (CVPR 2022)

*[Shengyi Qian](https://jasonqsy.github.io/), [Linyi Jin](https://jinlinyi.github.io/), [Chris Rockwell](https://crockwell.github.io/), ***Siyi Chen***, [David Fouhey](https://web.eecs.umich.edu/~fouhey/)*

[Website](https://jasonqsy.github.io/Articulation3D/)

------

## Combined Understanding of 3D Plane Articulation and Partial Human Pose Estimation

*Advisor: [David Fouhey](https://web.eecs.umich.edu/~fouhey/)*

*Mentor: [Shengyi Qian](https://jasonqsy.github.io/)*

<img src="SURE/model.png" alt="sure" width="800"/> 

1. Independently predict 3D partial human poses as SMPL meshes  in pytorch3d following Rockwell’s methods. And use PointRend to obtain 2D human masks.

2. Independently predict  2D plane masks as well as 3D articulation information. 

3. Use a differential render in pytorch3d similar to the NMR in PHOSA for back-propagation,  to build a similar system optimizing the position and size of the person considering 3d space relationship and interaction for each single image. 


[GitHub](https://github.com/ChicyChen/CombinedOPT)
[Poster](SURE/poster.pdf)

------

## Convex Presentations of Translation Surfaces

*Student Group: Andrew Keisling, Brendan Nell, Kaiwen Lu, Siyi Chen*

*Advisors: [Chaya Norton](https://lsa.umich.edu/math/people/postdoc-faculty/nchaya.html), [Paul Apisa](http://www-personal.umich.edu/~apisa/)*

*Mentors: Christopher Zhang, Sayantan Khan*

<img src="Origami/surface.png" alt="origami" width="500"/> 

1. We (a group of students really green to topology) have designed and implemented beta versions of enumerating origamis in H(2).
2. We have utilized SageMath to implement the convexity test presented in [this paper](https://arxiv.org/abs/1306.3606) by Lelievre and Weiss.

[Abstract](Origami/intro.pdf) 
[GitLab](https://gitlab.eecs.umich.edu/logm/wi21/convex-presentations-of-translation-surfaces)  [Report](Origami/report.pdf) 
[Poster](Origami/poster.pdf)

