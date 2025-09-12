#!/bin/bash

echo "🚀 Deploying Vishak Baddur's Portfolio..."

# Check if git is initialized
if [ ! -d ".git" ]; then
    echo "Initializing Git repository..."
    git init
fi

# Add all files
echo "Adding files to Git..."
git add .

# Commit changes
echo "Committing changes..."
git commit -m "Deploy portfolio website - $(date)"

# Check if remote exists
if ! git remote | grep -q origin; then
    echo "⚠️  No remote repository found!"
    echo "Please create a GitHub repository and run:"
    echo "git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git"
    echo "git push -u origin main"
    exit 1
fi

# Push to GitHub
echo "Pushing to GitHub..."
git push origin main

echo "✅ Code pushed to GitHub!"
echo ""
echo "Next steps:"
echo "1. Go to https://render.com"
echo "2. Create a new Web Service"
echo "3. Connect your GitHub repository"
echo "4. Use these settings:"
echo "   - Build Command: npm install && npm run build"
echo "   - Start Command: npm start"
echo "   - Environment: Node"
echo ""
echo "Your portfolio will be live in a few minutes! 🎉"
