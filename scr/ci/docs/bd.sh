#!/bin/bash

npm run build:clean
npm run build:docs

rm -frv !("docs") &&

cp -r docs/* .