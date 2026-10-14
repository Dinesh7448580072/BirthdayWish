# 🎂 Birthday Surprise Website

A beautiful, romantic, interactive birthday surprise website built with React, Framer Motion, and Tailwind CSS. Designed as a personal digital love letter for someone special.

## ✨ Features

- **Magical Opening Screen** — Animated envelope with interactive reveal
- **Birthday Celebration** — Animated cake with interactive candles and confetti
- **Personal Love Letter** — Typewriter text reveal with elegant styling
- **Photo Memories Gallery** — Display your favorite photos with captions
- **Surprise Gift Box** — Interactive gift reveal with heartfelt message
- **Grand Finale** — Full-screen celebration with replay option
- **Smooth Animations** — Framer Motion transitions and effects
- **Responsive Design** — Beautiful on mobile, tablet, and desktop
- **Optional Music** — Background audio support (not autoplay)
- **Accessibility** — Keyboard navigation, reduced-motion support, semantic HTML

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for Production
```bash
npm run build
```
The optimized site will be in the `dist/` folder.

## 📝 Customization

### Edit the Birthday Message
All content is in one file: **`src/data/birthdayContent.js`**

Open this file and replace the placeholder values:
- `YOUR_GIRLFRIEND_NAME` → Her name
- `YOUR_LOVE_LETTER_PARAGRAPH_1-4` → Your personal love letter
- `YOUR_CAPTION_1-6` → Photo captions
- `YOUR_SURPRISE_MESSAGE_HERE` → Final heartfelt message
- `YOUR_FINAL_MESSAGE_HERE` → Closing thought

**You do NOT need to modify any component files.**

### Add Photos

1. Place your photos in: `public/images/`
2. Update the file paths in `src/data/birthdayContent.js`:
   ```javascript
   photos: [
     {
       src: "/images/photo-1.jpg",
       caption: "Your caption here"
     },
     // Add more photos...
   ]
   ```

**Supported formats:** `.jpg`, `.jpeg`, `.png`, `.webp`  
**Recommended size:** 800×600px or similar  
**Important:** If a photo is missing, the website won't break — it shows a placeholder.

### Add Background Music

1. Place your music file in: `public/audio/`
2. Update `src/data/birthdayContent.js`:
   ```javascript
   music: {
     enabled: true,
     src: "/audio/your-song.mp3"
   }
   ```

**Important:** Use only music you have the right to use:
- Your own recordings
- Royalty-free music (Pixabay, Free Music Archive, etc.)
- Creative Commons licensed music

**The music will NOT autoplay.** Users must click the music button in the bottom-right corner to play.

## 🌐 Free Deployment

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Update `vite.config.js` with your repo name:
   ```javascript
   base: '/your-repo-name/'
   ```
3. Push your code to `main` branch
4. Go to Settings → Pages → Deploy from branch `gh-pages`
5. Run: `npm run build`
6. Deploy the `dist` folder to GitHub Pages using `gh-pages` or GitHub Actions

### Option 2: Cloudflare Pages

1. Push your code to GitHub
2. Log in to [Cloudflare](https://dash.cloudflare.com)
3. Go to Pages → Create a project
4. Select your GitHub repository
5. Build command: `npm run build`
6. Build output directory: `dist`
7. Deploy!

### Option 3: Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) → New site from Git
3. Connect your repository
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy!

## 📁 Project Structure

```
birthday-surprise/
├── src/
│   ├── components/
│   │   ├── IntroScreen.jsx          # Opening envelope
│   │   ├── BirthdayHero.jsx         # Birthday greeting & cake
│   │   ├── BirthdayCake.jsx         # Animated birthday cake
│   │   ├── LoveLetter.jsx           # Personal letter
│   │   ├── MemoryGallery.jsx        # Photo gallery
│   │   ├── SurpriseReveal.jsx       # Gift box reveal
│   │   ├── FinalScreen.jsx          # Grand finale
│   │   ├── FloatingHearts.jsx       # Background particles
│   │   └── MusicToggle.jsx          # Music control
│   ├── hooks/
│   │   └── useConfetti.js           # Confetti effect hook
│   ├── data/
│   │   └── birthdayContent.js       # ⭐ EDIT THIS FILE
│   ├── App.jsx                       # Main app
│   ├── main.jsx                      # Entry point
│   └── index.css                     # Styles & animations
├── public/
│   ├── images/                       # 📷 Add photos here
│   └── audio/                        # 🎵 Add music here
├── package.json
├── vite.config.js
├── tailwind.config.js
├── index.html
└── README.md
```

## 🎨 Design Features

- **Color Palette:** Soft blush pink, lavender, champagne gold, rose, and cream
- **Typography:** Elegant serif (Playfair Display) + clean sans-serif (Quicksand) + cursive (Dancing Script)
- **Animations:** Smooth transitions, floating particles, typewriter effects, confetti bursts
- **Effects:** Glass-morphism cards, gradient text, glowing buttons, parallax elements
- **Responsive:** Mobile-first approach, works great on all screen sizes
- **Performance:** Optimized animations, minimal dependencies, fast load times

## ⚙️ Technology Stack

- **React 19** — UI framework
- **Vite 8** — Build tool & dev server
- **Framer Motion 11** — Smooth animations
- **Tailwind CSS 3** — Styling
- **Lucide React** — Icons

## 🔧 Development Commands

```bash
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 📱 Browser Support

Works on all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile, etc.)

## ♿ Accessibility

- Semantic HTML throughout
- Keyboard navigation support
- ARIA labels for interactive elements
- Respects `prefers-reduced-motion` setting
- Good color contrast ratios
- Readable font sizes

## 🎬 Animation Performance

The website is optimized for smooth 60fps animations on average devices:
- CSS animations for lightweight effects
- Framer Motion for complex transitions
- Lazy rendering of heavy elements
- Respects reduced-motion preferences

## 🐛 Troubleshooting

**Photos not showing?**
- Check the file path in `birthdayContent.js` matches the actual file location
- Ensure images are in `public/images/`
- Try different image format (JPEG instead of PNG, etc.)

**Music not playing?**
- Make sure `enabled: true` in `birthdayContent.js`
- Check the file path is correct
- Ensure you have rights to use the audio file
- Users must click the play button (no autoplay)

**Build errors?**
- Delete `node_modules` and `dist` folders
- Run `npm install` again
- Try `npm run build` again

**Animations stuttering on mobile?**
- Reduce the number of floating particles
- Disable music
- Close other browser tabs

## 📄 License

This project is free to use and customize for personal use.

## 💝 Tips

- Make your love letter personal and heartfelt
- Choose photos that capture your favorite memories together
- Use royalty-free music that matches the mood
- Test on mobile before sharing the link
- Share the link once deployed (not localhost)

---

**Made with love. May this digital gift bring a smile to her face! 💕**
