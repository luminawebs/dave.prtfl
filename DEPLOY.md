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

## 5. Deploying to DigitalOcean

### Option A: DigitalOcean App Platform (Recommended)

The App Platform is a fully managed solution that's very similar to Vercel or Netlify.

1. Go to the [DigitalOcean Control Panel](https://cloud.digitalocean.com/).
2. Click **Create** > **Apps**.
3. Connect your GitHub repository.
4. DigitalOcean should automatically detect the project as a **Static Site**.
5. Set the **Build Command** to `npm run build`.
6. Set the **Publish Directory** to `build`.
7. Add your environment variables in the **Environment Variables** section.
8. Click **Next** and **Create Resources**.

### Option B: DigitalOcean Droplet (Nginx)

If you're using a Droplet, you'll need to serve the static files using a web server like Nginx.

1. Build the project locally or on a CI server: `npm run build`.
2. Upload the `build/` folder to your Droplet (e.g., using `scp` or `rsync`).
3. Configure Nginx to serve the directory. Example configuration for SPA routing:
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       root /var/www/your-project/build;
       index index.html;

       location / {
           try_files $uri $uri/ /index.html;
       }
   }
   ```
4. Restart Nginx: `sudo systemctl restart nginx`.

---

## Troubleshooting

### "Permission denied" when running scripts (Linux/Droplet)

If you see `sh: line 1: .../node_modules/.bin/react-scripts: Permission denied`, it's usually because the execution bit is missing on the package binaries. This commonly happens if `node_modules` were copied from Windows or a zip file.

**Fix:**
Run the following command in your project root to grant execution permissions:
```bash
chmod +x node_modules/.bin/react-scripts
```

Or fix all binaries at once:
```bash
chmod -R +x node_modules/.bin
```

**Recommended:**
Instead of copying `node_modules`, it is better to run `npm install` directly on the server (or use `npm ci` for clean builds).

### Nginx 404 on Refresh
If you can see the home page but get a 404 when you refresh an internal page (like `/blog`), ensure your Nginx configuration has the `try_files` directive as shown in the Droplet section above.
