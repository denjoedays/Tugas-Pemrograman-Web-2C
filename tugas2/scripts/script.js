const cards = document.querySelectorAll(".music-quote-card");
const nextButton = document.getElementById("quote-next");
const backButton = document.getElementById("quote-back");
const slideNumbers = document.querySelectorAll(".quote-dots span");

let current = 0;
let animating = false;

function updateDeck() {
    cards.forEach((card, index) => {
        card.classList.remove("active", "behind-1", "behind-2", "behind-3", "leave-left", "leave-right");

        const position = (index - current + cards.length) % cards.length;

        if (position === 0) {
            card.classList.add("active");
        } else if (position === 1) {
            card.classList.add("behind-1");
        } else if (position === 2) {
            card.classList.add("behind-2");
        } else {
            card.classList.add("behind-3");
        }
    });

    slideNumbers.forEach((number, index) => {
        number.classList.toggle("active", index === current);
    });
}

function goToSlide(direction) {
    if (animating) return;

    animating = true;

    const currentCard = cards[current];
    currentCard.classList.add(direction === 1 ? "leave-left" : "leave-right");

    setTimeout(() => {
        current = (current + direction + cards.length) % cards.length;
        updateDeck();
        animating = false;
    }, 350);
}

nextButton.addEventListener("click", () => goToSlide(1));
backButton.addEventListener("click", () => goToSlide(-1));

updateDeck();
