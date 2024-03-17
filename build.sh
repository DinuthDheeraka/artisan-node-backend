#!/bin/bash

# Print a message indicating that the build.sh script is running
echo "Running build.sh"

# Navigate to the directory containing your Node.js application
# shellcheck disable=SC2164
cd /home/ubuntu/artisan-node-backend || exit

# Fetch the latest changes from the remote repository
git fetch || exit

# Checkout the master branch
git checkout master || exit

# Pull the latest changes from the master branch
git pull origin master || exit

# Install dependencies using npm
npm install || exit

# Start your Node.js application
npm start
