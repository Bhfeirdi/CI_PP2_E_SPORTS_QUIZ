const startButton = document.getElementById('start-btn');
const startContainer = document.getElementById('start-container');
const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question');
const optionContainer = document.getElementById('options');
const resultContainer = document.getElementById('result');

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
    questionContainer.textContent = `${currentQuestion + 1}. ${currentQuizData.question}`;
    optionContainer.innerHTML = '';
  
    currentQuizData.options.forEach((option, index) => {
      const optionElement = document.createElement('button');
      optionElement.classList.add('option-btn');
      optionElement.textContent = option;
      optionElement.addEventListener('click', checkAnswer);
      optionContainer.appendChild(optionElement);
    });
}
/* This function is responsible for loading the current question and its options onto the quiz. 
It retrieves the question and options data from the 'quizData' array and dynamically creates buttons 
for each option. */

function checkAnswer(e) {
    const selectedOption = e.target;
    const answer = Number(selectedOption.value);
  
    if (quizData[currentQuestion].answer === answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
}
/* This function is triggered when a user selects an answer by clicking on one of the option buttons. 
It compares the selected answer with the correct answer from the 'quizData' array and updates the score 
if the answer is correct. It then proceeds to the next question or shows the results if it's the last 
question. */

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
  
    let message;
    if (score <= 10) {
      message = 'Better luck next time!';
    } else if (score >= 11 && score <= 15) {
      message = 'Good work, almost perfect!';
    } else if (score >= 16 && score <= 19) {
      message = 'Wow! You really know your stuff!';
    } else if (score === 20) {
      message = 'GG WP!';
    }
  
    resultContainer.innerHTML = `<h2>Your Score: ${score}</h2><p>${message}</p>`;
}
/*  This function hides the quiz container and displays the results container. It determines 
the appropriate message based on the score and displays it along with the user's final score. */

function startQuiz() {
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
  
    loadQuestion();
}
/* This function is called when the "Start Quiz" button is clicked. It hides the start container 
and displays the quiz container. It also initiates the quiz by calling the 'loadQuestion()' function 
to load the first question. */

startButton.addEventListener('click', startQuiz);
/* The event listener is attached to the "Start Quiz" button. It listens for a click event and 
triggers the 'startQuiz()' function when the button is clicked. */

const quizData = [
    {
        question: "Which game is considered the most popular e-sport in the world?",
        options: ["Dota 2", "League of Legends", "Counter-Strike: Global Offensive", "Overwatch"],
        answer: 1
    },
    {
        question: "Which country has won the most League of Legends World Championships?",
        options: ["South Korea", "China", "United States", "Sweden"],
        answer: 0
    },
    {
        question: "Which game introduced the 'Battle Royale' game mode?",
        options: ["Fortnite", "PlayerUnknown's Battlegrounds", "Apex Legends", "Call of Duty: Warzone"],
        answer: 1
    },
    {
        question: "Who is known as 'The Faker' in the League of Legends community?",
        options: ["Lee 'Faker' Sang-hyeok", "Jang 'MaRin' Gyeong-hwan", "Kim 'Doinb' Tae-sang", "Song 'Rookie' Eui-jin"],
        answer: 0
    },
    {
        question: "Which organization won the most Dota 2 The International tournaments?",
        options: ["OG", "Evil Geniuses", "Team Secret", "Virtus.pro"],
        answer: 0
    },
    {
        question: "Which game was developed by Blizzard Entertainment?",
        options: ["World of Warcraft", "Fortnite", "Minecraft", "Rocket League"],
        answer: 0
    },
    {
        question: "Which country is home to the esports organization Fnatic?",
        options: ["Sweden", "United States", "South Korea", "China"],
        answer: 0
    },
    {
        question: "Which game is played in a best-of-one format in the competitive scene?",
        options: ["Valorant", "Rainbow Six Siege", "Rocket League", "Street Fighter V"],
        answer: 2
    },
    {
        question: "Which player holds the record for the highest career earnings in esports?",
        options: ["Johan 'N0tail' Sundstein", "Lee 'Faker' Sang-hyeok", "Kyle 'Bugha' Giersdorf", "Kuro 'KuroKy' Salehi Takhasomi"],
        answer: 0
    },
    {
        question: "Which game was the first to introduce microtransactions?",
        options: ["Team Fortress 2", "League of Legends", "Counter-Strike: Global Offensive", "World of Warcraft"],
        answer: 3
    },
    {
        question: "Which city hosted the first Overwatch League Grand Finals?",
        options: ["New York City", "Seoul", "Los Angeles", "London"],
        answer: 0
    },
    {
        question: "Which player is considered the 'CS:GO King'?",
        options: ["Oleksandr 's1mple' Kostyliev", "Marcelo 'coldzera' David", "Andreas 'Xyp9x' Højsleth", "Nicolai 'dev1ce' Reedtz"],
        answer: 0
    },
    {
        question: "Which game is played with a deck of 30 cards and a hero character?",
        options: ["Hearthstone", "FIFA", "Mortal Kombat", "Super Smash Bros. Ultimate"],
        answer: 0
    },
    {
        question: "Which game is known for its annual 'The International' tournament?",
        options: ["League of Legends", "Dota 2", "Counter-Strike: Global Offensive", "Fortnite"],
        answer: 1
    },
    {
        question: "Who is the most decorated StarCraft II player of all time?",
        options: ["Lee 'Flash' Young Ho", "Jang 'MC' Min Chul", "Lee 'Jaedong' Jae Dong", "Park 'Dark' Ryung Woo"],
        answer: 0
    },
    {
        question: "Which organization won the first-ever Overwatch League season?",
        options: ["San Francisco Shock", "London Spitfire", "Seoul Dynasty", "New York Excelsior"],
        answer: 1
    },
    {
        question: "Which game features the 'DreamHack' tournament series?",
        options: ["Rocket League", "Valorant", "Call of Duty: Warzone", "Counter-Strike: Global Offensive"],
        answer: 3
    },
    {
        question: "Which player is known for his dominance in the game of Super Smash Bros. Melee?",
        options: ["Joseph 'Mango' Marquez", "Adam 'Armada' Lindgren", "Juan 'Hungrybox' DeBiedma", "William 'Leffen' Hjelte"],
        answer: 2
    },
    {
        question: "Which game is the most-played first-person shooter in the world?",
        options: ["Call of Duty: Warzone", "Rainbow Six Siege", "Counter-Strike: Global Offensive", "Valorant"],
        answer: 2
    },
    {
        question: "Which organization won the most Call of Duty World Championships?",
        options: ["OpTic Gaming", "Evil Geniuses", "FaZe Clan", "Team Envy"],
        answer: 0
    }
]