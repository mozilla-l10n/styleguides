# Scripts

## `deploy.sh`: set up or rotate deploy keys

1. Generate a new key: `ssh-keygen -t rsa -b 4096 -C "travis@travis-ci.com" -f "./deploy_key" -N ""`
1. Convert the private key to base64: `cat ./deploy_key | base64 -w 0 > deploy_key.base64`
1. Add the public key `deploy_key.pub` as a [deploy key](https://developer.github.com/v3/guides/managing-deploy-keys/#deploy-keys) for the repository with write access.
1. Go to your repository settings in Travis CI and put the content of `deploy_key.base64` into a new [environment variable](https://docs.travis-ci.com/user/environment-variables/#Defining-Variables-in-Repository-Settings) `DEPLOY_KEY`. Make sure the variable is set as secret!
1. Delete the key from your computer: `rm ./deploy_key ./deploy_key.base64 ./deploy_key.pub`
