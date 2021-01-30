#!/bin/bash

mkdir -p out

npx tsc sources/ts-toolbelt.ts -d --emitDeclarationOnly --module amd --outFile out/index.d.ts

# echo "
# declare module 'ts-toolbelt' {
#     import main = require('ts-toolbelt');
#     export = main;
# }
# " >> out/index.d.ts
