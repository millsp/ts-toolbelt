#!/bin/bash

# creates folder if it doesn't exist yet
mkdir -p docs

# get the current version of the package
DOCS_VERSION=$(node -p "require('./package.json').version")

# generate docs their own version folder
npx typedoc --out "docs/${DOCS_VERSION}" src --theme node_modules/eledoc/bin/default/ && 

# & for github to display them correctly
touch "docs/${DOCS_VERSION}/.nojekyll"
