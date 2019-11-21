#!/usr/bin/env sh

rm -rf build/*

yarn install

cd functions && yarn install && cd ..

yarn build
