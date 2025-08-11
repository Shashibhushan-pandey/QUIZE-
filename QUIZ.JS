// import { text } from "stream/consumers";

const Question=[
    {
        Question:"What is full from of html?",
        answers:[
            {text:"Hyper Text  Markup Language",correct:true},
            {text:"Hyper Tarsfer  Markup Language",correct:false},
            {text:"Hyper Text   Makup Language",correct:false},
            {text :"HyperViser Text Markup Language",correct:false}
        ]

    },
    {
        Question:"What is full from of E-mail?",
        answers:[
            {text:"Electrical mail",correct:false},
            {text:"Exchange  mail",correct:false},
            {text:"Electronics  mail",correct:true},
            {text:"Engagement mail",correct:false}

        ]
    },
    {
        Question:"In the virtual world, WWW stand for",
        answers:[
            {text:"Wold Without Windows",correct:false},
            {text:"Wold Wide Web",correct:true},
            {text:"Wold Wide Web Application",correct:false},
            {text:"Wold Wide Warehouse",correct:false}
        ]
    },
    {
        Question:"Which the following computer language is written in binary code only?",
        answers:[
            {text:"Pascal",correct:false},
            {text:"Machine language",correct:true},
            {text:"C",correct:false},
            {text:"C#",correct:false}
        ]
    },
    {
        Question:"Which of the following is the smallest unit of data in computer?",
        answers:[
            {text:"Bit",correct:true},
            {text:"KB",correct:false},
            {text:"Nibble",correct:false},
            {text:"Byte",correct:false}
        ]
    },
    {
        Question:"which of the following are physical devices of a computer?",
        answers:[
            {text:"Software",correct:false},
            {text:"System Software",correct:false},
            {text:"Package",correct:false},
            {text:"Hardware",correct:true}

        ]
    },
    {
        Question:"Which data structure follows the LIFO PRINCIPLE?",
        answers:[
            {text:"Queue",correct:false},
            {text:"Array",correct:false},
            {text:"Stack",correct:true},
            {text:"Linked List",correct:false}
        ]
    }
    
    
]

const questionElement=document.getElementById("question")
const answerbutton=document.getElementById("answer-button")
const nextbutton=document.getElementById("next-btn")
// const btn =document.querySelectorAll("btn")


let currentQuestionIndex=0;
let score=0;
let timeLeft = 15;
let timerID = null;

function startQuiz(){
    currentQuestionIndex=0;
    score=0;
    nextbutton.innerHTML="Next";
    showQuestion()
}

function showQuestion(){
    resetState();
    let currentQuestion=Question[currentQuestionIndex]
    let QuestionNo=currentQuestionIndex +1;
    questionElement.innerHTML=QuestionNo + ". "+currentQuestion.
    Question;

    currentQuestion.answers.forEach(answers =>{
        const button =document.createElement("button")
        button.innerHTML = answers.text;
        button.classList.add("btn")
        answerbutton.appendChild(button);
        if(answers.correct){
            button.dataset.correct=answers.correct
        }
        button.addEventListener("click",selectanswers)

    });
}

function resetState(){
    nextbutton.style.display="none";
    while(answerbutton.firstChild){
        answerbutton.removeChild(answerbutton.firstChild);
    }
}
function selectanswers(e){
    const selectedBtn=e.target;
    const isCorrect=selectedBtn.dataset.correct==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;

    }else{
        selectedBtn.classList.add("incorrect")
    }
    Array.from(answerbutton.children).forEach(button=>{
        if(button.dataset.correct==="true"){
            button.classList.add("correct")
        }
        button.disabled=true;
    })
    nextbutton.style.display="block";
}
function showscore(){
    resetState();
    questionElement.innerHTML=`You Scored ${score} out of ${Question.length}!`;
    nextbutton.innerHTML="Play Again";
    nextbutton.style.display="bolck";


    if(currentQuestionIndex<Question.length)
        starttimer();
}
function handlenextbutton(){
    timeLeft=15;
    currentQuestionIndex++;
    if(currentQuestionIndex< Question.length){
        showQuestion()
    }else{
    
        showscore();
    }

   
}
nextbutton.addEventListener("click",()=>{
    if(currentQuestionIndex< Question.length){
        handlenextbutton()
    }else{
        startQuiz() 
    }
})
startQuiz()