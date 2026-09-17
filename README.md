# Kmoni.js

[日本語で読む >](./README_JP.md)

## Overview

**Kmoni.js** is a TypeScript / JavaScript library for handling JSON data provided by the Kyoshin Monitor (kmoni) of [the National Research Institute for Earth Science and Disaster Resilience (NIED)](https://www.bosai.go.jp/) in Japan.

## Usage

### 1. Install

```bash
npm i YDITS/kmoni-js
```

### 2. Import

TypeScript:
```ts
import { KmoniClient } from "kmoni-js";
```

JavaScript (after build):
```js
import { KmoniClient } from "kmoni-js/dist/index.js";
```

## Development

### 1. Install Packages

```bash
pnpm i
```

### 2. Build

Compile to JavaScript

```bash
pnpm run build
```

Emitted JavaScript files will be output to the `dist/` directory.

## License

Licensed under the [MIT License](./LICENSE).

Copyright © 2025-2026 よね/Yone
