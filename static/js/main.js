
const quotes = [
    "You don't have to have everything figured out today.",
    "Small steps still move you forward.",
    "Rest is part of the journey, too.",
    "You deserve patience from yourself.",
    "Progress doesn't have to be perfect.",
    "It's okay to ask for support.",
    "You are allowed to grow at your own pace.",
    "One difficult day does not define your whole journey.",
    "Taking care of yourself is time well spent.",
    "You deserve kindness, including from yourself."
];

const quoteElement = document.getElementById("quote");
const quoteButton = document.getElementById("new-quote");

quoteButton.addEventListener("click", function () {
    const currentQuote = quoteElement.textContent.trim();

    let nextQuote;

    do {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        nextQuote = quotes[randomIndex];
    } while (nextQuote === currentQuote);

    quoteElement.textContent = nextQuote;
});
