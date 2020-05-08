#!/bin/bash

mkdir -p out

npx tsc src/index.ts --declaration --emitDeclarationOnly --module amd --lib esnext,dom --out out/index.js &&

echo "
declare module 'ts-toolbelt' {
    import main = require('index');
    export = main;
}
" >> out/index.d.ts
