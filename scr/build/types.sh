#!/bin/bash

npx tsc --emitDeclarationOnly &&

rm -fr out/types/tst

rm out/tsconfig.tsbuildinfo
