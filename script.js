let userScore = 0;
let computerScore = 0;
let drawScore = 0;
let totalMatches = 0;

const choices = document.querySelectorAll('.choice');
const resetGameBtn = document.getElementById('reset-game');

choices.forEach((choice) => {

    choice.addEventListener('click',() => {
        totalMatches++;
        const userChoice = choice.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        updateScores(result);
        displayResult();
        showWinnerMessage(userChoice ,computerChoice,  result);
    })
});

getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'draw';
    } else if (
        (userChoice === 'rock' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'rock') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'win';
    } else {
        return 'lose';
    }
}

updateScores = (result) => {
    if (result === 'win') {
        userScore++;
    }else if (result === 'lose') {
        computerScore++;
    }else if (result === 'draw') {
        drawScore++;
    }
}

displayResult = () => {
    const userid = document.getElementById('user-score');
    const drawid = document.getElementById('draw-score');
    const compid = document.getElementById('comp-score');
    const totalid = document.getElementById('total-matches');
    
    userid.innerHTML = `<p id="user-score">${userScore}</p>`;
    compid.innerHTML = `<p id="comp-score">${computerScore}</p>`;
    drawid.innerHTML = `<p id="draw-score">${drawScore}</p>`;
    totalid.innerHTML = `<p id="total-matches">${totalMatches}</p>`;
}

showWinnerMessage = (userChoice ,computerChoice,text) => {
    const message = document.getElementById('msg');
    if (text === 'win') {
        message.innerText = `You Won. Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    } else if (text === 'lose') {
        message.innerText = `You Lost. ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    } else if(text === 'draw') {
        message.innerText = `It's a Draw. ${userChoice} equals ${computerChoice}`;
        message.style.backgroundColor = "black";
    } else{
        message.innerText = "Make your move!";
        message.style.backgroundColor = "black";
    }
}


resetGameBtn.addEventListener('click', () => {
    // reset the game
    userScore = 0;
    computerScore = 0;
    drawScore = 0;
    totalMatches = 0;

    displayResult();
    showWinnerMessage("newGame");
});

