[![Deploy to GitHub Pages](https://github.com/Tatsumi0000/lottie-book/actions/workflows/deploy.yml/badge.svg)](https://github.com/Tatsumi0000/lottie-book/actions/workflows/deploy.yml)

# Lottie Book

A simple tool to manage Lottie JSON files on GitHub Pages.

## Features

### Automatically display JSON files by component
Simply place JSON files in `src/assets/light` or `src/assets/dark`, and all JSON files will be automatically loaded and expanded.

![play component](./docs/play_component.webp)

### Play lottie json file
Drag and drop JSON files to play.

![drag and drop](./docs/drag_and_drop.webp)

## How to Use

- Click the Use this template button in the top right to create a repository in
  your preferred organization.
- Configure GitHub Pages: Go to Settings → Pages, then set the `Source` under
  Build and deployment to GitHub Actions.
- Simply add your JSON files to `src/assets/light` or `src/assets/dark`. They
  will be automatically deployed to GitHub Pages (triggered by commits to the
  main branch).

## Development Commands

Setup Environment

```sh
make setup
```

Access the Container

```sh
make run
```

Start the Container (Open `localhost:5173` in your browser after running)

```sh
make up
```

Format Code (Run this inside the container)

```sh
deno fmt
```
