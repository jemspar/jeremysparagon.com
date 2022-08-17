#!/usr/bin/env bash

bundle exec jekyll build

rclone sync ./_site s3:jeremysparagon.com -v --exclude "{.git/**}"
