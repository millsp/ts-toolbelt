#!/bin/bash

rm -fr out && tsc --emitDeclarationOnly && 
rm -fr out/types/tst