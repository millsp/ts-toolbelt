#!/bin/bash

npx typedoc --out docs src --theme node_modules/eledoc/bin/default/ && 
touch docs/.nojekyll && 
git add docs &&
git commit -m "docs: update"
