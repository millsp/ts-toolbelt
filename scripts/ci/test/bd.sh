#!/bin/bash

npm run build:clean

npx ts-node scripts/tools/package-test-version.ts &&
npm run build:code &&
npm run build:types