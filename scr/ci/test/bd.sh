#!/bin/bash

npm run build:clean

npx ts-node scr/tools/package-test-version.ts &&
npm run build:code &&
npm run build:types