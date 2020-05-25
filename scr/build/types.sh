#!/bin/bash

mkdir -p out

npx tsc src/index.ts -d --emitDeclarationOnly --module amd --outFile out/index.d.ts &&

echo "
declare module 'ts-toolbelt' {
    import main = require('index');
    export = main;
}
" >> out/index.d.ts
