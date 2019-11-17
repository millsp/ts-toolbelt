#!/bin/bash

# Make sure that we passed all tests
npm run test &&

npm run build:code &&
npm run build:types &&

# Get the name of the current branch
BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD` &&

# Sort package.json, keeps neat
npx sort-package-json &&

# Bump the version & changelogs
npx standard-version &&

# check if we have to do a release
RELEASE=$(node -p "require('./package.json').version.split('.')[2] === '0'") &&

# Publish the current branch origin
if [ "$BRANCH" != "master" ] || [ "$1" = "--no-tags" ] || [ "$RELEASE" = "false" ]; then
    git push origin $BRANCH                 # no a release
else
    git push origin $BRANCH --follow-tags   # only releases
fi;
