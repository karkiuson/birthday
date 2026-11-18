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