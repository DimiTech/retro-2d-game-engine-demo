#!/bin/bash

rm -rf ./build/*                            && \
cp ../retro-2d-game-engine/build/* ./build/ && \
cp ../retro-2d-game-engine/index.html .     && \
git commit -am "Update the demo"            && \
git push
