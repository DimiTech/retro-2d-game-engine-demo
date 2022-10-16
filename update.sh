#!/bin/bash

rm -rf ./build/*                             && \
cp ../retro-2d-game-engine/build/* ./build/  && \
cp ../retro-2d-game-engine/index.html .      && \
rsync -r ../retro-2d-game-engine/audio ./    && \
rsync -r ../retro-2d-game-engine/graphics ./ && \
git add ./audio ./graphics                   && \
git commit -am "Update the demo"             && \
git push
