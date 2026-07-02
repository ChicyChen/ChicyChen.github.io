# Project Website

Project page for **"The Dual Power of Interpretable Token Embeddings: Jailbreaking
Attacks and Defenses for Diffusion Model Unlearning"** (arXiv:2504.21307).

Built on the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template)
(Nerfies / Bulma), matching the LOCO-Edit page style.

## Local preview

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

## Structure

```
website/
├── index.html            # single-page site
└── static/
    ├── css/              # bulma + template styles (vendored)
    ├── js/               # bulma carousel/slider + fontawesome (vendored)
    └── images/           # figures (converted from paper/Figures)
```

## Updating figures

Web images are derived from `../paper/Figures/`. PDFs are rasterized with ghostscript:

```bash
gs -sDEVICE=pngalpha -r150 -dNOPAUSE -dBATCH -dQUIET \
   -sOutputFile=static/images/NAME.png ../paper/Figures/NAME.pdf
convert static/images/NAME.png -background white -flatten static/images/NAME.png
```

JPG/PNG figures are copied directly.

## Deploying

Copy the `website/` contents into a GitHub Pages repo/subfolder, e.g.
`ChicyChen.github.io/IJD/`, so it serves at `https://chicychen.github.io/IJD/`.
