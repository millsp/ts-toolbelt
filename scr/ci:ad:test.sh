#!/bin/bash

(rm -fr dt; git clone --depth=1 https://github.com/DefinitelyTyped/DefinitelyTyped.git dt) &&

npx ts-node scr/tools/dt-update-version.ts &&

cd dt &&

git commit -am "prepared tests" &&

npm i &&

npm run test &&

(cd .. ; rm -fr dt)
