#!/bin/bash

rm -fr out

npm run build:types &&

npm run build:docs &&

touch out/index.js