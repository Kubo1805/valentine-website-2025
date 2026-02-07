// Initialize configuration
const config = window.VALENTINE_CONFIG;

// Validate configuration
function validateConfig() {
    const warnings = [];

    // Check required fields
    if (!config.valentineName) {
        warnings.push("Valentine's name is not set! Using default.");
        config.valentineName = "My Love";
    }

    // Validate colors
    const isValidHex = (hex) => /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(hex);
    Object.entries(config.colors).forEach(([key, value]) => {
        if (!isValidHex(value)) {
            warnings.push(`Invalid color for ${key}! Using default.`);
            config.colors[key] = getDefaultColor(key);
        }
    });

    // Validate animation values
    if (parseFloat(config.animations.floatDuration) < 5) {
        warnings.push("Float duration too short! Setting to 5s minimum.");
        config.animations.floatDuration = "5s";
    }

    if (config.animations.heartExplosionSize < 1 || config.animations.heartExplosionSize > 3) {
        warnings.push("Heart explosion size should be between 1 and 3! Using default.");
        config.animations.heartExplosionSize = 1.5;
    }

    // Log warnings if any
    if (warnings.length > 0) {
        console.warn("⚠️ Configuration Warnings:");
        warnings.forEach(warning => console.warn("- " + warning));
    }
}

// Default color values
function getDefaultColor(key) {
    const defaults = {
        backgroundStart: "#ffafbd",
        backgroundEnd: "#ffc3a0",
        buttonBackground: "#ff6b6b",
        buttonHover: "#ff8787",
        textColor: "#ff4757"
    };
    return defaults[key];
}

// Set page title
document.title = config.pageTitle;

// Initialize the page content when DOM is loaded
window.addEventListener('DOMContentLoaded', () => {
    // Validate configuration first
    validateConfig();

    // Set texts from config
    document.getElementById('valentineTitle').textContent = `${config.valentineName}, my love...`;
    
    // Set first question texts
    document.getElementById('question1Text').textContent = config.questions.first.text;
    document.getElementById('yesBtn1').textContent = config.questions.first.yesBtn;
    document.getElementById('noBtn1').textContent = config.questions.first.noBtn;
    document.getElementById('secretAnswerBtn').textContent = config.questions.first.secretAnswer;
    
    // Set second question texts
    document.getElementById('question2Text').textContent = config.questions.second.text;
    document.getElementById('startText').textContent = config.questions.second.startText;
    document.getElementById('nextBtn').textContent = config.questions.second.nextBtn;
    
    // Set third question texts
    document.getElementById('question3Text').textContent = config.questions.third.text;
    document.getElementById('yesBtn3').textContent = config.questions.third.yesBtn;
    document.getElementById('noBtn3').textContent = config.questions.third.noBtn;

    // Create initial floating elements
    createFloatingElements();

    // Setup music player
    setupMusicPlayer();
});

// Create floating hearts and bears
function createFloatingElements() {
    const container = document.querySelector('.floating-elements');
    
    // Create hearts
    config.floatingEmojis.hearts.forEach(heart => {
        const div = document.createElement('div');
        div.className = 'heart';
        div.innerHTML = heart;
        setRandomPosition(div);
        container.appendChild(div);
    });

    // Create bears
    config.floatingEmojis.bears.forEach(bear => {
        const div = document.createElement('div');
        div.className = 'bear';
        div.innerHTML = bear;
        setRandomPosition(div);
        container.appendChild(div);
    });
}

// Set random position for floating elements
function setRandomPosition(element) {
    element.style.position = 'fixed';
    // Random horizontal anywhere on screen
    element.style.left = Math.random() * 100 + 'vw';
    // Random vertical anywhere on screen
    element.style.top = Math.random() * 100 + 'vh';

    // Random animation delay and faster duration
    element.style.animationDelay = Math.random() * 2 + 's';
    element.style.animationDuration = (5 + Math.random() * 10) + 's'; // faster
    element.style.animationName = 'floatUp';
    element.style.animationTimingFunction = 'linear';
    element.style.animationIterationCount = 'infinite';
}




// Function to show next question
function showNextQuestion(questionNumber) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(`question${questionNumber}`).classList.remove('hidden');

    // Reset floating elements
    clearFloatingElements();

    // 💌 Valentine screen emojis
    if (questionNumber === 3) {
        createFloatingFromList(config.floatingEmojis.valentine);
    }
}


// Function to move the "No" button when clicked
function moveButton(button) {
    const x = Math.random() * (window.innerWidth - button.offsetWidth);
    const y = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.position = 'fixed';
    button.style.left = x + 'px';
    button.style.top = y + 'px';
}

// Love meter functionality
const loveMeter = document.getElementById('loveMeter');
const loveValue = document.getElementById('loveValue');
const extraLove = document.getElementById('extraLove');

function setInitialPosition() {
    loveMeter.value = 100;
    loveValue.textContent = 100;
    loveMeter.style.width = '100%';
}

