#!/bin/bash

npx tsc ./src/index.ts --declaration --out out/bundle.js --module amd &&

(
    rm    out/bundle.js
    touch out/bundle.js
) &&

echo "
import './bundle'

export {Test, A, Any, B, Boolean, C, Class, F, Function, I, Iteration, N, Number, O, Object, S, String, T, Tuple, U, Union} from 'index'
" > out/index.d.ts && touch out/index.js

