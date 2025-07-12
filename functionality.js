document.getElementById('revealBtn').addEventListener('click', function () {
    const surprise = document.getElementById('surprise');
    surprise.classList.remove('hidden');
    surprise.classList.add('visible');
    this.style.display = 'none';

    const imagePaths = [
        'assets/images/slide1.jpeg', 'assets/images/slide2.jpeg',
        'assets/images/slide3.jpeg', 'assets/images/slide4.jpeg',
        'assets/images/slide5.jpeg', 'assets/images/slide6.jpeg',
        'assets/images/slide7.jpeg', 'assets/images/slide8.jpeg',
        'assets/images/slide9.jpeg', 'assets/images/slide10.jpeg',
        'assets/images/slide11.jpeg', 'assets/images/slide12.jpeg',
        'assets/images/slide13.jpeg', 'assets/images/slide14.jpeg',
        'assets/images/slide15.jpeg', 'assets/images/slide16.jpeg',
        'assets/images/slide17.jpeg'
    ];

    const captions = [
        "Baby 👶 ...Literally", "Little queen in training 👧", "Ubusukhalelani manje la hai 😂",
        "First school day 🎒", "You look so cute here why? ❤️", "Skinny Zeze",
        "No ways you were done with school here", "Teenage glow-up thinking you cool✨",
        "Andifuni ukuthetha bruh 😂", "Uhleka nje uyaphi👀", "Ngangithukile ke la 😂",
        "Isosha lami liyempini🤭", "Madam Liason Urgg 🥹", "Dudlu girl emagceken aseBHUBESINI💌",
        "My one and only Crush ❤️", "Angahambi la uthi angikuthandi📸", "Have a great one mini me 👍"
    ];

    const img = document.getElementById('slideshow-image');
    const caption = document.getElementById('caption');
    let index = 0;

    const rotationClasses = ['rotated-1', 'rotated-2', 'rotated-3', 'rotated-4', 'rotated-5'];

    function showSlide(i) {
        img.style.opacity = 0;
        setTimeout(() => {
            index = i % imagePaths.length;
            img.src = imagePaths[index];
            caption.textContent = captions[index];

            // Remove all rotation classes, then add a random one
            rotationClasses.forEach(c => img.classList.remove(c));
            const randomRotation = rotationClasses[Math.floor(Math.random() * rotationClasses.length)];
            img.classList.add(randomRotation);

            img.style.opacity = 1;

            caption.style.animation = "none";
            void caption.offsetWidth; // trigger reflow
            caption.style.animation = "fadeCaption 0.8s ease";

            // Show "nextBtn" on slide 4 (index 4)
            if (index === 4) {
                document.getElementById('nextBtn').classList.remove('hidden');
            }
        }, 700);
    }

    showSlide(0);

    setInterval(() => {
        showSlide(index + 1);
    }, 5000);
});

document.getElementById('nextBtn').addEventListener('click', function () {
    this.style.display = 'none';
    document.getElementById('funnySection').classList.remove('hidden');
});

document.getElementById('finalBtn').addEventListener('click', function () {
    this.style.display = 'none';
    const videoSection = document.getElementById('video-section');
    videoSection.classList.remove('hidden');
    const video = videoSection.querySelector('video');
    if (video) {
        video.play().catch(() => console.log('Autoplay blocked.'));
    }
});

const symbols = ["💖", "🌸", "❤️", "💐", "💕", "🌷", "🌹"];
const floatingContainer = document.getElementById('floating-effect');

function createFloatingSymbol() {
    const symbol = document.createElement('div');
    symbol.classList.add('floating-symbol');
    symbol.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    symbol.style.left = `${Math.random() * 100}vw`;
    symbol.style.fontSize = `${20 + Math.random() * 30}px`;
    symbol.style.animationDuration = `${5 + Math.random() * 3}s`;
    floatingContainer.appendChild(symbol);

    setTimeout(() => symbol.remove(), 8000);
}

setInterval(createFloatingSymbol, 400);

const sparkleContainer = document.getElementById("sparkle-container");

document.addEventListener("mousemove", (e) => {
    for (let i = 0; i < 2; i++) {
        const sparkle = document.createElement("div");
        sparkle.classList.add("sparkle");
        sparkle.style.left = `${e.clientX + (Math.random() * 10 - 5)}px`;
        sparkle.style.top = `${e.clientY + (Math.random() * 10 - 5)}px`;
        sparkleContainer.appendChild(sparkle);

        setTimeout(() => {
            sparkle.remove();
        }, 1000);
    }
});