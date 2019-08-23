#!/bin/bash

rm -fr dt

npm run build &&
# npm run test && no need, build === test

git clone --depth=1 https://github.com/DefinitelyTyped/DefinitelyTyped.git dt &&

npx ts-node release:ci/dt-update-version.ts &&

cd dt &&

git commit -am "prepared tests" &&

npm i &&

npm run test

rm -fr dt
