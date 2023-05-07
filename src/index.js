const prompt = require('prompt-sync')();

let regulator = true;

const welcomeAndGetName = () => {
    console.log("Welcome")
    const name = prompt(`What's your name: `)
    console.log(`Hello ${name.trim()}, nice to meet you!`)
    return name.trim()
}

const showOptions = () => {
    console.log('Here are your options: \n 1 - play a guessing game \n 2 - words of wisdom \n 3 - cheer you on! \n 4 - Exit Game \n Choose an option: ')
}

const getUserChoice = () => {
    const userChoice = Number(prompt('Pick an option: ').trim())
    regulator = true;
    return userChoice;
}

const getRandomIntInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
}


const checkAnswer = (random, guess) => {
    if (random === guess) {
        console.log("Yay, You got it right! ");
    }
    else {
        console.log('Oh no, try again.')
    }
}


const handleGuessingGame = (name) => {
    const randomNumber = getRandomIntInRange(0, 2);
    const guess = Number(prompt('Pick a number between 1 and 2: ').trim())
    checkAnswer(randomNumber, guess)
}


const wordsOfWisdom = [
    'You should go to bed by 12:30',
    "It's better to mostly understand a little more every day, than to never move forward until you understand everything",
    'Eating breakfast has statistical benefits to brain power',
    "The best laid plans often fail, but plans that don't exist can never succeed",
    'Time management and communication are the two most important skills in the workplace',
    'Try to listen more than you speak',
]

const cheers = [
    'You can do it!',
    'You are the best!',
    'You are a coding machine!',
    'YOU ARE UNREALLLLLLLLL!',
    'LITERALLY UNSTOPPABLE!',
    "Can't even handle your greatness right now!",
]

const getWordsOfWisdom = () => {
    console.log(wordsOfWisdom[getRandomIntInRange(0, wordsOfWisdom.length)]);
}

const getCheer = () => {
    console.log(cheers[getRandomIntInRange(0, cheers.length)]);
}

const playAgainText = () => {
    console.log('Wanna keep playing? \n 1 - yes \n 2 - no ')
}

const playAgain = () => {
    const keepPlaying = Number(prompt(" Pick 1 or 2 : ").trim())
    regulator = true;
    return keepPlaying;
}

const sayGoodbye = (name) => {
    console.log(`Goodbye, ${name}`)
    regulator = false;
}


const main = () => {

 
    const name = welcomeAndGetName();
    do {    
        showOptions();
        
        const userChoice = getUserChoice();
        if (userChoice === 1) {
            handleGuessingGame();
            playAgainText()
            if (playAgain() !== 1) return sayGoodbye(name);
        }
        else if (userChoice === 2) {
            getWordsOfWisdom();
            playAgainText()
            if (playAgain() !== 1) return sayGoodbye(name);
        }
        else if (userChoice === 3) {
            getCheer();
            playAgainText()
            if (playAgain() !== 1) return sayGoodbye(name);
            
        } else if (userChoice === 4){
            return sayGoodbye(name);
        } else {
        console.log('invalid input, try again')
        ;
    }
    } while (regulator)
    
}


main();