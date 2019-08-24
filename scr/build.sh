#!/bin/bash

rm -fr out

npm run build:types &&

touch out/index.js