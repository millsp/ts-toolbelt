#!/bin/bash

npm test &&

npm run build &&

# # Sort the package.json to keep it neat
npx sort-package-json &&

# # Get the name of the current working branch
BRANCH=`git rev-parse --symbolic-full-name --abbrev-ref HEAD` &&

# # Generate the changelog then push to the current branch
npx standard-version &&

# # Publish the current branch as a tagged npm package
if [ "$BRANCH" = "master" ]; then
    git push --follow-tags origin $BRANCH &&
    npm publish
else
    git push origin $BRANCH &&
    npm publish --tag $BRANCH  
fi;