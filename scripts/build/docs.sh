#!/bin/bash

# creates folder if it doesn't exist yet
mkdir -p docs

# get the current version of the package
DOCS_VERSION=$(node -p "require('./package.json').version")

# force typedoc to use higher ts version
rm -rf node_modules/typedoc/node_modules/typescript
# !\ can cause bugs, be vigilent with it

# generate docs their own version folder
npx typedoc --out "docs/${DOCS_VERSION}" sources --theme node_modules/eledoc/bin/default/ && 

# & for github to display them correctly
touch "docs/${DOCS_VERSION}/.nojekyll"
