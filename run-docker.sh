#!/bin/bash
docker run -it --rm --name socketio-chat -p 3000:3000 -v "$PWD":/src node:14-alpine ash -c "cd src && yarn install && yarn dev"
