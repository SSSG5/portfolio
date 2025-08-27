# GitHub Pages Deployment Guide

## Prerequisites
- GitHub account
- Portfolio repository on GitHub
- Node.js and npm installed locally

## Setup Steps

### 1. Update Repository Settings
1. Go to your GitHub repository
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "GitHub Actions"

### 2. Update Homepage URL
In `package.json`, replace `[your-username]` with your actual GitHub username:
```json
"homepage": "https://your-username.github.io/portfolio"
```

### 3. Push Changes
```bash
git add .
git commit -m "Add GitHub Pages deployment configuration"
git push origin main
```

### 4. Automatic Deployment
- The GitHub Action will automatically build and deploy your site
- Check the "Actions" tab in your repository to monitor deployment progress
- Your site will be available at: `https://your-username.github.io/portfolio`

## Manual Deployment (Optional)
If you prefer manual deployment:
```bash
npm run deploy
```

## Troubleshooting
- Ensure your repository is public
- Check that the main branch is named `main` (not `master`)
- Verify the GitHub Actions workflow is enabled
- Check the Actions tab for any error messages

## Custom Domain (Optional)
To use a custom domain:
1. Add your domain to the "Custom domain" field in Pages settings
2. Create a `CNAME` file in the `public` folder with your domain
3. Update your DNS settings accordingly
