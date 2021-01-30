#!/bin/bash

mkdir -p out

npx tsc sources/ts-toolbelt.ts -d --emitDeclarationOnly --module amd --outFile out/index.d.ts

