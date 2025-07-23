# Microsoft Clarity Setup Instructions

## Step 1: Create or Access Your Microsoft Clarity Account

1. **Go to Microsoft Clarity**: Visit [https://clarity.microsoft.com/](https://clarity.microsoft.com/)

2. **Sign In**: Use your Microsoft account (Outlook, Hotmail, or work account)
   - If you don't have a Microsoft account, you can create one for free

## Step 2: Create a New Project

1. **Click "Create Project"** or **"+ New Project"**

2. **Fill in Project Details**:
   - **Project Name**: Enter a name like "David Edunest Website" or "Edunest.co"
   - **Website URL**: Enter your website URL (e.g., `https://david.edunest.co` or your domain)
   - **Site Category**: Choose the most appropriate category (likely "Business" or "Education")

3. **Click "Create"**

## Step 3: Get Your Project ID

After creating the project, you'll see a setup page with:

1. **Project ID**: This will be a string like `"abcd1234"` or similar
   - **COPY THIS PROJECT ID** - This is what you need!

2. **Installation Code**: You'll see JavaScript code that looks like this:
   ```html
   <script type="text/javascript">
       (function(c,l,a,r,i,t,y){
           c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
           t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
           y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
       })(window, document, "clarity", "script", "YOUR_PROJECT_ID");
   </script>
   ```
   - The `YOUR_PROJECT_ID` part is what you need to copy

## Step 4: Configure Your Project

1. **Open your `.env` file** in your project root directory

2. **Add your Clarity Project ID**:
   ```env
   # Microsoft Clarity Configuration
   REACT_APP_CLARITY_PROJECT_ID=your_actual_project_id_here
   ```
   
   Replace `your_actual_project_id_here` with the actual ID you copied from Clarity.

   **Example**:
   ```env
   # Microsoft Clarity Configuration
   REACT_APP_CLARITY_PROJECT_ID=abcd1234
   ```

## Step 5: Test the Integration

1. **Restart your development server**:
   ```bash
   npm start
   ```

2. **Check browser console**:
   - Open your browser's Developer Tools (F12)
   - Go to the Console tab
   - You should see: `"Microsoft Clarity initialized successfully"`
   - If you see a warning about project ID not configured, double-check your `.env` file

3. **Verify in Clarity Dashboard**:
   - Go back to [clarity.microsoft.com](https://clarity.microsoft.com)
   - Select your project
   - Within a few minutes, you should start seeing data appear

## Step 6: Deploy to Production

When you deploy your site:

1. **Make sure your production environment** has the same `REACT_APP_CLARITY_PROJECT_ID` environment variable set

2. **Build your project**:
   ```bash
   npm run build
   ```

3. **Deploy** using your preferred method

## Troubleshooting

### "Clarity project ID not configured" Warning
- Check that your `.env` file has the correct variable name: `REACT_APP_CLARITY_PROJECT_ID`
- Restart your development server after adding the environment variable
- Make sure there are no extra spaces or quotes around the project ID

### No Data Appearing in Clarity Dashboard
- Wait 5-10 minutes after setup (data isn't instant)
- Check that your website is actually receiving traffic
- Verify the project ID is correct in your Clarity dashboard
- Check browser network tab to see if requests are being made to `clarity.ms`

### Development vs Production
- Clarity will track both development and production traffic
- You can filter by domain in the Clarity dashboard if needed
- Consider using different Clarity projects for dev/staging/production if desired

## What You'll See in Clarity

Once set up correctly, you'll be able to view:

1. **Session Recordings**: Watch how users interact with your site
2. **Heatmaps**: See where users click, scroll, and spend time
3. **Insights**: Automated analysis of user behavior patterns
4. **Custom Events**: The events we've configured (button clicks, form submissions, etc.)

## Security Note

- Your Clarity Project ID is not sensitive information (it's included in client-side code)
- However, make sure to only share dashboard access with trusted team members
- You can manage project permissions in the Clarity dashboard

## Next Steps

After setup:
1. Let the site run for a day to collect data
2. Review session recordings to understand user behavior
3. Check heatmaps to optimize your layout
4. Use insights to improve user experience

## Need Help?

If you encounter issues:
1. Check the browser console for error messages
2. Verify your project ID in the Clarity dashboard
3. Make sure your `.env` file is properly formatted
4. Restart your development server after making changes
