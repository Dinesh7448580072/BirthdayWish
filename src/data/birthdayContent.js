/**
 * ═══════════════════════════════════════════════════════
 *  🎂 BIRTHDAY SURPRISE - CONTENT CONFIGURATION
 * ═══════════════════════════════════════════════════════
 *
 *  Edit this file to personalize the birthday website.
 *  You do NOT need to modify any component files.
 *
 *  Simply replace the placeholder values below with
 *  your own messages, photos, and captions.
 *
 * ═══════════════════════════════════════════════════════
 */

const birthdayContent = {
  // ─── Her Name ────────────────────────────────────────
  // Replace with your girlfriend's name
  name: "Jyothika",

  // ─── Intro Screen ───────────────────────────────────
  intro: {
    topText: "I made something special for you...",
    buttonText: "Open Your Surprise 💝",
  },

  // ─── Birthday Greeting ──────────────────────────────
  birthday: {
    greeting: "Happy Birthday",
    subtitle: "My Kuttima",
    wishButtonText: "Make a Wish ✨",
    afterWishMessage: "May all your dreams come true! 🌟",
  },

  // ─── Love Letter ────────────────────────────────────
  // Write your personal love letter here.
  // Use \n for line breaks within paragraphs.
  loveLetter: {
    title: "A Letter From My Heart",
    paragraphs: [
      "Kuttima, you're not just my girlfriend, you're my everything. I look up to you as another mother figure in my life.",
"Kuttima, I know I have done many things wrong that you didn't like, but I promise to become a better person for you.",
"Kuttima, I hope this birthday brings you as much happiness as you bring into my life every day.",
"Kuttima, I hope my Instagram story for you and this way of expressing my love bring happiness to you.",
    ],
    closing: "Forever & Always Yours",
    signature: "With all my love ❤️",
  },

  // ─── Photo Memories ─────────────────────────────────
  // Add your photos to the public/images/ folder.
  // Then update the paths and captions below.
  //
  // HOW TO ADD PHOTOS:
  //   1. Place your photo files in:  public/images/
  //   2. Update the 'src' path below:  `${import.meta.env.BASE_URL}images/your-photo.jpg`
  //   3. Add a caption for each photo
  //
  // Supported formats: .jpg, .jpeg, .png, .webp
  // Recommended size: 800x600px or similar
  //
  // You can add as many photos as you want.
  // Remove entries you don't need.
  photos: [
    {
      src: `${import.meta.env.BASE_URL}images/memory-1.jpg`,
      caption: "I select this photo as one of our best memory, because it reminds me how beautiful youre eyes are and how much I love you",
    },
    {
      src: `${import.meta.env.BASE_URL}images/memory-2.jpg`,
      caption: "I select this photo as one of our best memory, because it reminds me how beautiful our baby photos are.",
    },
    {
      src: `${import.meta.env.BASE_URL}images/memory-3.jpg`,
      caption: "I select this photo as one of our best memory, because its our first we attended a wedding function together, and it was a special day for both of us.",
    },
    {
      src: `${import.meta.env.BASE_URL}images/memory-4.jpg`,
      caption: "How can I forget this image right? Its our photo we taken together.",
    },
    {
      src: `${import.meta.env.BASE_URL}images/memory-5.jpg`,
      caption: "Funny one. I looks good only in this photo Thats why i chooses this and you too",
    },
    {
      src: `${import.meta.env.BASE_URL}images/memory-6.jpg`,
      caption: "Also how can i forget this image right? Meeting my mother-in-law for the first time in the kovil.",
    },
  ],

  // ─── Surprise Reveal ────────────────────────────────
  surprise: {
    teaser: "I have one more surprise for you...",
    buttonText: "Open Your Gift 🎁",
    revealTitle: "My Promise To You",
    revealMessage:
      "Don't loose hope on me, I will become a best person and will talk and convince my parents sooner as possible to marry my kuttima. I will do everything to make you happy and will never let you down. I love you so much.  I will always be there for you. I will never let you down. I will always be your support and will always be your shoulder to cry on. I will always be your best friend and will always be your lover. I will always be your everything. I love you so much.",
  },

  // ─── Final Screen ───────────────────────────────────
  finale: {
    mainMessage: "Happy Birthday, Kuttima!",
    subMessage:
      "Happy always as youre. I am always there for you.",
    replayText: "Relive This Moment 💕",
    footerText: "Made with love, just for you 💝",
  },

  // ─── Music (Optional) ──────────────────────────────
  // To add background music:
  //   1. Place an MP3 file in:  public/audio/
  //   2. Update the path below:  "/audio/birthday-song.mp3"
  //   3. Set enabled to true
  //
  // IMPORTANT: Use only music you have the right to use.
  //   - Your own recordings
  //   - Royalty-free music (e.g., from Pixabay, Free Music Archive)
  //   - Creative Commons licensed music
  //
  // Music will NOT autoplay. The user must click play.
  music: {
    enabled: false,
    src: "/audio/birthday-song.mp3",
  },
};

export default birthdayContent;
