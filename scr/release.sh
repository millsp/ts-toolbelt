#!/bin/bash

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
    git push origin $BRANCH --follow-tags
else
    git push origin $BRANCH
fi;