## Prerequisites

[Node.js](http://nodejs.org/) >= v10 must be installed.

## Lerna

This project uses [lerna](https://github.com/lerna/lerna) to manage its monorepo, see the lerna documentation for more commands.

## Installation

- Running `npm bootstrap` in the project's root directory will install everything you need for development.

## Demo Development Server

- `npm start` in a specific package's folder will run a development server at [http://localhost:1234](http://localhost:1234) with hot module reloading.

To run a development server from the root, use `npx lerna run`

## Running Lint

- `npm lint` will run eslint in all packages at once.

- `cd packages/react-vitae && npm lint` will run eslint in a specific package.

## Running Tests

- `npm test` will run the tests in all packages at once.

- `cd packages/react-vitae && npm test` will run the tests in a specific package.

## Building

- `cd packages/react-vitae && npm run build` will build a specific package.

- `npm run clean` will clean all the packages, removing the cache, `node_modules` and built resources.

- `cd packages/react-vitae && npm run clean` will clean a specific package.

## Publishing

Publishing is done automatically through travis.
