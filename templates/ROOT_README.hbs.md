[comment]: # (NOTE: This file is generated and should not be modify directly. Update `templates/ROOT_README.hbs.md` instead)

# Web Configs

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE.md)
[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

This repository contains common configurations for building web apps inspired by Shopify's quilt & web-configs.

## Usage

This repo is managed as a monorepo that is composed of many npm packages, where each package has its own `README` and documentation describing usage.

### Package Index

| Name | NPM | Size |
| ------- | --- | --- |
{{#each jsPackageNames}}
| [{{this}}](packages/{{this}}) | [![npm version](https://badge.fury.io/js/%40andrewmcodes%2F{{this}}.svg)](https://badge.fury.io/js/%40andrewmcodes%2F{{this}}) | [![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/@andrewmcodes/{{this}}.svg)](https://img.shields.io/bundlephobia/minzip/@andrewmcodes/{{this}}.svg) |
{{/each}}

### Development

#### Getting Started

```bash
yarn
yarn lerna bootstrap
```

#### Testing your changes in a local project

To try out your changes in another locally cloned project, you can use `yarn tophat <package-name-without-@andrewmcodes-prefix> <relative-path-to-project>`. Using this command rather than `yarn link` will set up a watcher let you make changes without needing to rerun any commands.

Example: To test my changes to `@andrewmcodes/fucemol` in my local project named `my-project`, I would run `yarn tophat fucemol ../path/to/my-project`.

#### Testing

The packages in this repository are used in mission-critical production scenarios. As such, we do not merge any untested code.

To run the full test suite, run `yarn test`.

### Releasing

TODO

## License

MIT © 2020 Andrew Mason
