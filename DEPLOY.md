# Deployment Guide

This project is a React application bootstrapped with Create React App. This guide provides instructions for deploying the application to various hosting platforms.

## Prerequisites

Before deploying, ensure you have the following environment variables configured:

- `REACT_APP_EMAILJS_PUBLIC_KEY`: EmailJS public key.
- `REACT_APP_EMAILJS_SERVICE_ID`: EmailJS service ID.
- `REACT_APP_EMAILJS_TEMPLATE_ID`: EmailJS template ID.
- `REACT_APP_RECIPIENT_EMAIL`: Recipient email for form submissions.
- `REACT_APP_CONTENTFUL_SPACE_ID`: Contentful space ID (if using Contentful).
- `REACT_APP_CONTENTFUL_ACCESS_TOKEN`: Contentful delivery access token.
- `REACT_APP_CONTENTFUL_PREVIEW_TOKEN`: Contentful preview access token (optional).
- `REACT_APP_CLARITY_PROJECT_ID`: Microsoft Clarity project ID.

## 1. Local Build

To create a production-ready build locally:

```bash
npm run build
```

The build assets will be generated in the `build/` directory.

## 2. Deploying to Vercel (Recommended)

Vercel is the easiest way to deploy React applications.

1. Install the Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project root.
3. Follow the prompts to connect your account and deploy.
4. Add the environment variables listed above in the Vercel dashboard.

> [!NOTE]
> The project includes a `vercel.json` file for proper client-side routing.

## 3. Deploying to Netlify

1. Push your code to a GitHub/GitLab/Bitbucket repository.
2. Connect the repository to Netlify.
3. Set the build command to `npm run build` and the publish directory to `build`.
4. Add the environment variables in the Netlify site settings.
5. Add a `_redirects` file to the `public` folder with the content `/* /index.html 200` to handle SPA routing.

## 4. Deploying to GitHub Pages

1. Install the `gh-pages` package: `npm install gh-pages --save-dev`
2. Add a `homepage` field to your `package.json`: `"homepage": "https://your-username.github.io/your-repo-name"`
3. Add the following scripts to `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Run `npm run deploy`.

---

## CI/CD Verification

The project includes a GitHub Action in `.github/workflows/verify-build.yml` that automatically verifies the build on every push or pull request to the `main` branch.
