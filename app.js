document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'fries',
            image: 'images/fries.png'
        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'cheeseburger',
            image: 'images/cheeseburger.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'hotdog',
            image: 'images/hotdog.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'ice-cream',
            image: 'images/ice-cream.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'milkshake',
            image: 'images/milkshake.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
        {
            name: 'pizza',
            image: 'images/pizza.png'
        },
    ]
    cardArray.sort(() => 0.5 - Math.random())

    var cardsChosen = []
    var cardsChosenId = []
    let cardsWon = []

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMath() {
        var cards = document.querySelectorAll('img')
        var cardOptionOneId = cardsChosenId[0]
        var cardOptionTwoId = cardsChosenId[1]
        if (cardsChosen[0] === cardsChosen[1]) {
            alert('you found a match')
            cards[cardOptionOneId].setAttribute('src', 'images/white.png')
            cards[cardOptionTwoId].setAttribute('src', 'images/white.png')
            console.log(cardOptionOneId, cardOptionTwoId)

            cardsWon.push(cardsChosen)
        }
        else {
            cards[cardOptionOneId].setAttribute('src', 'images/blank.png')
            cards[cardOptionTwoId].setAttribute('src', 'images/blank.png')
            alert('sorry try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length;
        console.log(cardsWon)
        if (cardsWon.length == cardArray.length / 2) {
            resultDisplay.textContent = 'congragulations ! you found them all'
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].image)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMath, 1000)
        }
    }


    createBoard()

})