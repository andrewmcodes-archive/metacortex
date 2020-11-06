# `@andrewmcodes/typescript-configs`

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](../../LICENSE.md) [![npm version](https://badge.fury.io/js/%40andrewmcodes%2Ftypescript-configs.svg)](https://badge.fury.io/js/%40andrewmcodes%2Ftypescript-configs.svg)

In TypeScript, the configuration file can extend from a base file. This package provided a few common base configuration files to simplify TypeScript project setup.

To read more about how this extensibility works. See [typescript handbook](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html#configuration-inheritance-with-extends).

Below are two documentation we have also found useful to have on hand while setting up a configuration file.

- [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)
- [Compiler Options](https://www.typescriptlang.org/docs/handbook/compiler-options.html)

## Installation

```bash
$ yarn add --dev @andrewmcodes/typescript-configs
```

## Usage

#### Project that run in the browser

A configuration file is provided that included styles setup and a more conservative build target.

```json
{
  "extends": "@andrewmcodes/typescript-configs/dom.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  }
}
```

#### All Other Project

A base configuration file is also provided if the above does not fit your need.

```json
{
  "extends": "@andrewmcodes/typescript-configs/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": "."
  }
}
```

#### Common Got Ya

##### Type Checking does not honour `skipLibCheck: true` setting

There are times when the type failure occur inside of a library your project is consuming, and having `skipLibCheck: true` does not resolved it. In this scenario, add an `exclude` option to your `tsconfig.json`.

eg.

```json
{
  "extends": "@andrewmcodes/typescript-configs/base.json",
  "compilerOptions": {
    "baseUrl": ".",
    "rootDir": ".",
    "exclude": ["./node_modules/**/*"]
  }
}
```
