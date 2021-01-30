#!/bin/bash

# Make sure that we passed all tests
npm run test &&

# Get the name of the current branch
BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD` &&

# Sort package.json, keeps neat
npx sort-package-json &&

# check if we have to do a release
RELEASE=$(node -p "require('./package.json').version.split('.')[2] === '0'") &&

# Publish the current branch origin
if [ "$BRANCH" != "master" ]; then
    npx standard-version --skip.tag &&        # skip changelog
    git push origin $BRANCH                   # not a release
else
    if [ "$RELEASE" = "false" ]; then
        npx standard-version --skip.tag &&    # gen changelog
        git push origin $BRANCH
    else
        npx standard-version &&               # gen changelog
        git push origin $BRANCH --follow-tags # only releases
    fi;
fi;
