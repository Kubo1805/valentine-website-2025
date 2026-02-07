// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Gracie",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "Will You Be My Valentine? 💝",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
 floatingEmojis: {
    hearts: ["💐", "💗", "💖", "🌹", "💋"],
    bears: ["🧸"],

    sliderPlanets: ["🪐", "🌍", "🌕"],
    sliderStars: ["🪐", "🌍", "🌕", "⭐", "✨"],

    valentine: ["💐", "💗", "💖", "💋"]
},



    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "Do you like me?",                                    // First interaction
            yesBtn: "Yes 💖",                                             // Text for "Yes" button
            noBtn: "No 😭",                                               // Text for "No" button
            secretAnswer: "I don't like you, I LOVEEEE you! ❤️"           // Secret hover message
        },
        second: {
            text: "How much do you love me?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text: "Will you be my Valentine ? 🌹🌹🌹", // The big question!
            yesBtn: "Yes!",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "TO ALL THE STARS IN THE UNIVERSE AND BACK ✨✨✨",  // Shows when they go past 5000%
        high: "TO PLUTO AND BACK 🪐🪐🪐",              // Shows when they go past 1000%
        normal: "BARE MINIMUM"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
    title: "Yay! I'm the luckiest person in the world! 🎉💝💖💝💓",
    message: "Now come get your gift, a big warm hug and a huge kiss!",
    emojis: "🎁💖🤗💝💋❤️💕",  // These will bounce around
    loveLetter: `

      My Gracie,

          My babyyy, my love, my swweetheart, my angel, my world, my princess, my soulmate, my forever and ever
          First of all I want to sayy, Happpyyyy Valentines my loveeee 🩷🩷🩷
          And I just want to tell you . holy aaaaa not me already cryying aaa,
          I just want to tell u my babyy how much you mean to me, how much these 9 months of knowing each other and us 6 months of dating means to me
          And its so hard to put it in words how much I love you and how much my time with you means to me my love
          My baby your existence in my life and you being mine has made me realize what true happiness reallyy means
          I get to wake up everyday with a smile on my face cause as soon as I wake up, I think of you my love and you are always right there, your adorable face, your adorable snores, sleeping with such an adorable and peaceful face           
          And being able to go to sleep everyday while looking at your gorgeous and adorable face makes me have the best sleep ever, and you makes me the happiest I can be while going to sleep
          And I love my entire day alll because of you my lovee, the missing you when your not there or I am at work and then being able to come home and spend time with you my love is a feeling I loveeeee soo much
          I love every single second that we spend together and every single second that we spend with each other makes me fall even more in love with you
          Because I get to understand how amazing you are and how adorable you are, and howwww hot and sexyyyy you are cutieee
          I assume you saw the pictures of you on the previous page, i was scrolling through your pics and it was soooo hard to choose six pictures and i was getting the most insane cute aggression in human history 
          You are genuinely the cutest thin in human history my lovee
          I want to cherish you, i want to love you, i want to see that adorable and precious smile every single day and I will do anything to make my baby the happiest human alive in human history          
          I LOVE YOUUU SOOOO MUCH MY GRACIEEEEE
          I LOVEEE YOU TO PLUTO AND BACKK
          AND I LOVE U TO ALL THE STARS IN THE UNIVERSE AND BACK MY LOVE          
                    
        Forever yours,
        Your Kunal 💖
`
},


    // Color scheme for the website
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffafbd",      // Gradient start (try pastel colors for a soft look)
        backgroundEnd: "#ffc3a0",        // Gradient end (should complement backgroundStart)
        buttonBackground: "#ff6b6b",     // Button color (should stand out against the background)
        buttonHover: "#ff8787",          // Button hover color (slightly lighter than buttonBackground)
        textColor: "#ff4757"             // Text color (make sure it's readable!)
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: true,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 Play Music",        // Button text to start music
        stopText: "🔇 Stop Music",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
