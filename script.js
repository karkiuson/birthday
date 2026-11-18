const box = document.getElementById('hearts');

const shapes = ['❤️','💖','💗','💕','💜','💙','🧡','💛','💚'];

function spawn() {
    const h = document.createElement('span');

    h.className = 'heart';
    h.textContent = shapes[Math.floor(Math.random() * shapes.length)];

    h.style.left = Math.random() * 100 + 'vw';
    h.style.fontSize = (16 + Math.random() * 30) + 'px';

    h.style.setProperty('--dx', (Math.random() * 160 - 80) + 'px');
    h.style.setProperty('--rot', (Math.random() * 80 - 40) + 'deg');

    h.style.animationDuration = (6 + Math.random() * 7) + 's';

    box.appendChild(h);

    h.addEventListener('animationend', () => h.remove());
}

setInterval(spawn, 450);
const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseMessage = document.getElementById("surpriseMessage");

if (surpriseBtn && surpriseMessage) {
    surpriseBtn.addEventListener("click", function() {
        surpriseMessage.textContent =
            "🎂 Thanks guys for openimg this. ❤️ aaba party xi paxi hai. 🤣🤣✨";

        surpriseBtn.textContent = "Surprise Opened! 💖";
    });
}

const music = document.getElementById("bgMusic");
const musicBtn = document.getElementById("musicBtn");

// Restore music position and playback preference
const savedTime = sessionStorage.getItem("musicTime");
const shouldPlay = sessionStorage.getItem("musicPlaying");

if (savedTime !== null) {
    music.addEventListener("loadedmetadata", function () {
        music.currentTime = Number(savedTime);
    }, { once: true });
}

if (shouldPlay === "true") {
    musicBtn.textContent = "🎵 Start Music";
}

musicBtn.addEventListener("click", async function () {
    if (music.paused) {
        try {
            await music.play();
            sessionStorage.setItem("musicPlaying", "true");
            musicBtn.textContent = "⏸ Pause Music";
        } catch (error) {
            console.log("Music could not play:", error);
        }
    } else {
        music.pause();
        sessionStorage.setItem("musicPlaying", "false");
        musicBtn.textContent = "🎵 Play Music";
    }
});

// Save playback position before leaving the page
window.addEventListener("pagehide", function () {
    sessionStorage.setItem("musicTime", music.currentTime);
});
