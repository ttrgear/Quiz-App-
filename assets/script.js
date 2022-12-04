const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

    function startGame() {
        startButton.classList.add('hide')
        shuffledQuestions = questions.sort(() => Math.random() - .5)
        currentQuestionIndex = 0
        questionContainerElement.classList.remove('hide')
        setNextQuestion()
    }

function setNextQuestion() {
  resetState()
 showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
 questionElement.innerText = question.question
 question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
       button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
 })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
   if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
   } else {
    startButton.innerText= 'Restart'
    startButton.classList.remove('hide')
   }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [ 
 { 
    question: 'What is 2 + 2?',
    answers: [
        {text:'4', correct: true},
        {text: '22', correct: false},
        {text: '2', correct: false},
        {text: '0', correct: false}
    ]
 },
 { 
    question: 'Is Web Development Fun?',
    answers: [
        {text:'Heck Yeah!', correct: true},
        {text: 'It is Difficult.', correct: true},
        {text: 'Im Learning!', correct: true},
        {text: 'No.', correct: true}
    ]
 },
 { 
    question: 'How much wood could a Wood Chuck Chuck?',
    answers: [
        {text:'700', correct: true},
        {text: '100', correct: false},
        {text: '72', correct: false},
        {text: 'No clue.', correct: false}
    ]
 },
 { 
    question: 'How many licks to get to the center of a Tootsie Pop?',
    answers: [
        {text:'1', correct: false},
        {text: '2', correct: false},
        {text: '3', correct: true},
        {text: '4', correct: false}
    ]
 },
 { 
    question: 'What file is used to style an HTML Document?',
    answers: [
        {text:'style.js', correct: false},
        {text: 'index.html', correct: false},
        {text: 'css', correct: false},
        {text: 'style.css', correct: true}
    ]
 },
 { 
    question: 'What file is used to effect HTML behavior? ',
    answers: [
        {text:'style.css', correct: false},
        {text: 'js', correct: false},
        {text: 'script.js', correct: true},
        {text: 'script.html', correct: false}
    ]
 }
]