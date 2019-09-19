#!/bin/bash

# npm run build:clean
npm run build:docs

# get the current version of the package
DOCS_VERSION=$(node -p "require('./package.json').version")

rsync -a "$PWD/docs/" "${PWD}/docs/${DOCS_VERSION}"
