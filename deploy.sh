#!/bin/bash

git commit -am "update"
git push origin master

npm run build

cp -R dist dist_temp
git checkout gh-pages
git pull origin gh-pages
shopt -s extglob
rm -rf !(node_modules|.gitignore|.git|dist_temp|images|resources.js|.|..)
cp -R dist_temp/css .
cp -R dist_temp/js .
cp -R dist_temp/fonts .
cp -R dist_temp/img .
cp dist_temp/favicon.ico .
cp dist_temp/index.html .
rm -rf dist_temp
git add .
git commit -am "update gh-pages"
git push origin gh-pages
git checkout master