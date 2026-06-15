// =============================
// SNEHAL ❤️ WEBSITE SCRIPT
// =============================

// ---------- Typing Effect ----------

const typingText = document.getElementById("typingText");

const introText =
`Hey Snehal 👋

Or should I say...

Hey Soanpapdi 🍬 ❤️`;

let typingIndex = 0;

function typeWriter() {

    if (typingIndex < introText.length) {

        typingText.innerHTML += introText.charAt(typingIndex);

        typingIndex++;

        setTimeout(typeWriter, 60);

    }

}

window.addEventListener("load", typeWriter);

// ---------- Open Surprise ----------

const openBtn = document.getElementById("openSurprise");

openBtn.addEventListener("click", () => {

    document.querySelector(".nickname-section")
    .scrollIntoView({
        behavior: "smooth"
    });

});

// ---------- Nickname Rotation ----------

const nicknameDisplay =
document.getElementById("nicknameDisplay");

const nicknames = [

    "🍬 Soanpapdi",
    "🍮 Rasmalai",
    "🥞 Puranpoli",
    "❤️ Snehal"

];

let nicknameIndex = 0;

setInterval(() => {

    nicknameIndex++;

    if (nicknameIndex >= nicknames.length) {
        nicknameIndex = 0;
    }

    nicknameDisplay.style.opacity = 0;

    setTimeout(() => {

        nicknameDisplay.innerText =
        nicknames[nicknameIndex];

        nicknameDisplay.style.opacity = 1;

    }, 300);

}, 2500);

// ---------- Reveal Animations ----------

const reveals =
document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach(section => {

        const windowHeight =
        window.innerHeight;

        const top =
        section.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            section.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();

// ---------- Timeline Live Date ----------
const timelineLiveDate = document.getElementById("timelineLiveDate");
if (timelineLiveDate) {
    const today = new Date();
    timelineLiveDate.textContent = new Intl.DateTimeFormat("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric"
    }).format(today);
}

// ---------- 100 Reasons ----------

const reasons = [

"Because talking to you makes ordinary days better.",
"Because your messages are worth waiting for.",
"Because you make me smile without trying.",
"Because you're fun to talk to.",
"Because you're genuinely kind.",
"Because you always explain things properly.",
"Because you make conversations interesting.",
"Because you have a beautiful heart.",
"Because you make boring days less boring.",
"Because your presence feels comforting.",
"Because your laugh is contagious.",
"Because you make me happy.",
"Because you are thoughtful.",
"Because you remember little things.",
"Because you are sweet.",
"Because you're easy to talk to.",
"Because you're unique.",
"Because you're supportive.",
"Because you brighten my day.",
"Because you make me look at my phone and smile.",
"Because your energy is special.",
"Because you're patient.",
"Because you're funny.",
"Because you're genuine.",
"Because you're amazing.",
"Because you are Snehal ❤️",

"Because Soanpapdi is cute.",
"Because Rasmalai is adorable.",
"Because Puranpoli deserves appreciation.",
"Because every chat feels special.",

"Because you make memories memorable.",
"Because you make moments better.",
"Because your words matter.",
"Because your smile is precious.",
"Because your personality shines.",
"Because your kindness stands out.",
"Because you're easy to trust.",
"Because you're easy to miss.",
"Because your vibe is unmatched.",
"Because you make me laugh.",

"Because you're wonderful.",
"Because you're thoughtful.",
"Because you're caring.",
"Because you're smart.",
"Because you're genuine.",
"Because you're lovable.",
"Because you're beautiful inside out.",
"Because you make life brighter.",
"Because you're worth appreciating.",
"Because you're simply you ❤️"

];

const reasonText =
document.getElementById("reasonText");

const reasonCount =
document.getElementById("reasonCount");

const nextReason =
document.getElementById("nextReason");

let reasonIndex = 0;

nextReason.addEventListener("click", () => {

    reasonIndex++;

    if(reasonIndex >= reasons.length){

        reasonIndex = 0;

    }

    reasonText.style.opacity = 0;

    setTimeout(() => {

        reasonText.innerText =
        reasons[reasonIndex];

        reasonCount.innerText =
        `Reason #${reasonIndex + 1}`;

        reasonText.style.opacity = 1;

    }, 300);

});

// ---------- Secret Message ----------

const secretBtn =
document.getElementById("secretBtn");

const secretMessage =
document.getElementById("secretMessage");

secretBtn.addEventListener("click", () => {

    secretBtn.style.transform =
    "scale(1.2) rotate(15deg)";

    setTimeout(() => {

        secretBtn.style.display =
        "none";

        secretMessage.classList.add(
            "show"
        );

    }, 500);

});

// ---------- Music ----------

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let musicPlaying = false;

musicBtn.addEventListener("click", () => {

    if(!musicPlaying){

        bgMusic.play();

        musicPlaying = true;

        musicBtn.innerText =
        "⏸ Pause Music";

    } else {

        bgMusic.pause();

        musicPlaying = false;

        musicBtn.innerText =
        "🎵 Play Music";

    }

});

// ---------- Floating Hearts ----------

const heartContainer =
document.getElementById("heart-container");

document.addEventListener(
    "click",
    function(e){

        const heart =
        document.createElement("div");

        heart.innerHTML = "❤️";

        heart.classList.add("heart");

        heart.style.left =
        e.pageX + "px";

        heart.style.top =
        e.pageY + "px";

        heart.style.fontSize =
        Math.random() * 20 + 20 + "px";

        heartContainer.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 4000);

    }
);

