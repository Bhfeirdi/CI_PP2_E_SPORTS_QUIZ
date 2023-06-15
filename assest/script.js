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


