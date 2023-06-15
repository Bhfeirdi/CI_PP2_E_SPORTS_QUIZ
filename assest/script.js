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

function startQuiz() {
    startContainer.style.display = 'none';
    quizContainer.style.display = 'block';
  
    loadQuestion();
}

startButton.addEventListener('click', startQuiz);