#!/usr/bin/env sh

export CI=true

echo 'skipping delete node_modules'
# echo 'delete existing node_modules'
# rm -rf node_modules &
# rm -rf src/node_modules &
# wait

echo 're-install node dependices'
yarn install &
cd src && yarn install && cd .. &
wait

echo 'run gulp'
gulp

echo 'run test'
yarn test &
yarn build &
wait

echo 'deploy'
firebase deploy -f --project portfolio-react-staging-7e604 --non-interactive --message "local test deploy"