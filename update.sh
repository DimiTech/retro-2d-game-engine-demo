#!/bin/bash

rm -rf ./build/*                            && \
cp ../retro-2d-game-engine/build/* ./build/ && \
git commit -am "Update the demo"            && \
git push
