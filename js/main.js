const datas = [
    {
        question: "What is speedest programing language ?",
        a_text: "Java",
        b_text: "Pythone",
        c_text: "Javascript",
        d_text: "Go",
        correct: "a_text"
    },

    {
        question: "What is Angular Js?",
        a_text: "Google Platform",
        b_text: "Facebook Platform",
        c_text: "Javascript Framework",
        d_text: "Programming Language",
        correct: "c_text"
    },

    {
        question: "Is React Js popular library ?",
        a_text: "Yes, It is",
        b_text: "Not at all",
        c_text: "How about Angular",
        d_text: "Think twice",
        correct: "a_text"
    },

    {
        question: "Flutter used for",
        a_text: "Built native app",
        b_text: "Build android/ios application",
        c_text: "Beatifull UI",
        d_text: "Website",
        correct: "b_text"
    },

    // {
    //     question: "What is speedest programing language ?",
    //     a_text: "Java",
    //     b_text: "Pythone",
    //     c_text: "Javascript",
    //     d_text: "Go",
    //     correct: "Java"
    // },

    //{
    //     question: "What is speedest programing language ?",
    //     a_text: "Java",
    //     b_text: "Pythone",
    //     c_text: "Javascript",
    //     d_text: "Go",
    //     correct: "Java"
    // },
];

let currentQuiz = 0;
let score = 0;

let answer = null;

let question = document.getElementById("question");
let a_text = document.getElementById("a_txt");
let b_text = document.getElementById("b_txt");
let c_text = document.getElementById("c_txt");
let d_text = document.getElementById("d_txt");

let submit = document.getElementById("submit");
let displayScore = document.querySelector('.box');


let loadQuiz = () => {
    unSelect();
    let quiz = datas[currentQuiz];

    question.innerHTML = quiz.question;

    //Setting Label
    a_text.innerHTML = quiz.a_text;
    b_text.innerHTML = quiz.b_text;
    c_text.innerHTML = quiz.c_text;
    d_text.innerHTML = quiz.d_text;

    //Setting Value
}

let getSelected = () => {
    let answerEles = document.querySelectorAll('.answer');

    answerEles.forEach(answerEle => {
        if (answerEle.checked) answer = answerEle.id;
    });
    return answer;
}

let unSelect = () => {
    let answerEles = document.querySelectorAll('.answer');
    answerEles.forEach(answerEle => answerEle.checked = false)
    answer = null;
}

loadQuiz();

submit.addEventListener("click", () => {
    getSelected();
    if(answer) {
        if(answer && answer === datas[currentQuiz].correct) score++;
        currentQuiz++;
        if (currentQuiz < datas.length) {
            loadQuiz();
        } else {
            displayScore.innerHTML = `
                <h2>You have scored ${score}/${datas.length}</h2>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
