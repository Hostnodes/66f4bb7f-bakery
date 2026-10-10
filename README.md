# Rye & Ember bakery page

A project of the course [HTML & CSS Foundations](https://northwest-represents-simpsons-reasoning.trycloudflare.com/courses/html-css-foundations) on AAcademy, built by @hostnodes-academy.

## How to work on it

1. **Fork** this repository to your own GitHub account.
2. **Clone your fork** and add this repository as the `academy` remote:

   ```bash
   git remote add academy https://github.com/Hostnodes/66f4bb7f-bakery.git
   ```

3. For each step, **start from the latest `main`** and work on the step’s branch:

   ```bash
   git pull academy main
   git checkout -b <branch>
   ```

4. **Push** the branch to your fork and **open a pull request** into `main` of this repository.
   Checks run automatically; once they pass, your mentor reviews the pull request on AAcademy.
5. When the step is accepted, the pull request is merged here. Pull it before the next step.

## Steps

| Step | Branch |
|---|---|
| [Project: a landing page for a neighbourhood bakery](https://northwest-represents-simpsons-reasoning.trycloudflare.com/learn/html-css-foundations/bakery-landing) | `landing-page` |

---

# Rye & Ember: the brief

A one-page website for a **fictional** neighbourhood bakery, in HTML and CSS only.

> **Rye & Ember** is a small wood-fired bakery on a corner of Linden Street. It opens at 7 am, sells sourdough
> loaves, cardamom buns and a rotating "bake of the week", and has four tables by the window. The owners want a
> simple page that tells people what they bake, when they're open and how to find them.

## What to build

`index.html` with the styles in `css/style.css`, containing these sections in order:

1. **Header**: the bakery's name on the left and a navigation menu on the right, linking to the sections below.
2. **Hero**: a main heading, a sentence or two about the bakery, and a link styled as a button.
3. **Menu**: at least three items in a row on wide screens. Each has a name, a short description and a price.
4. **Opening hours**: days and times, with the times marked up with `<time>`.
5. **Visit us**: the address and a `mailto:` link.
6. **Footer**: a short closing line.

## Check your work before you push

```bash
npm install
npm run lint   # HTML and CSS style
npm test       # the structure checks your pull request runs too
```

The checks on your pull request run the same commands. Your mentor reviews the pull request against the course
criteria once they pass.
