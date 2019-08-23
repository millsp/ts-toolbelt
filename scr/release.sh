#!/bin/bash

npm run test &&

#npm run build &&

# # Sort the package.json to keep it neat
npx sort-package-json &&

# # Get the name of the current working branch
BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD` &&

# # Generate the changelog then push to the current branch
npx standard-version &&

# # Publish the current branch
if [ "$BRANCH" = "master" ]; then
    npx run docs
    git push --follow-tags origin $BRANCH
else
    git push origin $BRANCH
fi;