# 🚀 Deployment Guide

Quick reference for deploying your birthday website for free.

## Pre-Deployment Checklist

```bash
# 1. Test locally
npm run dev
# Open http://localhost:5173 and test all features

# 2. Build for production
npm run build

# 3. Check dist folder exists with files
ls dist/
```

## Option 1: GitHub Pages (Recommended for Beginners)

### Setup (One Time)

1. **Create GitHub account** at https://github.com

2. **Create new repository:**
   - Go to https://github.com/new
   - Repository name: `birthday-surprise`
   - Public: ✅ Yes
   - Initialize: ❌ No (don't add README)
   - Click "Create repository"

3. **Initialize git locally:**
   ```bash
   cd path/to/birthday-surprise
   git init
   git add .
   git commit -m "Initial commit: birthday surprise website"
   ```

4. **Add remote and push:**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/birthday-surprise.git
   git branch -M main
   git push -u origin main
   ```

5. **Set up GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Build and deployment":
     - Source: `Deploy from a branch`
     - Branch: `main` / `/(root)`
   - Click Save

6. **GitHub Actions will deploy automatically** 🎉
   - Wait 1-2 minutes for deployment
   - Your site will be at: `https://YOUR_USERNAME.github.io/birthday-surprise/`

### Updates

Every time you make changes:

```bash
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

GitHub will automatically rebuild and deploy.

---

## Option 2: Cloudflare Pages (Fastest)

### Setup (One Time)

1. **Sign up** at https://dash.cloudflare.com (free account)

2. **Connect GitHub:**
   - Click **Pages** in sidebar
   - Click **Create a project**
   - Click **Connect to Git**
   - Authorize Cloudflare to access GitHub
   - Select your `birthday-surprise` repository

3. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variables: Leave empty
   - Click **Save and Deploy**

4. **Your site is live!** 🎉
   - Cloudflare auto-generates a URL like `birthday-surprise.pages.dev`
   - Custom domain available (optional)

### Updates

Push to GitHub and Cloudflare auto-deploys:

```bash
git add .
git commit -m "Update photos and message"
git push origin main
```

---

## Option 3: Netlify (Very Easy)

### Setup (One Time)

1. **Sign up** at https://netlify.com (free account)

2. **Deploy via GitHub:**
   - Click **Add new site**
   - Click **Import an existing project**
   - Click **GitHub**
   - Authorize Netlify
   - Select `birthday-surprise` repo

3. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Click **Deploy site**

4. **Your site is live!** 🎉
   - Get a free URL like `your-site.netlify.app`
   - Optional: Custom domain, custom subdomain

### Updates

Auto-deploys when you push to GitHub:

```bash
git add .
git commit -m "Update"
git push origin main
```

---

## Sharing the Link

Once deployed, share the live URL with her!

**Example links:**
- GitHub Pages: `https://yourname.github.io/birthday-surprise/`
- Cloudflare: `https://birthday-surprise.pages.dev/`
- Netlify: `https://your-site.netlify.app/`

**Tips:**
- Test the link on mobile before sending
- Use a URL shortener if needed (bit.ly, etc.)
- Send with a cute message 💕

---

## Custom Domain (Optional)

Want `birthday-for-sarah.com` instead? 

### For GitHub Pages:
1. Buy domain (GoDaddy, Namecheap, etc.)
2. Settings → Pages → Custom domain
3. Add DNS records (instructions provided)

### For Cloudflare/Netlify:
1. Buy domain
2. Settings → Domain Management → Add domain
3. Follow their DNS setup steps

---

## Troubleshooting Deployment

### Site shows 404 error
- **GitHub Pages:** Make sure branch is set to `main` in Settings → Pages
- **Cloudflare:** Check Build output directory is `dist`
- **Netlify:** Verify Build command is `npm run build`

### Files/images not loading
- Check build succeeded: `npm run build`
- Verify `dist/` folder has files
- Clear browser cache (Ctrl+Shift+Delete)

### Changes not appearing after push
- Wait 1-2 minutes for deployment to finish
- Check deployment status in your platform's dashboard
- Try refreshing with Ctrl+Shift+R (hard refresh)

### Need to update later?
```bash
# Make changes to birthdayContent.js, photos, etc.
npm run build  # Test locally first
git add .
git commit -m "Update message/photos"
git push origin main
# Site auto-updates in 1-2 minutes!
```

---

## Performance Tips

The website is already optimized, but here's how to keep it fast:

- **Images:** Keep under 1MB each
- **Music:** Use MP3 format (most efficient)
- **Browser cache:** Cloudflare & Netlify handle this automatically
- **CDN:** All platforms use global CDN (fast from anywhere)

---

## Security & Privacy

- **No backend needed** — Everything runs on the browser
- **No cookies** — Nothing is tracked
- **No personal data stored** — Just static files
- **HTTPS by default** — All platforms provide free SSL
- **Completely private** — Only share link with intended person

---

## Need Help?

**GitHub Pages:**
- Docs: https://pages.github.com/

**Cloudflare Pages:**
- Docs: https://developers.cloudflare.com/pages/

**Netlify:**
- Docs: https://docs.netlify.com/

---

## Summary

| Platform | Setup Time | Deploy Time | Cost | Custom Domain |
|----------|-----------|-------------|------|---|
| GitHub Pages | 5 min | 2 min | Free | Yes |
| Cloudflare | 3 min | 1 min | Free | Yes |
| Netlify | 3 min | 1 min | Free | Yes |

**Recommendation:** Start with **GitHub Pages** or **Cloudflare** for simplicity. Both are free and fast!

---

**Your birthday website is ready to go live! 💕**
