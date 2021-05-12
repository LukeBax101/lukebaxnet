#!/usr/bin/env bash

git stash
git pull
git stash pop
npm i
npm run build
docker-compose -f lukebaxnet-compose.yml down
docker-compose -f lukebaxnet-compose.yml up --build -d
