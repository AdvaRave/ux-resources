#!/bin/bash

npm run build

cp -R dist dist_temp
git checkout gh-pages
git pull origin gh-pages
shopt -s extglob
rm -rf !(node_modules|.gitignore|.git|dist_temp|.|..)
cp -R dist_temp/* .
rm -rf dist_temp
git add .
git commit -am "update gh-pages"
git push origin gh-pages
git checkout master