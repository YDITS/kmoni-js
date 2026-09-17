# Kmoni.js

[Read in English >](./README.md)

## 概要

**Kmoni.js** は、[防災科学技術研究所 (NIED)](https://www.bosai.go.jp/) が提供する強震モニタのJSONデータを扱う TypeScript / JavaScript ライブラリです。

## 利用方法

### 1. パッケージをインストール

```bash
npm i YDITS/kmoni-js
```

### 2. パッケージをインポート

TypeScript:
```ts
import { KmoniClient } = from "kmoni-js";
```

JavaScript (ビルド後):
```js
import { KmoniClient } = from "kmoni-js/dist/index.js";
```

## 開発

### 1. パッケージをインストール

```bash
pnpm i
```

### 2. ビルド

JavaScript にコンパイルします。

```bash
pnpm run build
```

コンパイルされたJavaScriptファイルが `dist/` ディレクトリに出力されます。

## ライセンス

[MIT License](./LICENSE) のもとでライセンスされます。

Copyright © 2025-2026 よね/Yone
