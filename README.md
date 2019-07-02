# @kaartiksingh23/tiny

[![npm (scoped)](https://img.shields.io/npm/v/@kaartiksingh23/tiny.svg)](https://www.npmjs.com/package/@kaartiksingh23/tiny)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@kaartiksingh23/tiny.svg)](https://www.npmjs.com/package/@kaartiksingh23/tiny)

Removes all spaces from a string.

## Install

```
$ npm install @kaartiksingh23/tiny
```

## Usage

```js
const tiny = require("@kaartiksingh23/tiny");

tiny("So much space!");
//=> "Somuchspace!"

tiny(1337);
//=> Uncaught TypeError: Tiny wants a string!
//    at tiny (<anonymous>:2:41)
//    at <anonymous>:1:1
```
