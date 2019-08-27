#!/bin/bash

# npm run build &&

npm run test &&

# Sort the package.json to keep it neat
npx sort-package-json &&

# Get the name of the current working branch
BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD` &&

# Publish the current branch
if [ "$BRANCH" = "master" ]; then
    npm run build:docs &&

    npx standard-version &&

    git push --follow-tags origin $BRANCH
else
    git push origin $BRANCH
fi;