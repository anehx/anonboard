#!/bin/bash

curl -sL https://deb.nodesource.com/setup_5.x | sudo -E bash -
apt-get -q -y install nginx sqlite python python-dev python-pip moreutils nodejs

npm i -g bower phantomjs

make -C /var/www install-backend
su vagrant -c 'make -C /var/www install-frontend'
