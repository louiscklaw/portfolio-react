#!/usr/bin/env sh

echo "rebuild"
sh ./build.sh

echo "deploy"
firebase deploy