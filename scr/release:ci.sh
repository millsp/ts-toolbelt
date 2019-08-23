#!/bin/bash

rm -fr dt

npm run test &&

#npm run build &&

git clone --depth=1 https://github.com/DefinitelyTyped/DefinitelyTyped.git dt &&

npx ts-node scr/tools/dt-update-version.ts &&

cd dt &&

git commit -am "prepared tests" &&

npm i &&

npm run test

rm -fr dt
