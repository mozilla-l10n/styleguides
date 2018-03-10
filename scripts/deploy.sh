#! /usr/bin/env bash

# Exit with nonzero exit code if anything fails
set -e

SOURCE_BRANCH="master"
TARGET_BRANCH="gh-pages"

# Pull requests and commits to other branches shouldn't do anything
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]
then
  exit 0
fi

# Get path to current script
script_directory="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
# Get normalized path to root directory
root_directory=$(cd $script_directory/../; pwd)
output_directory="$root_directory/_book"

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

# Initialize the output repository
echo "Initialize Git repository in $output_directory"
cd $output_directory
git init
git config --local push.default simple
git config --local user.name "Travis CI"
git config --local user.email "travis@travis-ci.com"
git checkout -b $TARGET_BRANCH

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Get the deploy key from the secret variable
cd $root_directory
echo "$DEPLOY_KEY" | base64 -d > deploy_key
chmod 600 deploy_key
eval `ssh-agent -s`
ssh-add deploy_key

# Now that we're all set up, we can push.
cd $output_directory
echo "Pushing to $TARGET_BRANCH..."
git push -f $SSH_REPO $TARGET_BRANCH > /dev/null 2>&1

# Kill the ssh-agent to let Travis-CI builds complete
ssh-agent -k
