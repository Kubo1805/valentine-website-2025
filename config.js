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

           My Loveee, My Sweetheartttt, My Babyyyy, My World, My Princess, My Angel, My Soulmate, My Everythingg, first of all I just want to say HAPPYYY VALENTINES DAYYY MY LOVEEEE 🩷🩷🩷🩷🩷
YOU ARE MY VALENTINE AAAAAA I CANT BELIEVE IT MY BABYY MY GRACIEEE MY LOVEEE IS MY VALENTINE FOR THE REST OF OUR LIFES AAAAA IM SOOOOOOO HAPPPYYYY, I cant telll you how happyyy you make me my love, no matter how im feeeling, as soon as I see you and your GORGEOUS FACE AND THAT ADORRABLEEE SMILE, I become the happiest a human being could possibly be, I LOVEEE you sooo much my babyyy, since i have met you my love, i have finally realized what it means to be truly happyyy, these past 9 months of us knowing each other and us dating for 6 months have made me the happiest I can be, being with you MYY GRACIEE has made my life feel like paradise, to be able to think of you and look at you and see your adorable face every night I go to sleep and every morning I wake up is a gift that I couldnt have even dreamed of, and you my love are a gift that I couldnt have ever even dreamed of or thought of, you my babyy you make the happiest I could ever be and I hope that I do to because all I want in my life is to make you happy and make you smile and make you the happiest a human can be, make u feel secure, make u feel comfy and lvoed for the rest of our lives I cant wait for the day I meet you in real life, I wanna hold you close to me every single day, I wanna hold u against my body every single day while going to sleep, I want to wake up to you next to me every single day for the rest of my life My love 
I LOVE YOU SOOOO MUCH, I LOVE YOU TO PLUTO AND BACK AND I LOVE YOU TO ALLLL THE STARS IN THE UNIVERSE AND BACK MY GRACIEEEE <3333        
                    
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
