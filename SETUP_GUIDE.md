# 📖 Setup Guide: How to Personalize Your Birthday Website

This guide walks you through adding your own photos, messages, and music to make the birthday website truly personal.

## Step 1: Edit the Birthday Messages

**File:** `src/data/birthdayContent.js`

This is the **only file** you need to edit for all content.

### Her Name
```javascript
name: "YOUR_GIRLFRIEND_NAME",
```
Replace `YOUR_GIRLFRIEND_NAME` with her actual name.

### Write Your Love Letter

The love letter has 4 paragraphs. Edit each one:

```javascript
loveLetter: {
  title: "A Letter From My Heart",
  paragraphs: [
    "PARAGRAPH 1 - Tell her what she means to you...",
    "PARAGRAPH 2 - Share a favorite memory...",
    "PARAGRAPH 3 - Talk about the future together...",
    "PARAGRAPH 4 - Close with your deepest feelings...",
  ],
  closing: "Forever & Always Yours",
  signature: "With all my love ❤️",
},
```

**Pro Tips:**
- Be genuine and specific (mention real moments, inside jokes, promises)
- Use line breaks `\n` for longer paragraphs
- The text will appear with a typewriter effect
- Around 150-200 words per paragraph works well

### Surprise Message

The gift box reveals a special message:

```javascript
surprise: {
  revealMessage:
    "YOUR_SURPRISE_MESSAGE_HERE — Write something heartfelt...",
},
```

### Final Message

The grand finale shows a closing message:

```javascript
finale: {
  mainMessage: "Happy Birthday, YOUR_GIRLFRIEND_NAME!",
  subMessage: "YOUR_FINAL_MESSAGE_HERE — A final thought or wish...",
},
```

---

## Step 2: Add Your Photos

### Where to Put Photos

1. Open the `public/images/` folder
2. Place your photo files there (`.jpg`, `.png`, `.webp`)

### Update Photo Paths

In `src/data/birthdayContent.js`, update the `photos` array:

```javascript
photos: [
  {
    src: "/images/memory-1.jpg",
    caption: "First caption — describe this moment"
  },
  {
    src: "/images/memory-2.jpg",
    caption: "Second caption — what makes this special"
  },
  {
    src: "/images/memory-3.jpg",
    caption: "Third caption — how you felt"
  },
  // Add more as needed
],
```

### Photo Guidelines

- **File types:** `.jpg`, `.jpeg`, `.png`, `.webp`
- **Recommended size:** 800×600px (or similar aspect ratio)
- **File size:** Keep under 1MB for fast loading
- **Count:** You can add as many as you want (shown in a grid)

### What if a photo is missing?

If a photo file doesn't exist, the website won't break. Instead, it shows a placeholder with:
- A camera icon (📷)
- The file path
- A "Photo not found" message

This is intentional — you can add photos later without changing code!

---

## Step 3: Add Background Music (Optional)

### Where to Put Music

1. Open the `public/audio/` folder
2. Place your audio file there (`.mp3` format recommended)

### Enable Music

In `src/data/birthdayContent.js`:

```javascript
music: {
  enabled: true,
  src: "/audio/birthday-song.mp3",
},
```

### Music Guidelines

**Important:** Only use music you have the right to use!

