#!/bin/bash

rm -rf ./build/*                            && \
cp ../retro-2d-game-engine/build/* ./build/ && \
cp ../retro-2d-game-engine/index.html .     && \
rsync -r ../retro-2d-game-engine/audio ./   && \
git add ./audio                             && \
git commit -am "Update the demo"            && \
git push
