const iWill = document.getElementById('i-will');
const iWont = document.getElementById('i-wont');
const doYouRemember = document.getElementById('revisit');
const buttons = document.getElementById('button-container');
const wordList = ['futile', 'useless', 'muda', 'unworthy', 'again'];
const wrapper = document.querySelector('.wrapper');
const keyboardWrap = document.querySelector('.keyboard');


const revisit = 0; //revert to let in final

iWill.addEventListener('click', () => {
    const wrapper = document.querySelector('.wrapper');
    wrapper.classList.add('removed');
    setTimeout(() => {
        emptyWrapper();
    }, 1000);
    setTimeout(() => {
        recognition();
    }, 1000);
    setTimeout(() => {
        startGame();
    }, 3000);
});

function emptyWrapper() {
    const wrapper = document.querySelector('.wrapper');
    wrapper.innerHTML = '';
    wrapper.classList.remove('removed');
};

function startGame() {
    //code that creates a screen to display the innocent being harmed
    generateAnswer();
    keyboard();
};

function generateAnswer() {
    const word = wordList[Math.floor(Math.random() * wordList.length)].split('');
    let guess = [];
    word.forEach(element => {
        guess.push('-'); 
    });
    console.log(word, guess);
    const guessTracker = document.createElement('div');
    guessTracker.classList.add('guess-tracker');
    wrapper.appendChild(guessTracker);
    guessTracker.innerHTML = guess.join(" ");
};

let guessLetter = 0;

function keyboard() {
    const letters = [
        'a', 'b', 'c', 'd', 'e', 'f', 'g','h', 'i', 'j', 'k', 'l', 'm', 'n',
        'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
    ];
    letters.forEach(letter => {
        const key = document.createElement('button');
        key.innerHTML = letter;
        key.classList.add('keys');
        keyboardWrap.appendChild(key);
        key.addEventListener('click', () => {
            guessLetter = letter;
            // code that compares letter to the chosen word and updates the dashes 
        });
    });
};




iWont.addEventListener('click', function() {
    console.log('HERETIC');
});

// function recognition() {
//     const wrapper = document.querySelector('.wrapper');
//     wrapper.classList.add('removed');
//     switch (revisit) {
//         case 1:
//             let threatHeader = document.createElement('h1').insertAdjacentText('afterbegin', wrapper);
//             break;
//         default:0
//             break;
//     }
// };