# `@andrewmcodes/postcss-plugin`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40andrewmcodes%2Fpostcss-plugin.svg)](https://badge.fury.io/js/%40andrewmcodes%2Fpostcss-plugin.svg)

[PostCSS](https://github.com/postcss/postcss) plugins wrapped up in a single, easy-to-use plugin.

## Installation

```bash
yarn add --dev @andrewmcodes/postcss-plugin

# or, with npm

npm i @andrewmcodes/postcss-plugin --save-dev
```

## Features

This plugin wraps around the following PostCSS transformations:

- [`postcss-calc`](https://github.com/postcss/postcss-calc)
- [`postcss-flexbugs-fixes`](https://github.com/luisrudge/postcss-flexbugs-fixes)
- [`postcss-selector-matches`](https://github.com/postcss/postcss-selector-matches)
- [`postcss-will-change`](https://github.com/postcss/postcss-will-change)
- [`autoprefixer`](https://github.com/postcss/autoprefixer)
- [`postcss-discard-comments`](https://github.com/ben-eb/postcss-discard-comments)

## Options

This plugin accepts a single option, `minimize`. Passing `minimize: true` will turn on CSS minification via [cssnano](https://cssnano.co).
