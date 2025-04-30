
const letterText = `宝贝，对不起，我真的不是故意惹你生气的。\n每一分每一秒，我都在想你，后悔自己的任性。\n你对我来说真的非常非常重要，我愿意用尽所有去哄你开心。\n如果你愿意原谅我，我一定会加倍珍惜你，做一个更好的男朋友。\n请原谅我，好吗？💗`;

let index = 0;
function typeText() {
    const target = document.getElementById("typed-text");
    if (index < letterText.length) {
        const char = letterText[index] === "\n" ? "<br>" : letterText[index];
        target.innerHTML += char;
        index++;
        setTimeout(typeText, 70);
    }
}
window.onload = function () {
    typeText();
};

function showMessage() {
    const message = document.getElementById("forgive-message");
    message.classList.remove("hidden");
}

function toggleMusic() {
    const music = document.getElementById("bg-music");
    const button = document.getElementById("music-toggle");
    if (music.muted) {
        music.muted = false;
        button.textContent = "🎵";
    } else {
        music.muted = true;
        button.textContent = "🔇";
    }
}

function showMessage() {
    const message = document.getElementById("forgive-message");
    const card = document.getElementById("promise-card");
    message.classList.remove("hidden");
    card.classList.remove("hidden");
}
