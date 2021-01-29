#!/bin/bash

npm run build:clean

# clone the previous state of the docs
git clone --depth=1 --branch=gh-pages https://github.com/pirix-gh/ts-toolbelt.git docs

# we only keep the "x.x.x" history docs
cd docs; rm -fr assets modules globals.html index.html; cd ..

# build the new docs on top of that one
npm run build:docs

# get the current version of the package
DOCS_VERSION=$(node -p "require('./package.json').version")

# unpack latest generated docs in root /
rsync -a "${PWD}/docs/${DOCS_VERSION}/" "${PWD}/docs"
