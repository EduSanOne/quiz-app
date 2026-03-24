//PRESETS
const startButton = document.querySelector('#start-btn');
const screenStart = document.querySelector('.screen-start');
const screenQuestions = document.querySelector('.screen-questions')
const questionTitle = document.querySelector('#question');
const onlyAswers = document.querySelector('.only-aswers')

const quizQuestions = [
    {
        question: "What is the capital of France?",
        aswers: [
            { text: "London" , correct: false },
            { text: "Berlin" , correct: false },
            { text: "Paris" , correct: true },
            { text: "Madrid" , correct: false }
        ]
    },
    {
        question: "Which planet is known as the Red Planet?",
        aswers: [
            { text: "Venus", correct: false },
            { text: "Mars", correct: true},
            { text: "Jupiter", correct: false},
            { text: "Saturn", correct: false}
        ]
    },
    {
        question: "What is the largest ocean on Earth?",
        answers: [
            { text: "Atlantic Ocean", correct: false },
            { text: "Indian Ocean", correct: false },
            { text: "Arctic Ocean", correct: false },
            { text: "Pacific Ocean", correct: true },
        ]
    },
    {
        question: "Which of these is NOT a programming languange?",
        aswers: [
            { text: "Java", correct: false},
            { text: "Python", correct: false},
            { text: "HTML", correct: true},
            { text: "JavaScript", correct: false}
        ]
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: [
            { text: "Go", correct: false },
            { text: "Gd", correct: false },
            { text: "Au", correct: true },
            { text: "Ag", correct: false }
        ]
    }
];

//VAR
let currentQuestionIndex = 0;


startButton.addEventListener('click', showQuestion)


function showQuestion() {
    console.log('teste')
    screenStart.classList.remove('active');
    screenQuestions.classList.add('active');

    let currentQuestion = quizQuestions[currentQuestionIndex]
    
    questionTitle.textContent = currentQuestion.question;

    currentQuestion.aswers.forEach((answer)=> {
        const button = document.createElement("button");
        button.textContent = answer.text;
        button.classList.add("answer-btn");

        button.dataset.correct = answer.correct;

        

        onlyAswers.appendChild(button);
    })
}