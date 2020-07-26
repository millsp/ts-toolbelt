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
    npx standard-version --skip.changelog &&  # skip changelog
    git push origin $BRANCH                   # not a release
else
    npx standard-version &&                   # gen changelog

    if [ "$RELEASE" = "false" ]; then
        git push origin $BRANCH
    else
        git push origin $BRANCH --follow-tags # only releases
    fi;
fi;

# Delete the tags that `standard-version` created
# but that we don't want when it's not a reslease
git fetch --prune origin "+refs/tags/*:refs/tags/*"