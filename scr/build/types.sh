#!/bin/bash

mkdir -p out

npx tsc ./src/index.ts --declaration --emitDeclarationOnly --out out/index.js --module amd &&

echo "
declare module 'ts-toolbelt' {
    import main = require('index');
    export = main;
}
" >> out/index.d.ts
