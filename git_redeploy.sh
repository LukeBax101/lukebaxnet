#!/usr/bin/env bash

npm i
npm run build
docker-compose -f lukebaxnet-compose.yml down
docker-compose -f lukebaxnet-compose.yml up --build -d