loveMeter.addEventListener('input', () => {
    const value = parseInt(loveMeter.value);
    loveValue.textContent = value;

    // ALWAYS reset floating elements first
    clearFloatingElements();

    if (value > 100) {
        extraLove.classList.remove('hidden');
        const overflowPercentage = (value - 100) / 9900;
        const extraWidth = overflowPercentage * window.innerWidth * 0.8;
        loveMeter.style.width = `calc(100% + ${extraWidth}px)`;
        loveMeter.style.transition = 'width 0.3s';

// 🪐 1000–4999 → ONLY planets
if (value >= 1000 && value < 5000) {
    extraLove.textContent = config.loveMessages.high;

    clearFloatingElements();
    createFloatingFromList(config.floatingEmojis.sliderPlanets, 'emoji', 20); // 20 copies per planet
}

// ⭐ 5000+ → ONLY stars
else if (value >= 5000) {
    extraLove.textContent = config.loveMessages.extreme;

    clearFloatingElements();
    createFloatingFromList(config.floatingEmojis.sliderStars.filter(e => e === "⭐" || e === "✨"), 'emoji', 35); // 35 copies per star
}



        // 101–999 → no emojis
        else {
            extraLove.classList.remove('super-love');
            extraLove.textContent = config.loveMessages.normal;
        }
    } else {
        extraLove.classList.add('hidden');
        extraLove.classList.remove('super-love');
        loveMeter.style.width = '100%';
    }
});

// Initialize love meter
window.addEventListener('DOMContentLoaded', setInitialPosition);
window.addEventListener('load', setInitialPosition);

// Celebration function
// Celebration / Love Letter function with fade-in & magical hearts
function celebrate() {
    // Hide all question sections
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));

    // Show celebration section
    const celebration = document.getElementById('celebration');
    celebration.classList.remove('hidden');

    // Set love letter content (editable via config or fallback to HTML)
    const letter = document.getElementById('loveLetterText');
    letter.innerHTML = letter.innerHTML; // keeps your multi-line HTML as-is



    // Fade in the letter
    letter.style.opacity = 0;
    letter.style.transform = 'translateY(20px)';
    setTimeout(() => {
        letter.style.transition = 'opacity 1.5s ease, transform 1.5s ease';
        letter.style.opacity = 1;
        letter.style.transform = 'translateY(0)';
    }, 100);

    // Clear any existing floating elements
    clearFloatingElements();

    // Gradually add floating hearts for magical effect
    const heartList = config.floatingEmojis.hearts;
    let delay = 0;
    heartList.forEach((heart, index) => {
        setTimeout(() => {
            createFloatingFromList([heart], 'heart');
        }, delay);
        delay += 300; // each heart appears every 300ms
    });

    // Optional: small heart explosion at the start
    createHeartExplosion(15); // create 15 hearts immediately
}


// Create heart explosion animation
function createHeartExplosion(count = 50) {
    for (let i = 0; i < count; i++) {
        const heart = document.createElement('div');
        const randomHeart = config.floatingEmojis.hearts[Math.floor(Math.random() * config.floatingEmojis.hearts.length)];
        heart.innerHTML = randomHeart;
        heart.className = 'heart';
        document.querySelector('.floating-elements').appendChild(heart);
        setRandomPosition(heart);
    }
}

// Remove all existing floating elements
function clearFloatingElements() {
    const container = document.querySelector('.floating-elements');
    container.innerHTML = '';
}

// Create floating emojis from a list (updated)
function createFloatingFromList(emojiList, className = 'emoji', countPerEmoji = 5) {
    const container = document.querySelector('.floating-elements');

    emojiList.forEach(emoji => {
        for (let i = 0; i < countPerEmoji; i++) { // create multiple of the same emoji
            const div = document.createElement('div');
            div.className = className;
            div.innerHTML = emoji;
            setRandomPosition(div);
            container.appendChild(div);
        }
    });
}



// Music Player Setup
function setupMusicPlayer() {
    const musicControls = document.getElementById('musicControls');
    const musicToggle = document.getElementById('musicToggle');
    const bgMusic = document.getElementById('bgMusic');
    const musicSource = document.getElementById('musicSource');

    // Only show controls if music is enabled in config
    if (!config.music.enabled) {
        musicControls.style.display = 'none';
        return;
    }

    // Set music source and volume
    musicSource.src = config.music.musicUrl;
    bgMusic.volume = config.music.volume || 0.5;
    bgMusic.load();

    // Try autoplay if enabled
    if (config.music.autoplay) {
        const playPromise = bgMusic.play();
        if (playPromise !== undefined) {
            playPromise.catch(error => {
                console.log("Autoplay prevented by browser");
                musicToggle.textContent = config.music.startText;
            });
        }
    }

    // Toggle music on button click
    musicToggle.addEventListener('click', () => {
        if (bgMusic.paused) {
            bgMusic.play();
            musicToggle.textContent = config.music.stopText;
        } else {
            bgMusic.pause();
            musicToggle.textContent = config.music.startText;
        }
    });
} 
