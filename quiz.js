var questions = [
    {
        id : 1,
        question : "What is the correct syntax for referring to an external script called 'script.js'?",
        options:{
            a:"<script name='script.js'>",
            b: "<script href='script.js'>",
            c: "<script src='script.js'>",
            d: "<script ref='script.js'>",
        },
        answer: "<script src='script.js'>",
    },
    {
        id : 2,
        question : "How do you write 'Hello World'in an alert box?",
        options:{
            a:"a",
            b: "b",
            c: "c",
            d: "d",
        },
        answer: "a",
    },
    {
        id : 3,
        question : 'How do you create a function in JavaScript',
        options:{
            a:'function myFunction()',
            b: 'function:myFunction()',
            c: 'function = myFunction()',
            d: 'function => myFunction()',
        },
        answer: 'function myFunction()',
    },
    {
        id : 4,
        question : 'How do you call a function named "myFunction"?',
        options:{
            a:'call myFunction()',
            b: 'myFunction()',
            c: 'call function myFunction()',
            d: 'Call.myFunction()',
        },
        answer: 'myFunction()',
    },
    {
        id : 5,
        question : 'How to write an IF statement in JavaScript?',
        options:{
            a:'if i == 5 then',
            b: 'if i = 5',
            c: 'if (i == 5)',
            d: 'if i = 5 then',
        },
        answer: 'if (i == 5)',
    },
    {
        id : 6,
        question : 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        options:{
            a:'if (i <> 5)',
            b: 'if i <> 5',
            c: 'if (i != 5)',
            d: 'if i =! 5',
        },
        answer: 'if (i != 5)',
    },
    {
        id : 7,
        question : 'How does a WHILE loop start?',
        options:{
            a:'while i = 1 to 10',
            b: 'while (i <= 10; i++)',
            c: 'while (i <= 10)',
            d: 'while (i < 10)',
        },
        answer: 'while (i <= 10)',
    },
    {
        id : 8,
        question : 'How does a FOR loop start?',
        options:{
            a:'for (i = 0; i <= 5; i++)',
            b: 'for (i = 0; i <= 5)',
            c: 'for i = 1 to 5',
            d: 'for (i <= 5; i++)',
        },
        answer: 'for (i = 0; i <= 5; i++)',
    },
    {
        id : 9,
        question : 'How can you add a comment in JavaScript?',
        options:{
            a: '//<-- This is a comment -->',
            b: '// This is a comment',
            c:  'This is a comment',
            d: '-- This is a comment',
        },
        answer: '// This is a comment',
    },
    {
        id : 10,
        question : 'What is the correct way to write a JavaScript array?',
        options:{
            a:' var colors = "red", "green", "blue"',
            b: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
            c: 'var colors = ["red", "green", "blue"]',
            d: 'var colors = (1:"red", 2:"green", 3:"blue")',
        },
        answer: 'var colors = ["red", "green", "blue"]',
    },
    {
        id : 11,
        question : 'How do you round the number 7.25 to the nearest integer?',
        options:{
            a: 'Math.round(7.25)',
            b: 'Math.rnd(7.25)',
            c: 'round(7.25)',
            d: 'rnd(7.25)',
        },
        answer: 'Math.round(7.25)',
    },
    {
        id : 12,
        question : 'How do you find the number with the highest value of x and y?',
        options:{
            a: 'ceil(x, y)',
            b: 'top(x, y)',
            c: 'Math.ceil(x, y)',
            d: 'Math.max(x, y)',
        },
        answer: 'Math.round(7.25)',
    },
    {
        id : 13,
        question : 'What is the correct JavaScript syntax for opening a new window called "w2"?',
        options:{
            a: 'w2 = window.open("http://www.example.com");',
            b: 'w2 = window.new("http://www.example.com");',
            c: 'w2 = window.create("http://www.example.com");',
            d: 'w2 = window.openNew("http://www.example.com");',
        },
        answer: 'w2 = window.open("http://www.example.com");',
    },
    {
        id : 14,
        question : 'JavaScript is the same as Java.',
        options:{
            a: 'True;',
            b: ' False ',
      
        },
        answer: 'False;',
    },
    {
        id : 15,
        question : 'How do you declare a JavaScript variable?',
        options:{
            a: 'var carName;',
            b: 'variable carName;',
            c: 'v carName;',
            d: 'var = carName;',
        },
        answer: 'var carName;',
    },
    {
        id : 16,
        question : 'Which operator is used to assign a value to a variable?',
        options:{
            a: '*',
            b: '=',
            c: 'x',
            d: '-',
        },
        answer: '=',
    },
    {
        id : 17,
        question : 'What will the following code return: Boolean(10 > 9)?',
        options:{
            a: 'true',
            b: 'false',
        },
        answer: 'true'
    },
    {
        id : 18,
        question : 'Is JavaScript case-sensitive?',
        options:{
            a: 'No',
            b: 'Yes',  
        },
        answer: 'Yes',
    },
    {
        id : 19,
        question : 'How to write an object in JavaScript?',
        options:{
            a: 'var person = {firstName:"John", lastName:"Doe"}',
            b: 'var person = {firstName=John, lastName=Doe}',
            c: 'var person = (firstName:"John", lastName:"Doe")',
            d: 'var person = (firstName=John, lastName=Doe)',
        },
        answer: 'var person = {firstName:"John", lastName:"Doe"}',
    },
]