// ---------- Final Question ----------

const yesBtn =
document.getElementById("yesBtn");

const noBtn =
document.getElementById("noBtn");

const celebration =
document.getElementById("celebration");

yesBtn.addEventListener("click", () => {

    celebration.classList.add("show");

    launchConfetti();

    for(let i=0;i<20;i++){

        setTimeout(() => {

            createRandomHeart();

        }, i * 100);

    }

});

// ---------- Running No Button ----------

function moveNoButton(){

    const maxX =
    window.innerWidth - 200;

    const maxY =
    window.innerHeight - 100;

    const randomX =
    Math.random() * maxX;

    const randomY =
    Math.random() * maxY;

    noBtn.style.position =
    "fixed";

    noBtn.style.left =
    randomX + "px";

    noBtn.style.top =
    randomY + "px";

}

noBtn.addEventListener(
    "mouseenter",
    moveNoButton
);

noBtn.addEventListener(
    "click",
    (e)=>{

        e.preventDefault();

        moveNoButton();

    }
);

// ---------- Extra Hearts ----------

function createRandomHeart(){

    const heart =
    document.createElement("div");

    heart.classList.add("heart");

    heart.innerHTML = "💖";

    heart.style.left =
    Math.random() *
    window.innerWidth + "px";

    heart.style.top =
    window.innerHeight + "px";

    heart.style.fontSize =
    Math.random() * 30 + 20 + "px";

    heartContainer.appendChild(
        heart
    );

    setTimeout(() => {

        heart.remove();

    }, 4000);

}

// ---------- Confetti ----------

const canvas =
document.getElementById(
    "confettiCanvas"
);

const ctx =
canvas.getContext("2d");

canvas.width =
window.innerWidth;

canvas.height =
window.innerHeight;

window.addEventListener(
    "resize",
    () => {

        canvas.width =
        window.innerWidth;

        canvas.height =
        window.innerHeight;

    }
);

function launchConfetti(){

    const pieces = [];

    for(let i=0;i<180;i++){

        pieces.push({

            x:
            Math.random() *
            canvas.width,

            y:
            Math.random() *
            canvas.height -

            canvas.height,

            size:
            Math.random() * 10 + 5,

            speed:
            Math.random() * 4 + 2,

            color:
            [
                "#ff4d6d",
                "#ff8fa3",
                "#ffe5ec",
                "#ffffff"
            ][
                Math.floor(
                    Math.random()*4
                )
            ]

        });

    }

    let frame = 0;

    function animate(){

        frame++;

        ctx.clearRect(
            0,
            0,
            canvas.width,
            canvas.height
        );

        pieces.forEach(p => {

            p.y += p.speed;

            ctx.fillStyle =
            p.color;

            ctx.fillRect(
                p.x,
                p.y,
                p.size,
                p.size
            );

        });

        if(frame < 300){

            requestAnimationFrame(
                animate
            );

        } else {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

        }

    }

    animate();

}

console.log(
"❤️ Website Loaded Successfully ❤️"
);