**Legal options:**
- **Your own recordings** — No permission needed
- **Royalty-free music:**
  - [Pixabay Music](https://pixabay.com/music/)
  - [Free Music Archive](https://freemusicarchive.org/)
  - [Incompetech](https://incompetech.com/)
  - [YouTube Audio Library](https://www.youtube.com/audiolibrary)
- **Creative Commons music** — Download with proper attribution

**Music behavior:**
- Music does NOT autoplay (user must click the play button)
- Volume button appears in bottom-right corner
- Loops continuously while playing
- Works in all modern browsers

---

## Step 4: Customize Other Details

### Birthday Greeting Text

```javascript
birthday: {
  greeting: "Happy Birthday",        // Main greeting
  subtitle: "My Love",               // Subtitle
  wishButtonText: "Make a Wish ✨",  // Button text
  afterWishMessage: "May all your dreams come true! 🌟",
},
```

### Intro Screen Text

```javascript
intro: {
  topText: "I made something special for you...",
  buttonText: "Open Your Surprise 💝",
},
```

### Surprise Button Text

```javascript
surprise: {
  teaser: "I have one more surprise for you...",
  buttonText: "Open Your Gift 🎁",
  revealTitle: "My Promise To You",
},
```

### Final Screen Text

```javascript
finale: {
  replayText: "Relive This Moment 💕",
  footerText: "Made with love, just for you 💝",
},
```

---

## Step 5: Run and Test Locally

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start the dev server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   - Go to [http://localhost:5173](http://localhost:5173)
   - Click through the website
   - Check all animations, photos, and text

4. **Test on mobile:**
   - Open the same URL from your phone on the same WiFi
   - Verify layout and touch interactions

---

## Step 6: Deploy Online

### Option A: GitHub Pages (Free)

1. **Create a GitHub account** (if you don't have one)

2. **Create a new repository:**
   - Name: `your-username.github.io` or `birthday-surprise`
   - Make it public
   - Do NOT initialize with README

3. **Push your code:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: birthday surprise website"
   git remote add origin https://github.com/your-username/birthday-surprise.git
   git branch -M main
   git push -u origin main
   ```

4. **If using a non-`.github.io` repo**, update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/birthday-surprise/',
     // ... rest of config
   })
   ```
   Then rebuild:
   ```bash
   npm run build
   ```

5. **Go to Settings → Pages:**
   - Source: Deploy from a branch
   - Branch: `gh-pages`
   - Folder: `/(root)`

6. **GitHub Actions will auto-deploy.** Your site will be live at:
   - `https://your-username.github.io/birthday-surprise/`

### Option B: Cloudflare Pages (Free + Fast)

1. **Push code to GitHub** (same as above)

2. **Go to [dash.cloudflare.com](https://dash.cloudflare.com)**

3. **Click "Pages" → "Create a project" → "Connect to Git"**

4. **Select your GitHub repo**

5. **Build settings:**
   - Build command: `npm run build`
   - Build output directory: `dist`

6. **Deploy!** Your site goes live instantly at a Cloudflare URL

### Option C: Netlify (Free + Easy)

1. **Push code to GitHub**

2. **Go to [netlify.com](https://netlify.com) → Sign up with GitHub**

3. **"New site from Git" → Select your repo**

4. **Build settings:**
   - Build command: `npm run build`
   - Publish directory: `dist`

5. **Deploy!** Get a free Netlify domain (e.g., `your-site.netlify.app`)

---

## Checklist Before Sharing

- ✅ Changed her name in `birthdayContent.js`
- ✅ Wrote your personal love letter
- ✅ Added your favorite photos
- ✅ Added photo captions
- ✅ (Optional) Added background music
- ✅ Tested on desktop and mobile
- ✅ Built the production version: `npm run build`
- ✅ Deployed to GitHub Pages / Cloudflare Pages / Netlify
- ✅ Tested the deployed link on multiple devices
- ✅ Copied the final URL to share with her

---

## Troubleshooting

### Photos not loading?
- Check file is actually in `public/images/` folder
- Check file name spelling in `birthdayContent.js` matches exactly
- Try a different image format (JPG instead of PNG)
- Check file size (should be under 1-2MB)

### Music not playing?
- Make sure `enabled: true` in `birthdayContent.js`
- Check file is in `public/audio/` folder
- Try `.mp3` format (most compatible)
- Some browsers may block autoplay (correct behavior — users must click play)

### Site looks broken after deployment?
- Check `vite.config.js` has correct `base:` path
- Run `npm run build` again
- Clear browser cache (Ctrl+Shift+Delete on Chrome)
- Try from a private/incognito browser tab

### Animations laggy on mobile?
- The site is optimized, but older phones may stutter
- Try reducing the number of floating particles in CSS
- Disable music (it helps performance)
- Close other browser tabs

---

## Common Edits Quick Reference

| What | Where | Example |
|------|-------|---------|
| Her name | `birthdayContent.js` line 11 | `name: "Sarah"` |
| Love letter | `birthdayContent.js` lines 38-42 | `paragraphs: ["Paragraph 1...",...]` |
| Photo paths | `birthdayContent.js` lines 59-80 | `src: "/images/us.jpg"` |
| Photo captions | `birthdayContent.js` lines 59-80 | `caption: "Our first date"` |
| Music file | `birthdayContent.js` line 90 | `src: "/audio/song.mp3"` |
| Final message | `birthdayContent.js` lines 100-105 | `subMessage: "..."` |

---

## Need More Help?

If something isn't working:

1. **Check the console for errors:** 
   - Open DevTools (F12)
   - Go to Console tab
   - Look for red error messages

2. **Re-read this guide** — Most issues are covered above

3. **Try the examples** — Copy-paste from this guide, then customize

4. **Clear cache and rebuild:**
   ```bash
   rm -rf dist node_modules
   npm install
   npm run build
   ```

---

**You've got this! 💕 Go create something magical!**
