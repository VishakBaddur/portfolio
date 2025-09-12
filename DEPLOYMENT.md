# 🚀 Deployment Guide - Vishak Baddur Portfolio

## Option 1: Deploy to Render (Recommended)

### Step 1: Push to GitHub
1. Create a new repository on GitHub called `vishak-portfolio` or similar
2. Push your code to GitHub:

```bash
# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/vishak-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Render
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure the service:
   - **Name**: `vishak-portfolio`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
   - **Plan**: Free (or paid for better performance)

5. Click "Create Web Service"
6. Render will automatically build and deploy your site!

### Step 3: Custom Domain (Optional)
- In Render dashboard, go to your service settings
- Add your custom domain (e.g., `vishakbaddur.dev`)
- Update DNS records as instructed

---

## Option 2: Deploy to Vercel (Alternative)

### Step 1: Install Vercel CLI
```bash
npm i -g vercel
```

### Step 2: Deploy
```bash
# From your project directory
vercel

# Follow the prompts:
# - Link to existing project? No
# - Project name: vishak-portfolio
# - Directory: ./
# - Override settings? No
```

### Step 3: Production Deployment
```bash
vercel --prod
```

---

## Option 3: Deploy to Netlify

### Step 1: Build the project
```bash
npm run build
```

### Step 2: Deploy
1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your `out` folder (if using static export) or connect GitHub
3. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `out` (or `.next` for server-side)

---

## Environment Variables (if needed)

If you add any environment variables later, add them in your deployment platform:

### Render
- Go to your service → Environment
- Add key-value pairs

### Vercel
```bash
vercel env add VARIABLE_NAME
```

### Netlify
- Site settings → Environment variables

---

## Performance Optimization

### For Production
1. **Enable compression** in your deployment platform
2. **Set up CDN** (usually automatic with Vercel/Netlify)
3. **Optimize images** (Next.js does this automatically)
4. **Enable caching** for static assets

### Build Optimization
```bash
# Analyze bundle size
npm run build
npm run analyze  # if you add bundle analyzer
```

---

## Monitoring & Analytics

### Add Google Analytics
1. Get your GA4 tracking ID
2. Add to your layout.tsx:
```tsx
// Add to <head> section
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Monitor Performance
- Use Lighthouse for performance audits
- Monitor Core Web Vitals
- Set up uptime monitoring

---

## Troubleshooting

### Common Issues

1. **Build Fails**
   - Check Node.js version (use 18+)
   - Ensure all dependencies are in package.json
   - Check for TypeScript errors

2. **404 on Refresh**
   - Use Next.js rewrites for SPA behavior
   - Configure redirects in deployment platform

3. **Slow Loading**
   - Optimize images
   - Enable compression
   - Use CDN

### Debug Commands
```bash
# Check build locally
npm run build
npm start

# Check for errors
npm run lint
```

---

## Your Portfolio URL

Once deployed, your portfolio will be available at:
- **Render**: `https://vishak-portfolio.onrender.com`
- **Vercel**: `https://vishak-portfolio.vercel.app`
- **Netlify**: `https://vishak-portfolio.netlify.app`

Or your custom domain if configured!

---

## Next Steps After Deployment

1. **Update your resume** with the portfolio URL
2. **Share on LinkedIn** and other social media
3. **Add to your email signature**
4. **Submit to portfolio showcases**
5. **Monitor analytics** and user feedback

---

**Need help?** Check the deployment platform's documentation or reach out for support!
