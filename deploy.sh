#!/bin/bash
PATH=$PATH:$(npm bin)
set -x

# Generate a new index.html with an app shell
./node_modules/.bin/ngu-app-shell --module src/app/app.module.ts \
              --url /loading \
              --insert-module src/app/loading.module.ts \
              --out dist/index.html

# Generate a SW manifest from our app
./node_modules/.bin/ngu-sw-manifest --module src/app/app.module.ts \
                                    --out dist/ngsw-manifest.json

# Set up firebase HTTP/2 push
./node_modules/.bin/ngu-firebase-push --module src/app/app.module.ts

# Copy prebuilt worker into our site
cp node_modules/@angular/service-worker/bundles/worker-basic.min.js dist/

# Copy generated Firebase configuration
cp firebase.json dist/
