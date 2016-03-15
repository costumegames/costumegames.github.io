jekyll build
mv _site ../
git checkout master
sudo rm -r ./*
mv ../_site/* ./
