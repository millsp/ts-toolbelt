#!/bin/bash

sleep 60s # we'll just wait a little for it to get propagated

# we replace the travis branch name with "latest" if "master"
PKG_VERSTAG=$(echo ${TRAVIS_BRANCH//master/latest})

# we need to compare the current push and published versions
PKG_VERSION=$(node -p "require('./package.json').version")
PUB_VERSION=$(npm info .@${PKG_VERSTAG} version)

if [ $PKG_VERSION != $PUB_VERSION ]; then
    echo 
    exit 1 # travis has just failed the build, force to fail
fi

exit 0
