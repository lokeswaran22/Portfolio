# Deploying to Render

Your project is ready to be deployed to Render as a static site. Here are the steps:

## Option 1: Manual Setup (Recommended)

1.  **Log in** to your [Render dashboard](https://dashboard.render.com/).
2.  Click the **New +** button and select **Static Site**.
3.  Connect your GitHub account if you haven't already.
4.  Search for and select your repository: `lokeswaran22/Portfolio`.
5.  Configure the following settings:
    *   **Name:** (Choose a name for your site, e.g., `my-portfolio`)
    *   **Branch:** `main`
    *   **Root Directory:** (Leave blank / default)
    *   **Build Command:** `npm run build`
    *   **Publish Directory:** `dist`
6.  Click **Create Static Site**.

## Option 2: Infrastructure as Code (Blueprint)

I have included a `render.yaml` file in your repository. You can also use this to deploy:

1.  In the Render dashboard, click **New +** and select **Blueprint**.
2.  Select your repository.
3.  Render will read the `render.yaml` file and automatically configure the service.
4.  Click **Apply**.

## Verification

Once the deployment finishes, Render will provide a URL (e.g., `https://your-site-name.onrender.com`). proper SSL (HTTPS) will be automatically provisioned.
