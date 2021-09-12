"use strict"

document.addEventListener('DOMContentLoaded', () => {
    //Cards

    const scoreDisplay = document.querySelector("#score");
    const cardArray = [
        {
            name: "car",
            img: "img/car100.png",
        },
        {
            name: "disk",
            img: "img/disk100.jpg",
        },
        {
            name: "highway",
            img: "img/highway100.png",
        },
        {
            name: "holymoonlight",
            img: "img/holymoonlight100.jpg",
        },
        {
            name: "moon",
            img: "img/moon100.jpg",
        },
        {
            name: "sunlight",
            img: "img/sunlight100.jpg",
        },
        {
            name: "field",
            img: "img/field100.jpg",
        },
        {
            name: "redsun",
            img: "img/redsun100.jpg",
        }
    ]
    const imgAmount = cardArray.length;
    for(let i = 0; i < imgAmount; i++) { 
        cardArray.push(cardArray[i]);
    }

    const success = [
        "Aha! A match!",
        "Yes! Collect more, my human companion!",
        "If a computer could be impressed, I would be so very impressed right now!",
        "Truely, a stellar matching!"
    ]

    const failure = [
        "Hmm. I suppose that's to be expected.",
        "That don't look like a match to me...",
        "That was a...um...interesting decision.",
        "Oh.",
        "Are you quite sure you're alright?, Would you like a glass of water?",
        "You can take notes, if it'd help."
    ]

    function announce (text) {
        document.querySelector("#announcer").textContent = text;
    }

    let grid = document.querySelector(".grid");
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let matches = 0;
    let failures = 0;
    // If an animation is playing, clickable is false
    let clickable = true;
    
    

    function createBoard() {
        cardArray.sort(() => 0.5 - Math.random());
        for(let i = 0; i < cardArray.length; i++) {
            const card = document.createElement("img");
            card.setAttribute("src", "img/brick100.png");
            card.setAttribute("data-id", i);
            card.addEventListener("click", flipCard);
            grid.appendChild(card); 
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll("img");
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];
        if (cardsChosen[0] === cardsChosen[1]) {
            announce(success[matches % success.length]);
            matches++;
            cards[optionOneId].setAttribute("src", "img/correct.jpg");
            cards[optionTwoId].setAttribute("src", "img/correct.jpg");
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute("src", "img/brick100.png");
            cards[optionTwoId].setAttribute("src", "img/brick100.png");
            cards[optionOneId].addEventListener("click", flipCard);
            cards[optionTwoId].addEventListener("click", flipCard);
            announce(failure[failures % failure.length]);
            failures++;
        }
        cardsChosen = [];
        cardsChosenId = [];
        scoreDisplay.textContent = cardsWon.length + " out of " + cardArray.length/2 + " pairs found.";
        if (cardsWon.length === cardArray.length/2) {
            announce("All Card Pairs found! And with a mere "+ failures +" mismatchings! A true display of skill!");
        }
    }

    //card click function
    function flipCard() {
        if (clickable) {
            const cardId = this.getAttribute("data-id");
            this.removeEventListener("click", flipCard);
            cardsChosen.push(cardArray[cardId].name);
            cardsChosenId.push(cardId);
            this.setAttribute("src", cardArray[cardId].img);
            if (cardsChosen.length === 2) {
                clickable = false;
                
                setTimeout(checkForMatch, 500);
                setTimeout(wait, 500);
                
            }
        }
        
    }

    // function to allow cards to be clicked after timer
    function wait() {
        clickable = true;
    }

    //restart function

    createBoard();
    announce("Care for a match, Human?");
})