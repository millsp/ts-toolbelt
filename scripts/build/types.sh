#!/bin/bash

mkdir -p out

npx tsc sources/index.ts -d --emitDeclarationOnly --outDir out
