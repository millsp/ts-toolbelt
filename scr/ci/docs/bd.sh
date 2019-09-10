#!/bin/bash

npm run build:clean
npm run build:docs

# only keep the docs
shopt -s extglob &&
rm -frv !("docs") &&
cp -r docs/* .