// Set UserName and Email
var userName = document.getElementById("userName");
var userEmail = document.getElementById("userEmail");
userName.innerHTML = localStorage.getItem("name");
userEmail.innerHTML = localStorage.getItem("email");


var htmlQues = document.getElementById("htmlQues");
var htmlOptions = document.getElementById("htmllOptions");
var indexNum = 1;
var nextQuesBtn = document.getElementById("nextQuesBtn");
var correctAnsCount = 0;
var wrongAnsCount = 0;


// Counter
var CurrentCount = document.getElementById("currentCount");
var totalCount = document.getElementById("totalCount");
totalCount.innerHTML = questions.length;

var resultContainer = document.getElementsByClassName("resultContainer")[0];
var correctAns = document.getElementById("correctAns");
var wrongAns = document.getElementById("wrongAns");



function startQuiz(){
    // console.log("startQuiz" , question[indexNum].options) ;
    htmlQues.innerHTML  = questions[indexNum].question;

    htmlOptions.innerHTML = ""
    for(var key in questions[indexNum].options){
        var option = questions[indexNum].options[key]
       htmlOptions.innerHTML += `<li onclick="checkAnswer(this, '${option}')">${option}</li>`
      
    }
    timer()
}

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
// }

// function startQuiz() {
//     shuffle(questions); // Shuffle the questions array
//     indexNum = 0;
//     loadQuestion();
// }

// function loadQuestion() {
//     htmlQues.innerHTML  = questions[indexNum].question;
//     htmlOptions.innerHTML = "";
//     for (var key in questions[indexNum].options) {
//         var option = questions[indexNum].options[key];
//         htmlOptions.innerHTML += `<li onclick="checkAnswer(this, '${option}')">${option}</li>`;
//     }
// }



var quizContainer = document.getElementById("quizContainer");
function nextQues(){
    if(indexNum < questions.length -1 ){
        indexNum++;
        CurrentCount.innerHTML++;
        console.log("nexques", indexNum);
        nextQuesBtn.className = "hide";
        startQuiz();
    }else{
        console.log("Khatam");
        quizContainer.style.display = "none"
        resultContainer.className = "show";
        correctAns.innerHTML = correctAnsCount;
        wrongAns.innerHTML = wrongAnsCount;
    }
    console.log(correctAnsCount, "Correct Answer");
    console.log(wrongAnsCount, "Wrong Answer");
}
function checkAnswer (ele){
    //1st way
    // console.log("ele", ele.innerHTML);
    // console.log("check", ele.innerHTML ===  questions[indexNum].answer);
    // console.log("question[indexNum]", questions[indexNum].answer);

    var liOptions = htmlOptions.getElementsByTagName("li");
    var isCheck = ele.innerHTML === questions[indexNum].answer;
    if (isCheck){
        console.log("Correct!");
        ele.style.backgroundColor = "#36C95B";
        ele.style.color = "#EFEEEF";
        correctAnsCount++;

    }else{
        console.log("Incorrect");
        ele.style.backgroundColor = "#F8504F";
        ele.style.color = "#EFEEEF";
        wrongAnsCount++;
        for(var li of liOptions){
            if(li.innerHTML === questions[indexNum].answer){
                li.className = "correctAns";
            }
        }
    }

    // console.log("htmlOPtions", htmlOptions.getElementsByTagName("li"));
    for (var li of liOptions){
        console.log(li);
        li.style.pointerEvents = "none";
        li.style.cursor = "no-drop !important"
    }

    // show next Question the Selection
    nextQuesBtn.className = "show"
}
function timer(){


}