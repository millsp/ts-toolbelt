#!/bin/bash

RELEASE=$(node -p "require('./package.json').version.split('.')[2] === '0'") &&

# Make sure that we passed all tests
npm run test &&

# Get the name of the current branch
BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD` &&

# Sort package.json, keeps neat
npx sort-package-json &&

# Bump the version & changelogs
npx standard-version &&

# Publish the current branch origin
if [ "$BRANCH" = "master" ]; then
    if [ "$1" = "--no-tags" ]; then             # disable tags
        git push origin $BRANCH
    elif [ "$RELEASE" = "true" ]; then
        git push origin $BRANCH --follow-tags   # only releases
    fi;
else
    git push origin $BRANCH                     # on branches
fi;
