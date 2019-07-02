# @kaartiksingh23/tiny

[![npm (scoped)](https://img.shields.io/npm/v/@kaartiksingh23/tiny.svg)](https://www.npmjs.com/package/@kaartiksingh23/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@kaartiksingh23/tiny.svg)](https://www.npmjs.com/package/@kaartiksingh23/tiny)

String Utility Functions

## Install

```
$ npm install @kaartiksingh23/tiny
```

## Usage

```js
const tiny = require("@kaartiksingh23/tiny");

tiny.replace("So much much space!","much","little");
//=> "So little little space!"

tiny.replace(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1

```
