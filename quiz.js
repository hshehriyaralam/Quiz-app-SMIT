let Questions = [
    {
        id: 1,
        question: "Which of the following methods is used to remove the last element from an array in JavaScript?",
        options: {
            a: "pop()",
            b: "push()",
            c: "shift()",
            d: "unshift()",
        },
        answer: "pop()",
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
        id: 7,
        question: "Which HTML attribute specifies an alternate text for an image?",
        options: {
            a: "title",
            b: "alt",
            c: "src",
            d: "description",
        },
        answer: "alt",
    },
    {
        id: 8,
        question: "Which of the following is NOT a valid JavaScript data type?",
        options: {
            a: "Number",
            b: "String",
            c: "Character",
            d: "Boolean",
        },
        answer: "Character",
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
        id: 10,
        question: "Which CSS property is used to make the text bold?",
        options: {
            a: "font-style",
            b: "font-weight",
            c: "text-decoration",
            d: "font-bold",
        },
        answer: "font-weight",
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
        answer: 'Math.max(x, y)',
    },
    {
        id: 13,
        question: "What will `typeof null` return in JavaScript?",
        options: {
            a: "null",
            b: "undefined",
            c: "object",
            d: "string",
        },
        answer: "object",
    },
    {
        id : 14,
        question : 'JavaScript is the same as Java.',
        options:{
            a: 'True;',
            b: 'False',
      
        },
        answer: 'False',
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
        id: 19,
        question: "Which CSS property is used to change the background color?",
        options: {
            a: "color",
            b: "background",
            c: "background-color",
            d: "bgcolor",
        },
        answer: "background-color",
    },
    {
        id: 20,
        question: "What is the default value of the 'position' property in CSS?",
        options: {
            a: "static",
            b: "relative",
            c: "absolute",
            d: "fixed",
        },
        answer: "static",
    },
    {
        id: 21,
        question: "What does the 'push' method do in JavaScript?",
        options: {
            a: "Adds a new element to the beginning of an array",
            b: "Adds a new element to the end of an array",
            c: "Removes the last element of an array",
            d: "Removes the first element of an array",
        },
        answer: "Adds a new element to the end of an array",
    },
    {
        id: 22,
        question: "What will `console.log('5' - 2)` output in JavaScript?",
        options: {
            a: "3",
            b: "52",
            c: "undefined",
            d: "NaN",
        },
        answer: "3",
    },
    {
        id: 23,
        question: "What is the output of `typeof NaN` in JavaScript?",
        options: {
            a: "NaN",
            b: "number",
            c: "undefined",
            d: "object",
        },
        answer: "number",
    },
    {
        id: 24,
        question: "Which CSS property is used to make the text bold?",
        options: {
            a: "font-style",
            b: "font-weight",
            c: "text-decoration",
            d: "font-bold",
        },
        answer: "font-weight",
    },
    {
        id: 25,
        question: "Which built-in method combines the text of two strings and returns a new string?",
        options: {
            a: "append()",
            b: "concat()",
            c: "attach()",
            d: "combine()",
        },
        answer: "concat()",
    },
    {
        id: 26,
        question: "What does the 'this' keyword refer to in JavaScript?",
        options: {
            a: "The current function",
            b: "The current object",
            c: "The parent object",
            d: "The global object",
        },
        answer: "The current object",
    },
]



// set userName and Email
let userName = document.getElementById('userName')
let userEmail= document.getElementById('userEmail')
 userName.innerHTML = localStorage.getItem('name') 
  userEmail.innerHTML = localStorage.getItem('email') 

//variables 
let nextQuesBtn =  document.getElementById('nextQuesBtn')
let quizContainer = document.getElementById('quizContainer')
let Minutes = document.getElementById('Minutes')
let htmlQuestion = document.getElementById('htmlQues')
let htmloptions = document.getElementById('htmllOptions')
let currentCount = document.getElementById('currentCount')
let TotalCount = document.getElementById('totalCount')
TotalCount.innerHTML = Questions.length


// Initalize Varibles
let indexNum = 0
let timer = 120;
let CorrectAnserCount = 0
let wrongAnsCount = 0
let Attemp = 0

// Result Container 
let resultContainer = document.getElementById('resultContainer')
let correctAns = document.getElementById('correctAns')
let wrongAns = document.getElementById('wrongAns')
let grade = document.getElementById('grade')
let attempQuestion = document.getElementById('totalQuestions')
attempQuestion.innerHTML = Attemp;


// Start Quizz
function startQuiz(){
    // Question
    htmlQuestion.innerHTML = Questions[indexNum].question
    
    //Options
    htmloptions.innerHTML = ""
    for(let key in Questions[indexNum].options){
        let option = Questions[indexNum].options[key]
        htmloptions.innerHTML += `<li onclick="answerChecker(this, '${option}')">${option}</li>`
    }
    
    nextQuesBtn.style.display = 'none'
}




function nextQues(){
    if(indexNum < Questions.length - 1){
        currentCount.innerHTML++;
        indexNum++
        startQuiz()
        
        
    }else{
        console.log("khatam");
        quizContainer.style.display = 'none'
        resultContainer.style.display = 'block'
        correctAns.innerHTML = CorrectAnserCount
        wrongAns.innerHTML = wrongAnsCount  
        if(CorrectAnserCount >= 20 &&  CorrectAnserCount <= 26){
            grade.innerHTML = "Excellent"
        }else if(CorrectAnserCount >= 15 &&  CorrectAnserCount < 20){
            grade.innerHTML = "Needs Improvement"
        }else if(CorrectAnserCount < 15){
             grade.innerHTML = "Fail"
        }
    }
    
}

// Answer Checker 
function answerChecker(option){
    // console.log(option.innerHTML);
    // console.log(option.innerHTML === Questions[indexNum].answer);
    
    
    let isCheck = option.innerHTML === Questions[indexNum].answer
    let liOption = htmloptions.getElementsByTagName('li')
    if(isCheck){
        // console.log("Correct");
        CorrectAnserCount++;
        option.style.backgroundColor = "#36C95B";
        option.style.color = "#EFEEEF";
        Attemp++;
        attempQuestion.innerHTML = Attemp
        
    }else{
        // console.log("inCorrect");
        option.style.backgroundColor = "#F8504F";
        option.style.color = "#EFEEEF";
        wrongAnsCount++;
        Attemp++;
        attempQuestion.innerHTML = Attemp
        
        for(let li of liOption){
            if(li.innerHTML === Questions[indexNum].answer){
                li.className = 'correctAns'
            }
        }
        // console.log(CorrectAnserCount,"CorrectAnserCount");
        // console.log(wrongAnsCount,"wrongAnsCount");
        
    }
    for(let li of liOption){
        li.style.pointerEvents = 'none';
        li.style.cursor = 'no-drop !important'
    }
    nextQuesBtn.style.display = 'block'
}







// Timer 
function Timer(){
    
    setInterval(() => {
        Minutes.innerHTML = timer
        timer--
        if(timer == 0){
            console.log("khatam");
            quizContainer.style.display = 'none'
            resultContainer.style.display = 'block'
            correctAns.innerHTML = CorrectAnserCount
            wrongAns.innerHTML = wrongAnsCount  
            attempQuestion.innerHTML = Attemp
            if(Attemp === 0 && Attemp <= 15){
                grade.innerHTML = "Fail"
            }
        }
    },1000)
    
}
Timer() 