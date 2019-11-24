#!/usr/bin/env sh

export CI=true

yarn test
yarn build
